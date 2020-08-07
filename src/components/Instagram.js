import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './Instagram.css'

const Instagram = ({ title, subtitle, bakkedImg1, className = '' }) => {
  return (
    <div className={`Instagram relative ${className}`}>
      <div className="container relative">
        <Image src={bakkedImg1} alt={title} className="Instagram--Logo" />

        <h1 className="Instagram--Title">{title}</h1>
        {subtitle && <Content className="Instagram--Subtitle" src={subtitle} />}
      </div>
    </div>
  )
}

Instagram.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  bakkedImg1: PropTypes.string
}

export default Instagram
