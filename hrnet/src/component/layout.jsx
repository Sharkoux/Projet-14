import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './nav'
import { createGlobalStyle } from 'styled-components'
import SideBar from './sidebar'
import { SearchProvider } from '../context/searchContext';

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
  const [searchValue, setSearchValue] = useState('');





    return (
        <React.Fragment>
            <GlobalStyle />
            <SearchProvider>
            <Nav setSearchValue={setSearchValue} />
            <SideBar />
            <main>
                {children}
                <Outlet />{' '}
            </main>
            </SearchProvider>
        </React.Fragment>
    )
}

export default Layout
