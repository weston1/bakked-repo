import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import FullHeader from '../components/FullHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'

// Export Template for use in CMS preview
export const ResourcesPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1
}) => (
  <main>
    <FullHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container">
        <Content source={section1} />
      </div>
    </section>
  </main>
)

const ResourcesPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ResourcesPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ResourcesPage

export const pageQuery = graphql`
  query ResourcesPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
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
