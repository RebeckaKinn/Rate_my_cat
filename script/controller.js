//Create profile DONE
function createProfile(){
    let newPassword = document.getElementById(`newPasswordBox`).value;
    let newUsername = document.getElementById(`newUserNameBox`).value;
    let userIndex = model.users.length + 1;
    model.users.push({name: newUsername, 
                    password: newPassword,
                    img: '<img src="img/default_profile.png" style="height: 50px; width: auto"/>',
                    info: 'Skriv litt om deg selv',
                    id: userIndex});
    model.userOnline = true;
    model.currentUser.push(model.users[model.users.length -1]);
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
            model.userOnline = true;
            profile();
        }
    }
    if(model.userOnline == false){
        password = '';
        username = '';
        model.site.innerHTML += /*HTML*/`
        <h3>Password or username is incorrect. Please try again.</h3>
        `;
    }
}
//not done
function getCatToOwner(){
    for(let j = 0; j < model.cats.length; j++){
        if(model.currentUser[0].name == model.cats[j].owner){
            model.catInfo = /*HTML*/`
            <h4>${model.cats[j].name}</h4>
            <div>${model.cats[j].img}</div>
            <p>Score: ${model.cats[j].points}</p>
            `;
            return model.cats[j];
        }else{
            model.catInfo = /*HTML*/`<i>Du har ingen registrerte puser!</i>`;
        }
    }
}

//DONE
function logOut(){
    model.users.push(model.currentUser[0]);
    model.currentUser.splice(0, model.currentUser.length);
    model.userOnline = false;
    frontPage();
}
//write user info not done
function updateInfoButton(){
    let infoInput = document.getElementById(`userInfoBox`);
    model.edit = !model.edit;
    if(model.edit == true){
        model.infoToUser = /*HTML*/`
        <input type="text" id="userInfoBox" value="${model.currentUser[0].info}"/>
        `;
    }else{
        model.currentUser[0].info = infoInput.value;
        model.infoToUser = /*HTML*/`
        <p>${model.currentUser[0].info}</p>
        `;
    }
    profile();
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

//new cat upload DONE
function uploadCatImage(){
    const fileUpload = document.getElementById(`uploadFile`);
    const uploadButton = document.getElementById(`uploadButton`);
    const imageName = document.getElementById(`imageName`);
    //Når knappen blir trykket så trigger inputten som laster opp fil
    uploadButton.addEventListener("click", function() {
        fileUpload.click();
        
        fileUpload.addEventListener("change", function uploadCatImage(){
            imageName.value = fileUpload.value;
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                model.newCatImg = reader.result;
            });
            reader.readAsDataURL(this.files[0]);
        }); 
    });
}

function uploadCat(){
    let newNameInput = document.getElementById(`newNameInput`);
    model.newCatName = newNameInput.value;
    let catIndex = model.cats.length + 1;
    model.cats.push(
        {name: model.newCatName, 
        img: `<img src="${model.newCatImg}" style="height: 200px; width: auto"/>`, 
        points: 0,
        owner: model.currentUser[0].name,
        ratings: [0, 0, 0, 0],
        id: catIndex}
        );
    return model.cats;
}

