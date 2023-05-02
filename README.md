# SVG Logo Maker (DESCRIPTION):

In this project I am challenged with the task of using Node and object oriented programming to create an .SVG using prompts in the terminal.
It utilizes inquirer and jest testing.
The user will start the application and be prompted with questions: <br> 
-Enter up to 3 characters<br>
-What color would you like your text to be?<br>
-What shape would you like? LIST: Circle, Triangle, Square.<br>
-What color would you like your shape to be?<br>
The user will answer all of the prompts and continue on with the automatic creation of an SVG.
I have not fully completed the project as it does not generate what the user is answering in the prompts, it does however create the file.

# Instructions:<br>

1. Clone this repo.<br>
2. Install node.js (consult documentation).<br>
3. After installation, in your terminal run the command: npm init -y to initialize/create your package.json file.<br>
4. Run the command in the terminal: npm i<br>
5. To run the application run the command: node index.js


### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```


# Links(screen recording):<br>
GitHub URL: https://github.com/TheMaddoxJ/SVG-Maker <br>
Walkthrough Video URL: https://drive.google.com/file/d/1F5iETMExIEU8lR9sna3naChpmyykSEeI/view <br>
QR Code: ![qr-code](https://user-images.githubusercontent.com/123782105/235561024-763b468a-4ba3-4b52-8748-87d8d866c1f3.png)



# License:<br>
MIT License
