import React, { useState } from 'react'
import { Button, Input, Logo } from './compIndex'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth_service'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const signup = async (data) => {
        setError('')
        try {
           const userData = await authService.createAccount(data)
           if(userData){
            const userData = await authService.getCurrentUser()
            if(userData) dispatch(login(userData))
                navigate('/')
           }
            
        } catch (error) {
            setError(error)
        }
    }

    return (
        <div className='flex items-center justify-center '>
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className='mb-2 flex justify-center '>
                    <span className='inline-block w-full max-w-[100px]'> 
                        <Logo width='100%' />
                    </span>
                </div>
            </div> 
            <h2
                className='text-center text-2xl font-bold leading-tight'
                >Sign in to your account</h2>
                <p>
                    Don&apos;t have any account?&nbsp;
                    <Link 
                         to='signup'
                         className='font-medium text-primary transition-all duration-200 hover:underline'
            
                    >
                         SignUp
                    </Link>
                    </p>
                    {error && <p className='text-red-600 mt-8
                    text-center'>{error}</p>}

                    <form onSubmit={handleSubmit(signup)}>
                        <div className='space-y-5'>
                            <Input
                                lable='Full Name'
                                placeholder='Enter your full name'
                                {...register('name',{
                                    required: true
                                })}
                            />
                            <Input
                                lable='Email'
                                placeholder='enter your email'
                                type='email'
                                {...register('email',{
                                    required: true,
                                    validate:{
                                    matchPatern: (value)=> /^(?!.*\.\.)[a-zA-Z0-9][a-zA-Z0-9._%+-]{0,63}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/
                                    .test(value) || 
                                    'Email address must be valid address'
                            
                                }
                                })}
                            />
                            <Input
                                lable='Password'
                                placeholder='enter password'
                                type='password'
                                {...register('password',{
                                    required:true,
                                    validate:{
                                        matchPatern: (value)=> /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                                        .test(value) || 'Enter valid password'
                                    }
                            
                            
                                    })}
                            />
                            <Button
                                type='submit'
                                className='w-full'
                            
                            >
                                Sign in
                            </Button>
                        </div>

                    </form>
        </div>
    )
}

export default Signup
