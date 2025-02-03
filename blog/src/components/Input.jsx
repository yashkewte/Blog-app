import React, {forwardRef, useId} from 'react'


const Input = forwardRef(
    function Input({
        lable,
        type = 'text',
        className = '',
        ...pros
    },ref){
        const id = useId()
        return(
            <div className='w-full'>
                {
                    lable && <label 
                                htmlFor={id}
                                className='inline-block mb-1 p-1'
                                >{lable}</label>
                
                }
                <input 
                    type={type}
                    className={`px-3 py-2 rounded-lg bg-white text-black outline-none
                                focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}  
                    ref={ref}
                    {...pros}
                    id={id}
                    />
            </div>
        )
    }
)

export default Input
