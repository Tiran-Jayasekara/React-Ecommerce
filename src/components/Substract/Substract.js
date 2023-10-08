import React from 'react'

const Substract = ({LogIn , data}) => {
  return (
    <div className='mt-20'>
        <button className='bg-black text-white p-4' onClick={()=>{LogIn()}}>LogIn</button>
        <h1>{data._id}</h1>
        <h1>{data.name}</h1>
        <h1>{data.email}</h1>
        <h1>{data.role}</h1>
        

    </div>
  )
}

export default Substract