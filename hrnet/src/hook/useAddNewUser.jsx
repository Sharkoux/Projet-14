import { useEffect, useState } from 'react'
import API from '../service/api'


function useAddNewUser() {
    const [user, setUser] = useState([])
    const [error, setError] = useState(null)



        async function newData(header, body) {
            console.log(body)
            try {
                const response = await API.post('users', header, body);
                const data = await response.json()
                console.log(data)
                setUser(data)
            } catch (error) {
                console.log(error)
                setError(error)
            }

        }
      
    
    // return Data or Error 
    return [newData, user, error ]
}

export default useAddNewUser
