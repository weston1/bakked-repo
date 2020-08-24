import React from 'react'
import PropTypes from 'prop-types'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { CgAdidas } from 'react-icons/cg'

import './BakkedHeader.css'

export default props => {
  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    }
  })

  React.useEffect(() => {
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true)
    })
    sliderRef.current.addEventListener('mouseout', () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 2000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <div className="BakkedHeader">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <CgAdidas />
        </div>
        <div className="keen-slider__slide number-slide2">2</div>
        <div className="keen-slider__slide number-slide3">3</div>
        <div className="keen-slider__slide number-slide4">4</div>
        <div className="keen-slider__slide number-slide5">5</div>
        <div className="keen-slider__slide number-slide6">6</div>
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
