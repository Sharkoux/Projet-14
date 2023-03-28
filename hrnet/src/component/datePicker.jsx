import React, { useState, useRef, forwardRef } from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const MyDatePickers = styled.div`
    position: relative;
    .custom-input{ 
        height: 45px;
        width: 300px;
        border: 3px solid rgb(234, 235, 239);
        border-radius: 10px;
        outline: none;
    }
`

function MyDatePicker() {

    const [startDate, setStartDate] = useState(new Date())
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => {
        return (
            <input
                className="custom-input"
                type="text"
                onClick={onClick}
                value={value}
                ref={ref}
            />
        );
    }
    );

    return (
        <MyDatePickers>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} customInput={<ExampleCustomInput />} />
        </MyDatePickers>

    )

}


export default MyDatePicker