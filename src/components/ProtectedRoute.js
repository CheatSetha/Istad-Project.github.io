import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const navigate= useNavigate()
    useEffect(()=> {
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/logIn')

        }
    },[])
  return (
    children
  )
}

export default ProtectedRoute