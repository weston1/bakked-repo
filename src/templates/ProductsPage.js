import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import FeatureArray from '../components/FeatureArray'
import BackgroundVideo from '../components/BackgroundVideo'

// Export Template for use in CMS preview
export const ProductsPageTemplate = ({
  title,
  subtitle,
  video,
  videoPoster,
  videoTitle,
  videoLogo,
  section1,
  section2,
  section3,
  bakkedImg1,
  bakkedImg2,
  bakkedImg3,
  featureBlock1,
  featureBlock2,
  featureArray,
}) => (
  <main>
    <section className="BackgroundVideo-section">
      <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
        {video && <source src={video} type="video/mp4" />}
      </BackgroundVideo>
    </section>
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Content source={section1} className="product-list" />
            <button className="button">Find A Dispensary</button>
            <button className="button">Find A Dispensary</button>
          </div>
          <div className="col-lg-5">
            <img
              src={featureBlock1}
              alt={title}
              className="img-fluid mx-auto text-center"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="section bg-stripes"></section>
    <section className="section">
      <div className="container col-lg-10 text-center">
        <img src="../images/svg/test-symbol.svg" />
      </div>
    </section>
    <section className="section">
      <div className="container text-center">
        <Content source={section2} className="col-lg-8  mx-auto" />
      </div>
    </section>

    <section className="section bg-primary">
      <div className="container row">
        <div className="col-lg-6">
          <small>TEST 4.12C</small>
          <h2>ANTI-GRAVITY SIMULATOR</h2>

          <h1>Carousel</h1>
        </div>
        <div className="col-lg-6">
          <h1>Carousel</h1>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container col-lg-10 text-center">
        <img src="../images/svg/test-symbol.svg" />
      </div>
    </section>

    <section className="section bg-stripes"></section>

    <section className="section">
      <div className="container row">
        <div className="col-lg-6">
          <img
            src={bakkedImg2}
            alt={title}
            className="img-fluid mx-auto text-center"
          />
        </div>
        <div className="col-lg-6">
          <Content source={section3} className="my-auto" />
          <button className="button">EXPLORE OIL TYPES</button>
        </div>
      </div>
    </section>

    <section className="section thick">
      <div className="container col-lg-10">
        <FeatureArray images={featureArray} />
      </div>
    </section>

    <section className="section">
      <div className="container row">
        <h3>See How We Made</h3>
        <div className="col-lg-6 bg-rough-y">
          <Content source={featureBlock1} />
        </div>
        <div className="col-lg-6 bg-secondary">
          <Content source={featureBlock2} />
        </div>
      </div>
    </section>
  </main>
)

const ProductsPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ProductsPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ProductsPage

export const pageQuery = graphql`
  query ProductsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...featureArray
      html
      frontmatter {
        title
        template
        subtitle
        video
        videoLogo
        videoPoster
        videoTitle
        featuredImage
        section1
        section2
        section3
        bakkedImg1
        bakkedImg2
        bakkedImg3
        featureBlock1
        featureBlock2
      }
    }
  }
`
