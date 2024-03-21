import {myFunction} from "./info.js"
import {myImage} from "./img.js"

const myObject = {
    title : "Three dogs",
    paragraph : "This is a picture of 3 dogs out on a sunny day.",
    myImg : "OIP.jpg",
    buttonName : "Contact Us" 
}

const {title, paragraph, myImg, buttonName} = myObject

let container = document.getElementById('container')

container.append(myImage(myImg))
container.append(myFunction(title, paragraph, buttonName))