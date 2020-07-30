import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './RewardHeader.css'
import './globalStyles.scss'

const RewardHeader = ({
  title,
  subtitle,
  helloworld,
  backgroundImage,
  large,
  className = ''
}) => {
  if (large) className += ' RewardHeader-large'
  return (
    <div className={`RewardHeader relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={title}
          size="cover"
        />
      )}
      <div className="container relative">
        <Image
          src={helloworld}
          alt={title}
          className="RewardHeader--Helloworld"
        />
        {title && (
          <Content className="RewardHeader--Title loil-header" src={title} />
        )}
        {subtitle && (
          <Content
            className="RewardHeader--Subtitle loil-header"
            src={subtitle}
          />
        )}
        <a
          href="https://loilpoints.com/"
          alt="loilpoints"
          target="_blank"
          rel="noopener noreferrer"
          className="loil-button-white lb"
        >
          START EARNING &#8250;
        </a>
      </div>
    </div>
  )
}

RewardHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  helloworld: PropTypes.string
}

export default RewardHeader
