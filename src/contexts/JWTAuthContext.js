// import React, { createContext, useEffect, useReducer } from 'react'
// // import jwtDecode from 'jwt-decode'
// import jwt_decode from 'jwt-decode';
// import axios from 'axios.js'
// import Preloader from 'components/Preloader'

// const baseUrl ="https://reservely-api-production.up.railway.app"

// const initialState = {
//     isAuthenticated: false,
//     isInitialised: false,
//     user: null,
// }

// const isValidToken = (token) => {
//     if (!token) {
//         console.log("hellooo")
//         return false
//     }

//     const decodedToken = jwt_decode(token, {header:true})
//     const currentTime = Date.now() / 1000
//     return decodedToken.exp > currentTime
// }

// const setSession = (token) => {
//     if (token) {
//         localStorage.setItem('token', token)
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`
//     } else {
//         localStorage.removeItem('token')
//         delete axios.defaults.headers.common.Authorization
//     }
// }

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'INIT': {
//             const { isAuthenticated, user } = action.payload

//             return {
//                 ...state,
//                 isAuthenticated,
//                 isInitialised: true,
//                 user,
//             }
//         }
//         case 'LOGIN': {
//             const { user } = action.payload

//             return {
//                 ...state,
//                 isAuthenticated: true,
//                 user,
//             }
//         }
//         case 'LOGOUT': {
//             return {
//                 ...state,
//                 isAuthenticated: false,
//                 user: null,
//             }
//         }
//         case 'REGISTER': {
//             const { user } = action.payload

//             return {
//                 ...state,
//                 isAuthenticated: true,
//                 user,
//             }
//         }
//         case 'COMPLETE REGISTRATION': {
//             const { user } = action.payload
//             console.log(user)
//             return {
//                 ...state,
//                 isAuthenticated: true,
//                 user,
//             }
//         }
//         case 'REGISTER BUSINESS': {
//             const { business } = action.payload
//             console.log(business)
//             return {
//                 ...state,
//                 isAuthenticated: true,
//                 business,
//             }
//         }
//         default: {
//             return { ...state }
//         }
//     }
// }

// const AuthContext = createContext({
//     ...initialState,
//     method: 'JWT',
//     login: () => Promise.resolve(),
//     logout: () => { },
//     register: () => Promise.resolve(),
//     completeRegistration: () => Promise.resolve(),
//     registerBusiness: () => Promise.resolve(),
// })

// export const AuthProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, initialState)

//     const login = async (email, password) => {
//         const response = await axios.post(`${baseUrl}/auth/login`, {
//             email,
//             password,
//         })
//         const { token, user } = response.data

//         setSession(token)

//         dispatch({
//             type: 'LOGIN',
//             payload: {
//                 user,
//             },
//         })
//         return user
//     }

//     const register = async (firstName, lastName,email, phoneNumber, password, address, role) => {
//         const response = await axios.post(`${baseUrl}/auth/register`, {
//             firstName,
//             lastName,
//             email,
//             phoneNumber,
//             password,
//             address,
//             role,
//         })

//         const { token, user } = response.data

//         setSession(token)

//         dispatch({
//             type: 'REGISTER',
//             payload: {
//                 user,
//             },
//         })
//     }

//     const completeRegistration = async (token) => {
//         const response =  await axios.get(`${baseUrl}/auth/verification/${token}`)
//         const user = response.data
//         dispatch({
//             type: 'COMPLETE REGISTRATION',
//             payload: {
//                 user: user
//             },
//         })
//         return user
//     }

//     const registerBusiness = async (userId) =>{
//         const response = await axios.get(`${baseUrl}/auth/register/business/${userId}`)
//         const business = response.data
//         dispatch({
//             type: 'REGISTER BUSINESS',
//             payload: {
//                 business: business
//             },
//         })
//     }

//     const logout = () => {
//         setSession(null)
//         dispatch({ type: 'LOGOUT' })
//     }

//     useEffect(() => {
//         ; (async () => {
//             try {
//                 const token = window.localStorage.getItem('token')

//                 if (token && isValidToken(token)) {
//                     setSession(token)
//                     // const decoded = jwt_decode(token)
//                     // const response = await axios.get(`${baseUrl}/auth/user/${decoded.userId}`)
//                     const { user } = "hi"

//                     dispatch({
//                         type: 'INIT',
//                         payload: {
//                             isAuthenticated: true,
//                             user,
//                         },
//                     })
//                 } else {
//                     dispatch({
//                         type: 'INIT',
//                         payload: {
//                             isAuthenticated: false,
//                             user: null,
//                         },
//                     })
//                 }
//             } catch (err) {
//                 console.error(err)
//                 dispatch({
//                     type: 'INIT',
//                     payload: {
//                         isAuthenticated: false,
//                         user: null,
//                     },
//                 })
//             }
//         })()
//     }, [])

//     if (!state.isInitialised) {
//         return <Preloader />
//     }

//     return (
//         <AuthContext.Provider
//             value={{
//                 ...state,
//                 method: 'JWT',
//                 login,
//                 logout,
//                 register,
//                 completeRegistration,
//                 registerBusiness,
//             }}
//         >
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export default AuthContext
