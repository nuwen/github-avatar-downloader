var request = require('request');


var GITHUB_USER = "nuwen";
var GITHUB_TOKEN = "9ed0a3253cdee659cb7e3ece6134bed8dc76b0a8";


console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {

  var requestURL = 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL);
  // request(requestURL, (err, response, body) => {
  //   if (err || response.statusCode !=200) {
  //     cb(err || "Status code was not 200");
  //     return;
  //   }
  //
  //   const beers = JSON.parse(body).data;
  //

}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("errors:", err);
  console.log("result:", result);
});
