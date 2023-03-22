import Form from "../component/form"
import styled from 'styled-components'
import { Link } from "react-router-dom"

const ContainerPage = styled.div`
   margin-left: 250px;
    .container {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        margin: 50px;
    }
    .title {
        font-weight: 400;
    }
    span {
        color: rgb(180, 196, 116);
    }

`

function CreateEmployee() {


    return (
        <ContainerPage>
            <div className="container">
                <h2 className="title">Add <span>new </span>Employee</h2>
                <Form />
            </div>

        </ContainerPage>
    )


}

export default CreateEmployee
