//Функция создания элемента разметки
function createElement(parent, tag, classes, text = 0, link = 0) {
  const el = document.createElement(tag);
  if(Array.isArray(classes)) {el.classList.add(...classes)}
  else {el.classList.add(classes)}
  if(text) {el.textContent = text}
  if(link) {el.href = link}
  parent.append(el)
  return el
}

export default createElement