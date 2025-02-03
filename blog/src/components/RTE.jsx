import React from 'react'
import { Controller } from 'react-hook-form'
import {Editor } from '@tinymce/tinymce-react'

export default function RTE({name,lable,control,defaultValue = ''}) {

  return (
    <div className='w-full'>
      {
        lable && <lable className='inline-block mb-1 pl-1'>{lable}</lable>
      }

      // controller passes controls to somewhere, where we want
      
      <Controller  
        name={name || 'content'}
        control={control}
        render={({field: {onChange}})=>(
            <Editor
                initialValue={defaultValue}
                init={{ 
                    initialValue: defaultValue,
                    height:500,
                    menubar:true,
                    plugins:[
                        'image',
                        'advlist',
                        'autolink',
                        'lists',
                        'link',
                        'image',
                        'charmap',
                        'preview',
                        'anchor',
                        'searchreplace',
                        'visualblocks',
                        'code',
                        'fullscreen',
                        'insertdatetime',
                        'media',
                        'code',
                        'help',
                        'wordcount'
                    ],
                    toolbar:[
                        'undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
                    ],
                    content_style: "body { font-family:Helvetica, Arial, sans-serif; font-size:14px }"
                }} 
                onEditorChange={onChange} 
            />
        )}
      />
    </div>
  )
}

