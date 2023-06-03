
const increamentCount = (payload = 1) => {
    return {
        type : 'increament',
        payload : payload,
    }
}