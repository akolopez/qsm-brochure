import React, { Component } from 'react'

import Header from './header/header'

class App extends Component {
  render () {
    return (
      <div className="app">
        <Header />
        <main className="content-wrapper">
          <div className="content">
            {this.props.children}
          </div>
        </main>
      </div>
    )
  }
}

export default App
