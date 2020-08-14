import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const BakkedDefaultTemplate = ({ title, subtitle, featuredImage }) => (
  <main className="BakkedDefault">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section thick">
      <div className="container">
        <p>{subtitle}</p>
      </div>
    </section>
  </main>
)

const BakkedDefault = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <BakkedDefaultTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default BakkedDefault

export const pageQuery = graphql`
  query BakkedDefault($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
