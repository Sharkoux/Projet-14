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
        color: rgb(180, 196, 116);
    }
    span {
        color: rgb(112, 134, 24);
    }
    .linkContainer {
        display: flex;
        flex-direction: column;
        margin: auto;
        margin-top: 150px;
    }
    .contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 70px;
    }
    .titreContact {
        color: rgb(232, 17, 35);
        font-size: 22px;
        margin-bottom: 5px;
    }
    .texteContact {
        margin-top: 0px;
    }

    .linkSidebar {
        margin-bottom: 50px;
        color: black;
        display: flex;
        align-items: center;
        
    }
    .iconSidebar {
        width: 30px;
        height: 30px;
        font-size: 20px;
        display: flex;
        align-items: center;
        padding-right: 10px;
        color: 	rgb(180, 196, 116);
    }
`

function SideBar() {


    return (
        <SideBarContainer>
            <Link className="title" to="/">
                <h1>HR<span>net</span></h1>
            </Link>
            <div className="linkContainer">
                <Link className="linkSidebar"><i class="fa-solid fa-house iconSidebar"></i><span>Dashboard</span></Link>
                <Link className="linkSidebar"><i class="fa-solid fa-user-tie iconSidebar"></i><span>Employee</span></Link>
                <Link className="linkSidebar"><i class="fa-solid fa-gear iconSidebar"></i><span>Settings</span></Link>
            </div>
            <div className="contact">
                <h2 className="titreContact">Need Help?</h2>
                <p className="texteContact">
                    <br></br>
                    09 00 00 00 00
                    <br></br>
                    help@gmail.com
                </p>
            </div>
        </SideBarContainer>
    )


}

export default SideBar
