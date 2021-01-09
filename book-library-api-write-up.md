### Created a new folder for the project and set up a GitHub repo

First things first...

1. Using the command line, I set up a new folder for the API project (I have a 'projects' folder on my computer - I put it in there and called it 'book-library-api')

`$ mkdir book-library-api`

2. Then, I changed directory into that folder and started a git repository

`$ cd book-library-api`

`$ git init`

3. I created a README.md file and a .gitignore file. I have a great [readme template](https://github.com/ritaly/README-cheatsheet) that I use, so I opened the file in VS Code and pasted the template into the new readme file I had just created, ready to be populated later

`$ touch README.md .gitignore`

4. Then I went to my profile on GitHub and created a new repository, also called 'book-library-api'

5.I then connected my local repo to my new GitHub repo

`$ git remote add origin git@github.com:jlopenshaw41/book-library-api.git`

6. I staged and committed the two files I had created and pushed to my GitHub repo as an 'initial commit'

`$ git add .`

`$ git commit -m 'initial commit'`

`$ git push -u origin main`

7. I initialised a new npm project, filling in a few details (description, author) for the package.json file that is automatically created

`$ npm init`

8. I opened the .gitignore file in VS Code and added `node_modules`, in preparation

### Set up a new Docker container with a new MySQL database

[I had already downloaded Docker Desktop and MySQL Workbench. Because I am working on a Mac, I needed to have Docker Desktop installed to be able to run Docker commands in terminal]

1. I ran the command to set up a new Docker MySQL container with a new database called 'book_library_mysql' and then checked it was running

`$ docker run -d -p 3307:3306 --name book_library -e MYSQL_ROOT_PASSWORD=secret mysql` (I changed the password in case you are wondering :) ) 

`$ docker ps`

2. I opened MySQL Workbench, added a new MySQL Connection and configured the settings in the pop up window (I entered a name for the database and had to change the port to 3307 to make it work and I added my password to the keychain). 

![MySQL Workbench setup screenshot]()

### Set up the Express application

1. Still inside my book-library-api folder in Terminal, I installed Express and Sequelize as dependencies

`$ npm install -S express`

`$ npm install -S sequelize`
