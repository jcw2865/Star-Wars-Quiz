# Star Wars Quiz

The purpose of this project was to build a timer-based quiz that stores high scores using client-based storage, HTML, CSS, JavaScript, and JQUERY. The criteria for a succesful quiz is as follows:

* User arrives at the home/welcome/start page and is prompted to start the quiz. Home page needed to include a navigation bar with a link to view high scores and visibility of the timer.

* Clicking the button to start the quiz would then present the user with the first question. Additionally the timer should begin to count down upon beginning the quiz. 

* Score was to be based on not only choosing the correct answers, but upon how long it took to answer each question. Choosing incorrectly would penalize the user a certain amount of time. 

* When the time runs out or the user answers all questions, the user is presented their score and prompted to enter their initials for storage in the high score keeper. 

* User can then choose to take the quiz again or view high scores. 

* Entire project should be dynamic and responsive to multiple screen sizes. 

## Getting Started

The deployed project should look like this.

![DeployedProject](screenshot.png)

Below is the link to the project repository followed by the link to the live website. 

https://github.com/jcw2865/Star-Wars-Quiz

https://jcw2865.github.io/Star-Wars-Quiz/

### Development

Below are the steps I took to create the project as it is so far. Understanding the project is still incomplete at its current stage, it has still been a very useful exercise. I definitely gained a greater understanding of JS and JQUERY in the process. 

1. Created index.html, style1.css, questions.js, and script.js. 

2. General HTML document structure added to index.html. 

3. Bootstrap styling, style1.css, questions.js, and script.js linked to index.html. 

4. Variables that I knew I needed were created and console.log'd for verification. 

5. Event listeners created for clicking buttons.

6. Loops created inside of event listeners in an attempt to keep my code DRY (and not repeat myself). 

7. From this point on, it was a long road of "plug-and-play": running the code, looking at the inspector feedback, and adjusting as I thought best.

## Testing

Similar to previous projects, after creating variables and functions I would follow them with either a console.log() or alert() of some kind to verify they worked. During my testing I ran into numerous issues involving scope (i.e. declaring variables and functions inside of one another rather than globally). Since this was my first attempt at using JQUERY, I also unintentionally mixed JS and JQUERY lexicon, which was a good learning experience after correcting. 

## Deployment

This program can be deployed using most internet browsers via the links in the "Getting Started" section. 

## Built With

* [VSCode](https://code.visualstudio.com/)
* [Bootstrap](https://getbootstrap.com/)
* [W3Schools](https://www.w3schools.com/)
* [MDN](https://developer.mozilla.org/en-US/)
* [GoogleChrome](https://www.google.com/chrome/) - Used for inspector tool and validating the program during development. 

<!-- ## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us. -->

## Authors

* **Jake Walker** - [jcw2865](https://github.com/jcw2865)

<!-- See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project. -->

<!-- ## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details -->

## Acknowledgments

* The advisors, instructors, and TAs at the Coding Bootcamp at the University of Texas at Austin
* Tutoring staff at Trilogy (specifically David Hammond who helped in crunch time)
* Fellow classmates at the Coding Bootcamp at UT-Austin
* Friends in the industry
