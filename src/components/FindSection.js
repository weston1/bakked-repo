import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import './FindSection.css'

const FindSection = ({ title, className = '' }) => {
  return (
    <section className="FindSection">
      <div className="container col-lg-10 mx-auto text-center">
        <h2 className="FindSection--Title">
          #GetBakked at retail dispensaries
        </h2>
        <p>
          throughout california, Colorado, Oregon, New Mexico, Maine &amp;
          Vermont.
        </p>
        <Link to="/find/" className="button mx-auto text-center">
          FIND A DISPENSARY
        </Link>
      </div>
    </section>
  )
}

FindSection.propTypes = {
  title: PropTypes.string,
}

export default FindSection
