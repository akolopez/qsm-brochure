import React, { Component } from 'react'

import HomeWidget from '../widgets/home-widget'

class HomePage extends Component {
  render() {
    return (
      <div className="l-box-lrg is-center">
        <p><HomeWidget link="/about" buttonText="LEARN MORE" headline="HEADLINE COPY"/></p>
        <p><HomeWidget link="/process" buttonText="VIEW" headline="PROCESS HEADLINE"/></p>
        <p><HomeWidget link="/products" buttonText="VIEW ALL" headline="PRODUCTS HEADLINE"/></p>
      </div>
    )
  }
}

export default HomePage
