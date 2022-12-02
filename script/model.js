const model = {
    cats: [
        {name: 'Pusifer', 
        img: '<img src="img/ståles_pus.jpg"/>', 
        points: 0,
        onwer: 1,
        id: 1},

        {name: 'Jasmine', 
        img: '<img src="img/marie_jasmine.jpg"/>', 
        points: 0,
        onwer: 2,
        id: 2},

        {name: 'Mia', 
        img: '<img src="img/mia.png"/>', 
        points: 0,
        onwer: 1,
        id: 3},

        {name: 'Rolf', 
        img: '<img src="img/rolf.png"/>', 
        points: 0,
        onwer: 4,
        id: 4},
    ],

    users: [
        {name: 'Ståle', 
        password: '123',
        img: '',
        info: 'Skriv litt om deg selv',
        id: 1},

        {name: 'Marie', 
        password: 'abc',
        img: '',
        info: 'Skriv litt om deg selv',
        id: 2},

        {name: 'Heine', 
        password: '123abc',
        img: '',
        info: 'Skriv litt om deg selv',
        id: 3},
    ],

    savedInfo: {
        userID: 0,
        catID: 0,
        ratings: [0, 0, 0, 0],
    },

    ratings: [0, 0, 0, 0],

    ratingNames: ['Fur quality', 'Face cuteness', 'Shine and vibe', 'Tail beauty'],

    pushPoints: [],
    currentCat: 0,
    currentUserNumber: 0,
    currentUser: [],

    password: document.getElementById(`passwordBox`),
    username: document.getElementById(`usernameBox`),
};
