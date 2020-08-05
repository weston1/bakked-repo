import React from 'react'
import PropTypes from 'prop-types'

import './Carousel.css'

const Carousel = ({ title, subtitle, backgroundImage, className = '' }) => {
  return (
    <div className="Carousel-Section">
      <div class="card-carousel">
        <div
          id="carouselTestimonial"
          class="carousel slide row"
          data-ride="carousel"
          data-interval="3000"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselTestimonial"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselTestimonial" data-slide-to="1"></li>
            <li data-target="#carouselTestimonial" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner col-lg-10 mx-auto">
            <div class="carousel-item active">
              <div class="container row">
                <div class="col-lg-4">
                  <img
                    class="d-block w-100 img-fluid p-4"
                    src="https://cdmattorneys.com/wp-content/uploads/2020/08/green-man.png"
                    alt="Fourth slide"
                  />
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-7 py-4">
                  <div>
                    <p class="text-primary">
                      <i class="fas fa-star fa-2x"></i>
                      <i class="fas fa-star fa-2x"></i>
                      <i class="fas fa-star fa-2x"></i>
                      <i class="fas fa-star fa-2x"></i>
                      <i class="fas fa-star fa-2x"></i>
                    </p>
                    <p>Lorem Ipsum</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container row">
                <div class="col-lg-4">
                  <img
                    class="d-block w-100 img-fluid p-4"
                    src="https://cdmattorneys.com/wp-content/uploads/2020/08/green-man.png"
                    alt="Fourth slide"
                  />
                </div>
                <div class="col-lg-1"></div>
                <div class="col-lg-7 py-4">
                  <div>
                    <p class="text-primary">
                      <i class="fas fa-star fa-2x"></i>
                      <i class="fas fa-star fa-2x"></i>
                      <i class="fas fa-star fa-2x"></i>
                      <i class="fas fa-star fa-2x"></i>
                      <i class="fas fa-star fa-2x"></i>
                    </p>
                    <p>
                      "As a defense attorney, Chris is a positive, warm and
                      friendly face, who sees you and hears you and is ready and
                      willing to go the distance to help and support you in
                      defense of your freedom."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <a
                class="carousel-control-prev"
                href="#carouselTestimonial"
                role="button"
                data-slide="prev"
              >
                <i class="fas fa-arrow-left fa-3x"></i>{' '}
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselTestimonial"
                role="button"
                data-slide="next"
              >
                <i class="fas fa-arrow-right fa-3x"></i>{' '}
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Carousel.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default Carousel
