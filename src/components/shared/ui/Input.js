import React from 'react'
import { Input, Label } from '../styled/Form'

const InputTextType = ({name,placeholder,label,value,hanldeChange , type='text'}) => {
  return (
    <>
        <Label>{label}</Label>     
        <Input style={{ marginBottom : '10px' }} type={type} name={name} placeholder={placeholder} onChange={hanldeChange} value={value}></Input>
    </>
  )
}

export default InputTextType