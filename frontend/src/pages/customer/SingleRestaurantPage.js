import React from 'react'
import Navbar2 from '../../components/Navbar2'
import Home from '../../components/Home'
import Table from '../../components/Table'
import Menu from '../../components/Menu'
import Cart from '../../components/Cart'

function SingleRestaurantPage() {
  return (
      <>
      <Navbar2 />
      <Home />
      <Menu />
      <Table />
      <Cart />
      </>            
  )
}

export default SingleRestaurantPage
