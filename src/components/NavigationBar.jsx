import React from 'react'
import {Link} from 'react-router-dom'

const NavigationBar = () => {
  return (
        <div className='bg-secondary'>
            <ul className='flex justify-center py-8 text-white'>
                <Link to='/'>
                    <li className=' px-10 py-3 mx-5 cursor-pointer rounded-md  bg-primary hover:bg-primaryShade'>
                        Home
                    </li>
                </Link>
                <Link to='/teams'>
                    <li className='px-10 py-3 mx-5 cursor-pointer rounded-md  bg-primary hover:bg-primaryShade'>
                        Teams
                    </li>
                </Link>
                <Link to='/players'>
                    <li className='px-10 py-3 mx-5 cursor-pointer rounded-md  bg-primary hover:bg-primaryShade'>
                        Players
                    </li>
                </Link>
            </ul>
        </div>
  )
}

export default NavigationBar