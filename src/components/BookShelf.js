import React from 'react'
import Book from './Book'
import '../App.css'
// import SearchBooks from './SearchBooks'

const BookShelf = (props) =>   {

    return (
      <div className="list-books-content" >
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfTitle}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {props.books.map((book, index) => (
                  <Book bookTitle={book.title}
                        key={index}
                        shelf={book.shelf}
                        authors={book.authors}
                        thumbnail={book.imageLinks.thumbnail}
                        />
                ))}
              </ol>
            </div>
          </div>
        </div>
    </div>
    )
}

export default BookShelf
