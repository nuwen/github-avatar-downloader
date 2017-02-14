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
           console.log("STATUS CODE: " + response.statusCode);
         });

  request(requestURL, cb);
}



getRepoContributors("jquery", "jquery", function(err, response, body) {
  var data = JSON.parse(body);
  for(var i = 0; i < data.length; i++){
    console.log(data[i]['login']);
  }
});

//
