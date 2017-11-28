import React, {Component} from 'react'
import BookShelf from './components/BookShelf'
import SearchBooks from './components/SearchBooks'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class App extends Component {

  state = {
    books: []
  }
  

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books
      })
    })
  }


  render() {
    return (
      <div className="books">
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
            <Route exact path="/" render={() => (
              <BookShelf
              shelfTitle='Currently Reading'
              books={this.state.books.filter((book) => book.shelf === 'currentlyReading' )}/>

            )}/>
            <Route exact path="/" render={() => (
              <BookShelf
              shelfTitle='Want To Read'
              books={this.state.books.filter((book) => book.shelf === 'wantToRead' )}/>
            )}/>
            <Route exact path="/" render={() => (
              <BookShelf
              shelfTitle='Read'
              books={this.state.books.filter((book) => book.shelf === 'read' )}/>
            )} />
        </div>
        < Route path='/search' component={SearchBooks} />
      </div>
    </div>
    )
  }
}

export default App
