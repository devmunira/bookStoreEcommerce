
//array query string modify
export const modifyQueryString = (query,column) => {
    return  query && query.length > 0 ? 
     typeof query == 'string' ? query.split(',').reduce((acc,cur,index) => {
             acc += `&filters[$or][${index}][${column}][id][$eq]=${cur}`
             return acc;
         } , '') : query.reduce((acc,cur,index) => {
             acc += `&filters[$or][${index}][${column}][id][$eq]=${cur}`
             return acc;
         } , '')
         : ``;
 }
 