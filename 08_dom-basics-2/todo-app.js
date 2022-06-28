(function () {
  let itemsFromLocalStorage = new Map();
  let localStorageName;

  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle
  }

  function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary', 'create-btn');
    button.setAttribute('disabled', 'disabled')
    button.textContent = 'Добавить дело';

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
      form,
      input,
      button
    }
  }
  
  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  function createTodoItem(name, done = false){

    let item = document.createElement('li')
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    let taskText = document.createElement('p');
   
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-itemsFromLocalStorage-center');

    taskText.textContent = name;

    buttonGroup.classList.add('btn-group', 'btn-group-sm')
    doneButton.classList.add('btn', 'btn-success')
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger')
    deleteButton.textContent = 'Удалить';
    
    buttonGroup.append(doneButton)
    buttonGroup.append(deleteButton)
    item.append(taskText)
    item.append(buttonGroup)
   
    // local storage
    itemsFromLocalStorage.set(name, done)
    localStorage.setItem(localStorageName, JSON.stringify(Array.from(itemsFromLocalStorage.entries())))

    return {
      item,
      doneButton,
      deleteButton
    }
  }

function createTodoApp (container, title = 'Список дел', arr = []  ) {  
  let todoAppTitle = createAppTitle(title);
  let todoItemForm = createTodoItemForm();
  let todoList = createTodoList();
  
  localStorageName = title
  container.append(todoAppTitle);
  container.append(todoItemForm.form);
  container.append(todoList);

  // Создание массива дел из localStorage если есть или из исходного массива из HTML
  itemsFromLocalStorage = new Map(JSON.parse(localStorage.getItem(localStorageName)));
  console.log(JSON.parse(localStorage.getItem(localStorageName)))
  
if (itemsFromLocalStorage.size > 0) {
  itemsFromLocalStorage.forEach((value, key) => {
    let todoItem = createTodoItem(key, value)
    todoList.append(todoItem.item);

    listenItemDone(todoItem)
    listenItemDelete(todoItem)
    if(value === true) {
      itemDone(todoItem);
    }
  })} else {
  arr.forEach(element => {
    let todoItem = createTodoItem(element.name)
    todoList.append(todoItem.item);
    listenItemDone(todoItem)
    listenItemDelete(todoItem)
    
    if(element.done === true) {
      itemDone(todoItem);
    }
  })};
  
  //Проверка на наличие текста в инпуте
  todoItemForm.form.addEventListener('input', function() {
    let createButton = document.querySelector('.create-btn');
    todoItemForm.input.value.trim() ? createButton.removeAttribute('disabled') : createButton.setAttribute('disabled', 'disabled')
  })

  // функция выполнении дела
  function itemDone(todoItem){
    todoItem.item.classList.toggle('list-group-item-success');
    itemsFromLocalStorage.set(todoItem.item.querySelector("p").textContent, todoItem.item.classList.contains('list-group-item-success') ? true : false )
    localStorage.setItem(localStorageName, JSON.stringify(Array.from(itemsFromLocalStorage.entries())))
  }

  function listenItemDone(todoItem) {todoItem.doneButton.addEventListener('click', function(){
    itemDone(todoItem)
      })}

 
  // функция удаления дела
  function listenItemDelete(todoItem)  {todoItem.deleteButton.addEventListener('click', function(){
    if(confirm('Вы уверены?')){
      todoItem.item.remove();
      itemsFromLocalStorage.delete(todoItem.item.querySelector("p").textContent)
    localStorage.setItem(localStorageName, JSON.stringify(Array.from(itemsFromLocalStorage.entries())))
    }
  })};

  todoItemForm.form.addEventListener('submit', function(e){
    e.preventDefault();

    let createButton = document.querySelector('.create-btn');

     if(!todoItemForm.input.value){
      return
     } 

    let todoItem = createTodoItem(todoItemForm.input.value);
    listenItemDone(todoItem)
    listenItemDelete(todoItem)

    todoList.append(todoItem.item);
    todoItemForm.input.value = '';
    createButton.setAttribute('disabled', 'disabled')
  })
}
  window.createTodoApp = createTodoApp;
}) ();

