
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

  render();
}