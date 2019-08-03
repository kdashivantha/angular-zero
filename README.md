# Zero

## Task 1. Create a New Workspace
ng new zero --style=scss --routing=true

## Task 2. Install Additional Components
npm install --save @angular/material @angular/cdk rxjs-compat
if needed => angular-in-memory-web-api

we installed material styles

## Task 3. Set up the Project Structure

# ./src/styles/ -
1. remove original styles.scss from , create new folder /styles/ create styles.scss there.
2. update angular.json file path
3. import child styles to the main styles.scss file

folders;
./app/features, ./app/shared, ./app/core

https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7


# Task 4 Generate feature modules with routes
>> ng g m user --routing=true

