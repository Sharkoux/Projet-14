import { Link } from "react-router-dom"
import styled from 'styled-components'


const CurrentEmployeeContainer = styled.div`
    margin-left: 250px;
    .container {
        margin: 50px;
    }
    .title {
        font-weight: 400;
        font-size: 25px;
    }
`

function CurrentEmployee() {


    return (
        <CurrentEmployeeContainer>
            <div className="container">
                <h1 className="title">Current Employees</h1>
                <table className="display"></table>
            </div>

        </CurrentEmployeeContainer>
    )


}

export default CurrentEmployee
