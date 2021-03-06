import React from 'react'
import Alumni from './Alumni'

const Home = () => {
  return (
    <div className="">
      <section className="min-h-screen pt-32 pb-16 flex flex-col justify-center items-center">
        <div className="container lg:w-1/2">
          <h1 className="section-heading text-center mb-6">
            The mastodon network that connected the Dwarves society.
          </h1>
        </div>
        <div className="text-center">
          <a
            href="https://masto.d.foundation/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-primary text-white"
          >
            Join us
          </a>
        </div>
      </section>
      <Alumni className="pt-8 pb-24" />
    </div>
  )
}

export default Home
