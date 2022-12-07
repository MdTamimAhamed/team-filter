import React from 'react'
import NavigationBar from './NavigationBar'
import CRUD from './CRUD'

const Players = () => {
  return (
    <>
        <NavigationBar/>
        <div className='flex justify-center'>
            <div className='w-[850px] flex flex-col'>
                <h1 className='text-center'>Players Table</h1>
            </div>
        </div>
        <div className='flex justify-center'>
            <CRUD/>
        </div>
    </>
  )
}

export default Players