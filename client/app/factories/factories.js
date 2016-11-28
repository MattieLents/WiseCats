angular.module('wisecats.factories', [])

.factory('MakeCats', function ($http) {

  var getImage = function () {
    return $http({
      method: 'GET',
      url: 'https://thecatapi.com/api/images/get'
    })
    .then(function (resp) {
      console.log('Images resp: ',resp)
      return resp.body;
    });
  };

  var getQuote = function () {
    return $http({
      method: 'GET',
      url: 'https://api.forismatic.com/api/1.0/get?method=getQuote&format=json&lang=en'
    })
    .then(function (resp) {
      console.log('Quotes resp: ',resp)
      return resp.body.quoteText;
    });
  };


  return {
    getImage: getImage,
    getQuote: getQuote
  };
})
