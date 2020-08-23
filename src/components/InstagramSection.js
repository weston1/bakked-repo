import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Instagram } from 'react-feather'
import Feed from 'react-instagram-authless-feed'

import './InstagramSection.css'

const InstagramSection = ({ title, className = '' }) => {
  return (
    <section className="InstagramSection">
      <div className="container col-lg-10 mx-auto text-center">
        <h2 className="InstagramSection--Title">#GetBakked</h2>
        <Instagram size="5rem" />
        <p>FOLLOW US @BAKKED_SOLUTIONS</p>
      </div>

      <div className="Insta-Format">
        <Feed
          username="theterpometer"
          classname="Feed"
          classnameLoading="Loading"
          max="6"
        />
      </div>
    </section>
  )
}

InstagramSection.propTypes = {
  title: PropTypes.string
}

export default InstagramSection
