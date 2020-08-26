import React from 'react'
import Ticker from 'react-ticker'

const TickerMarquee = () => (
  <Ticker>
    {({ index }) => (
      <>
        <h1>#GET BAKKED #{index}!</h1>
        <img src="www.my-image-source.com/" alt="" />
      </>
    )}
  </Ticker>
)

export default TickerMarquee
