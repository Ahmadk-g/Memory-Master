# Memory Master


Welcome to Memory Master, a captivating game designed to challenge and enhance your memory skills! 

Embark on a journey through increasingly complex levels, where your task is to match pairs of cards hidden beneath their backs. But beware, as the grid becomes larger and the cards more numerous, your memory will truly be put to the test. With vibrant visuals, intuitive gameplay, and stimulating challenges, Memory Master promises hours of fun and mental stimulation.

So, sharpen your focus, exercise your recall, and prepare to become the ultimate Memory Master!

![Responsice Mockup](https://github.com/Ahmadk-g/Memory-Master/blob/main/assets/images/screenshots/am-i-responsive.png)


## Key Project Goals

Develop a user-friendly game interface that:  
- Stimulates and enhances memory skills through engaging gameplay and challenging puzzles.
- Ensures accessibility for players of all ages and skill levels.
- Provides progressively challenging levels to keep players engaged.
- Offers an aesthetically pleasing gaming environment with soothing colors, to avoid overstimulation.


## Target Audience 

- Individuals of various age groups who enjoy puzzle games and seek to challenge and improve their memory skills.


## Player and User Stories

 ### Player Story
  - I want to be able to select the game mode (Gradual Challenge or Chosen Difficulty) before starting a new game.
  - I want to see my current score or time displayed prominently during gameplay.
  - I want to be able to flip cards to find matching pairs and advance to the next level.
  - I want to be able to return to the home screen at any time.


 ### User Story
  - I want to be able to access the rules of the game from the home screen to understand how to play.
  - I want the game difficulty to increase gradually as I progress through levels in the Gradual Challenge mode.
  - I want the game to end and display a "Game Over" message if I exceed the maximum number of mistakes allowed.
  - I want to see my best time or highest win streak recorded and displayed for each game mode.

## Design 

 ### Fonts
  - The font utilized for headers and body text is "Times".
  - The font used for the text in buttons is 'Ariel'.


 ### Color Scheme 

  - The color palette for the game environment was strongly influenced by [SheCodes](https://palettes.shecodes.io/).
  - The colors used for the environment vary betweem #639a67, #d8ebb5, #d9bf77, and #530c0c.

    <img src="https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/palette.png " alt="color-palette" width="200px" height="80px">

  - The text color alternates between (#530c0c) for light backgrounds and (#d9bf77) for darker backgrounds.
  - The background colors of buttons consist of deep shade of red brown, transitioning to golden when hovered over.

  <img src="https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/button.png " alt="button view" width="150px" height="80px">

  <img src="https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/hover-button.png " alt="hovered over button view" width="150px" height="80px">


## Features 

Our website includes various features that enhance its usability and promote a friendly user experience to help you navigate through our vision.

### Existing Features

### Home screen  

  - The Home screen includes a button to access the rules window, a challenging question, game mode options, and the 'Best Time' score for the "Gradual Challenge" game mode.
  <!-- - The "Gradual Challenge" game mode gradually increases the difficulty after winning each of the three levels. Players compete against the clock, aiming to finish all three levels in a new best time. -->
  <img src="https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/homescreen.png " alt="Home Screen" width="300px" height="400px">

  - Clicking the "Choose Difficulty" button reveals a new section presenting three different difficulty levels: Easy, Medium, and Hard.
  - When users access the various difficulty levels, a section displaying the highest win streaks appears beneath each level. 

  <img src="https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/homescreen-levels.png " alt="Game Screen Levels Button" width="300px" height="400px">
  


- __Rules button__

  - Displayed on both the Home screen and within the game screen, this feature aims to enhance user-friendliness by providing the option for players to access the game rules at any given moment.
  - Displayed as "Rules" on the Home screen and represented by an "i" icon for information in the game screen.


    <img src="https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/rule-button.png " alt="Rule Button" width="100px" height="60px">

    <img src="https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/info-button.png " alt="info Button" width="100px" height="60px">

    <!-- ![Rule Button](https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/)
    ![Info Icon Button](https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/info.png) -->



- __Rules Window__

    - This section contains the game rules and is only visible when the user clicks on the "Rules" button.
    - When accessed from Home screen, a "Back" button is displayed, while if accessed during gameplay, a "continue" button is displayed.


    <img src="https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/rulewindow.png " alt="Rule Window" width="300px" height="400px">
    <!-- ![Rule Window](https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/rulesWindow.png) -->



### Game Screen

 - This page appears after selecting a game mode. Ths is when the game starts.

    <img src="https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/gameon.png " alt="Game Page" width="250px" height="400px">

 - Initial Reveal:
  At the beginning of the game, all cards are flipped face-up, giving the user the opportunity to memorize their positions.

    <img src="https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/reveal.png" alt="Reveal" width="250px" height="400px">
    <!-- ![Reveal](https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/initialflip.png) -->

    
  - This page differs between the two main game options in one aspect: in the Gradual Challenge game mode, a timer appears on the top right, while in the Chosen Difficulty mode, a win score is displayed on the top right.
  
  - Gradual Challenge mode:

    <img src="https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/timer.png " alt="Gradual Challenge Mode" width="300px" height="140px">
    <!-- ![Gradual Challenge mode](https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/timer.png) -->

  - Difficulty Levels:

    <img src="https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/win-score.png " alt="Difficulty level" width="300px" height="140px">
    <!-- ![Diffiuclty levels](https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/winScore.png) -->

## Game Play


- __How it works__
    
    - Each time a new game starts, players are presented with a grid of shuffled cards.
    - Players flip over two cards at a time, attempting to find matching pairs of symbols or images. They must rely on their memory to remember the locations of the cards.
    - If two flipped cards match, the cards remain locked in the flipped position. If they do not match, they flip back face down and in increment the "lives" score.
    <br>
    <img src="https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/match.png " alt="Difficulty level" width="250px" height="400px">
    <br>
    - If the user reaches the maximum limit of mistakes (lives), the game ends with a "Game Over" message, and the user is returned to the home screen.
    <br>
    <img src="https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/gameover.png " alt="Game over" width="240px" height="180px">



### Winning, Scoring, and Losing

- __Difficulty Level__

    - When playing at a chosen difficulty level, each time the player successfully matches all cards and wins the game, the win score is increased by 1, and a new game begins.
    <br>
    <img src="https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/total-winscore.png " alt="total win score" width="150px" height="50px">

    - The user can keep playing games as long as they don't lose by reaching the mistakes limit.

    - If the user presses the back button or loses the game, the highest win streak (shown in the home screen) for that particular level will be compared to the total number of wins achieved by the player. If the player had just achieved a higher score for consecutive game wins, the highest win streak will be updated. Otherwise, it will remain unchanged if the new win streak is lower than the previous highest win streak.

    <br>

    <img src="https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/zero-win-streak.png " alt="zero winstreak" width="370px" height="95px">

    <img src="https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/win-streak.png " alt="updated winstreak" width="370px" height="95px">
    <br>
    - Additionally, the number of lives varies based on the difficulty level: 3 for easy, 4 for medium, and 5 for hard.


- __Gradual Challenge__

   -  In the "Gradual Challenge" game mode, the game introduces the player with the first level, which is the easiest.

   - The timer starts counting from zero as the game begins. 

     <img src="https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/play-time.png " alt="timer" width="115px" height="50px">

   - Similar to the other game mode, players win and progress to the next level by matching all pairs. However, in this mode, the game gradually increases in difficulty as players advance through easy, medium, and hard levels. If the player completes all three levels without losing, the timer at the end is compared to the best recorded time for winning this mode.

    - Upon completing all three levels without losing, a pop-up message saying "You did it" along with the game's ending time will be displayed before returning to the home screen.

    <img src="https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/did-it.png " alt="Game over" width="240px" height="180px">

   - If a faster time was achieved, the "Best Time" will be updated in the homescreen.

    <img src="https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/best-time.png " alt="timer" width="300px" height="78px">


- __Both modes__

    - After the player successfully completes a level by matching all pairs, a pop-up message saying "Keep going" appears before advancing to the next level and starting a new game.

    <img src="https://github.com/Ahmadk-g/MEMORY-MASTER/blob/main/assets/images/screenshots/keep-going.png " alt="timer" width="300px" height="100px">



### Features that can be implemented in the future

- User can create a username and track their score.

# Testing 

## Validator Testing

### HTML Validator

No Errors were returned when passing through [W3C validator](https://validator.w3.org/#validate_by_input).

- [Home Page results](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fahmadk-g.github.io%2FCodeinsitute-PP1%2Findex.html)

  ![Home Page validator](https://github.com/Ahmadk-g/Codeinsitute-PP1/blob/main/assets/images/screenshots/index-valid.png)

- [Services Page results](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fahmadk-g.github.io%2FCodeinsitute-PP1%2Fproduct.html)

  ![Services Page validator](https://github.com/Ahmadk-g/Codeinsitute-PP1/blob/main/assets/images/screenshots/product-valid.png)

- [Contact Page results](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fahmadk-g.github.io%2FCodeinsitute-PP1%2FContact.html)

  ![Contact Page validator](https://github.com/Ahmadk-g/Codeinsitute-PP1/blob/main/assets/images/screenshots/contact-valid.png)

### CSS Validator

No Errors were returned when passing through [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/).

- [Validator Results](https://jigsaw.w3.org/css-validator/validator#css)

  ![CSS validator](https://github.com/Ahmadk-g/Codeinsitute-PP1/blob/main/assets/images/screenshots/css-valid.png)

## Lighthouse Performance Check

Lighthouse in Chrome Developer Tools was used to check performance.

- __Mobile Performance Results__

![Mobile lighthouse results](https://github.com/Ahmadk-g/Codeinsitute-PP1/blob/main/assets/images/screenshots/mobile-lighthouse.png)

- __Desktop Performance Results__

![Desktop lighthouse results](https://github.com/Ahmadk-g/Codeinsitute-PP1/blob/main/assets/images/screenshots/desktop-lighthouse.png)


## Manual Testing

All the points features mentioned below were tested manually.

- All buttons function correctly, redirect user as intended
- Timer works properly and Best time is updated when expected
- Highest win streaks for different levels are upgraded when expected
- All game modes function as expected

## Unfixed Bugs

- The timer sometimes lags and skips numbers when the game is opened on different browsers.


## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://ahmadk-g.github.io/Memory-Master/index.html


## Credits 

### Code

 - Cards are displayed as a Grid, source [css-tricks](https://css-tricks.com/introduction-fr-css-unit/).
 - Arrow function was used often in Js code [w3schools](https://www.w3schools.com/js/js_arrow_function.asp).
 - forEach() method of Array instances [mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).
 - For the timer, JavaScript setInterval() was used. [programiz](https://www.programiz.com/javascript/setInterval).
 - Many sections were styled with CSS Inner Shadow (box-shadow:inset). Code copied from [Dev](https://devdevout.com/css/css-inner-shadow).
 - Text Shadow was used for the End of Game text. sourced from [mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)

### Icons

 -  Info Icon in Game screen was taken from [Fontawesome](https://fontawesome.com/search).

 <!-- - Icon for Favicon was taken from [Freepik](https://www.freepik.com/).
 - Favicon folder of various sizes was created via [Favicon generator](https://www.favicon-generator.org/). -->

### Media

 - Images as the card Values are downloaded from [Flaticon](https://www.flaticon.com/).
 - [ui.dev](https://ui.dev/amiresponsive) was used to get a responsive image for README.

### Content

 - I, the author, have written all the content on the website.

### Other

 - README structure and reference from [imagine3D](https://ahmadk-g.github.io/Codeinsitute-PP1/index.html).
 - `<img>` attribute was used to declare images in the README to be able to control the sizes.



