
This application setup was based on @v1k45 [tutorial](http://v1k45.com/blog/modern-django-part-1-setting-up-django-and-react/).

# django-react-todolists-spa

## How to run the SPA at local server

### Install python requirements

- make sure you have python 3.6 installed
- clone this repository
- install and activate a virtual environment
- go to the repository root and install dependencies:
    ````
    $ pip install -r requirements.txt
    ````

### Migrate DB and run development server
- (myvenv)  $ cd todotoday
- (myvenv)  $ ./manage.py migrate
- (myvenv)  $ ./manage.py runserver

### Install node dependencies
- go to '/frontend' and install dependencies listed in package.json
    ````
    cd frontend
    npm install
    ````

### Run npm server
- in the frontend directory:
    ````
    npm run start
    ````

### Access the project
- locally access the single page app at /http://localhost:8000/

> If you can't access, check if there is a file named 'webpack-stats.dev.json' located at '/todotoday/' directory.
> If not, copy the file with this name from the project's root directory to the '/todotoday/' directory.
> Stop and restart the servers, then try again.

-------------------------

## Boilerplate setup
> For detailed instructions, check [this page](http://v1k45.com/blog/modern-django-part-1-setting-up-django-and-react/). 

### Start a virtual environment (I'm using virtualenv)
- $ python3.6 -m venv myvenv
- $ source myvenv/bin/activate

### Setup Django
- (myvenv)  $ pip3.6 install django
- (myvenv)  $ django-admin startproject todotoday

### Migrate DB and run development server
- (myvenv)  $ cd todotoday
- (myvenv)  $ ./manage.py migrate
- (myvenv)  $ ./manage.py runserver

### Setup ReactJS with Webpack

I used _create-react-app_ to generate the project boilerplate)

- if it is not installed yet:
    ````
    $ sudo npm install -g create-react-app
    ````
- then
    ````
    $ create-react-app frontend
    $ cd frontend
    $ npm run eject
    ````
### Integrating React and Django

- install webpack_loader
    (myvenv) pip3.6 install django-webpack-loader
- config settings.py and urls.py
- install <webpack-bundle-tracker>
    ````
    npm install webpack-bundle-tracker --save-dev
    ````
- config *webpack.config.dev.js*, *webpackDevServer.config.js*, *paths.js* (at frontend/config)

### Setup react-router-dom
- install <react-router-dom>
    ````
    sudo npm install --save react-router-dom
    ````
### Setup redux
- install <react-redux>
    ````
    npm install --save redux react-redux
    ````

### To be able to export PDF
- install html2canvas and jsPDF
    ````
    cd frontend
    npm install --save html2canvas
    npm install --save jspdf
    ````

### To handle user authentication
- install django-rest-knox
    ````
    (myvenv)  $ pip install django-rest-knox
    ````