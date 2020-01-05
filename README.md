<div align="center">

![Igala Facts](img/IgalaFacts.png)

A web/progressive app that lets you know real and interesting facts about Igala.

There is also Google Chrome Extension which is available <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" width="15" /> [Here](https://github.com/IgalaDigital/Igala-Facts-Extension)

Submit a/your Fact [here](https://forms.gle/bhvK7nVyU3DQDrwz7)

![Igala Facts Demo](img/screen.gif)
</div>

# Contributors Guide

### Prerequisites
- Git or any equivalent Version Control System (GitKraten, GitHub Desktop e.t.c)
- Code Editor (VsCode, Atom e.t.c)
- Little Bash command line knowledge
- Basic JavaScript knowledge

### Getting Started

1.  If you are new to Git and Github, it is advisable you go through
    [GitHub For Beginners](http://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1/)
    before moving to the next step.
    
2.  Fork the Repository [here](https://github.com/IgalaDigital/Igala-Facts)

3.  Clone the forked Repository <br>
`$ git clone https://github.com/IgalaDigital/Igala-Facts.git`

4.  Enter the cloned directory <br>
`cd Igala-Facts`

5.  Open directory in your Code Editor <br>
`code .`

6.  Open the index.html file

All Facts are stored in JS file which can be found here `js/app.js`
Facts are stored in this format
```
[
    {
	"author": "Ilemona",
        "quote": "Did you know that Gov Yahaya Bello is now the onu ogwu of igala land?. - Demo Fact"
    }
]
```
To add a new Fact this Extension; you need to add the Fact to the `JS file`

## STEP ONE
- Every Fact has a designated number, so check the number of the last fact before we proceed
- You should have your fact and publisher name already
- Facts are in this format
```
{
	"author": "Ilemona",
        "quote": "Did you know that Gov Yahaya Bello is now the onu ogwu of igala land?. - Demo Fact"
},
```
- The last fact does not end with a `,` after the curly brackets `}`
- Any fact before the last facts ends with a `,`
- To add your fact; first add a `,` to the last fact after the curly bracket `}`
- Copy and paste this code after the last fact before the `]`
```
{
	"author": "Ilemona",
        "quote": "Did you know that Gov Yahaya Bello is now the onu ogwu of igala land?. - Demo Fact"
}
```
- Now edit that code snippet to show your own fact; <br>
(Change the number to the last number, add your Publisher name and Fact)


## STEP TWO
- Push your files <br>
```shell
$ git add --all
$ git commit -m "commit description here"
$ git push -u origin master
```
- Open a Pull Request ( [What is a pull request?](https://yangsu.github.io/pull-request-tutorial/) )
- Add enough description of what you did, changes you made and if possible screenshots
- Wait for Review (Your PR would be reviewed and merged if deemed fit)

## Helpful Resources

- [Pro GIT Book](https://git-scm.com/book/en/v2)

- [Try Git](https://try.github.io/)

- [Git/ Git Hub on Windows](https://www.youtube.com/watch?v=J_Clau1bYco)

If you are not a Developer and still want to add a/your Fact to this Application fill [this form](https://forms.gle/bhvK7nVyU3DQDrwz7) and it would be added.
    
This Guide is Open for Updates, if you feel it is not complete or you have ideas of what should be added, Follow the same format above.
This file is stored in `README.md`
Update as you deem fit and send a Pull Request.

## Author
[IgalaDigital](https://github.com/IgalaDigital)

## Licence
[MIT](https://opensource.org/licenses/MIT)
