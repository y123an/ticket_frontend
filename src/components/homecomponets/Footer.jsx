import React from 'react'

export default function footer() {
  return (
    <div className='footer bg-[#181717] h-[650px] relative max-lg:h-auto max-lg:justify-items-center grid'>
      <div className='content text-white flex justify-center  p-[10%] gap-40 text-xl flex max-lg:flex-col '>
        <div className="item ">
          <h1 className='text-2xl mb-3'>Resources</h1>
          <ul>
            <li>Application</li>
            <li>System</li>
            <li>FAQ</li>
          </ul>
        </div>
      
        <div className="item">
          <h1 className='text-2xl mb-3'>Pricing</h1>
          <ul>
            <li>Overview</li>
            <li>Affliate</li>
            <li>Premium</li>
            <li>Promotion</li>
          </ul>
        </div>

        <div className="item">
          <h1 className='text-2xl mb-3'>Coompany</h1>
          <ul>
            <li>About US</li>
            <li>Blogs</li>
            <li>Partnership</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div className="item">
          <h1 className='text-2xl mb-3' > Socials</h1>
          <ul>
            <li>FaceBook</li>
            <li>Twitter</li>
            <li>Linkinden</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      <div className='text-white justify-end flex mr-52 gap-10'>
        <p>Terms & Condtions</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  )
}
