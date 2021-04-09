# Brief Summary :

## Problem Statement :

Develop an authentication system with given design.


## Decription :

This is a website which has a built in authentication system

## How I implemented it in short :

1) Made use of HTML, CSS and Boostrap to design the structure of website
2) MongoDB to save the users 
3) used Bcrypt to hash the passwords in MongoDB
4) Made use of JWT to save the token for the user on the browser as a cookie. ( So that there is  no necessity for the user to login each time he closes his website)
5) Also made use of this JWT token to make few pages ecure so that only logged in users are able to see those secured pages.
6) Then implemented a forgot password system by sending a JWT token embedded url to change password for a user ( Now to make it more secure kept the expiry of this JWT token as 15 minutes - so that user can update as many time under 15 minutes)
7) After 15 mins, if the user tries to change password will e taken to HOME-PAGE again
8) Finally deployed on HEROKU

## Output :

[!website](https://midas-authentication.herokuapp.com/)

