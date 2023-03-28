import Form from "./form"
import styled from 'styled-components'


const ContainerPage = styled.div`
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   background-color: rgba(0,0,0,0.4);
   z-index: 101;
  
    .container {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        background-color: rgb(234, 235, 239);
        border-radius: 10px;
        width: 60%;
        margin-left: 350px;
        margin-top: 40px;
        padding: 25px;
        max-height: calc(100vh - 70px);
        overflow: auto;
        box-shadow: 10px 10px 40px rgba(0,0,0,0.2);
    }
    .title {
        font-weight: 400;
    }
    span {
        color: rgb(180, 196, 116);
    }

`

function CreateEmployee({setModal}) {


    return (
        <ContainerPage>
            <div className="container">
                <h2 className="title">Add <span>new </span>Employee</h2>
                <Form setModal={setModal}/>
            </div>

        </ContainerPage>
    )


}

export default CreateEmployee
