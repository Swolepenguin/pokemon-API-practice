fetch('https://api.github.com/users/Swolepenguin')
.then(response => {
    return response.json();
})
.then(gitHubData => {
    console.log(gitHubData)
})
.catch(error =>{
    console.log(error);
})