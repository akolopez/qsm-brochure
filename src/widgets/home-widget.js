import React from 'react'

const HomeWidget = (props) => (
  <div className="is-center">
    <p className="content-head">{ props.headline }</p>
    <p>{ props.content }</p>
    <button className="pure-button pure-button-primary" type="button">{ props.buttonText }</button>
  </div>
)

export default HomeWidget;
