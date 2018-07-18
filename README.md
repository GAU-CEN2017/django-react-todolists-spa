
This application setup was based on @v1k45 [tutorial](http://v1k45.com/blog/modern-django-part-1-setting-up-django-and-react/).

# django-react-todolists-spa

## Environment setup

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