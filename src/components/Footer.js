import React from 'react'
import { Link } from 'gatsby'
import './Footer.css'
import { Instagram, Facebook, MessageCircle } from 'react-feather'

export default () => (
  <div className="footer--stripes--container taCenter">
    <div className="footerNav">
      <div className="footerNavBorder container">
        <div className="row brandLogo">
          <div className="col-lg-6">
            <img
              src="../images/logos/bakked_logo.png"
              alt="Bakked"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-3 col-6">
            <h4>Subscribe</h4>
            <div className="col-lg-3 mb-auto py-3">
              <input name="form-name" value="contact" name="newsletter" />
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <h4>Explore</h4>
            <div className="row">
              <div className="col-lg-6 footer-credits">
                <li>
                  <Link to="/gyro/">Gyro</Link>
                </li>
                <li>
                  <Link to="/products/">Dabaratus</Link>
                </li>
                <li>
                  <Link to="/about/">How It's Made</Link>
                </li>
                <li>
                  <a
                    href="https://loilpoints.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    loilpoints
                  </a>
                </li>
              </div>
              <div className="col-lg-6">
                <li>
                  <Link to="/about/">Find A Retailer</Link>
                </li>
                <li>
                  <Link to="/about/">Support</Link>
                </li>
                <li>
                  <Link to="/about/">FAQ</Link>
                </li>
                <li>
                  <a
                    href="https://slangww.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Slang Promise
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="row">
        <div className="col-lg-6 footer-credits">
          <li>
            <Link to="/privacy">Terms &amp; Conditions</Link>
          </li>
          <li>
            <Link>Terms &amp; Conditions</Link>
          </li>
          <li>
            <Link>Privacy Policy</Link>
          </li>
          <li>
            <span>© {new Date().getFullYear()} Bakked.</span>
          </li>
        </div>
        <div className="col-lg-6 footer-credits">
          <li>
            <Instagram />
          </li>
          <li>
            <Facebook />
          </li>
          <li>
            <MessageCircle />
          </li>
          <li>
            <img
              src="../images/logos/bakked_logo.png"
              className="img-fluid"
              width="100px"
            />
          </li>
        </div>
      </div>
    </footer>
    <div className="pt-5 footer--stripes"></div>
  </div>
)
