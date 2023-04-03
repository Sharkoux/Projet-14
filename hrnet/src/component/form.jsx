import styled from 'styled-components'
import MyDatePicker from './datePicker/datePicker'
import { memo } from 'react'

const Forms = styled.div`
    label {
        display: block;
        margin-top: 1rem;
        margin-bottom: 10px;
    }

    .address {
        margin-top: 25px;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        width: 80%;
        border: 4px solid rgb(0,0,0, 0.3);
        border-radius: 5px;
        
    }
    .identityContainer {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        width: 100%;
        margin-bottom: 25px;
    }
    .identityElement {
        display: flex;
        flex-direction: column;
    }
    .identityInput {
        height: 45px;
        width: 300px;
        border: 3px solid rgb(234, 235, 239);
        border-radius: 10px;
        outline: none;
    }
    .btnSave {
        margin-top: 30px;
        padding: 15px 60px 15px 60px;
        border-radius: 20px;
        background: rgb(180, 196, 116);
        color: white;
        border: transparent;
        margin-right: 50px;
        font-weight: 600;
        cursor: pointer;
    }
    .btnCancel {
        background: rgb(0,0,0, 0.2);
        color: white;
    }
`

function Form({ setModal }) {

    const handleModal = () => {
        setModal(prev => !prev)
    }

    return (
        <Forms>
            <form >
                <div className='identityContainer'>
                    <div className='identityElement'>
                        <label>First Name</label>
                        <input type="text" className='identityInput' placeholder='Jack' />
                    </div>
                    <div className='identityElement'>
                        <label>Last Name</label>
                        <input type="text" className='identityInput' placeholder='Sparrow' />
                    </div>
                    <div className='identityElement'>
                        <label>Date of Birth</label>
                        <MyDatePicker />
                    </div>
                </div>

                <label>Start Date</label>
                <MyDatePicker />


                <fieldset className="address">
                    <legend>Address</legend>
                    <div className='identityElement'>
                        <label>Street</label>
                        <input type="text" className='identityInput' placeholder='Enter the street where the employee lives' />
                    </div>
                    <div className='identityElement'>
                        <label>City</label>
                        <input type="text" className='identityInput' placeholder='Enter the city where the employee lives' />
                    </div>
                    <div className='identityElement'>
                        <label>State</label>
                        <select name="state" className='identityInput'></select>
                    </div>
                    <div className='identityElement'>
                        <label>Zip Code</label>
                        <input type="number" className='identityInput' placeholder='Enter the employee s postal code' />
                    </div>
                </fieldset>
                <div className='identityElement'>
                    <label>Department</label>
                    <select name="department" className='identityInput'>
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </div>
            </form>

            <button className='btnSave' >Save</button>
            <button className='btnSave'>Save & Add another</button>
            <button className='btnSave btnCancel' onClick={handleModal}>Cancel</button>

        </Forms>
    )


}

export default Form
