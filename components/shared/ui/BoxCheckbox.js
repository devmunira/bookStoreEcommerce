import React from 'react'
import { Input, Label } from '../styled/Form'

const BoxCheckbox = ({children,name,id,handleChange,item,type}) => {
  return (
    <>
        <Input type={type} name={name} value={item} id={id} onChange={handleChange} ></Input>
        <Label htmlFor={id}>{children}</Label>
    </>
  )
}

export default BoxCheckbox