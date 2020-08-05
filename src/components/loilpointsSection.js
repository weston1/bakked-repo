import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './loilpointsSection.css'

const loilpointsSection = ({
  title,
  subtitle,
  featuredLogo,
  backgroundImage,
  large,
  className = '',
}) => {
  if (large) className += ' loilpointsSection-large'
  return (
    <div className={`loilpointsSection relative ${className}`}>
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
          src={featuredLogo}
          alt={title}
          className="loilpointsSection--Logo"
        />

        <h1 className="loilpointsSection--Title">{title}</h1>
        {subtitle && (
          <Content className="loilpointsSection--Subtitle" src={subtitle} />
        )}
      </div>
    </div>
  )
}

loilpointsSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  featuredLogo: PropTypes.string,
}

export default loilpointsSection
