import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './FullHeader.css'

const FullHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  className = '',
}) => {
  if (large) className += ' FullHeader-large'
  return (
    <div className={`FullHeader relative ${className}`}>
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
        <h1 className="FullHeader--Title">{title}</h1>
        {subtitle && (
          <Content className="FullHeader--Subtitle" src={subtitle} />
        )}
      </div>
    </div>
  )
}

FullHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default FullHeader
