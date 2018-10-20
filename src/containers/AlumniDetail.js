import React from 'react'
import { withRouteData } from 'react-static'

const Home = withRouteData(({ alumni }) => {
  console.log(alumni)

  return (
    <div className="min-h-screen bg-orange-lightest pt-16 pb-24 font-serif">
      <h1 className="text-5xl font-medium text-center mb-8">{alumni.name}</h1>
    </div>
  )
})

export default Home
