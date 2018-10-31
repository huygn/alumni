import React from 'react'
import { Link, withRouteData } from 'react-static'

const Home = withRouteData(({ alumni }) => {
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
              {alumni.map((e, i) => (
                <li key={i} className="mb-6 text-left text-lg">
                  <div>
                    <Link
                      to={e.slug}
                      className="text-xl text-blue mr-3 hover:underline"
                    >
                      {e.name}
                    </Link>
                    {(e.links || []).map((link, index) => (
                      <small key={index}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-light"
                        >
                          {index !== 0 ? ' · ' : ''}
                          {link.name}
                        </a>
                      </small>
                    ))}
                  </div>
                  <div className="leading-none">
                    {(e.tags || []).map((tag, index) => (
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
        </div>
      </div>
    </div>
  )
})

export default Home
