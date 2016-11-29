angular.module('wisecats.factories', [])

.factory('MakeCats', function ($http) {

  var getPic = function () {
    return $http({
      method: 'GET',
      url: "//thecatapi.com/api/images/get?format=html"
    })
    .then(function (catHTML) {
      var imgSource = catHTML.data.match(/src="(http.*[\.jpg|\.png|\.gif])/i)[1];
      return imgSource;
    })
    .then(function (imgSource) {
      return $http({
        method: 'GET',
        url: '/api/image',
        params: {imgSource: imgSource}
      })
    })
    .then(function (res) {
      if (res.status === 200) {
        return res.config.params.imgSource;
      }
    })
    .catch(function (err) {
      console.log(err);
      return "//16749-presscdn-0-94.pagely.netdna-cdn.com/wp-content/uploads/2016/09/Hotel-Cat-weight-Stru_Libb-1024x544-670x0-c-default.jpg";
    })
  };

  var getQuote = function () {
    return $http({
      method: 'GET',
      url: '/api/quote'
    })
    .then(function (resp) {
      return resp.data.quoteText || "ERROR";
    });
  };

  var getCatName = function (callback) {
    var catNames = ["Kitty", "Tiger", "Smokey", "Shadow", "Tigger", "Baby", "Princess", "Max", "Bella",
      "Angel", "Oreo", "Buddy", "Gizmo", "Sassy", "Midnight", "Simba", "Patches", "Precious", "Lucky", "Lucy", "Chloe",
      "Boots", "Charlie", "Jack", "Callie", "Pepper", "Sammy", "Fluffy", "Missy", "Molly", "Kiki", "Daisy", "Oliver", "Sophie",
      "Cleo", "Lily", "Garfield", "Gracie", "Cali", "Milo", "Pumpkin", "Felix", "Sasha", "Toby", "Jasper", "Sam", "Misty", "Bailey",
      "Peanut", "Ginger", "Oscar", "Rocky", "Jasmine", "Mittens", "Simon", "Bandit", "Lilly", "Coco", "Boo", "Harley", "Luna",
      "Mimi", "Cookie", "Salem", "Abby", "Snowball", "George", "Snickers", "Leo", "Nala", "Smudge", "Casper", "Sugar", "Miss kitty",
      "Buster", "Cuddles", "Maggie", "Trouble", "Lola", "Rascal", "Samantha", "Zoey", "Scooter", "Sadie", "Tinkerbell",
      "Bear", "Willow", "Dusty", "Spooky", "Whiskers", "Zoe", "Chester", "Mia", "Muffin", "Bob", "Socks", "Loki", "Sheba", "Snuggles",
      "Jinx"
    ];
    var randIndex = Math.floor(100 * Math.random());
    var name = "-" + catNames[randIndex];

    return callback(name);
  }


  return {
    getPic: getPic,
    getQuote: getQuote,
    getCatName: getCatName
  };
})
