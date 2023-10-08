import React, { useContext } from 'react'
import { GlobalContext } from '../../context/Context'

const About = () => {
    const{accountData } = useContext(GlobalContext)
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className="text-6xl font-bold text-center text-gray-600 mt-10">
        This is About Page
      </h1>
      <h1 className='mt-20 text-2xl font-bold'>Data : {accountData.name}</h1>
    </div>
  )
}

export default About