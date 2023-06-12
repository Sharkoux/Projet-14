
import React, {forwardRef} from "react";




const CustomInput = forwardRef(({ value, onClick, onFocus, onChange }, ref) => {

    return (
        <input
            className="custom-input"
            type="text"
            onClick={onClick}
            onFocus={onFocus}
            onChange={onChange}
            value={value}
            ref={ref}
        />
    );
}
);

export default CustomInput