# Rock Paper scissors Lizard Spock Game

The Rock Paper scissors Lizard Spock Game is intended for everyone to try out. The purpose of the game is to allow the user to play against the computer and it's elements of chance. 

<p align="center">
<img src="https://res.cloudinary.com/di2tcadpv/image/upload/v1652255988/Rock%20Paper%20Scissors%20Lizard%20Spock%20GAme/homePage_dl6uqq.png"  alt="Home Page of the Rock Paper Scissors Lizard Spock Game ">
</p>

<p align="center">
<img src="https://res.cloudinary.com/di2tcadpv/image/upload/v1652257871/Rock%20Paper%20Scissors%20Lizard%20Spock%20GAme/result_lhgore.png"  alt="Result ">
</p>

## Features 

The Rock Paper scissors Lizard Spock Game displays the Players score and the Computers score. The title of the game is placed in between the two score boards to segregate the players. On the main page, there are tokens that display each of the choices available to the Players.Once a token is selected, a function will run to decide whether the Players token wins or looses. The page will change and display who won or lost in that round and then gives the user an option to reset the scoreboards.

### Existing Features

- __Tokens__

  - The tokens on the main page are responsive and provide the user to an outcome of either Win or loose.

- __The Footer__ 

  - The footer section includes the rules to the Rock Paper scissors Lizard and Spock game.


## Testing 

I checked the game on other browsers eg. Firefox, Microsoft Edge and window operates as it should.

I tested each token by labelling each out-come to that specific token and results returned correct.

I confirmed the colors and fonts are easy to read and accessible by running it through lighthouse.

<p align="center">
<img src="https://res.cloudinary.com/di2tcadpv/image/upload/v1652256652/Rock%20Paper%20Scissors%20Lizard%20Spock%20GAme/lighthouse_bahxbj.png" width=" " height=" "  alt=" ">
</p>

### Validator Testing 

- HTML
  - A few errors were found when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
  - These errors would include not adding the Alt element when adding the pictures of the tokens.
  - I had src tags empty in two locations.
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)

- JavaScript
 - A few errors were found when passing through the official [https://jshint.com/]
 - Errors found in the code related to missing semi colons in some the If Statements in the code. 

### Unfixed Bugs

Javascript errors were not cleared as when i input the missing semi colons the Increment Functions increases score incorrectly.

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-running-2.0/index.html 


## Credits 

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism. 

You can break the credits section up into Content and Media, depending on what you have included in your project. 

### Content 

- Instructions on how to implement a couple of the functions were gotten from a Github repository [https://github.com/CleverProgrammers/challenge-rock-paper-scissors-game]


### Media

- The photos of the tokens were found in Google Images.

