import React, { useState, useEffect, useContext } from "react"
import styled from 'styled-components'
import { Table } from 'sharkoux-packages-tables'
import api from "../service/api"
import { SearchContext } from '../context/searchContext';


const CurrentEmployeeContainer = styled.div`
    margin-left: 250px;
    .container {
        margin: 30px;
    }
    .title {
        font-weight: 400;
        font-size: 25px;
    }
    table {
        width: 100%;
    }
    button {
            margin-top: 20px;
            padding: 15px 60px;
            border-radius: 20px;
            background: rgb(180, 196, 116);
            color: white;
            border: transparent;
            font-weight: 600;
            cursor: pointer;
    }
    footer {
        display: flex;
        align-items: center
    }
    p{
        margin-top: 30px;
    }
`

function CurrentEmployee() {
    const { searchValue } = useContext(SearchContext);
    const [user, setUser] = useState([]);
    const [lazyState, setlazyState] = useState({
        first: 0,
        rows: 17,
        page: 1,
        sortField: null,
        sortOrder: null,
        search: null,
        pagination: true,
        infiniteScroll: false,
        input: false,
        draggable: true
    });




    useEffect(() => {
        loadLazyData();
    }, [lazyState]);

    const loadLazyData = async () => {
        const start = lazyState.first;
        const end = lazyState.first + lazyState.rows;

        api.getLazyData('users', start, end, lazyState.search, lazyState.sortField, lazyState.sortOrder)
            .then(data => {
                if (!lazyState.infiniteScroll) {
                    //if pagination
                    setUser(data)
                } else {
                    if (lazyState.page === 1) {
                        setUser(data)
                    }
                    else {
                        setUser(prevData => [...prevData, ...data]);
                    }
                }
            })

    }



    //Add header, accessor and sortable, format table columns
    const Columns = React.useMemo(
        () =>
            [
                { header: "FirstName", accessor: "firstname", sortable: true },
                { header: "LastName", accessor: "lastname", sortable: true },
                { header: "StartDate", accessor: "startDate", sortable: false },
                { header: "Department", accessor: "departement", sortable: true },
                { header: "Date of Birth", accessor: "dateBirth", sortable: true },
                { header: "Street", accessor: "street", sortable: true },
                { header: "City", accessor: "city", sortable: true },
                { header: "State", accessor: "state", sortable: true },
                { header: "Zip Code", accessor: "zipCode", sortable: true }


            ]
    )



    const onPage = (event) => {
        const { first, page } = event;
        setlazyState((prevState) => ({
            ...prevState,
            first: first,
            page: page
        }));

    };



    const onSort = (event) => {
        const { sortField, sortOrder } = event;
        if (lazyState.infiniteScroll) {
            setlazyState((prevState) => ({
                ...prevState,
                sortField: sortField,
                sortOrder: sortOrder,
                page: 1,
                first: 0
            }));
        }
        else {
            setlazyState((prevState) => ({
                ...prevState,
                sortField: sortField,
                sortOrder: sortOrder
            }));
        }
    };


    const onSearch = (event) => {
        const { search } = event;
        setlazyState((prevState) => ({
            ...prevState,
            search: search,
        }))
    }

    useEffect(() => {
        setlazyState((prevState) => ({
            ...prevState,
            search: searchValue,
        }))

    }, [searchValue])


    return (
        <CurrentEmployeeContainer>
            <div className="container">
                <h1 className="title"><span>Current</span> Employees</h1>
                <Table first={lazyState.first} draggables={lazyState.draggable} onSearch={onSearch} onSort={onSort} page={lazyState.page} onPage={onPage} lazy={true} Columns={Columns} Data={user} rows={lazyState.rows} pagination={lazyState.pagination} infiniteScroll={lazyState.infiniteScroll} />
            </div>

        </CurrentEmployeeContainer>
    )


}

export default CurrentEmployee
