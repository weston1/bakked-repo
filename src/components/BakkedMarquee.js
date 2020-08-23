import React from 'react'
import PropTypes from 'prop-types'
import Marquee from 'react-double-marquee'

import './BakkedMarquee.css'

const BakkedMarquee = () => {
  return (
    <section className="Marquee-Container">
      <div className="Marquee--Section">
        <Marquee speed="0.05" delay="0">
          <div className="Marquee--Inner">
            <h2>
              LETS #GETBAKKED LETS #GETBAKKED LETS #GETBAKKED LETS #GETBAKKED
              LETS #GETBAKKED LETS #GETBAKKED LETS #GETBAKKED LETS #GETBAKKED
            </h2>
          </div>
        </Marquee>
      </div>
    </section>
  )
}

BakkedMarquee.propTypes = {
  title: PropTypes.string
}

export default BakkedMarquee
