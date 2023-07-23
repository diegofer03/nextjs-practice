import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <Link rel="stylesheet" href="/">
                   Home
                </Link>
            </li>
            <li>
                <Link rel= "stylesheet" href="/about">
                   About
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar