import React from "react";
import { Smartphone, Mail } from "react-feather";
import { graphql } from "gatsby";

import Content from "../components/Content";
import Layout from "../components/Layout";
import "./ContactPage.css";
import "../components/Form.css";

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  body,
  title,
  subtitle,
  featuredImage,
  phone,
  email,
  locations,
}) => (
  <main className="Contact">
    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
        <h1>
          <Content source={title} />
        </h1>
      </div>
      <div className="container Contact--Section1--Container">
        <div className="p-4 blockquote-primary">
          <Content source={body} />
          <div className="Contact--Details">
            {phone && (
              <a className="Contact--Details--Item" href={`tel:${phone}`}>
                <Smartphone /> {phone}
              </a>
            )}
            {email && (
              <a className="Contact--Details--Item" href={`mailto:${email}`}>
                <Mail /> {email}
              </a>
            )}
          </div>
        </div>
        <div className="Contact-Container">
          <div className="container">
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {/* You still need to add the hidden input with the form name to your JSX form */}
              <input type="hidden" name="form-name" value="contact" />
              <div className="py-2">
                <label className="Form--Label">
                  <input
                    className="Form--Input Form--InputText"
                    type="text"
                    placeholder="Name*"
                    name="firstname"
                    required
                  />
                  <span>Name*</span>
                </label>
              </div>

              <div className="py-2">
                <label className="Form--Label">
                  <input
                    className="Form--Input Form--InputText"
                    type="email"
                    placeholder="Email*"
                    name="emailAddress"
                    required
                  />
                  <span>Email*</span>
                </label>
              </div>

              <div className="py-2">
                <label className="Form--Label">
                  <input
                    className="Form--Input Form--InputText"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    placeholder="Phone"
                    maxLength="11"
                    name="phone"
                    type="tel"
                    required
                  />
                  <span>#-###-###-####</span>
                </label>
              </div>

              <div className="py-2">
                <label className="Form--Label">
                  <input
                    className="Form--Input Form--InputText"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    maxLength="5"
                    placeholder="Zip Code*"
                    name="zip"
                    required
                  />
                  <span>Zip*</span>
                </label>
              </div>
              <div className="py-2">
                <label className="Form--Label Form-Checkbox">
                  <input
                    className="Form--Input Form--Textarea Form--CheckboxInput"
                    name="newsletter"
                    type="checkbox"
                    defaultChecked
                    required
                  />
                  <span>Opt-in for emails</span>
                </label>
              </div>
              <input
                type="hidden"
                name="form-name"
                value="contact"
                name="newsletter"
              />
              <p>
                <button type="submit" className="Button Form--SubmitButton">
                  Send it!
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
);

const ContactPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
);

export default ContactPage;

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        phone
        email
        locations {
          mapLink
          lat
          lng
        }
      }
    }
  }
`;
