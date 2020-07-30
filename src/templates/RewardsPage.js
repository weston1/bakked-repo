import React from 'react'
import { graphql } from 'gatsby'

import './RewardsPage.css'
import RewardHeader from '../components/RewardHeader'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const RewardsPageTemplate = ({
  helloworld,
  title,
  subtitle,
  featuredImage,
}) => (
  <main className="RewardsPage">
    <RewardHeader
      helloworld={helloworld}
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
      className="loil-header"
    />
    <section className="section">
      <div>
        <div className="row taCenter">
          <div className="col-lg-1 col-1">&nbsp;</div>
          <div className="col-lg-2 col-2">
            <img
              src="/images/loil/svg/openvape_b.svg"
              alt="O.penVAPE"
              className="loil-brands"
            />
          </div>
          <div className="col-lg-2 col-2">
            <img
              src="/images/loil/svg/mb.svg"
              alt="Magic Buzz"
              className="loil-brands"
            />
          </div>
          <div className="col-lg-2 col-2">
            <img
              src="/images/loil/svg/bakked.svg"
              alt="Bakked"
              className="loil-brands"
            />
          </div>
          <div className="col-lg-2 col-2">
            <img
              src="/images/loil/svg/distrcit_b.svg"
              alt="District"
              className="loil-brands"
            />
          </div>
          <div className="col-lg-2 col-2">
            <img
              src="/images/loil/svg/pressie.svg"
              alt="Pressies"
              className="loil-brands"
            />
          </div>
          <div className="col-lg-1 col-1">&nbsp;</div>
        </div>
      </div>
    </section>
    <section>
      <div className="taCenter section">
        <h1 className="loil-header">how it works</h1>
      </div>
      <div className="container taCenter">
        <div className="row how-to-text">
          <div className="col-lg-4">
            <img
              src="/images/loil/svg/how-icon-earn.svg"
              alt="Earn points for cannabis products"
            />
            <h3>Earn</h3>
            <p>
              Earn points just for purchasing your favorite cannabis products at
              dispensaries throughout Colorado.
            </p>
          </div>
          <div className="col-lg-4 ">
            <img
              src="/images/loil/svg/how-icon-burn.svg"
              alt="Burn points on prizes"
            />
            <h3>Burn</h3>
            <p>
              Burn points how you want - on an assortment of rotating food, gear
              and experiences.
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src="/images/loil/svg/how-icon-reward.svg"
              alt="Reward yourself with cannabis products"
            />
            <h3>Reward yourself</h3>
            <p>
              Reward yourself on cannabis products, exclusively through
              loilpoints.com.
            </p>
          </div>
        </div>
      </div>
      <div className="section taCenter">
        <a
          href="https://loilpoints.com/"
          alt="loilpoints"
          target="_blank"
          rel="noopener noreferrer"
          className="loil-button lb"
        >
          Sign Up Now &#8250;
        </a>
      </div>
    </section>
    <section>
      <div className="row bg-dark">
        <div className="col-lg-6 section container my-auto offers-text loil-text">
          <h4 className="loil-header">
            <svg width="16px" height="23px" viewBox="0 0 16 23">
              <path
                fill="#FFFFFF"
                d="M13,6c-0.2-0.3-0.5-0.4-0.8-0.3c-0.3,0.1-0.5,0.3-0.5,0.6c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5V0.7
	c0-0.3-0.2-0.5-0.4-0.6C8-0.1,7.7,0,7.5,0.2C7.4,0.3,5.6,2.1,3.8,4.8C2.7,6.4,1.8,8,1.2,9.6C0.4,11.5,0,13.4,0,15.1
	C0,19.5,3.6,23,8,23s8-3.5,8-7.9C16,12.3,15,9.3,13,6z"
              />
            </svg>
            &nbsp; weekly burn
          </h4>
          <small>Hot offers trending now</small>
          <div className="py-5 taLeft">
            <button className="loil-button-mini">50,000 pts</button>
            <h4 className="loil-subheader">
              O.penVAPE x Icelantic Twin Tip&nbsp;Skis
            </h4>
            <p>
              The Icelantic Nomad Skis are designed to tackle every chute,
              spine, line and drop with confidence and style. You can have these
              popular skiis by redeeming your&nbsp;points.
            </p>
          </div>
          <div className="container">
            <a
              href="https://loilpoints.com"
              alt="loilpoints"
              target="_blank"
              rel="noopener noreferrer"
              className="loil-button lb"
            >
              Redeem Now &#8250;
            </a>
          </div>
        </div>
        <div className="col-lg-6 my-auto order-xl-first order-lg-first order-md-last order-sm-last">
          <img
            src="/images/loil/burn-offer-2.jpg"
            alt="loil weekly burn offer"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
    <section className="row offer-img-container">
      <div className="col-lg-4 offer-img">
        <div className="my-auto container py-5">
          <div className="section">
            <svg width="16px" height="23px" viewBox="0 0 16 23">
              <path
                fill="#FFFFFF"
                d="M13,6c-0.2-0.3-0.5-0.4-0.8-0.3c-0.3,0.1-0.5,0.3-0.5,0.6c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5V0.7
	c0-0.3-0.2-0.5-0.4-0.6C8-0.1,7.7,0,7.5,0.2C7.4,0.3,5.6,2.1,3.8,4.8C2.7,6.4,1.8,8,1.2,9.6C0.4,11.5,0,13.4,0,15.1
	C0,19.5,3.6,23,8,23s8-3.5,8-7.9C16,12.3,15,9.3,13,6z"
              />
            </svg>
          </div>
          <div className="offers-text-container">
            <small>Special Offers</small>
            <h4 className="loil-header">Fresh Drops</h4>
            <p>
              A rotating selection of monthly special offers and discounts on
              cannabis products. Get a BOGO RESERVE just for signing up today!
            </p>
            <a
              href="https://loilpoints.com/"
              alt="loilpoints"
              target="_blank"
              rel="noopener noreferrer"
              className="loil-button-simple lb"
            >
              START EARNING&nbsp;&#8250;
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 offer-img">
        <div className="my-auto container py-5">
          <div className="section">
            <svg width="16px" height="23px" viewBox="0 0 16 23">
              <path
                fill="#FFFFFF"
                d="M13,6c-0.2-0.3-0.5-0.4-0.8-0.3c-0.3,0.1-0.5,0.3-0.5,0.6c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5V0.7
	c0-0.3-0.2-0.5-0.4-0.6C8-0.1,7.7,0,7.5,0.2C7.4,0.3,5.6,2.1,3.8,4.8C2.7,6.4,1.8,8,1.2,9.6C0.4,11.5,0,13.4,0,15.1
	C0,19.5,3.6,23,8,23s8-3.5,8-7.9C16,12.3,15,9.3,13,6z"
              />
            </svg>
          </div>
          <div className="offers-text-container">
            <small>Experiences</small>
            <h4 className="loil-header">Gear and Experiences</h4>
            <p>
              Burn your points on a selection of rotating gear and experience
              based offers.
            </p>
            <a
              href="https://loilpoints.com/"
              alt="loilpoints"
              target="_blank"
              rel="noopener noreferrer"
              className="loil-button-simple lb"
            >
              START EARNING&nbsp;&#8250;
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 offer-img">
        <div className="my-auto container py-5">
          <div className="section">
            <svg width="16px" height="23px" viewBox="0 0 16 23">
              <path
                fill="#FFFFFF"
                d="M13,6c-0.2-0.3-0.5-0.4-0.8-0.3c-0.3,0.1-0.5,0.3-0.5,0.6c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5V0.7
	c0-0.3-0.2-0.5-0.4-0.6C8-0.1,7.7,0,7.5,0.2C7.4,0.3,5.6,2.1,3.8,4.8C2.7,6.4,1.8,8,1.2,9.6C0.4,11.5,0,13.4,0,15.1
	C0,19.5,3.6,23,8,23s8-3.5,8-7.9C16,12.3,15,9.3,13,6z"
              />
            </svg>
          </div>
          <div className="offers-text-container">
            <small>Products</small>
            <h4 className="loil-header">BOGOs</h4>
            <p>
              2 is better than 1. Use your points to snag BOGOs on your favorite
              cannabis products!
            </p>
            <a
              href="https://loilpoints.com/"
              alt="loilpoints"
              target="_blank"
              rel="noopener noreferrer"
              className="loil-button-simple lb"
            >
              START EARNING&nbsp;&#8250;
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="section thick">
      <div className="container taCenter">
        <h1 className="loil-header">Getting Started</h1>
      </div>
      <div className="container py-5">
        <div className="row mx-auto taCenter">
          <div className="col-lg-3">
            <div className="step-text">
              <p className="how-to-text">STEP 1</p>
              <h3 className="loil-subheader">Create Account</h3>
              <p className="how-to-text">
                Create an account here on{' '}
                <strong>
                  <a
                    href="https://loilpoints.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    loilpoints.com/signup
                  </a>
                </strong>
              </p>
            </div>

            <img
              src="/images/loil/img-signup-step1.jpg"
              alt="Create a loilpoints account"
              height="400px"
              className="img-fluid step-img"
            />
          </div>
          <div className="col-lg-3">
            <div className="step-text">
              <p className="how-to-text">STEP 2</p>
              <h3 className="loil-subheader">Burn Offers</h3>
              <p className="how-to-text">
                Head to the Burn section for your first Special Offer! (BOGO
                RESERVE&nbsp;500mg)
              </p>
            </div>

            <img
              src="/images/loil/img-signup-step2.jpg"
              alt="Head to the Burn to see your first Special Offer!"
              height="400px"
              className="img-fluid step-img"
            />
          </div>
          <div className="col-lg-3">
            <div className="step-text">
              <p className="how-to-text">STEP 3</p>
              <h3 className="loil-subheader">Find Store</h3>
              <p className="how-to-text">
                Use the store locator to find a Redemption Store near you.
              </p>
            </div>

            <img
              src="/images/loil/img-signup-step3.jpg"
              alt="loilpoints O.penVAPE store locator"
              height="400px"
              className="img-fluid step-img"
            />
          </div>
          <div className="col-lg-3">
            <div className="step-text">
              <p className="how-to-text">STEP 4</p>
              <h3 className="loil-subheader">Bank the Points</h3>
              <p className="how-to-text">
                Enter the code found on your package to start banking points!
              </p>
            </div>

            <img
              src="/images/loil/img-signup-step4.jpg"
              alt="Enter the code found on your package to start banking points!"
              height="400px"
              className="img-fluid step-img"
            />
          </div>
        </div>
      </div>
      <div className="section taCenter">
        <a
          href="https://loilpoints.com"
          alt="loilpoints"
          target="_blank"
          rel="noopener noreferrer"
          className="loil-button lb"
        >
          SIGN UP NOW &#8250;
        </a>
      </div>
    </section>
    <section className="section thick earn-bg rewards-text">
      <div className="container taCenter">
        <h1 className="loil-header">Earn Rewards Faster</h1>
      </div>
      <div className="section">
        <div className="row taCenter">
          <div className="col-lg-3 mx-auto">
            <div>
              <img
                src="/images/loil/svg/faster-offers.svg"
                alt="Stay Up To Date"
                className="loil-brands"
              />
            </div>
            <h1 className="loil-subheader">
              Keep Up To-Date on Fresh&nbsp;Drops
            </h1>
            <p>Special Offers will update monthly.</p>
          </div>
          <div className="col-lg-3 mx-auto">
            <div>
              <img
                src="/images/loil/3x.png"
                alt="Faster Activation"
                className="loil-brands"
              />
            </div>
            <h1 className="loil-subheader">Fully Activated</h1>
            <p>Activate product bonuses to earn more&nbsp;points.</p>
          </div>
          <div className="col-lg-3 mx-auto">
            <div>
              <img
                src="/images/loil/svg/faster-refer.svg"
                alt="Faster Referrals"
                className="loil-brands taCenter"
              />
              <h1 className="loil-subheader">Puff, Puff Pass </h1>
              <p>Refer Friends and get rewarded.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
)

const RewardsPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <RewardsPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default RewardsPage

export const pageQuery = graphql`
  query RewardsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        helloworld
        title
        subtitle
        featuredImage
      }
    }
  }
`
