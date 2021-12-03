let request = require('request');

let fetchBreedDescription = function(breedName, callback) {
  let path = 'http://api.thecatapi.com/v1/breeds/search?q=';
  let urL = path + breadName;

  request(urL, (error, description, body) => {
    if (error) {
      callback(error, null);
    } else if (body) {
      let data = JSON.parse(body);
      if (data.length === 0) {
        callback(error, null);
      } else {
        let description = data[0].description;
        callback(null, description);
      }
    }
    console.log("error:", error);
    console.log('body:', body);
    console.log(typeof body)
    console.log(data);
    console.log(data[0].description);
  });
}
module.exports = {
  fetchBreedDescription
};