# Frontend - Backend
1. create frontend 
2. create frontend backend folder within project folder
3. open terminal and split it into two
4. open frontend into left side terrminal
5. open backend into rigth side terminal
6. in backend
    a. initialize backend by `npm init -y`
    b. install nodemon by `npm i nodemon`
    c. open package.json from backend , update `type to module` and script
7. in frontend 
    a. npm create vite@latest
    b. select framework as react from arrow key
    c. select framework as react from arrow key
    d. select variant as javascript from arrow key
    e. select esList for linting from arrow key
    f. select install and start the frontend

## Components
1. simple js function return html directly 
2. it must starts with capital letter
3. it should be treated as html tag
4. it must be closed
    
## object destructure
    const {rating,bname,price ,quantity,picURL} = props.book;
    does not depends on order, if property is not available then it initialize with null.
* any document include style
1. external css - CSS create class in index.css and used in components
2. internal CSS - create property as object like 
'''
    
'''    
3. inline CSS - in this method we use 2 curly brackets with style attribue all the css property must be single word for ex: text-align becomes textAlign(Camel Case)


* rafce - arrow function
* rfce - normal function