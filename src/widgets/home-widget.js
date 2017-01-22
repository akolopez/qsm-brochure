import React from 'react'

const HomeWidget = (props) => (
  <div>
    { props.headline }
    { props.content }
    <button type="button">{ props.buttonText }</button>
  </div>
)

export default HomeWidget;
