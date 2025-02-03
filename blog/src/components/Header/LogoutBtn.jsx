import React from 'react'
import{useDispatch} from 'react-redux'
import authService from '../../appwrite/auth_service'
import {logout} from '../../store/authSlice'

function LogoutBtn() {

    const dispatch = useDispatch()
    const logoutHandler = async()=>{
        // we use await here but gurji used here .then
        await authService.logout()
        dispatch(logout())
    }

  return (
    <button
        className='inline-block px-6 py-2 duration-200 hover:bg-blue-300 rounded-full'
        onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn
