import React, {Component} from 'react'
import Book from './Book'


class Books extends Component {

  render() {
    return (
      <div className="list-books-content" >
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.map((book, index) => (
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
}

export default Books
