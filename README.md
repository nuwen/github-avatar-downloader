# GitHub Avatar Downloader

## Problem Statement

Given a GitHub repository name and owner, download all the contributors' profile images and save them to a subdirectory, `avatars/`.

## Expected Usage

This program should be executed from the command line, in the following manner:

`node download_avatars.js jquery jquery`

... (whatever else you'd like to include)

## Dependencies

- Request

## Considerations

request from <https://USERNAME:KEY@api.github.com/repos/REPOOWNER/REPONAME/contributors>

Github Token Used: 9ed0a3253cdee659cb7e3ece6134bed8dc76b0a8

Github API Access requires a USER-AGENT in the headers when making a request, example below:

```javascript
var options = {
  url: 'https://' + GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
  headers: {
    'User-Agent': 'GitHub Avatar Downloader - Student Project'
  }
};
```
