import React from 'react'

const ParagraphWithTitle = (props) => (
  <div>
    <h3>{ props.title }</h3>
    <p>{ props.body }</p>
  </div>
);

export default ParagraphWithTitle;
