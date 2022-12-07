frontPage();
function frontPage(){
    const frontImage = '<img src="img/mustache_cat.jpg" style="height: 500px; width: auto"/>';
    model.site.innerHTML = /*HTML*/`
    <h1>Rate My Pussy!</h1>
    <div>${frontImage}</div>
    <button onclick="rating()">Rating</button>
    <button onclick="topRated()">Topp rated</button>
    <button onclick="profile()">Profile</button>
    `;
    //front image not done
}

function rating(){
        model.site.innerHTML = /*HTML*/`
        <button onclick="frontPage()">Back</button>
        <p>${model.cats[model.currentCat].name}</p>
        <button onclick="nextCat('left')"><--</button>
        <div class="imageRating">${model.cats[model.currentCat].img}</div>
        <p>${model.cats[model.currentCat].points}</p>
        <button onclick="nextCat('right')">--></button>
        `;
           for(let j = 0; j < model.ratingNames.length; j++){
            model.site.innerHTML += /*HTML*/`
            <div class="slidecontainer">
            <div>${model.ratingNames[j]}</div> 
            <input type="range" min="0" max="10" value="${model.cats[model.currentCat].ratings[j]}" onchange="updateRatings(parseInt(this.value), ${j}, ${model.currentCat})"/>
            <div>${model.cats[model.currentCat].ratings[j]}</div>
            </div>
        `;}
}    
    //connection between users and cats not done


    //top rated DONE
function topRated(){
    topRatedSite();
    model.site.innerHTML = /*HTML*/`
    <button onclick="frontPage()">Back</button>
    <h2>Top 3 rated:</h2>
    <br/>
        <h4>${model.cats[0].name}</h4>
        <p>Eier: ${model.cats[0].owner}</p>
        <div>${model.cats[0].img}</div>
        <p>Score: ${model.cats[0].points}</p>
    
        <h4>${model.cats[1].name}</h4>
        <p>Eier: ${model.cats[1].owner}</p>
        <div>${model.cats[1].img}</div>
        <p>Score: ${model.cats[1].points}</p>

        <h4>${model.cats[2].name}</h4>
        <p>Eier: ${model.cats[2].owner}</p>
        <div>${model.cats[2].img}</div>
        <p>Score: ${model.cats[2].points}</p>
    <br/>
    <h2>All cats:</h2>
    `;
    for(let i = 0; i < model.cats.length; i++){
        model.site.innerHTML += /*HTML*/`
        <h4>${model.cats[i].name}</h4>
        <p>Eier: ${model.cats[i].owner}</p>
        <div>${model.cats[i].img}</div>
        <p>Score: ${model.cats[i].points}</p>
    `;
    }
}

function profile(){
    if(model.userOnline == true){
        getCatToOwner();
        model.site.innerHTML = /*HTML*/`
        <button onclick="frontPage()">Back</button>
        <button onclick="logOut()">Log out</button>
        <input type="file" id="uploadFileUser" accepted="image/jpeg, image/png, image/jpg" hidden="hidden"/>
        <button onclick="uploadProfilePicture()" id="uploadUserImage">Upload profile picture</button>
        <h3>Welcome to your profile ${model.currentUser[0].name}</h3>
        <div>${model.currentUser[0].img}</div>
        <p>${model.currentUser[0].info}</p>
        <div>${model.catInfo}</div>
        <p>Add a new cat!</p>
        <div>Your cats name</div>
        <input type="text" id="newNameInput"/>
        <input type="file" id="uploadFile" accepted="image/jpeg, image/png, image/jpg" hidden="hidden"/>
        <button onclick="uploadCatImage()" id="uploadButton">Upload cat image</button>
        <span id="imageName"></span><br/>
        <button onclick="uploadCat()">Add cat</button>
        `;
    }
    if(model.userOnline == false){
        model.site.innerHTML = /*HTML*/`
        <button onclick="frontPage()">Back</button>
        <button onclick="logIn()">Log in</button>
        <p>Not have an account yet?</p>
        <button onclick="createAccount()">Create account</button>
        `;
        }

}

function logIn(){
    model.site.innerHTML = /*HTML*/`
    <button onclick="frontPage()">Back</button>
    <div>Username:</div>
    <input type="text" id="usernameBox"/>
    <div>Password:</div>
    <input type="text" id="passwordBox"/>
    <button onclick="logInnUser()">Log in</button>
    `;
}

function createAccount(){
    model.site.innerHTML = /*HTML*/`
    <button onclick="frontPage()">Back</button>
    <div>Create username:</div>
    <input type="text" id="newUserNameBox"/>
    <div>Create password:</div>
    <input type="text" id="newPasswordBox"/>
    <button onclick="createProfile()">Create Profile</button>
    `;
    //connection to written input to users not done
}