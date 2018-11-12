import React from 'react'
import { Link } from 'react-static'
import LogoGroup from './LogoGroup'

const styles = {
  link: {
    className:
      'col inline-flex items-center no-underline text-black hover:text-primary',
  },
}

const foundationRoot = 'https://dwarves.foundation'
const foundationPath = path => ({
  to: `${foundationRoot}${path}`,
  target: '_blank',
  rel: 'noopener noreferrer',
})

const Header = ({ className = '', ...rest }) => {
  return (
    <header className={`${className} bg-white`}>
      <div className="container">
        <div className="row lg:flex lg:justify-between">
          <Link {...foundationPath('/')} className="link-reset">
            <LogoGroup className="col py-5" />
          </Link>
          <nav className="hidden lg:flex">
            <Link {...styles.link} {...foundationPath('/')}>
              Home
            </Link>
            <Link {...styles.link} {...foundationPath('/tech')}>
              Technology
            </Link>
            <Link {...styles.link} {...foundationPath('/works')}>
              Works
            </Link>
            <Link {...styles.link} to={'/'} activeClassName="text-primary">
              Alumni
            </Link>
            <Link {...styles.link} {...foundationPath('/contact')}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
