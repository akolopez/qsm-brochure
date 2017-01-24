import React from 'react'

import { Link } from 'react-router'

const HomeWidget = (props) => (
  <div className="is-center">
    <p className="content-head">{ props.headline }</p>
    <p>{ props.content }</p>
    <Link to={ props.link } className="pure-button pure-button-primary" type="button">{ props.buttonText }</Link>
  </div>
)

export default HomeWidget;
