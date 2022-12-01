//profile creation and logIn
function createProfile(){

}

//rating
function updateRatings(newRating){

    for(let i = 0; i < model.userRatings.length; i++){
        model.userRatings[i].ratings = newRating;
    };
    console.log(newRating)
    rating();
}

    
