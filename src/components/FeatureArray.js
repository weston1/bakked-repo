import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Image from './Image'

import _kebabCase from 'lodash/kebabCase'

import './FeatureArray.css'
import 'react-photoswipe/lib/photoswipe.css'

export const query = graphql`
  fragment featureArray on MarkdownRemark {
    frontmatter {
      featureArray {
        alt
        image
        sticker
        title
        subtitle
      }
    }
  }
`

export default class FeatureArray extends Component {
  state = {
    loaded: false,
    isOpen: false,
    sliderImages: [],
    index: 0,
  }

  isOpen(isOpen, index) {
    if (typeof index === 'undefined') index = 0
    this.setState({ isOpen, index })
  }

  getImageInfo = (img, index) =>
    fetch(img.image + '-/json/')
      .then(res => res.json())
      .then(
        result => {
          const newImagesArr = [...this.state.sliderImages]
          newImagesArr[index] = {
            src: img.image,
            title: img.title,
            subtitle: img.subtitle,
            w: result.width,
            h: result.height,
          }
          this.setState({
            sliderImages: newImagesArr,
          })
          return true
        },
        error => {
          console.log(error)
          return false
        }
      )

  componentDidMount() {
    const { images } = this.props,
      maxCount = images.length
    let loopCount = 1

    for (let i in images) {
      if (this.getImageInfo(images[i], i)) {
        this.setState({ loaded: loopCount === maxCount })
        loopCount++
      }
    }
  }

  render() {
    const { images } = this.props
    return (
      <Fragment>
        {images && images.length > 0 && (
          <div className="FeatureArray">
            {images.map((image, index) => (
              <figure
                className="FeatureArray--Item"
                key={_kebabCase(image.alt) + '-' + index}
                onClick={() => this.isOpen(true, index)}
              >
                <div>
                  <Image
                    resolutions="small"
                    src={image.image}
                    alt={image.alt}
                    className="img-fluid logo-image-partners"
                  />
                </div>
                <div>
                  <Image
                    resolutions="small"
                    src={image.sticker}
                    alt={image.alt}
                    className="img-fluid logo-image-partners"
                  />
                </div>
                {image.title && (
                  <figcaption className="mx-auto">{image.title}</figcaption>
                )}
                <div>
                  <p>{image.subtitle}</p>
                </div>
              </figure>
            ))}
          </div>
        )}
      </Fragment>
    )
  }
}

FeatureArray.propTypes = {
  images: PropTypes.array.isRequired,
}
