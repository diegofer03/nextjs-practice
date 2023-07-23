import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <link rel="stylesheet" href="/">
                    <a>Home</a>
                </link>
            </li>
            <li>
                <link rel= "stylesheet" href="/about">
                    <a>aBOUT</a>
                </link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar