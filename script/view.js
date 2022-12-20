frontPage();
function frontPage(){
    const frontImage = '<img src="img/mustache_cat.jpg" style="height: 350px; width: auto; border-radius: 80px;" />';
    model.site.innerHTML = /*HTML*/`
    <div class="headline">Rate My Pussy!</div>
    <div class="frontImage">${frontImage}</div>
    <div class="menu">Menu</div>
    <div class="topButtonsDiv">
        <button class="topButtons" onclick="rating()">Rating</button>
        <button class="topButtons" onclick="topRated()">Rated</button>
        <button class="topButtons" onclick="logIn()">Profile</button>
    </div>
    <p class="infoFrontPage">
        Welcome to Rate My Pussy! cat rating site. <br/><br/>
        Here you can share your cat to the community, 
        get your cat rated by others, and rate others cats! <br/><br/>
        Join our community <button class="topButtons" onclick="createAccount()">here.</button>
    </p>
    `;
}
function rating(){
        model.site.innerHTML = /*HTML*/`
        <div class="menu">Menu</div>
        <div class="topButtonsDiv">
        <button class="topButtons" onclick="rating()">Rating</button>
        <button class="topButtons" onclick="topRated()">Rated</button>
        <button class="topButtons" onclick="logIn()">Profile</button>
        <br/>
        <br/>
        <button class="topButtons" onclick="frontPage()">Back</button>
        </div>
        <div class="ratingName">${model.cats[model.currentCat].name}</div>
        <button class="leftArrow" onclick="nextCat('left')"><img src="img/arrowLeft.png" style="height: 100px"/></button>
        <div class="imageRating"><img src="${model.cats[model.currentCat].img}" style="height: 300px; width: auto; border-radius: 20px;"/></div>
        <div class="ratingPoints">${model.cats[model.currentCat].points}</div>
        <button class="rightArrow" onclick="nextCat('right')"><img src="img/arrowRight.png" style="height: 100px"/></button>
        `;
        
        for(let j = 0; j < model.ratingNames.length; j++){
            model.site.innerHTML += /*HTML*/`
            <div class="mainRating">
            <div class="ratingSliderNames">${model.ratingNames[j]}</div> 
            <input class="slideBar" type="range" min="0" max="10" value="${model.cats[model.currentCat].ratings[j]}" onchange="updateRatings(parseInt(this.value), ${j}, ${model.currentCat})"/>
            <div class="barRatings">${model.cats[model.currentCat].ratings[j]}</div>
            </div>
            `;}
           
}
function topRated(){
    topRatedSite();
    model.site.innerHTML = /*HTML*/`
    <div class="menu">Menu</div>
    <div class="topButtonsDiv">
            <button class="topButtons" onclick="rating()">Rating</button>
            <button class="topButtons" onclick="topRated()">Rated</button>
            <button class="topButtons" onclick="logIn()">Profile</button>
            <br/>
            <br/>
            <button class="topButtons" onclick="frontPage()">Back</button>
    </div>
    <div class="headline">Top 3 cats</div>
    <div class="top3Rated">
        <h4 class="TopRatedName1">${model.cats[0].name}</h4>
        <p class="TopRatedOwner1">Eier: ${model.cats[0].owner}</p>
        <div class="TopRatedCat1"><img src="${model.cats[0].img}" style="height: auto; width: 190px; border-radius: 20px;"/></div>
        <p class="TopRatedScore1">${model.cats[0].points}</p>
    
        <h4 class="TopRatedName2">${model.cats[1].name}</h4>
        <p class="TopRatedOwner2">Eier: ${model.cats[1].owner}</p>
        <div class="TopRatedCat2"><img src="${model.cats[1].img}" style="height: auto; width: 190px; border-radius: 20px;"/></div>
        <p class="TopRatedScore2">${model.cats[1].points}</p>

        <h4 class="TopRatedName3">${model.cats[2].name}</h4>
        <p class="TopRatedOwner3">Eier: ${model.cats[2].owner}</p>
        <div class="TopRatedCat3"><img src="${model.cats[2].img}" style="height: auto; width: 190px; border-radius: 20px;"/></div>
        <p class="TopRatedScore3">${model.cats[2].points}</p>
    </div>
    <div class="allCatsratings">All cats:</div>
    `;
    for(let i = 0; i < model.cats.length; i++){
        model.site.innerHTML += /*HTML*/`
        <div class="ratedAllTime">
        <h4 class="allCatsRatedName">${model.cats[i].name}</h4>
        <p class="allCatsRatedOwner">Eier: ${model.cats[i].owner}</p>
        <div class="allCatsRatedImg"><img src="${model.cats[i].img}" style="height: 250px; width: auto; border-radius: 20px;"/></div>
        <p class="allCatsRatedPoints">${model.cats[i].points}</p>
        </div>
    `;
    }
}
function profile(){
        model.site.innerHTML = /*HTML*/`
        <div class="menu">Menu</div>
        <div class="topButtonsDiv">
            <button class="topButtons" onclick="rating()">Rating</button>
            <button class="topButtons" onclick="topRated()">Rated</button>
            <button class="topButtons" onclick="logOut()">Logout</button>
            <br/>
            <br/>
            <button class="topButtons" onclick="frontPage()">Back</button>
        </div>
        <div class="headline">Profile</div>
        <div class="welcomeProfile">${model.currentUser[0].name}</div>
        <div class="userImage"><img src="${model.currentUser[0].img}" style="height: 150px; width: auto; border-radius: 40px;"/></div>
        <div class="userInfoBox">${model.infoToUser}</div>
        <button class="updateInfoButton" onclick="updateInfoButton()">Update my info</button>
        <div class="addABewCat">Add a new cat to your family
        <button class="UploadCatImageButton" onclick="uploadCatImageProfile()">here.</button>
        </div>
        `;
        for(let j = 0; j < model.cats.length; j++){
            if(model.currentUser[0].name == model.cats[j].owner){
                // numberOfCats++;
                model.site.innerHTML += /*HTML*/`
                <div class="ratedAllTime">
                <h4 class="profileCatName">${model.cats[j].name}</h4>
                <div class="profileCatImg"><img src="${model.cats[j].img}" style="height: 250px; width: auto; border-radius: 20px;"/></div>
                <p class="profileCatScore">Score: ${model.cats[j].points}</p>
                </div>
                `; 
            }
        }
}
function uploadCatImageProfile(){
    model.site.innerHTML = /*HTML*/`
    <div class="menu">Menu</div>
        <div class="topButtonsDiv">
            <button class="topButtons" onclick="rating()">Rating</button>
            <button class="topButtons" onclick="topRated()">Rated</button>
            <button class="topButtons" onclick="logIn()">Profile</button>
            <br/>
            <br/>
            <button class="topButtons" onclick="profile()">Back</button>
        </div>
        <div class="logInSite">
        <div class="welcomeProfile">Add a new cat!</div>
        <input class="passwordUsernameBox" type="text" id="newNameInput" placeholder="Your cats name"/><br/><br/>
        <div class="explainedUploadCat">Upload your beautiful cat image here:
        <input onclick="uploadCatImage()"type="file" id="uploadFile" accepted="image/jpeg, image/png, image/jpg"/>
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
        <div class="menu">Menu</div>
        <div class="topButtonsDiv">
            <button class="topButtons" onclick="rating()">Rating</button>
            <button class="topButtons" onclick="topRated()">Rated</button>
            <button class="topButtons" onclick="logIn()">Profile</button>
            <br/>
            <br/>
            <button class="topButtons" onclick="frontPage()">Back</button>
        </div>
        <div class="logInSite">
        <div class="logInBoxName">Username:</div>
        <input class="passwordUsernameBox" type="text" id="usernameBox"/>
        <div class="logInBoxName">Password:</div>
        <input class="passwordUsernameBox" type="text" id="passwordBox"/>
        <button class="logInnButton" onclick="logInnUser()">Log in</button>
        </div>
        <div class="notLoggedIn">Not have an account yet?</div>
        <button class="createAccountButton" onclick="createAccount()">Click here!</button>
        `;
    };
}
function createAccount(){
    model.site.innerHTML = /*HTML*/`
    <div class="menu">Menu</div>
    <div class="topButtonsDiv">
        <button class="topButtons" onclick="rating()">Rating</button>
        <button class="topButtons" onclick="topRated()">Rated</button>
        <button class="topButtons" onclick="logIn()">Profile</button>
        <br/>
        <br/>
        <button class="topButtons" onclick="logIn()">Back</button>
    </div>
    <div class="logInSite">
    <div class="logInBoxName">Create username:</div>
    <input class="passwordUsernameBox" type="text" id="newUserNameBox"/>
    <div class="logInBoxName">Create password:</div>
    <input class="passwordUsernameBox" type="text" id="newPasswordBox"/>
    </div>
    <button class="logInnButton" onclick="createProfile()">Create Profile</button>
    `;
}