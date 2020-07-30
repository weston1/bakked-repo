import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import CannabisHeader from '../components/CannabisHeader'
import Banner from '../components/Banner'
import Content from '../components/Content'
import Layout from '../components/Layout'
import FeatureArray from '../components/FeatureArray'

// Export Template for use in CMS preview
export const HomePageTemplate = ({
  title,
  subtitle,
  featuredImage,
  bakkedImg1,
  bakkedImg22,
  bakkedImg3,
  bakkedImg4,
  sticker1,
  sticker2,
  sticker3,
  section1,
  section2,
  section3,
  section4,
  featureArray
}) => (
  <main className="Home">
    <CannabisHeader backgroundImage={featuredImage} />

    <section className="section row">
      <div className="col-lg-2">
        <img src={sticker1} alt={title} className="sticker sticker-header-1" />
      </div>
      <div className="col-lg-4">
        <img src={sticker2} alt={title} className="sticker sticker-header-2" />
      </div>
      <div className="col-lg-3">
        <img src={sticker3} alt={title} className="sticker sticker-header-3" />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Content
          source={section1}
          className="col-lg-10 text-center mx-auto reveal-from-bottom"
          data-reveal-delay="200"
        />
      </div>
    </section>

    <section className="section Banner-Container">
      <h1 className="Banner-Scroll">
        <span>&#9762;</span> LETS #GETBAKKED <span>&#9762;</span> LETS
        #GETBAKKED <span>&#9762;</span> LETS #GETBAKKED
      </h1>
    </section>

    <section className="section bg-primary bg-rough">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 p-5">
            <img
              src={bakkedImg1}
              alt={title}
              className="img-fluid mx-auto py-4 text-center"
            />
            <Content source={section2} className="text-left" />
            <Link to="/products" className="button">
              SEE WHY WE MADE IT
            </Link>
            <Link to="/find" className="button">
              FIND A DISPENSARY
            </Link>
          </div>
          <div className="col-lg-6 my-auto">
            <img
              src={bakkedImg22}
              alt={title}
              className="img-fluid mx-auto text-center"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="section bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto py-5">
            <img
              src={bakkedImg3}
              alt={title}
              className="img-fluid mx-auto text-center"
            />
          </div>
          <div className="col-lg-4 my-auto">
            <img
              src={bakkedImg4}
              alt={title}
              className="img-fluid mx-auto text-center"
            />
            <Content source={section3} />
            <Link to="/products" className="button">
              SEE WHY WE MADE IT
            </Link>
            <div>
              <a id="link1" href="#" class="tooltip">
                nation<span class="tooltip__line"></span>
                <span class="tooltip__content">One hope One Quest</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section bg-primary">
      <Banner className="Banner-Stripes" />
    </section>

    <section className="section">
      <div className="col-lg-5 mx-auto py-4">
        <h1>EXTRACT TYPES</h1>
      </div>
      <div className="container mx-auto text-center">
        <FeatureArray
          images={featureArray}
          className="container mx-auto text-center"
        />
        <Content source={section4} className="mx-auto text-center" />

        <Link to="/products" className="button mx-auto text-center">
          Explore All Oil Types
        </Link>
      </div>
    </section>

    <section className="section bg-primary">
      <div className="container">
        <h1>What’s another email between friends?</h1>
        <p>
          We know what you’re thinking but we keep short &amp; sweet and won’t
          spam your inbox. Sign-up to learn about new product releases, special
          offers &amp; drops.
        </p>
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...featureArray
      html
      frontmatter {
        title
        subtitle
        featuredImage
        bakkedImg1
        bakkedImg22
        bakkedImg3
        bakkedImg4
        sticker1
        sticker2
        sticker3
        section1
        section2
        section3
        section4
      }
    }
  }
`
