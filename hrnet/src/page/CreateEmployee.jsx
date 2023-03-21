import Form from "../component/form"
import styled from 'styled-components'
import { Link } from "react-router-dom"

const ContainerPage = styled.div`
   margin-left: 175px;
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

`

function CreateEmployee() {


    return (
        <ContainerPage>
            <div className="container">
                <h2 className="title">Add new Employee</h2>
                <Form />
            </div>

        </ContainerPage>
    )


}

export default CreateEmployee
