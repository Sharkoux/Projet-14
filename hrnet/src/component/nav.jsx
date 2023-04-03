
import styled from 'styled-components'
import { useState } from 'react'
import CreateEmployee from './modalCreateEmployee'

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
        
   }
   
`

function Nav() {
const [modal, setModal] = useState(false)

const handleModal = () => {
     setModal(prev => !prev)
}

    return (
        <NavContainer>
          <i className="fa-solid fa-magnifying-glass searchIcon"></i>
          <input className='searchInput' placeholder='Search...'></input>
          <button className='btnAddEmployee' onClick={handleModal}>Add Employee</button>
          {modal ? <CreateEmployee setModal={setModal}/> : <></>}
          
        </NavContainer>
    )


}

export default Nav
