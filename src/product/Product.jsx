import React from 'react'
import { useSelector } from 'react-redux'
import {useState } from 'react'
import MainTable from '../components/MainTable'

const Product = () => {
 
  const {addBasket} = useSelector(state=>state)


 

 
  return (
  <MainTable  user={addBasket}/>
  )
}

export default Product