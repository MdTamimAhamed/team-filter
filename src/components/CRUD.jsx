import React from 'react'
import Button from './reusables/Button'

const CRUD = () => {
  return (
    <div className='w-[850px] flex justify-evenly mt-20'>
        <Button 
            type='button' 
            color = 'text-white' 
            bgColor ='bg-primary' 
            onClick='' 
            onHoverColor = 'bg-primaryShade' 
            children = 'Add New'
        />
        <Button 
            type='button' 
            color = 'text-white' 
            bgColor ='bg-primary' 
            onClick='' 
            onHoverColor = 'bg-primaryShade' 
            children = 'Update'
        />
        <Button 
            type='button' 
            color = 'text-white' 
            bgColor ='bg-primary' 
            onClick='' 
            onHoverColor = 'bg-primaryShade' 
            children = 'Delete'
        />
    </div>
  )
}

export default CRUD