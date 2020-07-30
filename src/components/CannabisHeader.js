import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './CannabisHeader.css'

const CannabisHeader = ({
  title,
  subtitle,
  featuredLogo,
  backgroundImage,
  large,
  className = '',
}) => {
  if (large) className += ' CannabisHeader-large'
  return (
    <div className={`CannabisHeader relative ${className}`}>
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
          className="CannabisHeader--Logo"
        />

        <h1 className="CannabisHeader--Title">{title}</h1>
        {subtitle && (
          <Content className="CannabisHeader--Subtitle" src={subtitle} />
        )}
      </div>
    </div>
  )
}

CannabisHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  featuredLogo: PropTypes.string,
}

export default CannabisHeader
