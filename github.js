const container = document.querySelector('.container');

fetch('https://api.github.com/users/Swolepenguin')
.then(response => {
    return response.json();
})
.then(gitHubData => {
    const SwolePenguin = {
        bio: gitHubData.bio,
        username: gitHubData.login,
        name: gitHubData.name
    }
    console.log(SwolePenguin)
    const newElement = document.createElement('p');
    newElement.textContent = SwolePenguin.name;
    container.appendChild(newElement);
    //console.log(gitHubData)
})
.catch(error =>{
    console.log(error);
})