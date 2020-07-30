import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import CannabisHeader from '../components/CannabisHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Gallery from '../components/Gallery'

// Export Template for use in CMS preview
export const CannabisPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
  section2,
  video,
  videoPoster,
  videoTitle,
  accordion,
  body,
  gallery,
}) => (
  <main>
    <CannabisHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container">
        <Content source={section1} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2>Recent Projects</h2>
        <Gallery images={gallery} />
      </div>
    </section>

    <section>
      <div className="dark section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://static.collectui.com/shots/4099945/tacos-and-trees-marijuana-delivery-with-tacos-large"
                className="img-fluid imgFeature"
                alt="REPLACE 2"
              />
            </div>
            <div className="col-lg-6 my-auto">
              <h2>
                DIGITAL <span>CANNABIS</span>
              </h2>
              <p>
                5+ years experience with digital marketing &amp;
                e&#8209;commmerce for multi-state cannabis operations.
              </p>
              <Link to="/cannabis/">420</Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Content source={section2} />
      </div>
    </section>

    <section className="BackgroundVideo-section section">
      <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
        {video && <source src={video} type="video/mp4" />}
      </BackgroundVideo>
    </section>

    <section className="section">
      <div className="container">
        <Accordion items={accordion} />
      </div>
    </section>

    <section className="section">
      <div className="container"></div>
    </section>
  </main>
)

const CannabisPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <CannabisPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default CannabisPage

export const pageQuery = graphql`
  query CannabisPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        section1
        section2
        video
        videoPoster
        videoTitle
        accordion {
          title
          description
        }
      }
    }
  }
`
