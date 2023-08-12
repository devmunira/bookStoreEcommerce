import React from 'react'
import Image from 'next/image';


const PreLoading = () => {
  return (
    <div
    style={{
        height: '100vh',
        width : '100%',
        display : 'flex',
        justifyContent : 'center',
        alignItems: 'center',
        textAlign : 'center'
    }}
    >
        <Image src="/loading_icon.gif" alt="Loading..." width={300} height={150} />     
    </div>
  )
}

export default PreLoading