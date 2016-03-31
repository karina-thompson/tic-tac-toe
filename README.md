# Tic Tac Toe - Pretzels and Donuts

This is my first project for General Assembly Melbourne Web Development Immersive (WDI6), in week 3 of the 12 week course.

Written using HTML, CSS and Javascript.

###The Game

This is a simple tic tac toe, or noughts and crosses, game to be played by two players at the same computer.
To win, a player must get 3 in a row in any direction. 
The game keeps track of multiple rounds, which can be reset at any time.

[Play the Game!] (http://nakarielle.github.io/tic-tac-toe/)

###My approach

- I started with a basic HTML and CSS mock up that rendered a game board on the screen, and used a Javascript array to get track of the game behind the scenes.
- Once the basic game was working, I decided to improve the design by using images of donuts and pretzels instead of X's and O's. This presented a few challenges (inserting an image directly into the squares meant I couldn't keep track of whether a square had been clicked on already - the click target became the image, not the div. This was solved by changing the div's class and insetting a background image in CSS).
- The colour scheme was kept looking cohesive using online material design colour palette resources.
- The marker for whose turn it is and the win counters were later additions to add functionality.
- The reset button uses Math.random to see which player starts.
- I have tried to make it responsive using a media query in my CSS file, placing the bottom buttons on top of each other rather than all across one line when the browser window is narrow.
- Some other challenges I had to solve while making the game were: wokring out how to turn the eventListener off once a game is won to prevent further moves and putting loops into my checkWinner function to avoid long lines of if/else checking every possible winning combination.
- The reset button uses Math.random to see which player starts.

[My Github Repository for this Project] (https://github.com/nakarielle/tic-tac-toe) 


###Posible future directions for this project

- Adding in a mode where one player can play against the computer.
- Allowing a player to select their playing token.
- Allowing a player to choose board size (this would mean the board would need to be generated in Javascropt, not coded into the HTML).



