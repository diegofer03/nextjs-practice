import React from 'react'
import Navbar from '../Navbar'

type Props = {
    children: React.ReactNode;
  };

const Layout: React.FC<Props> = ({children}) => {
  return (
    <div>
        <Navbar/>
            {children}
        <footer>Footer</footer>
    </div>
  )
}

export default Layout