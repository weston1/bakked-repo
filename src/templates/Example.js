import * as React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export const Example = () => {
  return (
    <motion.div
      className="example-container"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ['50%', '20%', '50%', '50%', '20%'],
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay: 10,
      }}
    >
      <h1>Hello</h1>
    </motion.div>
  )
}
