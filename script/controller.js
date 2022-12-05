//profile creation and logIn 
//not done
function createProfile(){
    let newPassword = document.getElementById(`newPasswordBox`);
    let newUsername = document.getElementById(`newUserNameBox`);

    let userIndex = model.users.length + 1;
    model.users[userIndex].password.push(newPassword.value);
    model.users[userIndex].name.push(newUsername.value);
    model.users[userIndex].id.push(userIndex);
    model.users[userIndex].img.push('<img src="img/default_profile.png"/>');
    model.users[userIndex].info.push('Skriv litt om deg selv');
    profile();
}

function logInnUser(){
    let index = model.users.length;
    if(model.password.value == model.users[index].password && model.username.value == model.users[index.name]){
        profile();
        
    }
    if(model.password.value != model.users[index].password || model.username.value != model.users[index].name){
        model.password.value = '';
        model.username.value = '';
        model.site.innerHTML += /*HTML*/`
        <h3>Password or username is incorrect. Please try again.</h3>
        `;
    }
    console.log(model.password.value)
}
//not done
function logOut(){
    model.currentUser.splice(0, model.currentUser.length);
    frontPage();
}

//rating
//saved rating for each cat DONE
function updateRatings(newRating, number, cat){
    model.cats[model.currentCat].ratings[number] = newRating;
    model.cats[cat].points = (model.cats[model.currentCat].ratings[0] + model.cats[model.currentCat].ratings[1] + model.cats[model.currentCat].ratings[2] + model.cats[model.currentCat].ratings[3]) / 4;
    rating();
};

//tuggle which cat is visible DONE
function nextCat(side){
    if(side == 'right'){
        model.currentCat++;
    }
    if(side == 'left'){
        model.currentCat--;
     }
    if(model.currentCat === - 1){
        model.currentCat += model.cats.length;
        }
    else{
        model.currentCat = model.currentCat % model.cats.length;
    }
    rating();
    return model.cats[model.currentCat];
}

//not done
function saveChanges(){
    

}

//check who is top rated (not done)
function topRatedSite(){
    const result = model.cats.sort((a,b) => b.points - a.points).slice(0, 3)
    console.log(result);
}

