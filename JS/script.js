// RestaurantPicker - JavaScript
// import yelp from 'yelp-fusion';
const apiKey = 'fW_6556TKC2GeYk0Cnfi2YfcwLTojtDtHr9YJHEdOJP3SuN1hrcvQJnQN-twYvBrdIFOKFsf8jgS8vfgBE__M8-Xjwc9NUqjS_BJk23ErfSIjKjkXrkiTLSeyMnUXHYx';
// const client = yelp.client(apiKey);

function additionalInformation() {
    $('#header').css('display', 'none');
    $('#btnPick').css('display', 'none');
    $('#additionalInformation').css('display', 'block');
}

function SearchRestaurants(city, foodType) {
    const searchRequest = {
        term: 'Four Barrel Coffee',
        location: 'san francisco, ca'
    };

    client.search(searchRequest).then(response => {
        const firstResult = response.jsonBody.businesses[0];
        const prettyJson = JSON.stringify(firstResult, null, 4);
        console.log(prettyJson);
    }).catch(e => {
        console.log(e);
    });
}

function PickRestaurant() {
    $('#header').css('display', 'none');
    $('#btnPick').css('display', 'none');

    allPossibleRestaurants = [
        "Italian Pizza Shoppe",
        "Baker's Square",
        "Panera",
        "On's Kitchen Thai Cuisine",
        "Perkins",
        "Punch Pizza",
        "Blaze Pizza",
        "Hong Kong Noodle",
        "Stewart's",
        "Wendys",
        "Subway",
        "Canes",
        "Chick Fil A",
        "Ichiddo Ramen",
        "D.P. Dough",
        "Ze's Diner",
        "Noodles & Company",
        "Brueggers",
        "Peppers & Fries",
        "Merlin's Rest Pub",
        "Blue Door Pub",
        "The Nook",
        "Davanni's",
        "The Naughty Greek",
        "Indochin Vietnamese Restaurant",
        "Groveland Tap",
        "Cossettas",
        "Afro Deli",
        "Buca Di Beppo",
        "Snuffy's Malt Shop",
        "Cleveland Wok",
        "Rah'mn",
        "Patrick McGovern's Pub",
        "Piada",
        "Himalayan Restaurant",
        "Brasa Premium Rotisserie",
        "Pizza Luce",
        "Moto-i",
        "Zen Box Izakaya",
        "The Dubliner Pub",
        "Panda Express",
        "Domino's",
        "Happy Gnome"
    ];

    var restaurantIndex = Math.floor(Math.random() * allPossibleRestaurants.length);

    $("#restaurant").text(allPossibleRestaurants[restaurantIndex]);

    $('#additionalInformation').css('display', 'none');
    $('#pickedRestaurant').css('display', 'block');

    return possibleRestaurants[restaurantIndex];
}

function PickRestaurantWithFilters() {
    $('#header').css('display', 'none');
    $('#btnPick').css('display', 'none');

    american = [
        "Stewart's",
        "Wendys",
        "Subway",
        "Canes",
        "Chick Fil A",
        "Peppers & Fries",
        "Merlin's Rest Pub",
        "Blue Door Pub",
        "The Nook",
        "Groveland Tap",
        "Snuffy's Malt Shop",
        "Patrick McGovern's Pub",
        "The Dubliner Pub",
        "Happy Gnome"
    ];

    breakfast = [
        "Baker's Square",
        "Panera",
        "Perkins",
        "Ze's Diner",
        "Brueggers"
    ];

    chinese = [
        "Hong Kong Noodle",
        "Cleveland Wok",
        "Pizza Luce",
        "Panda Express"
    ];

    italian = [
        "Italian Pizza Shoppe",
        "Punch Pizza",
        "Blaze Pizza",
        "D.P. Dough",
        "Noodles & Company",
        "Davanni's",
        "Cossettas",
        "Buca Di Beppo",
        "Piada",
        "Domino's"
    ];

    other = [
        "On's Kitchen Thai Cuisine",
        "Ichiddo Ramen",
        "The Naughty Greek",
        "Indochin Vietnamese Restaurant",
        "Afro Deli",
        "Rah'mn",
        "Himalayan Restaurant",
        "Brasa Premium Rotisserie",
        "Moto-i",
        "Zen Box Izakaya"
    ];

    var foodType = $("#foodType option:selected").val();
    var restaurantIndex = 0;

    if (foodType == 'american') {
        restaurantIndex = Math.floor(Math.random() * american.length);
        $("#restaurant").text(american[restaurantIndex]);
    }
    else if (foodType == 'breakfast') {
        restaurantIndex = Math.floor(Math.random() * breakfast.length);
        $("#restaurant").text(breakfast[restaurantIndex]);
    }
    else if (foodType == 'chinese') {
        restaurantIndex = Math.floor(Math.random() * chinese.length);
        $("#restaurant").text(chinese[restaurantIndex]);
    }
    else if (foodType == 'italian') {
        restaurantIndex = Math.floor(Math.random() * italian.length);
        $("#restaurant").text(italian[restaurantIndex]);
    }
    else if (foodType == 'other') {
        restaurantIndex = Math.floor(Math.random() * other.length);
        $("#restaurant").text(other[restaurantIndex]);
    }

    $('#additionalInformation').css('display', 'none');
    $('#pickedRestaurant').css('display', 'block');
}