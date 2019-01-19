# FriendFinder

FriendFinder is a full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

## Technologies

Some of the technology dependencies used in this project are:

- Node
- Express

## App Setup

To start the project, `git pull https://github.com/ianbunn/FriendFinder.git`.

Once in your code editor of choice, make sure you have all the files in order.

In your terminal, navigate to the folder where you cloned the repository above, and run the command `npm install`.

After install all the node modules, you can run the command `node server` to use the app in the port listed in the console (http://localhost:3000).

## App Architecture

The app is structured into three different directories:

- Data
- Public / User Experience
- Routing

### Data

In this app, we use a JSON array stored in the `app/data/friends.js` file, which includes the data to export into the **HTML routes** and **API routes**.

You can edit the data in the file `app/data/friends.js` to have the friend objects of your dreams.

### Public / User Experience

The homepage resides in the `home.html` which contains a route to the `survey.html`.

When the user takes route `/survey`, server responds with the contents of `survey.html`.

User is required to complete all fields in the survey, including the name and the photo link. If they do not fill the fields for name and photo link, user will be alerted to complete those fields. If user doesn't complete the questions, or some questions, app will not be able to POST data to run beerfriend match algorithm.

If user completes all fields, form will be posted to server, where it will run beerfriend match algorithm to find the most compatible beerfriend for the current user, and our new friend!

After match has been shown, app will reset form to blanks and scroll to the top to allow the user to retake the survey, if they so desire.

### Routing for HTML and API

App's routes are separated into two files:

- HTML Routes
- API Routes

#### HTML Routes

Contains two `GET` routes to:

- `/` responds with `home.html` contents
- `/survey` responds with `survey.html` contents

#### API Routes

Contains one `GET` route to `/api/friends` to show all of our data in the `app/data/friends.js` file.

Contains one `POST` route to `/api/friends` to run the beerfriend match algorithm by taking in the current user's scores and getting the difference from all of our friends list. Then, it gets the lowest total compared from all of our friends data to respond with the match details to the client-side.