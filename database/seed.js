const { connection } = require('./index.js');

let metroList = ['Atlanta_Georgia', 'Boston_New_England', 'Chicago_Illinois', 'Dallas', 'Denver_Colorado', 'Houston', 'Las_Vegas', 'Los_Angeles', 'Miami_South_Florida', 'New_Orleans_Louisiana', 'New_York_Area', 'Orange_County', 'San_Francisco Area', 'San_Diego', 'Seattle_Area']

let laCities = ['Alameda', 'Alhambra', 'Altadena', 'Anza', 'Arcadia', 'Bakersfield', 'Bellflower', 'Belmont', 'Big Sur', 'Calabasas', 'Canoga Park', 'Capistrano Beach', 'Carson', 'Cerritos', 'Commerse', 'Compton', 'Costa Mesa', 'Cupertino', 'Dana Point', 'Diamond Bar', 'Downey', 'Encino', 'Fairfax', 'Fredmont', 'Fullerton', 'Gilroy', 'Glendora', 'Hawthorne', 'Hollywood', 'Humbolt', 'Irvine', 'Joshua Tree', 'La Canada', 'Laguna Beach', 'Lake Forest', 'Lake Tahoe', 'Malibu', 'Mendocino', 'Napa', 'Newport', 'Newport Beach', 'Oakland', 'Oxnard', 'Orange', 'Ojai', 'Palm Springs', 'Palo Alto', 'Pasadena', 'Playa del Rey', 'Pomona', 'Ramona', 'Rancho Dominguez', 'Redondo Beach', 'Rosemead', 'San Bruno', 'San Diego', 'Santa Fe Springs', 'Santa Monica', 'South Pasadena', 'Temecula', 'Topanga', 'Torrance', 'Tustin', 'Universal City', 'Van Nuys', 'Venice', 'Ventura', 'West Covina', 'West Hollywood', 'Westminister', 'Whittier', 'Woodland Hills', 'Yorba Linda', 'Yucca Valley']
let atlCities = ["Decatur", "East Atlanta", "East Lake", "Edgewood", "Inman Park", "Kirkwood", "Lake Claire", "Lindridge‑Martin Manor", "Morningside‑Lenox Park", "Old Fourth Ward", "Ormewood Park", "Piedmont Heights", "Poncey-Highland", "Reynoldstown", "Sweet Auburn", "Virginia-Highland"]
let bosCities = ["Melrose", "Brookline", "Newton", "Arlington", "Winchester", "Westborough", "Needham", "Wellesley", "Franklin Town", "Hingham", "Lexington", "Northborough", "Reading", "Dedham", "Norwood", "Kingston", "South Lancaster"]
let chiCities = ["Norville", "Lincolm Park", "Lakd View", "Nead South Side", "Wes Town", "Noth Center", "Edion Park", "Lincln Square", "Wet Side", "Beerly"]
let dalCities = ["Norf Side", "True Park", "Hot View", "Leertown", "West Town"]
let denCities = ["South Side", "Jay Park", "Lake Stride", "Creative South Side"]
let houCities = ["Point Side", "Stein Park", "Lakesreer", "KanyeWest"]
let lvCities = ["Foreign Side", "House Park", "Yolo View", "Closer South Side", "Westside", "Honda Center"]
let miaCities = ["PeerSide", "Uline Park", "Crestview", "Lincoln Park", "Ville", "Tanak"]
let neworlCities = ["Aquafina", "Tooner", "Reert", "N Side", "Connt", "Ner"]
let nyCities = ["Noide", "Linoln", "Shibuya", "Cons Side", "Weewn", "Starbucks", "Edison", "Stevejobs", "Nexus", "Honey"]
let sdCities = ["Manhattan", "Central Park", "New Jersey", "Staten Island", "Long Island"]
let ocCities = ["Stanton", "Scranton", "Buena", "Stenier Park", "Sleeperville", "Northernlights", "Eileen", "Lamertown", "Wooserville", "Sampson"]
let sfCities = ["San Jose", "Fremont", "Crestside", "Tracy", "Sunnyvale", "Sf Downtown", "Atson", "Yorka", "Crestville", "Destena"]
let seaCities = ["Seaside", "Lively", "Lakesides", "Horchateoo", "Fake Town", "Helloville", "Eisten"]

