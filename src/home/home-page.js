import React, { Component } from 'react'

import HomeWidget from '../widgets/home-widget'

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeWidget buttonText="LEARN MORE" headline="HEADLINE COPY"/>
        <HomeWidget buttonText="VIEW" headline="PROCESS HEADLINE"/>
        <HomeWidget buttonText="VIEW ALL" headline="PRODUCTS HEADLINE"/>
      </div>
    )
  }
}

export default HomePage
