import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './pizzaMenu/menu'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <Menu/>
      <Footer/>
    </>
  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App/>)