let cuisines = ['Italian', 'Japanese', 'Sushi', 'Mexican', 'Taco', 'Burger', 'Pasta', 'Pizza', 'Burrito', 'Ramen', 'Chinese', 'Dumpling', 'Indian', 'Fried Rice', 'Curry', 'Fusion', 'Cajun', 'Soul', 'Greek', 'Thai', 'Lebanese', 'American', 'French', 'Mediterranean', 'Spanish', 'German', 'Korean', 'Korean BBQ', 'BBQ', 'Vietnamese', 'Pho', 'Eggroll', 'Fried Chicken', 'Sandwich', 'Brazillian', 'Yakitori', 'Salad', 'Vegan', 'Vegetarian', 'Peruvian', 'Chicken', 'Dessert', 'Ice Cream', 'Cake', 'Fries', 'Teriyaki', 'Gyro', 'Ribs']
let restaurantNames = ['TKB Bakery & Deli', 'Little Miss BBQ', 'Katsuya', 'Burger Boss', 'Aruns Indian Kitchen', 'Pizza Company', 'Poke Express', 'Falafelle', 'Pho 44 Restaurant', 'Omega Burger', 'Howlin Rays', 'Makai Sushi', 'Sushi House', '786 Degrees Pizza', 'Donuts Hut', 'Fratellino', 'Halls Chophouse', 'Oto Oto Japanese Izakaya', 'The Flinderstreet Cafe', 'Saigon Beach Restaurant', 'Yoshinoya', 'The Red Dot Vegetarian Kitchen', 'Porkys', 'Maple Street Biscuit Company', 'Adobo Taco Grill', 'T Deli', 'Sunny Side Kitchen', 'Sultan Bakery', 'Afghan Bistro', 'Ninis Deli', 'Juana La Cubana Cafe', 'Empa Mundo', 'Bogarts Smokehouse', 'Bite Into Maine', 'Calhouns Texas BBQ', 'Poke Wave', 'Aomori Ramen', 'Tatsu Ramen', 'Hummus Factory', 'Islands Burgers', 'Kabuki Sushi', 'Taco Mexico', 'Los Tacos', 'Joes Kansas City BBQ', 'The Factory Kitchen', 'Bestia', 'Blacksmiths', 'Officine BRERA', 'Terroni', 'Perch', 'Otium', 'Faith & Flower', 'Little Sister', 'Broken Spanish', 'Badmaash', 'Osteria La Buca', 'Ramen Go', 'Ramen Yamadaya', 'Pasta Sisters', 'Mortons SteakHouse', 'Bar Ama', 'Rock N Fish LA Live', 'Sage Vegan Bistro', 'Veggie Grill', 'Tsujita Ramen', 'Hatch Yakitori', 'Atrium', 'Wokcano', 'Wolfgang Puck Bar & Grill', 'Manpuku BBQ', 'Ojiya Japanese', 'Anjin BBQ', 'The Backhouse', 'Benihana', 'Cafe Birdie', 'Harold and Belles Creole Restaurant', 'Gaucho Grill', 'Black Angus', 'PF Changs', 'Romanos Macaroni Grill', 'Buffalo Wild Wings', 'El Torito', 'La Pescadora', 'Taco Guys', 'Sonoras Tacos', 'Sweet Dogs', 'Marios Peruvian Restaurant', 'Ruths Chris Steak House', 'Pho Ha', 'Pho 55', 'NoHo Cafe']

const mapSingleItem = (arr) => {
    return arr.map(el => {
        return [el];
    })
}

const mapCities = (arr, mId) => {
    return arr.map(location => {
        return [location, mId]
    })
}

let metroArr = mapSingleItem(metroList);
connection.query("INSERT INTO metros (metro) VALUES ?", [metroArr], function (err, result) {
    if (err) { console.log('err', err) };
    console.log('result', result);
});

let laArr = mapCities(laCities, 8);
connection.query("INSERT INTO cities (city, metroId) VALUES ?", [laArr], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});

let atlArr = mapCities(atlCities, 1);
connection.query("INSERT INTO cities (city, metroId) VALUES ?", [atlArr], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});

let bosArr = mapCities(bosCities, 2);
connection.query("INSERT INTO cities (city, metroId) VALUES ?", [bosArr], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});

let chiArr = mapCities(chiCities, 3);
connection.query("INSERT INTO cities (city, metroId) VALUES ?", [chiArr], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});

let dalArr = mapCities(dalCities, 4);
connection.query("INSERT INTO cities (city, metroId) VALUES ?", [dalArr], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});

let denArr = mapCities(denCities, 5);
connection.query("INSERT INTO cities (city, metroId) VALUES ?", [denArr], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});

let houArr = mapCities(houCities, 6);
connection.query("INSERT INTO cities (city, metroId) VALUES ?", [houArr], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});

let lvArr = mapCities(lvCities, 7);
connection.query("INSERT INTO cities (city, metroId) VALUES ?", [lvArr], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});
let miaArr = mapCities(miaCities, 9);
connection.query("INSERT INTO cities (city, metroId) VALUES ?", [miaArr], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});
let neworlArr = mapCities(neworlCities, 10);
connection.query("INSERT INTO cities (city, metroId) VALUES ?", [neworlArr], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});
let nyArr = mapCities(nyCities, 11);
connection.query("INSERT INTO cities (city, metroId) VALUES ?", [nyArr], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});
let ocArr = mapCities(ocCities, 12);
connection.query("INSERT INTO cities (city, metroId) VALUES ?", [ocArr], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});
let sfArr = mapCities(sfCities, 13);
connection.query("INSERT INTO cities (city, metroId) VALUES ?", [sfArr], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});
let sdArr = mapCities(sdCities, 14);
connection.query("INSERT INTO cities (city, metroId) VALUES ?", [sdArr], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});
let seaArr = mapCities(seaCities, 15);
connection.query("INSERT INTO cities (city, metroId) VALUES ?", [chiArr], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});


// Populating Restaurants 

let restaurantList = mapSingleItem(restaurantNames);
connection.query("INSERT INTO restaurants (restaurantName) VALUES ?", [restaurantList], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});

// Populating Cuisines

let cuisinesList = mapSingleItem(cuisines);
connection.query("INSERT INTO cuisines (cuisineName) VALUES ?", [cuisinesList], function (err, result) {
    if (err) { console.log('err', err) }
    console.log(result);
});

connection.end();