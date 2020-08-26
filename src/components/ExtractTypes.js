import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Content from './Content'

const ExtractTypes = ({ section4, className = '' }) => {
  return (
    <section className="ExtractTypes">
      <div className="container col-lg-10 mx-auto text-center">
        <h2 className="ExtractTypes--Title">Extract Types</h2>

        <Content source={section4} className="mx-auto text-center" />

        <Link to="/products" className="button mx-auto text-center">
          Explore Oil Types
        </Link>
      </div>
    </section>
  )
}

ExtractTypes.propTypes = {
  title: PropTypes.string
}

export default ExtractTypes
