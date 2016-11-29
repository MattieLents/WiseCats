angular.module('wisecats.factories', [])

.factory('MakeCats', function ($http) {

  var getPic = function () {
    return $http({
      method: 'GET',
      url: "http://thecatapi.com/api/images/get?format=html"
    })
    .then(function (catHTML) {
      console.log(catHTML)
      console.log("CATHTML", catHTML.data.match(/src="(http.*[\.jpg|\.png|\.gif])/i)[1]);
      var imgSource = catHTML.data.match(/src="(http.*[\.jpg|\.png|\.gif])/i)[1];
      return imgSource;
    });
  };

  var getQuote = function () {
    return $http({
      method: 'GET',
      url: '/api/quote'
    })
    .then(function (resp) {
      // sending back only the quote itself
      return resp.data.quoteText || "ERROR";
    });
  };


  return {
    getPic: getPic,
    getQuote: getQuote
  };
})
