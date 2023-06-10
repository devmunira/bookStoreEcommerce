import { useRouter } from "next/router";
import { useEffect } from "react";
const { useState } = require("react");

const useSearch = () => {
    const router = useRouter();
    
    const [filter , setFilter] = useState({
        search : '',
        category : [],
        author : [],
        sort:   '',
        page : 1,
        price : '',
    });

    const {category= filter.category,author =filter.author,sort=filter.sort,page=filter.page,price=filter.price} = router.query;

   
    const handleInput = (e) => {
        setFilter({...filter , [e.target.name] : e.target.value})
    }

    const handlePage = (e,val) => {
        setFilter({...filter , page : val})
    }

    const handleCheckbox = (e) => {
        if(e.target.checked){
            e.target.name == 'category' ? 
            setFilter({...filter , [e.target.name] : [...category , e.target.value]}) 
            : setFilter({...filter , [e.target.name] : [...author , e.target.value]}) 
        }else{
         e.target.name == 'category' ?    
         setFilter({...filter , [e.target.name] : [...category].filter(item => item !== e.target.value)}) :
         setFilter({...filter , [e.target.name] : [...author].filter(item => item !== e.target.value)}) 
        }
    }

    useEffect(() => {
        router.query.category = filter.category ? filter.category : []
        router.query.search = filter.search ? filter.search.toLowerCase() : ''
        router.query.author = filter.author ? filter.author : []
        router.query.sort = filter.sort ? filter.sort : ''
        router.query.price = filter.price ? filter.price : ''
        router.query.page = filter.page ? filter.page : 1
        router.push({
            pathname: router.pathname,
            query: router.query,
        });
    }, [filter]);

    return {
        router,
        handleCheckbox,
        handlePage,
        handleInput,
        filter
    }

}


export default useSearch;