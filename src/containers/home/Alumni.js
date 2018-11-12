import React from 'react'
import { withRouteData } from 'react-static'
import LinkIcon from './LinkIcon'

const Alumni = withRouteData(({ className = '', alumni = [] }) => {
  const groupByName = alumni.reduce((prev, curr) => {
    const key = (curr.name[0] || '').toUpperCase()
    return {
      ...prev,
      [key]: (prev[key] || []).concat(curr),
    }
  }, {})
  return (
    <section className={`container ${className}`}>
      <h2 className="section-heading text-center mb-6">Alumni Network</h2>
      <p className="lg:w-1/2 mx-auto text-center opacity-75 mb-24">{`The woodland used to be home of hundreds of the Dwarves. They are back and become our supporters and advisors. The alumni network keeps growing.`}</p>
      <div>
        {Object.keys(groupByName).map(key => (
          <div key={key} className="mb-6 mx-auto" style={{ maxWidth: 480 }}>
            <strong className="font-semibold text-xl text-dusty-gray block py-1 px-3 bg-alabaster rounded mt-4">
              {key}
            </strong>
            <ul className="list-reset mx-3">
              {groupByName[key].map((e, i) => (
                <li key={i} className="py-4 border-b border-grey-light">
                  <strong className="block text-xl font-semibold leading-tight text-grey-darkest mb-1">
                    {e.name}
                  </strong>
                  <div className="flex justify-between items-center">
                    <div>
                      {e.tags.map((t, i) => (
                        <span key={i} className="">
                          {i !== 0 && (
                            <span className="leading-tight opacity-50">
                              {' | '}
                            </span>
                          )}
                          <small className="text-sm opacity-75">{t}</small>
                        </span>
                      ))}
                    </div>
                    <ul className="list-reset flex">
                      {e.links.map((l, i) => (
                        <li key={i} className="inline-flex mx-1">
                          <a
                            href={l.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-reset inline-flex p-px text-primary hover:opacity-75"
                          >
                            <LinkIcon type={l.name} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
})

export default Alumni
