//profile creation and logIn 
//not done
function createProfile(){
    let newPassword = document.getElementById(`newPasswordBox`);
    let newUsername = document.getElementById(`newUserNameBox`);

    let userIndex = model.users.length + 1;
    model.users[userIndex].password.push(newPassword.value);
    model.users[userIndex].name.push(newUsername.value);
    model.users[userIndex].id.push();
}

function logInnUser(){

    profile();
}
//not done
function logOut(){
    model.currentUser.splice();
    frontPage();
}

//rating
//saved rating for user not done
function updateRatings(newRating, number, cat){
    model.ratings[number] = newRating;
    model.cats[cat].points = (model.ratings[0] + model.ratings[1] + model.ratings[2] + model.ratings[3]) / 4;
    rating();
};

//tuggle which cat is visible
//save points not done
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

    //check who is top rated (not done)
function topRatedSite(){
    for(let i = 0; i < model.cats.length; i++){}
    topRated();
}
