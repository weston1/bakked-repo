import React from 'react'
import Ticker from 'react-ticker'

import './BakkedMarquee.css'

const StripesMarquee = () => (
  <section className="bg-dusty">
    <Ticker offset="run-in" speed={10} height="400px" direction="toRight">
      {({ index }) => (
        <div className="bg-stripes">
          <h1 className="white">What</h1>
        </div>
      )}
    </Ticker>
  </section>
)

export default StripesMarquee
