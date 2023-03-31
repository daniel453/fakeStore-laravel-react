import React from 'react'

interface HomeComponent{
  hola:string,
  cc:string[]
}

function Home({home,hola}:HomeComponent) {
  return (
    <div>
      <h1>vista home</h1>
    </div>
  )
}

export default Home
