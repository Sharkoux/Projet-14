import getMonth from "date-fns/getMonth";
import "react-datepicker/dist/react-datepicker.css";
import getYear from "date-fns/getYear";
import range from "lodash/range";




const years = range(1940, getYear(new Date()) + 1, 1);
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];





const CustomHeader = ((props) => {
    const {
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
    } = props;

    return (
        <div
            style={{
                margin: 10,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <button onClick={(e) => { e.preventDefault(); decreaseMonth() }} disabled={prevMonthButtonDisabled} className="month">
                {"<"}
            </button>
            <select
                value={getYear(date)}
                onChange={({ target: { value } }) => changeYear(value)}
            >
                {years.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <select
                value={months[getMonth(date)]}
                onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                }
            >
                {months.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <button onClick={(e) => { e.preventDefault(); increaseMonth() }} disabled={nextMonthButtonDisabled} className="month">
                {">"}
            </button>
        </div>
    );
});

export default CustomHeader