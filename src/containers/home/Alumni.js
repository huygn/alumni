import React from 'react'
import { Link, withRouteData } from 'react-static'

const Alumni = withRouteData(({ className = '', alumni }) => {
  return (
    <section className={`container ${className}`}>
      <h2 className="section-heading text-center mb-6">Alumni Network</h2>
      <p className="lg:w-1/2 mx-auto text-center opacity-75">{`The woodland used to be home of hundreds of the Dwarves. They are back and become our supporters and advisors. The alumni network keeps growing.`}</p>
    </section>
  )
})

export default Alumni
