import React from 'react'
import PropTypes from 'prop-types'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import './BakkedHeader.css'

export default props => {
  const [sliderRef] = useKeenSlider({ loop: true })

  return (
    <div className="BakkedHeader">
      <div
        ref={sliderRef}
        className="BakkedHeader--Slider relative keen-slider"
      >
        <div className="keen-slider__slide number-slide1">FPO</div>
        <div className="keen-slider__slide number-slide2">FPO</div>
      </div>
      <div className="row">
        <div className="col-lg-2">
          <img
            src="../images/photos/stickers/arrow.png"
            className="sticker sticker-header-1"
          />
        </div>
        <div className="col-lg-4">
          <img
            src="../images/photos/stickers/sit-back-get-bakked.png"
            className="sticker sticker-header-2"
          />
        </div>
        <div className="col-lg-3">
          <img
            src="../images/photos/stickers/fully-activated-high-thc-cannabis.png"
            className="sticker sticker-header-3"
          />
        </div>
      </div>
    </div>
  )
}
