import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { Fade } from 'react-awesome-reveal'
import { MapPin } from 'react-feather'

import Image from '../components/Image'
import Layout from '../components/Layout'
import Content from '../components/Content'

import BakkedHeader from '../components/BakkedHeader'
import FeatureArray from '../components/FeatureArray'
import FindSection from '../components/FindSection'
import FormSignUp from '../components/FormSignUp'
import BakkedMarquee from '../components/BakkedMarquee'
import InstagramSection from '../components/InstagramSection'

// Export Template for use in CMS preview
export const HomePageTemplate = ({
  title,
  subtitle,
  featuredImage,
  bakkedImg1,
  bakkedImg22,
  bakkedImg3,
  bakkedImg4,
  icon,
  sticker1,
  sticker2,
  sticker3,
  section1,
  section2,
  section3,
  section4,
  section5,
  featureArray,
}) => (
  <main className="Home">
    <BakkedHeader backgroundImage={featuredImage} />

    <section className="section thick"></section>

    <section className="section thick bg-dusty">
      <div className="container">
        <Fade>
          <Content source={section1} className="col-lg-9 text-center mx-auto" />
        </Fade>
      </div>
    </section>

    <section className="Overflow--Container">
      <BakkedMarquee />
    </section>

    <section className="section bg-primary-dusty">
      <div className="bg-product-stripes">
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
                <MapPin /> FIND A DISPENSARY
              </Link>
            </div>
            <div className="col-lg-6 my-auto bg-dots">
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
            <div className="col-lg-4 col-md-4 col-8 mx-auto">
              <img src={sticker1} alt={title} className="sticker" />
            </div>
            <div className="col-lg-4 col-md-4 col-8 mx-auto">
              <img src={sticker3} alt={title} className="sticker " />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section bg-primary-dusty">
      <div className="container breaker">&nbsp;</div>
    </section>
    <section className="section bg-primary-dusty">
      <div className="bg-product-stripes-left">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto py-5 bg-dots-left">
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
    <FindSection />

    <FormSignUp />

    <InstagramSection />
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
        icon
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
