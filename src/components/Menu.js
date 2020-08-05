import * as React from 'react'
import { useRef } from 'react'
import { Link } from 'gatsby'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from './use-dimensions'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'
import { MapPin } from 'react-feather'
import Logo from './Logo'

import './Menu.css'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 600px 1000px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <div className="Menu">
      <div className="Menu--Container">
        <Link to="/find" className="Find--Button button--locator my-auto">
          <MapPin size="20px" />
          &nbsp;STORE LOCATOR
        </Link>

        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={containerRef}
        >
          <motion.div className="background" variants={sidebar} />
          <Navigation />
          <div>
            <Logo />
          </div>
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      </div>
    </div>
  )
}
