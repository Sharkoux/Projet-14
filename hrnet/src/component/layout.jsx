import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './nav'
import { createGlobalStyle } from 'styled-components'
import SideBar from './sidebar'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'roboto', sans-serif;
    background-color: rgb(173, 183, 150, 0.05);
  }
  a {
    text-decoration: none;
  }
  span {
    color: rgb(180, 196, 116);
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
