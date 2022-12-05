frontPage();
function frontPage(){
    const frontImage = '<img src="img/mustache_cat.jpg" style="height: 260px; width: auto"/>';
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
           for(let j = 0; j < model.ratings.length; j++){
            model.site.innerHTML += /*HTML*/`
            <div class="slidecontainer">
            <div>${model.ratingNames[j]}</div> 
            <input type="range" min="0" max="10" value="${model.ratings[j]}" onchange="updateRatings(parseInt(this.value), ${j}, ${model.currentCat})"/>
            <div>${model.ratings[j]}</div>
            </div>
        `;}
}    
    //cat list not done
    //connection not done


function topRated(){
    model.site.innerHTML = /*HTML*/`
    <button onclick="frontPage()">Back</button>
    <h3>Top 3 rated:</h3>
    <br/>
        <p>${model.cats[model.currentCat].name}</p>
        <div>${model.cats[model.currentCat].img}</div>
        <p>${model.cats[model.currentCat].points}</p>
    
        <p>${model.cats[model.currentCat].name}</p>
        <div>c${model.cats[model.currentCat].img}</div>
        <p>${model.cats[model.currentCat].points}</p>

        <p>${model.cats[model.currentCat].name}</p>
        <div>${model.cats[model.currentCat].img}</div>
        <p>${model.cats[model.currentCat].points}</p>
    <br/>
    <h3>All cats:</h3>
    `;
    for(let i = 0; i < model.cats.length; i++){
        model.site.innerHTML += /*HTML*/`
        <p>${model.cats[i].name}</p>
        <div>${model.cats[i].img}</div>
        <p>${model.cats[i].points}</p>
        `;
    }
    //points not done
    //connection not done
}

function profile(){
    if(model.currentUser[0] == model.users[0]){
        model.site.innerHTML = /*HTML*/`
        <button onclick="frontPage()">Back</button>
        <button onclick="logOut()">Log out</button>
        <button onclick="uploadProfilePicture()">Upload profile picture</button>
        <h3>Welcome to your profile ${model.users[currentUserNumber].name}</h3>
        <div>${model.users[currentUserNumber].img}</div>
        <p>${model.users[currentUserNumber].info}</p>
        <P>My cats</p>
        <div>image cat of user</div>
        <p>info about cat from user</p>
        <div>current cat rating</div>
        <button onclick="uploadCat()">Upload cat</button>
        `;
        //uploadCat not done
        //cats not done
    
    }else{
        model.site.innerHTML = /*HTML*/`
        <button onclick="frontPage()">Back</button>
        <button onclick="logIn()">Log in</button>
        <p>Not have an account yet?</p>
        <button onclick="createAccount()">Create account</button>
        `;
        }
    //login not done
    //createaccount not done
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
    //connection of user not done
    //right or wrong password/username not done
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
    //createProfile not done
    //connection to written input to users not done
}