import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import './ContactPage.css'

export const CitationsPageTemplate = ({
  body,
  title,
  subtitle,
  featuredImage,
}) => (
  <main className="Contact">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
      className="FindHeader"
    />
    <Content className="section container" source={body} />
  </main>
)

const CitationsPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <CitationsPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default CitationsPage

export const pageQuery = graphql`
  query CitationsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
      }
    }
  }
`
