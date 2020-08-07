import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import CannabisHeader from '../components/CannabisHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import FeatureArray from '../components/FeatureArray'
import FormSimple from '../components/FormSimple'
import Instagram from '../components/Instagram'

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
  section5,
  featureArray
}) => (
  <main className="Home">
    <CannabisHeader backgroundImage={featuredImage} />

    <section className="section thick row">
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

    <section className="section thick bg-dusty">
      <div className="container">
        <Content
          source={section1}
          className="col-lg-9 text-center mx-auto reveal-from-bottom"
          data-reveal-delay="200"
        />
      </div>
    </section>

    <section class="Marquee--Section">
      <div class="Marquee--Inner">
        <h3 className="Marquee--Item">
          001 100 0 010 100101 00 010 00 1 001 100 0 010 100101 00 010 00 1 001
          100 0 010 100101 00 010 00 1 001 100 0 010 100101 00 010 00 1 001 100
          0 010 100101 00 010 00 1
        </h3>
        <h3 className="Marquee--Item">
          <span>&#9762;</span> LETS #GETBAKKED <span>&#9762;</span> LETS
          #GETBAKKED <span>&#9762;</span> LETS #GETBAKKED
        </h3>
      </div>
    </section>

    <section className="section bg-primary-dusty">
      <div className="container">
        <div className="row col-lg-10 mx-auto">
          <div className="col-lg-6 p-3">
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
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mx-auto">
            <img src={sticker1} alt={title} className="sticker" />
          </div>
          <div className="col-lg-4 mx-auto">
            <img src={sticker3} alt={title} className="sticker " />
          </div>
        </div>
      </div>
    </section>
    <section className="section bg-primary">
      <div className="container breaker">&nbsp;</div>
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

    <section className="section bg-stripes"></section>

    <section className="section thick">
      <div className="text-center mx-auto py-4">
        <h2>EXTRACT TYPES</h2>
        <div className="container mx-auto text-center">
          <FeatureArray
            images={featureArray}
            className="container mx-auto text-center"
          />
          <Content source={section4} className="mx-auto text-center" />

          <Link to="/products" className="button mx-auto text-center">
            Explore Oil Types
          </Link>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Content source={section5} className="col-lg-10 mx-auto text-center" />
        <Link to="/products" className="button mx-auto text-center">
          FIND A DISPENSARY
        </Link>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="col-lg-10 mx-auto text-center">
          <h2>What’s another email between friends?</h2>
          <p>
            We know what you’re thinking but we keep short &amp; sweet and won’t
            spam your inbox. Sign-up to learn about new product releases,
            special offers &amp; drops.
          </p>
          <FormSimple />
        </div>
      </div>
    </section>
    <section>
      <Instagram />
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
        section5
      }
    }
  }
`
