import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='flex bg-slate-400 p-4'>
<Link href="/" className="mr-5">Next.js</Link>
<Link href="/users">Users</Link>


    </div>
  )
}

export default NavBar