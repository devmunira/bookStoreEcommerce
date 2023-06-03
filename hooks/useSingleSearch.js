import {useRouter} from "next/router";
import {useEffect} from "react";
import {useState} from "react";

export const useSingleSearch = () => {
    const router = useRouter();
    const [filter,
        setFilter] = useState('');
    const {
        search = filter
    } = router.query;

    const handleCategoryFilter = (e) => {
        setFilter(e.target.value)
    }
    useEffect(() => {
        router.query.search = filter ? filter : '';
        router.push({
            pathname: router.pathname, 
            query: filter ? router.query  : {}
        })
    }, [filter]);

    return {router, filter, handleCategoryFilter}

}