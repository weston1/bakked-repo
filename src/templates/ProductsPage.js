import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import FeatureArray from '../components/FeatureArray'
import BackgroundVideo from '../components/BackgroundVideo'

import { Example } from './Example'

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
  featureBlock1,
  featureBlock2,
  featuredImage,
  featureArray
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
            <Content source={section1} />
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
        <Content source={section2} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="col-lg-6">
          <Content source={section3} />
        </div>
      </div>
    </section>

    <section className="section-motion mx-auto text-center section example-container refresh">
      <div className="mx-auto">
        <Example />
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
        featureBlock1
        featureBlock2
      }
    }
  }
`
