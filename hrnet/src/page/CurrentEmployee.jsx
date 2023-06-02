import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { Table } from 'sharkoux-packages-tables'
import { useSort } from 'sharkoux-packages-tables'
import { useSearch } from 'sharkoux-packages-tables'
import api from "../service/api"
import { styles } from 'sharkoux-packages-tables'


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
    const [users, setUsers] = useState([])
    const [initialSortedData, setInitialSortedData] = useState(users);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState([]);
    const [allUser, setAllUser] = useState(0)
    const [lazyState, setlazyState] = useState({
        first: 0,
        rows: 30,
        page: 1,
        sortField: null,
        sortOrder: null,
        search: "sales",
        pagination: true,
        infiniteScroll: false,
        input: false,
        draggable: true
    });

    useEffect(() => {
        const allData = async () => {
            try {
                const usersData = await api.get('users');
                setUsers(usersData);
                setAllUser(usersData.length)
            } catch (error) {
                console.error('Erreur lors de la récupération des utilisateurs :', error);
            }
        };
        allData();
    }, [])


    //use hook for filter AllData
    // const filteredResults = useSearch(users, lazyState.search)
    //  const sortedData = useSort(!lazyState.search ? users : filteredResults, lazyState.sortField, lazyState.sortOrder);



    useEffect(() => {
        loadLazyData();
    }, [lazyState]);

    const loadLazyData = async () => {
        setLoading(true);
        const start = lazyState.first;
        const end = lazyState.first + lazyState.rows;

        api.getLazyData('users', start, end, lazyState.search, lazyState.sortField, lazyState.sortOrder)
            .then(data => {
                console.log(data); // Les données triées et filtrées seront affichées ici
            })
            .catch(error => {
                console.error(error);
            });


        /*
        try {

            
            const newDatas = await api.getLazyData('users', start, end, "Sales", lazyState.sortField, lazyState.sortOrder);
            console.log(newDatas)
            if (!lazyState.infiniteScroll) {
                //if pagination
                setUser(newDatas)
            } else {
                /* 
                 if (JSON.stringify(sortedData) === JSON.stringify(initialSortedData)) {
                     //console.log(newDatas)
                     setUser(prevData => [...prevData, ...newDatas]);
                 } else {
                     //if sort data infinite scroll
                     setlazyState(prevState => ({
                         ...prevState,
                         first: 0,
                         page: 1
                     }));
                     setUser(sortedData.slice(0, lazyState.rows));
                     setInitialSortedData(sortedData)
                 }
 
            }
            //setAllUser(sortedData.length)
            setLoading(false)

        } catch (error) {
            console.error('Chargement error:', error)
            */

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
        console.log(first, page)
        setlazyState((prevState) => ({
            ...prevState,
            first: first,
            page: page
        }));

    };



    const onSort = (event) => {
        const { sortField, sortOrder } = event;

        setlazyState((prevState) => ({
            ...prevState,
            sortField: sortField,
            sortOrder: sortOrder
        }));
    };


    const onSearch = (event) => {
        const { search } = event;
        setlazyState((prevState) => ({
            ...prevState,
            search: "sales",
            first: 0,
            page: 1
        }))
    }

    return (
        <CurrentEmployeeContainer>
            <div className="container">
                <h1 className="title"><span>Current</span> Employees</h1>
                <Table first={lazyState.first} draggables={lazyState.draggable} onSearch={onSearch} onSort={onSort} allUser={allUser} page={lazyState.page} onPage={onPage} lazy={true} customClass={styles} Columns={Columns} Data={user} rows={lazyState.rows} pagination={lazyState.pagination} infiniteScroll={lazyState.infiniteScroll} />
            </div>

        </CurrentEmployeeContainer>
    )


}

export default CurrentEmployee
