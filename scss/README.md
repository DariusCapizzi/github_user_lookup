# GitHub user lookup

#### By _Darius Capizzi_

######  _git user lookup is a tool for viewing repos from your favorite git contibutors._

## Description

_git user lookup is an exercise in using JavaScript with dev tools like node, gulp, and bower._

## Setup and Installation Requirements


    In your terminal:

    Clone the repo.

    Make sure you have node installed: node --version

Download it here: [node](https://nodejs.org/en/download/)

    Make sure you have Bower installed: bower --version

sudo npm install bower -g [bower](bower.io)

    Make sure you have gulp installed: gulp --version

    sudo npm install gulp -g

    npm init

    bower install

create a github [personal key](https://help.github.com/articles/creating-an-access-token-for-command-line-use/)

    create a new file in the base of the directory called .env

    in that file create a variable: exports.gitApiToken = <your token>;

      To create a token, visit the Settings area of your GitHub account, select Personal Access Tokens from the sidebar, and hit Generate New Token.

      You will be provided a list of options. Do not check any of them. These options grant additional permissions such as writing or deleting repos, and accessing personal information. Select Generate Token with no options checked to receive a unique access token.

    back in the terminal run: gulp build

    then: gulp serve

    this will automatically run a local file in your default browser and open the root "index.html" in it.

####explore!



## Known Bugs

    No known bugs.

## Support and contact details

    Leave a comment or open an issue here at GitHub for user paul-hess

## Technologies Used
    JavaScript, jQuery, node, gulp, bower
    Sass
    HTML
    CSS

### License

Available for use under the MIT license.
Copyright (c) 2016 **_Darius Capizzi_**
