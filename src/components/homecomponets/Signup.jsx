import React from 'react'

export default function Signup() {
  return (
    <div className='signup h-[300px] flex items-center justify-around '>  
        <div className='content flex justify-between space-x-[10%] items-center'>
            <h1 className='text-3xl max-lg:text-2xl max-md:text-xl'>Stay Up Yo Date</h1>
            <form action="" className='flex'>
                <input type="email" name='email' className='bg-[#D9D9D9] w-[500px] h-[70px] p-4 max-lg:w-[50%] ' placeholder='Email Address' />
                <button type='submit' className='w-[150px] h-[70px] bg-[#71BD26] text-white font-bold ml-[3%] text-2xl  max-lg:w-[30%]  max-lg:text-xl'>Sign Up</button>
            </form>
        </div>
    </div>
  )
}
