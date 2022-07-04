import createElement from './create_element.js'

//Глобальные переменные
const articleId = new URLSearchParams(window.location.search).get('id')
const article = document.getElementById('article')

//Получаю данные
async function getArticleData(id) {
const responseText = await fetch(`https://gorest.co.in/public-api/posts/${id}`);
const dataText = await responseText.json();
return dataText
}

async function getCommentsData(id) {
const responseComments = await fetch(`https://gorest.co.in/public-api/comments?post_id=${id}`);
const dataComments = await responseComments.json();
return dataComments
}

//Создание отдельной статьи
async function CreateArticle (parent, id) {

  const dataText = await getArticleData(id);
  const dataComments = await getCommentsData(id);
  
  createElement(parent, 'h1', 'article__title', dataText.data.title)
  createElement(parent, 'p', 'article__text', dataText.data.body)
  createElement(parent, 'h2', 'article__coments-title', 'Comments:')
  const commentsList = createElement(parent, 'ul', 'article__comments-list')
  console.log(dataComments)
 
  for (let i = 0; i < dataComments.data.length; i++) {
    const comment = createElement(commentsList, 'li','comment')  
    createElement(comment, 'h3', 'comment__title', dataComments.data[i].name) 
    createElement(comment, 'p', 'comment__text', dataComments.data[i].body) 
  };
}

CreateArticle(article, articleId)