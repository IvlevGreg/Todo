import createElement from './create_element.js'

//Глобальные перменные 
const articleContainer = document.getElementById('article-container');
const pageNumber = new URLSearchParams(window.location.search).get('id')

// Классы элементов карточек
const articleCardClasses = ['col-lg-6', 'mb-3']
const articleCardContainerClasses = ['card', 'border-secondary', 'shadow-sm', 'h-100', 'justify-content-between']
const articleCardTitleClasses = ['card-header', 'card-header--crop']
const articleCardBodyClasses = ['card-body']
const articleCardTextClasses = ['card-text','card-text--crop']
const articleCardLinkClasses = ['btn', 'btn-outline-secondary', 'p-50', 'rounded-5']

// получаем данные
async function getPostData (id = ''){
const response = await fetch(`https://gorest.co.in/public-api/posts?page=${id}`);
  const data = await response.json();
  return data
}

// async function getNumberData (){
//   const response = await fetch(`https://gorest.co.in/public-api/posts`);
//     const data = await response.json();
//     console.log(data)
//     return data
//   }
//   getNumberData ()
// Создание нумерации 
function createPagination() {
  
  const nav = createElement(articleContainer, 'nav', 'nav', )
  console.log(pageNumber)
  for(let i = 1; i <= 51; i++) {
 const navLink = createElement(nav, 'a', ['nav__link', 'btn', 'btn-secondary'], i, `index.html?id=${i}`)
  if(+pageNumber === i || +pageNumber === 0 && i === 1 ) {
    navLink.classList.add('nav__link--active')
 }
  }
  
}

createPagination()


//Функция создания карточки
function createCardArticle(parent, cardTitle, cardText, cardLink) {
  const articleCard = createElement(parent, 'article', articleCardClasses)
  const articleCardContainer = createElement(articleCard, 'div', articleCardContainerClasses)
  createElement(articleCardContainer, 'h2', articleCardTitleClasses, cardTitle)

  const articleCardBody = createElement(articleCardContainer, 'div', articleCardBodyClasses)
  createElement(articleCardBody, 'p', articleCardTextClasses, cardText)
  createElement(articleCardBody, 'a', articleCardLinkClasses, 'Continue reading', cardLink)
}

async function createCardsList(id) {
  const data = await getPostData(id)
  
  for (let i = 0; i < data.data.length; i++) {
    await createCardArticle(articleContainer, data.data[i].title, data.data[i].body, `article.html?id=${data.data[i].id}`)
  };
  console.log(data)
}
createCardsList(pageNumber)
