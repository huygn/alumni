import React, { Component } from 'react'
import Header from './Header'

class StickyHeader extends Component {
  state = { atTop: true }

  componentDidMount() {
    this.onScroll()
    window.addEventListener('scroll', this.onScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = e => {
    if (window.scrollY <= 100 && this.state.atTop === false) {
      this.setState({ atTop: true })
      return
    }
    if (window.scrollY > 100 && this.state.atTop === true) {
      this.setState({ atTop: false })
    }
  }

  render() {
    const { atTop } = this.state
    const { className = '', ...rest } = this.props
    return (
      <Header
        className={`fixed pin-t pin-l w-full z-header ${
          atTop ? '' : 'shadow'
        } ${className}`}
        {...rest}
      />
    )
  }
}

export default StickyHeader
