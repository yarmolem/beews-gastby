import React from 'react'

// Icons
import { ArrowDownIcon } from '../SVGS'

// Styles
import * as styles from './button.module.scss'

export const IconButton = ({ color, children }) => {
  return (
    <button className={`btn btn-${color} ${styles.iconButton}`}>
      <span>{children}</span>
      <ArrowDownIcon />
    </button>
  )
}
