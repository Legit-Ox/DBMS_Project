import React from 'react'
import Navbar2 from '../../components/Navbar2'
import Homecs from '../../components/Homecs'
import Table from '../../components/Table'
import Menu from '../../components/Menu'
import Cart from '../../components/Cart'

function SingleRestaurantPage() {
  return (
      <>
      <Navbar2 />
      <Homecs />
      <Menu />
      <Table />
      <Cart />
      </>            
  )
}

export default SingleRestaurantPage
