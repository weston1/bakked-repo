import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Image from '../components/Image'
import KeenSlider from '../components/KeenSlider'

import BackgroundVideo from '../components/BackgroundVideo'
import { ShoppingCart, MapPin } from 'react-feather'

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
  section4,
  bakkedImg1,
  bakkedImg2,
  bakkedImg3,
  sticker1,
  sticker2,
  sticker3,
  featureBlock1,
  featureBlock2
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
            <button className="button">
              <MapPin />
              &nbsp; Find A Dispensary
            </button>
            <button className="button">
              <ShoppingCart />
              &nbsp; BUY AN EMPTY GYRO
            </button>
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
          <KeenSlider />
        </div>
        <div className="col-lg-6">
          <KeenSlider />
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container col-lg-10 text-center">
        {sticker1 && <Image src={sticker1} alt={title} size="10rem" />}
        <Image src={sticker2} alt={title} size="cover" />
        <Image src={sticker3} alt={title} size="cover" />
        {sticker1 && <Image src={sticker1} alt={title} size="10rem" />}
      </div>
    </section>

    <section className="section bg-stripes"></section>

    <section className="section bg-primary-dusty">
      <div className="container row">
        <div className="col-lg-6">
          <Content source={section3} className="my-auto" />
          <button className="button">EXPLORE OIL TYPES</button>
        </div>
        <div className="col-lg-6">
          <img
            src={bakkedImg2}
            alt={title}
            className="img-fluid mx-auto text-center"
          />
        </div>
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
          <Content source={section4} className="my-auto" />
          <button className="button">EXPLORE OIL TYPES</button>
        </div>
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
        section4
        bakkedImg1
        bakkedImg2
        bakkedImg3
        sticker1
        sticker2
        sticker3
        featureBlock1
        featureBlock2
      }
    }
  }
`
