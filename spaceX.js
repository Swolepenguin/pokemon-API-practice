fetch('http://api.spacexdata.com/v3capsules')
.then(response =>{
    return respnse.json();
})
.then(spacXdata =>{
    console.log(spacXdata)
})

fetch('https://api.spacexdata.com/v3/dragons')
.then(resoponse =>{
    return response.json();
})
.then(response =>{
    console.log(spacXdata)
})