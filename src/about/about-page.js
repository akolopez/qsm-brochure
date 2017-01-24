import React, { Component } from 'react'

import ParagraphWithTitle from '../widgets/paragraph-with-title'
import SectionBanner from '../widgets/section-banner'

class AboutPage extends Component {
  render() {
    return (
      <div>
        <SectionBanner srcName="farm_lsiznp" alt="about-page-header" />
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
