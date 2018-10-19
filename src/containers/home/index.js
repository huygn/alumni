import React from 'react'
import { withRouteData } from 'react-static'

const Home = withRouteData(({ alumni }) => {
  console.log(alumni)
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Welcome to React</h1>
    </div>
  )
})

export default Home
