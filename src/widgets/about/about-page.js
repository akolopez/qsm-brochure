import React, { Component } from 'react'

import ParagraphWithTitle from '../widgets/paragraph-with-title'
import MyCarousel from '../widgets/my-carousel'

class AboutPage extends Component {
  render() {
    return (
      <div>
        <MyCarousel pictures={['sample', 'poultry3_dyphba', 'poultry_uc4qd3']}/>
        <ParagraphWithTitle title="Profile" body="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rraesent eu mauris eu mauris.
Morbi posuere sapien dui, at vestibulum leo ullamcorper in.
Morbi posuere sapien dui, at vestibulum leo ullamcorper in.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rraesent eu mauris eu mauris.
Morbi posuere sapien dui, at vestibulum leo ullamcorper in.
"/>
      </div>
    )
  }
}

export default AboutPage;
