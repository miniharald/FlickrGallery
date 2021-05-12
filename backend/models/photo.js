const fetch = require("node-fetch");

async function getPhotosByPage(page) {
  let result;
  await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.KEY}&tags=${process.env.TAG}&page=${page.pageNr}&format=json&nojsoncallback=1`)
  .then(res => res.json())
  .then(res => result = res.photos);;
  return result;
}

module.exports = {
  getPhotosByPage
};