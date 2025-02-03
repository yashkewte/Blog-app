import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth_service'
import  Header  from './components/Header/Header'
import  Footer  from './components/Footer/Footer'

import './App.css'

function App() {
  
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((useData)=>{
      if(useData){
        dispatch(login({useData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  })


 return !loading ? (
  <div
    className='min-w-screen flex flex-wrap content-between bg-gray-400'
  >
    <div className='w-full block'>
        <Header/>
        todo: 
        <Footer />
    </div>
  </div>
 ) : null
}

export default App
