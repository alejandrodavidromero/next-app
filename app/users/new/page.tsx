"use client"
import { useRouter } from 'next/navigation' //useRouter from next/Router no! navigation si
import React from 'react'

const NewUsersPage = () => {

 const router = useRouter()
  return (
    <div>
      <button className='btn btn-primary p-2 m-2'
      onClick={()=>router.push("/users")}
      >Create</button>
    </div>
  )
}

export default NewUsersPage