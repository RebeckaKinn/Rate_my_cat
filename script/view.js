frontPage();
function frontPage(){
    const frontImage = '<img src="img/mustache_cat.jpg" style="height: 400px; width: auto; border-radius: 80px;" />';
    model.site.innerHTML = /*HTML*/`
    <div class="headline"><h1>Rate My Pussy!</h1></div>
    <div class="frontImage">${frontImage}</div>
    <div class="frontPageButtons"><button class="buttonMainPage" onclick="rating()">Rating</button>
    <button class="buttonMainPage" onclick="topRated()">Topp rated</button>
    <button class="buttonMainPage" onclick="logIn()">Profile</button>
    </div>
    `;
}

function rating(){
        model.site.innerHTML = /*HTML*/`
        <button class="backButton" onclick="frontPage()">Back</button>
        <div class="ratingName">${model.cats[model.currentCat].name}</div>
        <button class="leftArrow" onclick="nextCat('left')">←</button>
        <div class="imageRating"><img src="${model.cats[model.currentCat].img}" style="height: 300px; width: auto"/></div>
        <p class="ratingPoints">${model.cats[model.currentCat].points}</p>
        <button class="rightArrow" onclick="nextCat('right')">→</button>
        `;
        for(let j = 0; j < model.ratingNames.length; j++){
            model.site.innerHTML += /*HTML*/`
            <div class="mainRating">
            <div class="ratingSliderNames${j} ratingSliderNamesVisuals">${model.ratingNames[j]}</div> 
            <input class="slideBar${j} sliderBarVisuals" type="range" min="0" max="10" value="${model.cats[model.currentCat].ratings[j]}" onchange="updateRatings(parseInt(this.value), ${j}, ${model.currentCat})"/>
            <div class="barRatings${j} barRatingVisuals">${model.cats[model.currentCat].ratings[j]}</div>
            </div>
            `;}
}
   

function topRated(){
    topRatedSite();
    model.site.innerHTML = /*HTML*/`
    <button class="backButton" onclick="frontPage()">Back</button>
    <h2 class="top3Ratedtitle">Top 3 rated:</h2>
    <br/>
    <div class="top3Rated">
        <h4 class="TopRatedName1">${model.cats[0].name}</h4>
        <p class="TopRatedOwner1">Eier: ${model.cats[0].owner}</p>
        <div class="TopRatedCat1"><img src="${model.cats[0].img}" style="height: auto; width: 190px"/></div>
        <p class="TopRatedScore1">${model.cats[0].points}</p>
    
        <h4 class="TopRatedName2">${model.cats[1].name}</h4>
        <p class="TopRatedOwner2">Eier: ${model.cats[1].owner}</p>
        <div class="TopRatedCat2"><img src="${model.cats[1].img}" style="height: auto; width: 190px"/></div>
        <p class="TopRatedScore2">${model.cats[1].points}</p>

        <h4 class="TopRatedName3">${model.cats[2].name}</h4>
        <p class="TopRatedOwner3">Eier: ${model.cats[2].owner}</p>
        <div class="TopRatedCat3"><img src="${model.cats[2].img}" style="height: auto; width: 190px"/></div>
        <p class="TopRatedScore3">${model.cats[2].points}</p>
    <br/>
    </div>
    <h2 class="allCatsratings">All cats:</h2>
    `;
    for(let i = 0; i < model.cats.length; i++){
        model.site.innerHTML += /*HTML*/`
        <div class="ratedAllTime">
        <h4 class="allCatsRatedName">${model.cats[i].name}</h4>
        <p class="allCatsRatedOwner">Eier: ${model.cats[i].owner}</p>
        <div class="allCatsRatedImg"><img src="${model.cats[i].img}" style="height: 250px; width: auto"/></div>
        <p class="allCatsRatedPoints">${model.cats[i].points}</p>
        </div>
    `;
    }
}
function profile(){
        getCatToOwner();
        model.site.innerHTML = /*HTML*/`
        <button class="backButton" onclick="frontPage()">Back</button>
        <button class="LogOutButton" onclick="logOut()">Log out</button>
        <button class="UploadCatImageButton" onclick="uploadCatImage()">Add a new cat!</button>

        <h3 class="welcomeProfile">Welcome to your profile ${model.currentUser[0].name}</h3>
        <div class="userImage"><img src="${model.currentUser[0].img}" style="height: 150px; width: auto"/></div>
        <div class="userInfoBox">${model.infoToUser}</div>
        <button class="updateInfoButton" onclick="updateInfoButton()">update info</button>
        <div class="profileShowCat">${model.catInfo}</div>
        `;
}
//not done css
function uploadCatImage(){
    model.site.innerHTML = /*HTML*/`
        <button class="backButton" onclick="profile()">Back</button>
        <div class="logInSite">
        <h3 class="welcomeProfile">Add a new cat!</h3>
        <input class="passwordUsernameBox" type="text" id="newNameInput" placeholder="Your cats name"/>
        <div class="explainedUploadCat">Upload your beautiful cat image here
        <input type="file" id="uploadFile" accepted="image/jpeg, image/png, image/jpg"/>
        </div>
        <button class="logInnButton" onclick="uploadCat()">Add cat</button>
        </div>
        `;
    
}

function logIn(){
    if(model.userOnline == true){
        profile();
    }else{
        model.site.innerHTML = /*HTML*/`
        <div class="logInSite">
        <div class="logInBoxName">Username:</div>
        <input class="passwordUsernameBox" type="text" id="usernameBox"/>
        <div class="logInBoxName">Password:</div>
        <input class="passwordUsernameBox" type="text" id="passwordBox"/>
        <button class="logInnButton" onclick="logInnUser()">Log in</button>
        </div>
        <p class="notLoggedIn">Not have an account yet?</p>
        <button class="backButton" onclick="frontPage()">Back</button>
        <button class="createAccountButton" onclick="createAccount()">Create account</button>
        `;
    };
}

function createAccount(){
    model.site.innerHTML = /*HTML*/`
    <button class="backButton" onclick="logIn()">Back</button>
    <div class="logInSite">
    <div class="logInBoxName">Create username:</div>
    <input class="passwordUsernameBox" type="text" id="newUserNameBox"/>
    <div class="logInBoxName">Create password:</div>
    <input class="passwordUsernameBox" type="text" id="newPasswordBox"/>
    </div>
    <button class="createAccountButton" onclick="createProfile()">Create Profile</button>
    `;
}