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

        {name: '', 
        img: '', 
        points: 0,
        onwer: 0,
        id: 3},
    ],

    users: [
        {name: 'Ståle', 
        password: '',
        img: '',
        info: 'Skriv litt om deg selv',
        id: 1},

        {name: 'Marie', 
        password: '',
        img: '',
        info: 'Skriv litt om deg selv2',
        id: 2},

        {name: '', 
        password: '',
        img: '',
        info: 'Skriv litt om deg selv2',
        id: 3},
    ],

    userRatings: {
        fur: {name: 'Fur quality', rating: 5},
        face: {name: 'Face cuteness', rating: 5},
        shine: {name: 'Shine and vibe', rating: 5},
        tail: {name: 'Tail beauty', rating: 5},
    },

    pushPoints: [],

    currentUser: {
        name: 'Name', 
        password: '',
        img: '',
        info: 'Skriv litt om deg selv',
        id: 1,
    },
};
