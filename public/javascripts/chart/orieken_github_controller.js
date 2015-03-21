var orieken = {
    "login": "orieken",
    "id": 626030,
    "avatar_url": "https://avatars.githubusercontent.com/u/626030?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/orieken",
    "html_url": "https://github.com/orieken",
    "followers_url": "https://api.github.com/users/orieken/followers",
    "following_url": "https://api.github.com/users/orieken/following{/other_user}",
    "gists_url": "https://api.github.com/users/orieken/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/orieken/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/orieken/subscriptions",
    "organizations_url": "https://api.github.com/users/orieken/orgs",
    "repos_url": "https://api.github.com/users/orieken/repos",
    "events_url": "https://api.github.com/users/orieken/events{/privacy}",
    "received_events_url": "https://api.github.com/users/orieken/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Oscar Rieken",
    "company": null,
    "blog": "www.thechort.com/blog",
    "location": "Atlanta, Ga",
    "email": "oriekenjr@gmail.com",
    "hireable": true,
    "bio": null,
    "public_repos": 64,
    "public_gists": 2,
    "followers": 15,
    "following": 25,
    "created_at": "2011-02-18T21:49:13Z",
    "updated_at": "2015-02-25T12:54:28Z"
};

profileApp.controller("OriekenGithubController", function($scope) {
    $scope.github_orieken = JSON.stringify(orieken);

});