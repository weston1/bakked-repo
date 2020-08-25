import React from 'react'
import Marquee, { Motion, randomIntFromInterval } from 'react-marquee-slider'
import times from 'lodash/times'
import './BakkedMarquee.css'

export const StripeMarquee = () => {
  return (
    <div className="Marquee-Container" style={{ height: '200px' }}>
      <Marquee
        velocity={12}
        minScale={0.7}
        resetAfterTries={200}
        scatterRandomly
        className="bg-stripes"
      >
        {times(5, Number).map(id => (
          <Motion
            key={`child-${id}`}
            initDeg={randomIntFromInterval(0, 360)}
            direction={Math.random() > 0.5 ? 'clockwise' : 'counterclockwise'}
            velocity={10}
            radius={50}
          >
            <div
              style={{
                background:
                  'repeating-linear-gradient(-70deg, rgba(242, 180, 63, 1), rgba(242, 180, 63, 1) 70px,rgba(0, 0, 0, 0) 70px,rgba(0, 0, 0, 0) 140px)',
                backgroundColor: '#000',
                transform: 'rotate(-3deg)',
                height: '200px',
                position: 'relative',
              }}
            >
              {id}
            </div>
          </Motion>
        ))}
      </Marquee>
    </div>
  )
}
