import React from 'react'
import Books from './Books'
import {Link} from 'react-router-dom'
import '../App.css'
// import SearchBooks from './SearchBooks'

const BookShelf = (props) =>   {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
          <Books
              shelfTitle='Currently Reading'
              books={props.books.filter((book) => book.shelf === 'currentlyReading' )}/>
          <Books
              shelfTitle='Currently Reading'
              books={props.books.filter((book) => book.shelf === 'currentlyReading' )}/>
          <Books
              shelfTitle='Want To Read'
              books={props.books.filter((book) => book.shelf === 'wantToRead' )}/>
          <Books
              shelfTitle='Read'
              books={props.books.filter((book) => book.shelf === 'Read' )}/>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
}

export default BookShelf
