//profile creation and logIn 
//not tested/not done
function createProfile(){
    let newPassword = document.getElementById(`newPasswordBox`).value;
    let newUsername = document.getElementById(`newUserNameBox`).value;
    let userIndex = model.users.length + 1;
    model.users.push({name: newUsername, 
                    password: newPassword,
                    img: '<img src="img/default_profile.png" style="height: 50px; width: auto"/>',
                    info: 'Skriv litt om deg selv',
                    id: userIndex});
    model.currentUserNumber = userIndex;
    profile();
}

//not done
function saveChanges(){
    

}
//not tested
function logInnUser(){
    let password = document.getElementById(`passwordBox`).value;
    let username = document.getElementById(`usernameBox`).value;
    for(let i = 0; i< model.users.length; i++){
        if(password == model.users[i].password && username == model.users[i].name){
            model.currentUser.push(model.users[i]);
            model.currentUserNumber = i;
            profile();
        }
    }
        if(model.currentUserNumber === 1){
            password = '';
            username = '';
            model.site.innerHTML += /*HTML*/`
            <h3>Password or username is incorrect. Please try again.</h3>
            `;
        }
   
}
//DONE
function logOut(){
    model.currentUser.splice(0, model.currentUser.length);
    model.currentUserNumber = 1;
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
//check who is top rated DONE
function topRatedSite(){
    model.cats.sort((a,b) => b.points - a.points).slice(0, 3)
}



