import React, { useState, useRef, forwardRef, useEffect } from "react";
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomHeader from "./customHeader";
import CustomInput from "./customInput";

const MyDatePickers = styled.div`
    position: relative;
    .custom-input{ 
        height: 45px;
        width: 300px;
        border: 3px solid rgb(234, 235, 239);
        border-radius: 10px;
        outline: none;
        
    }
    .month {
        margin: 10px;
        font-size: 15px;
        padding-left: 5px;
        padding-right: 5px;
        cursor: pointer;
        border-radius: 50%;
        background: rgb(180, 196, 116);
        color: white;
        border: transparent;
        border: 1px solid rgb(0, 0, 0, 0.3);
    }
    .react-datepicker__header {
        background-color: rgb(180, 196, 116, 0.5);
        
        select {
            border-radius: 10px;
            height: 35px;
            margin: auto;
            margin-left: 5px;
            margin-right: 5px;
            border: 1px solid rgb(0, 0, 0, 0.3);
            background: rgba(180, 196, 116);
            color: white;
            &:focus,
            &:hover {
                outline: none;
            }
        }
    }
    .react-datepicker__day--selected,
    .react-datepicker__day--keyboard-selected {
        background-color: rgb(180, 196, 116);
        color: white;
    }
    .react-datepicker__month {
        background: rgba(180, 196, 116, 0.2);
        margin: 0;
        padding: 5px;
    }
   
`




function MyDatePicker() {

    const [startDate, setStartDate] = useState(null)
    const inputRef = useRef(null);


    return (
        <MyDatePickers>
            <DatePicker
                customInput={<CustomInput inputRef={inputRef} />}
                selected={startDate}
                dateFormat="dd/MM/yyyy"
                onChange={(date) => setStartDate(date)}
                renderCustomHeader={CustomHeader}
                className="date"
            />
        </MyDatePickers>

    )

}


export default MyDatePicker