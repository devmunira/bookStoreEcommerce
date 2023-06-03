import toast from 'react-hot-toast';

export const CustomToaster = (msg , type = null) => {
    toast(msg,{
        position : 'top-right',
        id : 'normal'
    })
    // switch (type) {
    //     case 'success':
    //     toast.success(msg,{
    //         position : 'top-right'
    //     })
    //         break;
    
    //     default:
    //     toast(msg,{
    //         position : 'top-right'
    //     })
    //     break;
    // }
   
}