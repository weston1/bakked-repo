import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Image from './Image'

import './BackgroundVideo.css'

class BackgroundVideo extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }
  state = {
    playing: false,
    mobileWidth: false,
  }

  updateDimensions() {
    this.setState({ mobileWidth: window.innerWidth <= 900 })
  }

  handelPlay() {
    this.setState({ playing: true })
    ReactDOM.findDOMNode(this.ref.current).removeEventListener(
      'playing',
      this.handelPlay
    )
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', () => this.updateDimensions())
    ReactDOM.findDOMNode(this.ref.current).addEventListener('playing', e =>
      this.handelPlay(e)
    )
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render() {
    const { poster, videoLogo, children } = this.props
    return (
      <Fragment>
        {!this.state.mobileWidth && (
          <div className={`BackgroundVideo`}>
            <video
              ref={this.ref}
              poster={poster}
              className={`BackgroundVideo--video ${
                this.state.playing ? 'playing' : ''
              } `}
              playsInline
              autoPlay
              muted
              loop
              preload="auto"
            >
              {children}
            </video>
            {videoLogo && (
              <img
                className="BackgroundVideo--videoLogo img-fluid"
                src="../images/logo.svg"
                alt="Bakked"
              />
            )}
          </div>
        )}
        {this.state.mobileWidth && (
          <Fragment className="Poster mx-auto">
            <Image background src={poster} alt="Background poster" />
            {videoLogo && (
              <img
                className="Poster--videoLogo img-fluid"
                src="../images/logo.svg"
                alt="Bakked"
              />
            )}
          </Fragment>
        )}
      </Fragment>
    )
  }
}

export default BackgroundVideo
