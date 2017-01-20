import React, { Component } from 'react'
import ParagraphWithTitle from '../widgets/paragraph-with-title'
import SectionTitle from '../widgets/section-title'
import SectionBanner from '../widgets/section-banner'

class ProcessPage extends Component {
  render() {
    return (
      <div>
        <SectionBanner srcName="sample" alt="process-header" />
        <SectionTitle
          title="Our Process"
        />
        <ParagraphWithTitle
          title="Lightspeed Delivery System"
          body="Faster than the speed of light. So it's actually faster than the speed of light delivery system."/>
        <ParagraphWithTitle
          title="Oprah Warehouses"
          body="Cebu has a warehouse. CDO has a warehouse. Davao has a warehouse. Everyone has a warehouse."/>
      </div>
    )
  }
}

export default ProcessPage;
