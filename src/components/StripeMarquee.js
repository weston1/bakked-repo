import React from 'react'
import Marquee, { Motion, randomIntFromInterval } from 'react-marquee-slider'
import times from 'lodash/times'
import './BakkedMarquee.css'

export const StripeMarquee = () => {
  return (
    <div className="Marquee-Container" style={{ height: '500px' }}>
      <Marquee
        velocity={12}
        minScale={0.7}
        resetAfterTries={200}
        scatterRandomly
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
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'black',
                textAlign: 'center',
                lineHeight: '50px',
                boxShadow: '5px 4px 5px rgba(0,0,0,0.4)'
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
