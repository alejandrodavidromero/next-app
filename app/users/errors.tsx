"use client"
import React from 'react'

interface Props{
  error: Error
  reset: ()=>void
}

const errors = ({error, reset}:Props) => {
  return (
    <>
    <div>{error.message}</div>
    <button className='btn' onClick={()=>reset}>Retry</button>
    </>
  )
}

export default errors