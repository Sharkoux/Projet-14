
import styled from 'styled-components'
import { useState, useContext } from 'react'
import CreateEmployee from './modalCreateEmployee'
import { SearchContext } from '../context/searchContext'

const NavContainer = styled.div`
   margin-left: 175px;
   background-color: rgb(234, 235, 239);
   height: 70px; 
   display: flex;
   .searchInput {
        width: 95%;
        background-color: rgb(234, 235, 239);
        border: none;
        outline: none;
   }
   .searchIcon {
        margin: auto;
        padding: 25px;
        opacity: 0.3;
   }
   .btnAddEmployee {
        width: 150px;
        margin: 17px;
        background: rgb(180, 196, 116);
        color: white;
        border-radius: 20px;
        border: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
   }
   
`

function Nav() {
     const [modal, setModal] = useState(false)
     const { setSearchValue } = useContext(SearchContext);

     const handleModal = () => {
          setModal(prev => !prev)
     }

     const handleSearchChange = (event) => {
          setSearchValue(event.target.value);
     };

     window.addEventListener('keydown', function (event) {
          if (event.key === 'Escape') {
               setModal(false)
          }
     })

     return (
          <NavContainer>
               <i className="fa-solid fa-magnifying-glass searchIcon"></i>
               <input className='searchInput' placeholder='Search...' onChange={handleSearchChange}></input>
               <button className='btnAddEmployee' onClick={handleModal}>Add Employee</button>
               {modal ? <CreateEmployee setModal={setModal} /> : <></>}

          </NavContainer>
     )


}

export default Nav
