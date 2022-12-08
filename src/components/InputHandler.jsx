import React from 'react'

const InputHandler = ({state, setState, type, placeholder,}) => {
  return (
    <>
        <div className=''>
                <input 
                className='border border-gray-300'
                value={state}
                onChange={(e) => setState(e.target.value)}
                type={type}
                placeholder={placeholder}
                />
        </div>
    </>
  )
}

export default InputHandler