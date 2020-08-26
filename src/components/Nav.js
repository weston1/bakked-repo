import React, { Component } from 'react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { Menu, X, MapPin } from 'react-feather'
import Logo from './Logo'

import './Nav.scss'

export class Navigation extends Component {
  state = {
    active: false,
    activeSubNav: false,
    currentPath: false
  }

  componentDidMount = () =>
    this.setState({ currentPath: this.props.location.pathname })

  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    })

  render() {
    const { active } = this.state,
      { subNav } = this.props,
      NavLink = ({ to, className, children, ...props }) => (
        <Link
          to={to}
          className={`NavLink ${
            to === this.state.currentPath ? 'active' : ''
          } ${className}`}
          onClick={this.handleLinkClick}
          {...props}
        >
          {children}
        </Link>
      )

    return (
      <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
        <div className="Nav--Container">
          <Link to="/" onClick={this.handleLinkClick}>
            <Logo />
          </Link>
          <div className="Nav--Links">
            <NavLink to="/about/">About</NavLink>
            <NavLink to="/gyro/">Gyro</NavLink>
            <NavLink to="/dabaratus/">Dabaratus</NavLink>
            <NavLink to="/find/">Find</NavLink>
            <NavLink to="/faq/">FAQ</NavLink>
            <NavLink to="/retailer/">Future Retailer</NavLink>
            <NavLink to="/contact/">Contact</NavLink>
          </div>
          <Link to="/find/" className="button--locator my-auto">
            <MapPin size="20px" />
            &nbsp;STORE LOCATOR
          </Link>
          <button
            className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
          >
            {active ? <X size="3rem" /> : <Menu size="3rem" className="" />}
          </button>
        </div>
      </nav>
    )
  }
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
