import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import App from './app'
import Header from './header/header'

import HomePage from './home/home-page'
import ProcessPage from './process/process-page'
import ProductPage from './products/product-page'
import AboutPage from './about/about-page'

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route component={ App }>
      <Route path="/" component={ HomePage } />
      <Route path="/process" component = { ProcessPage } />
      <Route path="/products" component = { ProductPage } />
      <Route path="/about" component = { AboutPage } />
      <Route path='/*' component={ AboutPage } />
    </Route>
  </Router>,
  document.getElementById('app')
)
