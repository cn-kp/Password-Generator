# Creating a Random Password Generator

This weeks homework I have created a random password generator, that allows for the user to input the desired length and character sets used to generate this password. 

## User Story

As a user, I want to be able to run an application that randomly generates a password based on my desired length and character sets. When I click on generate password, I want to be prompted with a password length, confirm weather I want lowercase, uppercase, numbers and special symbols as spilt out a random password each time I press the button. This is done so the user can generate numerous password based on a certain criteria. 

As a developer, I want to create a working code that meets all the user's requirements and generate a password based on the needs of the user. In addition, the code should be semantic and concise with descriptive comments about my thought process.

## Acceptance Criteria

Whenever the User requires a new password, they can simply open the html page and click "generate a password".
When this is done, the user will be prompted to entering their desired length of password. If the input is not a value between 8 and 128 (8 <= password_length <= 128 ), then the user will be alerted that it is not a valid value and will run the function again.
After, the user will be required to confirm a set of conditions ie "if they would like the password to contain a certain character set" and based on the user's requirement, they can add or reject certain character sets. 
When all prompts are answered, the program will randomly generate the passcode based on the user's requirement and will be printed in the allocated text box. 
When "Generate Password" is selected again, the program will run again and generate another password based on a new set of criteria.
The generated password will also appear in the console and shows each charcter that is selected during the randomising phase.

## Deployment

This password generator is deloped on GitHub and is avaliable using (https://cn-kp.github.io/Password-Generator/)

A preview of the site is attached below; 
 ![passwordGeneratorPreview](./assets/images/password_generator.PNG)


