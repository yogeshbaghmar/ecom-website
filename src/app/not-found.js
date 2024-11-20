
import Image from 'next/image'
import React from 'react'
import gif404 from '../../public/images/Animation - 1731514671296.gif'

export default function notfound()  {
  return (
    <>
     <div className=' max-w-[1200px] mx-auto justify-items-center   items-center'>
      <Image src={gif404} width={500}/>
      <h1 className='text-3xl italic '>
        oopps.. page not found
      </h1>
     </div>
     
    
    </>
  )
}
