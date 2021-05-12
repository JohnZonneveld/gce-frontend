## 'GCE webpage'

This is a React/Redux application working together with a Rails backend with a PostgreSQL database. It shows a simple copy of the eu.zggtr.org website. Last year I took over the webmaster role of that site. Problem however is that over the years there have been many webmasters and almost everyone used a different program. So it has become a mix and match of programming.
Time for an overhaul.

For my final React/Redux project at Flatiron School I decided to try to recreate the site. For now it has 2 static pages the home- and about-page, and two interactive sections Members and Tours. 

## 'Project Info:'
This project was created with Create React App (https://github.com/facebook/create-react-app).

The project consists of two repos:
React/Redux frontend
https://github.com/JohnZonneveld/gce-frontend
and the Rails backend using a PostgreSQL database
https://github.com/JohnZonneveld/gce-backend

To run this project you should have PostgreSQL running on your system. Download both repos and extract them. 

## 'To install:'

## 'Rails backend'
Extract the downloaded repo and open a terminal session.
Use cd to get into the project folder, and run
##    'bundle install'
this will download and install all gems that are necessary to run the app.
Next,run
##    'rails db:create'
This will create the PostgreSQL databases gce-backend_development and gce-backend_test. The app will run using the development database.
Next run
##    'rails db:migrate'
This will create the database tables.
Next issue the command
##    'rails s'
this will start the backend, Ruby on Rails server that serves our React/Redux frontend.

## 'React/Redux frontend'
Extract the downloaded repo and open a terminal window. Change in to the extracted folder and issue
##    'npm install'
This will read the package.json and will download and install all dependencies.
Next run 
##    'npm start' 
This will start the app.

Because both Rails and React app both run default on port 3000 it is important that you run 'rails s' before 'npm start' Both commands are issued in the respective folder (backend vs frontend). This will make sure that the rails server will be running on port 3000. When the rails server is running npm start will give a warning: 
'Something is already running on port 3000. Probably:
puma 3.12.6 (tcp://localhost:3000) [gce-backend]' and a referral to the backend project folder and a question if you want to run the app on another port. Simply answer yes and the webserver will start on port 3001.
