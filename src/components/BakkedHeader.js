import React from 'react'
import PropTypes from 'prop-types'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import './BakkedHeader.css'

export default props => {
  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 6000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
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
      <div ref={sliderRef} className="BakkedHeader--Slider keen-slider">
        <div className="keen-slider__slide bakked-slide1">1</div>
        <div className="keen-slider__slide bakked-slide2">2</div>
        <div className="keen-slider__slide bakked-slide3">3</div>
      </div>

      <div className="header-stickers">
        <div className="">
          <img
            src="../images/photos/stickers/arrow.png"
            className="sticker-header-1"
          />
        </div>
        <div className="">
          <img
            src="../images/photos/stickers/sit-back-get-bakked.png"
            className="sticker-header-2"
          />
        </div>
        <div className="">
          <img
            src="../images/photos/stickers/fully-activated-high-thc-cannabis.png"
            className="sticker sticker-header-3"
          />
        </div>
      </div>
    </div>
  )
}
