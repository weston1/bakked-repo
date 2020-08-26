import React from 'react'
import Ticker from 'react-ticker'

import './BakkedMarquee.css'

const BakkedMarquee = () => (
  <section className="Marquee-Container">
    <Ticker>
      {({ index }) => (
        <div className="Marquee-Inner">
          <h1>#GET BAKKED #{index}!</h1>
          <img src="www.my-image-source.com/" alt="" />
        </div>
      )}
    </Ticker>
  </section>
)

export default BakkedMarquee
