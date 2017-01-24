import React from 'react'
import { Image } from 'cloudinary-react'

const config = require('../config.js')

const SectionBanner = (props) => (
  <div className="is-center">
    <Image cloudName={ config.cloudinary.name } publicId={ props.srcName } width="300" crop="scale" />
  </div>
);

export default SectionBanner
