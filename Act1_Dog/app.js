import {myFunction} from "./info.js"
import {myImage} from "./img.js"

const myObject = {
    title : "This is sample text",
    paragraph : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi fugiat modi saepe autem culpa sed animi. Amet, corrupti, odio officia nulla omnis, facilis quasi vero repudiandae velit optio temporibus autem.",
    myImg : "OIP.jpg",
    buttonName : "Contact Us" 
}

const {title, paragraph, myImg, buttonName} = myObject

let container = document.getElementById('container')

container.append(myImage(myImg))
container.append(myFunction(title, paragraph, buttonName))