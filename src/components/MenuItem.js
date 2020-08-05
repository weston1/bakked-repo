import * as React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import { Droplet } from 'react-feather'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const colors = ['#fdb000', '#fdb000', '#fdb000', '#fcc000', '#fff000']
const pages = ['/', '/gyro', '/dabaratus', '/find', '/contact']
const pagesTitle = ['Home', 'Gyro', 'Dabaratus', 'Find', 'Contact']
const listClass = ['Menu--ul', 'Menu--ul', 'Menu--ul', 'Menu--ul', 'Menu--ul']

export const MenuItem = ({ i }) => {
  const style = { color: `${colors[i]}` }
  return (
    <div className="Menu--ul">
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={listClass[i]}
      >
        <Link to={pages[i]}>
          <Droplet className="MenuItem-Icon" color={colors[i]} />
          <p className="my-auto">{pagesTitle[i]}</p>
        </Link>
      </motion.li>
    </div>
  )
}
