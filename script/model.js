const model = {
    site: document.getElementById(`app`),

    cats: [
        {name: 'Pusifer', 
        img: 'img/ståles_pus.jpg', 
        points: 0,
        owner: 'Ståle',
        ratings: [0, 0, 0, 0],
        id: 1},

        {name: 'Jasmine', 
        img: 'img/marie_jasmine.jpg', 
        points: 0,
        owner: 'Marie',
        ratings: [0, 0, 0, 0],
        id: 2},

        {name: 'Mia', 
        img: 'img/mia.png', 
        points: 0,
        owner: 'Ståle',
        ratings: [0, 0, 0, 0],
        id: 3},

        {name: 'Rolf', 
        img: 'img/rolf.png', 
        points: 0,
        owner: 'Heine',
        ratings: [0, 0, 0, 0],
        id: 4},
    ],

    users: [
        {name: 'Ståle', 
        password: '123',
        img: 'img/default_profile.png',
        info: '',
        id: 1},

        {name: 'Marie', 
        password: 'abc',
        img: 'img/default_profile.png',
        info: '',
        id: 2},

        {name: 'Heine', 
        password: '123abc',
        img: 'img/default_profile.png',
        info: '',
        id: 3},
    ],

    savedInfo: [
        {userID: 0,
        catID: 0,
        ratings: [0, 0, 0, 0]},
    ],

    ratingNames: ['Fur quality', 'Face cuteness', 'Shine and vibe', 'Tail beauty'],

    currentCat: 0,
    userOnline: false,
    currentUser: [],
    userCat: [],
    catInfo: '',
    newCatImg: "",
    newCatName: '',
    infoToUser: '',
    edit: false,

    ownersCats: [],

};
