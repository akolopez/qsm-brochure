import React from 'react'
import { Route } from 'react-router'

import AboutPage from './about/about-page'
import ProductPage from './products/product-page'
import ProcessPage from './process/process-page'

const routes = (
  <Route path='/products' component={ProductPage} />
)

export default routes;

  // <Route path='/about' component={AboutPage} />
  // <Route path='/process' component={ProcessPage} />
