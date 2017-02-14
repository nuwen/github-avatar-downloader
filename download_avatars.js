var request = require('request');

var GITHUB_USER = "nuwen";
var GITHUB_TOKEN = "a445d3f49931f7005900f78fcdf58b3f014e8d57";


console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {

  var requestURL = {
    url: 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': 'GitHub Avatar Downloader - Student Project'
    }
  };
  request.get(requestURL)
         .on('error', function(err) {
           console.log("ERROR");
         })
         .on('response', function(response) {
           console.log("STATUS ERROR: " + response.body);
         })
         .on('data', function(data) {
           console.log(data);
         });

    // console.log(requestURL);
    // console.log(body);
}



getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("errors:", err);
  console.log("reults:", result);
});

//
