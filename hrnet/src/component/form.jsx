import styled from 'styled-components'

const Forms = styled.div`
    label {
        display: block;
        margin-top: 1rem;
        margin-bottom: 10px;
    }

    .address {
        margin-top: 10px;
    }
`

function Form() {


    return (
        <Forms>
            <form >
                <label>First Name</label>
                <input type="text" />

                <label>Last Name</label>
                <input type="text" />

                <label>Date of Birth</label>
                <input type="text" />

                <label>Start Date</label>
                <input type="text" />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label>Street</label>
                    <input type="text" />

                    <label>City</label>
                    <input type="text" />

                    <label>State</label>
                    <select name="state" ></select>

                    <label>Zip Code</label>
                    <input type="number" />
                </fieldset>

                <label>Department</label>
                <select name="department" >
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </form>
            <button onclick="saveEmployee()">Save</button>
            <div id="confirmation" className="modal">Employee Created!</div>
        </Forms>
    )


}

export default Form
