import React from 'react'
import { Navbar } from './Components/Navbar';
import { Hero } from './Components/Hero';
import { Product } from './Components/Product';

export const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Product></Product>
    </div>
  )
}
export default App;