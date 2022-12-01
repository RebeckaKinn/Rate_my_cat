frontPage();
function frontPage(){
    const site = document.getElementById(`app`);
    site.innerHTML = /*HTML*/`
    <h1>Rate My Pussy!</h1>
    <div>front image here</div>
    <button onclick="rating()">Rating</button>
    <button onclick="toppRated()">Topp rated</button>
    <button onclick="profile()">Profile</button>
    `;
    //front image not done
}

function rating(){
    const site = document.getElementById(`app`);
    for(let i = 0; i < model.cats.length; i++){
        site.innerHTML = /*HTML*/`
        <button onclick="frontPage()">Back</button>
        <p>${model.cats[i].name}</p>
        <div onclick="nextCat('left')"><--</div>
        <div class="imageRating">${model.cats[i].img}</div>
        <p>${model.cats[i].points}</p>
        <div onclick="nextCat('right')">--></div>
    
        <div class="slidecontainer">
            <input type="range" min="1" max="10" value="${model.userRatings.fur.rating}" onchange="updateRatings(parseInt(this.value))"/>
            <div>${model.userRatings.fur.name} ${model.userRatings.fur.rating}</div>
            <input type="range" min="1" max="10" value="${model.userRatings.face.rating}" onchange="updateRatings(parseInt(this.value))"/>
            <div>${model.userRatings.face.name} ${model.userRatings.face.rating}</div>
            <input type="range" min="1" max="10" value="${model.userRatings.shine.rating}" onchange="updateRatings(parseInt(this.value))"/>
            <div>${model.userRatings.shine.name} ${model.userRatings.shine.rating}</div>
            <input type="range" min="1" max="10" value="${model.userRatings.tail.rating}" onchange="updateRatings(parseInt(this.value))"/>
            <div>${model.userRatings.tail.name} ${model.userRatings.tail.rating}</div>
        </div>
    `;
    }
    //cat list not done
    //connection not done
    //nextcat not done (go through array of cats and update them)
}

function toppRated(){
    const site = document.getElementById(`app`);
    site.innerHTML = /*HTML*/`
    <button onclick="frontPage()">Back</button>
    <p>Top 3 rated</p>
    <div>cat image here</div>
    <p>points</p>
    <div>cat image here</div>
    <p>points</p>
    <div>cat image here</div>
    <p>points</p>
    `;
    //cats not done
    //points not done
}

function profile(){
    const site = document.getElementById(`app`);
    for(let i = 0; i < model.users.length; i++){
    if(model.currentUser[i]){
        site.innerHTML = /*HTML*/`
        <button onclick="frontPage()">Back</button>
        <h3>Welcome to your profile ${model.users[i].name}</h3>
        <div>${model.users[i].img}</div>
        <p>${model.users[i].info}</p>
        <P>My cats</p>
        <div>image cat of user</div>
        <p>info about cat from user</p>
        <div>current cat rating</div>
        <button onclick="uploadCat()">Upload cat</button>
        `;
        //uploadCat not done
        //cats not done
    
    }else{
        site.innerHTML = /*HTML*/`
        <button onclick="frontPage()">Back</button>
        <button onclick="logIn()">Log in</button>
        <p>Not have an account yet?</p>
        <button onclick="createAccount()">Create account</button>
        `;
        }
    }
    //login not done
    //createaccount not done
}

function logIn(){
    const site = document.getElementById(`app`);
    site.innerHTML = /*HTML*/`
    <button onclick="frontPage()">Back</button>
    <div>Username:</div>
    <input type="text"/>
    <div>Password:</div>
    <input type="text"/>
    <button onclick="profile()">Log in</button>
    `;
    //connection of user not done
    //right or wrong password/username not done
}

function createAccount(){
    const site = document.getElementById(`app`);
    site.innerHTML = /*HTML*/`
    <button onclick="frontPage()">Back</button>
    <div>Create username:</div>
    <input type="text"/>
    <div>Create password:</div>
    <input type="text"/>
    <button onclick="createProfile()">Create Profile</button>
    `;
    //createProfile not done
    //connection to written input to users not done
}