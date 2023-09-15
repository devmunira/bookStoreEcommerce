
fetch(`http:127.0.0.1:1337/api/sliders?populate=image&fields[0]=image`)
.then((res) => console.log(res))
.catch((err) => console.log(err))



