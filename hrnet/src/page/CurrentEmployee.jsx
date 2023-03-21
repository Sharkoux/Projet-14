import { Link } from "react-router-dom"
import styled from 'styled-components'


const CurrentEmployeeContainer = styled.div`
    margin-left: 175px;
    .container {
        margin: 50px;
    }
`

function CurrentEmployee() {


    return (
        <CurrentEmployeeContainer>
            <div className="container">
                <h1>Current Employees</h1>
                <table className="display"></table>
            </div>

        </CurrentEmployeeContainer>
    )


}

export default CurrentEmployee
