import React from 'react'
import NavigationBar from './NavigationBar'
import CRUD from './CRUD'

const Teams = () => {
  return (
    <>
        <NavigationBar/>
        <div className='flex justify-center'>
            <CRUD/>
        </div>
    </>
  )
}

export default Teams