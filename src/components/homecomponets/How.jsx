import React from 'react'

export default function How() {
  return (
    <div className='how bg-[#71BD26] h-auto relative max-lg:h-auto'>
        <div className='content'>
            <div className='title text-5xl text-center p-14'>
                <h1>How KURET Works</h1>
            </div>
            <div className='steps '>

            <div className='item flex justify-center items-center gap-auto p-7 max-lg:flex max-lg:flex-col'>
                <div className='content w-[200px]'>
                    <img src="images/ticket_icon.svg" alt="ticket icon"  className='h-40 w-40'/>
                    <p>Choose from over 50 million tickets. No hidden fees, ever.</p>
                </div>

                <img src="images/arrow.svg" alt="arrow" className='h-40 w-40'/>

                <div className='content w-[200px]'>
                    <img src="images/ticket-check.svg" alt="ticket icon"  className='h-40 w-40'/>
                    <p>Immediately receive your confirmation with all the ticket delivery details to keep you fully in the know.</p>
                </div>
                <img src="images/arrow.svg" alt="arrow" className='h-40 w-40'/>

                <div className='content w-[200px]'>
                    <img src="images/phone-android-outline.svg" alt="ticket icon"  className='h-40 w-40'/>
                    <p>Get your tickets with secure delivery by tracked courier services, direct to your phone or by email. And if there’s a hitch, our customer service team will be by your side every step of the way.</p>
                </div>
                <img src="images/arrow.svg" alt="arrow" className='h-40 w-40'/>

                <div className='content w-[200px]'>
                    <img src="images/heart-outline.svg" alt="ticket icon"  className='h-40 w-40'/>
                    <p>Have the time of your life. We’ll make sure you get in the door, and in the rare case something goes wrong – we’ll refund you.</p>
                </div>
            </div>

            </div>
        </div>
    </div>
  )
}
