import React from 'react'
import Ticker from 'react-ticker'

import './BakkedMarquee.css'

const StripesMarquee = () => (
  <section className="StripesMarquee">
    <Ticker speed={1}>
      {() => (
        <div className="my-auto StripesMarquee--Motion">
          <h1>
            GETBAKKEDGETBAKKEDGETBAKKEDGETBAKKEDGETBAKKEDGETBAKKEDGETBAKKEDGETBAKKEDGETBAKKEDGETBAKKEDGETBAKKEDGETBAKKEDGETBAKKEDGETBAKKED
          </h1>
        </div>
      )}
    </Ticker>
  </section>
)

export default StripesMarquee
