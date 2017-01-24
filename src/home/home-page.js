import React, { Component } from 'react'

import HomeWidget from '../widgets/home-widget'

class HomePage extends Component {
  render() {
    return (
      <div className="l-box-lrg is-center">
        <p><HomeWidget buttonText="LEARN MORE" headline="HEADLINE COPY"/></p>
        <p><HomeWidget buttonText="VIEW" headline="PROCESS HEADLINE"/></p>
        <p><HomeWidget buttonText="VIEW ALL" headline="PRODUCTS HEADLINE"/></p>
      </div>
    )
  }
}

export default HomePage
