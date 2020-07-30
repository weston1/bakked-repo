import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Content from '../components/Content'
import Layout from '../components/Layout'
import CannabisHeader from '../components/CannabisHeader'

// Export Template for use in CMS preview
export const AboutPageTemplate = ({
  title,
  featuredLogo,
  featuredLogo2,
  featuredImage,
  aboutImage1,
  aboutImage2,
  section1,
  body,
}) => (
  <main className="Home">
    <CannabisHeader
      featuredLogo={featuredLogo}
      title={title}
      backgroundImage={featuredImage}
      className="white"
    />

    <section className="section">
      <div className="container">
        <div className="col-lg-6">
          <Content source={section1} />
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="mx-auto col-lg-3 col-8 text-center section">
          <img src={featuredLogo2} />
        </div>
        <div className="taCenter col-lg-6 mx-auto">
          <h2>
            Highest-Quality <span>Extracts</span>.
          </h2>
          <p>
            At Bakked, we produce the highest-quality extracted cannabis oil
            possible. High-potency, fully-activated distillate oil paired with
            our cutting-edge terpene preservation technology ensures the highest
            quality extract every time. Not to mention all of our oils are lab
            tested with potencies printed on the front of every&nbsp;package.
          </p>
        </div>
      </div>
      <section className="section">
        <div className="container row">
          <div className="taCenter col-8 mr-auto ">
            <img src={aboutImage1} className="img-fluid about-img-1" />
          </div>
          <div className="taCenter col-6 ml-auto">
            <img src={aboutImage2} className="img-fluid about-img-2" />
          </div>
        </div>
      </section>

      <div className="container">
        <div className="col-lg-4 col-md-4 col-8 blockquote-primary p-4 about-quote">
          <div className="p-4">
            <p>
              &quot;This product is hands down the best concentrate for users
              on-the-go. 75-80% with same batch terpenes your only problem would
              be you didn't buy more!&quot;
            </p>
            <p className="yellow small">-WEEDMAPS</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 col-md-10 py-3 mx-auto">
            <h2>
              CLEAN &amp; PURE EXPEREIENCE, <span>EVERY&nbsp;TIME</span>.
            </h2>
            <p>
              Every batch of oil is sourced from high-quality, locally grown
              cannabis. Our cannabis extraction method processes raw material
              through a supercritical, closed-loop organic CO2 extraction
              system. This helps ensure that you are getting a safe and pure
              product. The oil is triple refined with low heat, to preserve the
              naturally occurring cannabis terpenes that create the amazing
              taste we have all come to expect from our products. All of our
              products are QA tested, giving us the lowest failure rate in the
              industry. So you can rest easy knowing your product will be ready
              to use right out of the box.
            </p>
            <p>
              Bakked products provide quality and value to cannabis consumers
              and the extraction method we use is at the core of delivering on
              that promise. Organa Labs has always focused on quality, purity
              and potency during the development, production, testing of our
              products. If you have questions about our cannabis extraction
              method, or would like to know more about the behind-the-scenes
              process, please contact us.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section taCenter mx-auto">
      <Link className="Button" to="/products/">
        Our Products
      </Link>
    </section>
  </main>
)

// Export Default AboutPage for front-end
const AboutPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <AboutPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default AboutPage

export const pageQuery = graphql`
  ## Query for AboutPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query AboutPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredLogo
        featuredLogo2
        featuredImage
        aboutImage1
        aboutImage2
        section1
      }
    }
  }
`
