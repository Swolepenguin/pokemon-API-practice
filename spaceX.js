fetch('http://api.spacexdata.com/v3capsules')
.then(response =>{
    return response.json();
})
.then(spacXdata =>{
    console.log(spaceXdata)
})

fetch('https://api.spacexdata.com/v3/dragons')
.then(response =>{
    return response.json();
})
.then(response =>{
    console.log(spaceXdata)
})