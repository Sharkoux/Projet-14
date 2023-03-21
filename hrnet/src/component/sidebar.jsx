import { Link } from "react-router-dom"
import styled from "styled-components"

const SideBarContainer = styled.div` 
    display: flex;
    flex-direction: column;
    width: 175px;
    height: 100%;
    background-color: white;
    position: absolute;
    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -75px;
        left: 35px;
    }
    h1 {
        color: rgb(147, 173, 24)
    }
    span {
        color: rgb(110, 134, 12)
    }
`

function SideBar() {


    return (
        <SideBarContainer>
            <Link className="title" to="/">
                <h1>HR<span>net</span></h1>
            </Link>
            
        </SideBarContainer>
    )


}

export default SideBar
