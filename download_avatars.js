var request = require('request');
var fs = require('fs');
var args = process.argv.splice(2);

var GITHUB_USER = "nuwen";
var GITHUB_TOKEN = "a445d3f49931f7005900f78fcdf58b3f014e8d57";

console.log('Welcome to the GitHub Avatar Downloader!');


function downloadImageByUrl(url, filePath){
  request.get(url).pipe(fs.createWriteStream(filePath));
}

function getRepoContributors(repoOwner, repoName, cb) {
  if(!repoOwner || !repoName) {
    console.log("Invalid input!");
    return;
  }

  // Access to Github API requires a "User-Agent" in the headers
  var options = {
    url: 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': 'GitHub Avatar Downloader - Student Project'
    }
  };
  request(options, cb);
}


getRepoContributors(args[0], args[1], function(err, response, body) {

  var data = JSON.parse(body);

  for(var i = 0; i < data.length; i++){
    var avatarURL = (data[i]['avatar_url']);
    var filePath = ("./avatars/" + data[i]['login'] + ".jpg");
    downloadImageByUrl(avatarURL, filePath);
  }
});
