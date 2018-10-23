import React from 'react'
import { Link, withRouteData } from 'react-static'

const Home = withRouteData(({ alumni: items }) => {
  const alumni = Array(40)
    .fill(null)
    .map(_ => items[Math.floor(Math.random() * items.length)])
  const half = Math.floor(alumni.length / 2)
  const firstHalf = alumni.slice(0, half)
  /* const secondHalf = alumni.slice(half, alumni.length) */
  console.log(alumni)

  return (
    <div className="min-h-screen pt-16 pb-24 ">
      <div className="container max-w-lg">
        <h1 className="text-5xl font-medium text-left mb-8">Alumni</h1>
        <div>
          <p className="italic text-left mb-16">
            The mastodon network that connected the Dwarves society -{' '}
            <a href="https://daf.ug" className="text-blue">
              daf.ug
            </a>
          </p>
        </div>
        <div className="row flex">
          <div className="col w-full">
            <ul className="list-reset">
              {firstHalf.map((e, i) => (
                <li key={i} className="mb-6 text-left text-lg">
                  <div>
                    <Link
                      to={e.slug}
                      className="text-xl text-blue mr-3 hover:underline"
                    >
                      {e.name}
                    </Link>
                    {Object.keys(e.urls).map((key, index) => (
                      <small key={key}>
                        <a
                          href={e.urls[key]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-light"
                        >
                          {index !== 0 ? ' · ' : ''}
                          {key}
                        </a>
                      </small>
                    ))}
                  </div>
                  <div className="leading-none">
                    {e.tags.map((tag, index) => (
                      <small key={index}>
                        {index !== 0 ? ' · ' : ''}
                        {tag}
                      </small>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="col w-1/2">
              <ul className="list-reset">
              {secondHalf.map((e, i) => (
              <li key={i} className="my-1 text-center">
              <Link
              to={e.slug}
              className="text-lg text-blue hover:underline"
              >
              {e.name}
              </Link>
              </li>
              ))}
              </ul>
              </div> */}
        </div>
      </div>
    </div>
  )
})

export default Home
