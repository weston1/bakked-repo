import React from 'react'
import { Link } from 'gatsby'
import './Footer.css'
import { Instagram, Facebook, MessageCircle } from 'react-feather'

export default () => (
  <div className="taCenter">
    <div className="section">
      <div className="subscribe mx-auto">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mx-auto">
              <h2>FRESHLY #BAKKED</h2>
              <h5>STRAIGHT TO YOUR INBOX.</h5>
            </div>
            <div className="col-lg-9">
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-9 mb-auto py-3">
                      {/* You still need to add the hidden input with the form name to your JSX form */}
                      <input type="hidden" name="form-name" value="contact" />
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
                      <label className="Form--Label Form-Checkbox py-2">
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

                    <div className="col-lg-3 mb-auto py-3">
                      <input
                        type="hidden"
                        name="form-name"
                        value="contact"
                        name="newsletter"
                      />
                      <p>
                        <button
                          type="submit"
                          className="Button Form--SubmitButton"
                        >
                          Sign&nbsp;Up
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
