import React from 'react'
import { my_asset } from './assets/assets'

const Aos_Package = () => {
  return (
    <>
      <h1 data-aos="fade-up">Hello</h1>

      <img src={my_asset.my_image} alt="" className='w-25'  data-aos="flip-left"/>

    </>
  )
}

export default Aos_Package