import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Instagram } from 'react-feather'

import './InstagramSection.css'

const InstagramSection = ({ title, className = '' }) => {
  return (
    <section className="InstagramSection">
      <div className="container col-lg-10 mx-auto text-center">
        <h2 className="InstagramSection--Title">#GetBakked</h2>
        <Instagram size="5rem" />
        <p>FOLLOW US @BAKKED_SOLUTIONS</p>

        <div className="">
          <img
            src="../images/photos/instagram-placeholder.jpg"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  )
}

InstagramSection.propTypes = {
  title: PropTypes.string
}

export default InstagramSection
