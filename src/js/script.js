
{
  'use strict';

  const select = {
    templateOf: {
      books: '#template-book' 
    },

    list: {
      booksList: '.books-list'
    },

    products: {
      name: '.book_name',
      price: 'product__base-price',
      bookImg: 'book__image',
    }
  };

  const templates = {
    books: Handlebars.compile(document.querySelector(select.templateOf.books).innerHTML)
  };


  const render = function () {
    const books = dataSource.books;

    for (let book of books) {
      const generateHTML = templates.books(book);
      const generateDOM = utils.createDOMFromHTML(generateHTML);
      const booksList = document.querySelector(select.list.booksList);

      booksList.appendChild(generateDOM);
    }
  };

  const favoriteBooks = [];

  const initAction = function () {

    const bookList = document.querySelector(select.list.booksList);

    bookList.addEventListener('dblclick', function (event){
      event.preventDefault();

      const clickedElement = event.target.offsetParent;

      if(clickedElement.classList.contains('favorite')) {
        clickedElement.classList.remove('favorite');
        favoriteBooks.splice(clickedElement, 1);
      } else {
        clickedElement.classList.add('favorite');
        favoriteBooks.push(clickedElement);
      }
      console.log(favoriteBooks);
    });

  };

  render();
  initAction();
}