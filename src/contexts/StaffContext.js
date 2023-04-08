import React, { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'

export const baseUrl ="http://localhost:4000/api/v1"

const token = localStorage.getItem('token')

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_STAFF': {
            return {
                ...state,
                staff: [action.payload],
            }
        }
        case 'SUSPEND_STAFF': {
            return {
                ...state,
                staff: action.payload,
            }
        }
        case 'INVITE_STAFF': {
            return {
                ...state,
                staff: action.payload,
            }
        }
        default: {
            return { ...state }
        }
    }
}

const StaffContext = createContext({
    staffs: [],
    getStaff: () => Promise.resolve(),
    inviteStaff: () => {},
    suspendStaff: () => {}
})

export const StaffProvider = ({children }) => {
    const [state, dispatch] = useReducer(reducer, [])
    console.log("stuffff")
    const getStaff = async () => {
        try {
            console.log("i came here")
            const response = await axios.get(`${baseUrl}/owner/dashboard`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                } 
            })

            const {staff} = response.data
            console.log(staff)

            dispatch({
                type: 'GET_STAFF',
                payload: staff,
            })
            return staff
        } catch (e) {
            console.error(e)
        }
    }

    const clearNotifications = async () => {
        try {
            const res = await axios.post('/api/notification/delete-all')
            dispatch({
                type: 'CLEAR_NOTIFICATIONS',
                payload: res.data,
            })
        } catch (e) {
            console.error(e)
        }
    }

    const createNotification = async (notification) => {
        try {
            const res = await axios.post('/api/notification/add', {
                notification,
            })
            dispatch({
                type: 'CREATE_NOTIFICATION',
                payload: res.data,
            })
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        getStaff()
    }, [])

    return (
        <StaffContext.Provider
            value={{
                staff: state.staff,
                getStaff,
            }}
        >
            {children}
        </StaffContext.Provider>
    )
}

export default StaffContext
