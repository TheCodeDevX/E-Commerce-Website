


  import React from 'react'
  import ButtonGradient from './assets/svg/ButtonGradient'
import Button from './components/Button'
import Header from './components/Header'
import Hero from './components/Hero'
  
  const App = () => {
    return (
     
      <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
      <Header/>
      <Hero/>
      </div>
      <ButtonGradient/>
      </>
    )
  }
  
  export default App
  