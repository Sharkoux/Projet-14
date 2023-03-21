import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './nav'

import { createGlobalStyle } from 'styled-components'
import SideBar from './sidebar'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'roboto', sans-serif;
    background-color: rgb(244, 245, 249, 0.3);
  }
  a {
    text-decoration: none;
  }
 
`



const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Nav />
            <SideBar />
            <main>
                {children}
                <Outlet />{' '}
            </main>
        </React.Fragment>
    )
}

export default Layout
