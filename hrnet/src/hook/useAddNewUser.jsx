import { useState } from 'react'
import API from '../service/api'


function useAddNewUser(setModal) {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    


    async function addNewUser(header, body, closeOnsuccess) {

        try {
            const response = await API.post('users', header, body);
            const data = await response.json()
            setUser(data)
            setError(null)
            if(closeOnsuccess) {
                setModal(false)
            }
        } catch(error) {
            setError(error)
            setUser(null)
        }

    }

    // return Data or Error 
    return [addNewUser, user, error]
}

export default useAddNewUser
