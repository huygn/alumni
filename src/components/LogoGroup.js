import React from 'react'
import Logo from './Logo'

const LogoGroup = ({ className = '', ...rest }) => {
  return (
    <div className={`${className} inline-flex items-center`} {...rest}>
      <Logo className="flex-none inline-block mr-4" />
      <strong
        className="text-sm font-bold uppercase"
        style={{ lineHeight: 1.35 }}
      >
        dwarves
        <br /> foundation
      </strong>
    </div>
  )
}

export default LogoGroup
