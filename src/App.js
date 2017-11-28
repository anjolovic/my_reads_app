import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './components/BookShelf'
import SearchBooks from './components/SearchBooks'


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
      <div className="app">
        <Route path="/search" component={SearchBooks} />
        <Route exact path="/" render={() =>
          <BookShelf
              books={this.state.books}/>
        }/>
      </div>
    )
  }
}

export default App
