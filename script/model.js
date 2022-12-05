const model = {
    site: document.getElementById(`app`),
    password: document.getElementById(`passwordBox`),
    username: document.getElementById(`usernameBox`),

    cats: [
        {name: 'Pusifer', 
        img: '<img src="img/ståles_pus.jpg" style="height: 200px; width: auto"/>', 
        points: 0,
        onwer: 1,
        ratings: [0, 0, 0, 0],
        id: 1},

        {name: 'Jasmine', 
        img: '<img src="img/marie_jasmine.jpg" style="height: 200px; width: auto"/>', 
        points: 0,
        onwer: 2,
        ratings: [0, 0, 0, 0],
        id: 2},

        {name: 'Mia', 
        img: '<img src="img/mia.png" style="height: 200px; width: auto"/>', 
        points: 0,
        onwer: 1,
        ratings: [0, 0, 0, 0],
        id: 3},

        {name: 'Rolf', 
        img: '<img src="img/rolf.png" style="height: 200px; width: auto"/>', 
        points: 0,
        onwer: 4,
        ratings: [0, 0, 0, 0],
        id: 4},
    ],

    users: [
        {name: 'Ståle', 
        password: '123',
        img: '<img src="img/default_profile.png"/>',
        info: 'Skriv litt om deg selv',
        id: 1},

        {name: 'Marie', 
        password: 'abc',
        img: '<img src="img/default_profile.png"/>',
        info: 'Skriv litt om deg selv',
        id: 2},

        {name: 'Heine', 
        password: '123abc',
        img: '<img src="img/default_profile.png"/>',
        info: 'Skriv litt om deg selv',
        id: 3},
    ],

    savedInfo: [
        {userID: 0,
        catID: 0,
        ratings: [0, 0, 0, 0]},
    ],

    ratings: [0, 0, 0, 0],

    ratingNames: ['Fur quality', 'Face cuteness', 'Shine and vibe', 'Tail beauty'],

    pushPoints: [],
    currentCat: 0,
    currentUserNumber: 0,
    currentUser: [],

};
