import { useState } from "react";

const useCheckout = ({inputs , setInputs}) => {    
    /* Default Shipping Address */
    const [defaultaddress , setDefaultAddress] = useState(true);
    const [checked , setChecked] = useState();

    const handleShippingMethods = (e) => {
        (e)=>setInputs({...inputs, shippingMethods : e.target.value})
        setChecked(e.target.value)
    }
    
    

    return{
        defaultaddress,
        setDefaultAddress,
        handleShippingMethods,
        checked
    }
}

export default useCheckout;