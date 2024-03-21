import {leftDiv} from "./info.js"
import {rightDiv} from "./img.js"

let container = document.getElementById("container")

const data = {
    title : "Picture of 2 dogs",
    para : "This is a picture of 2 dogs out on a sunny day.",
    button1 : "Button 1",
    button2 : "Button 2",
    button3 : "Button 3",
    button4 : "Button 4",
    dogimage : "pexels-photo-1108099.jpeg",
}

const {title, para, button1, button2, button3, button4, dogimage} = data

container.append(leftDiv(title, para, button1, button2, button3, button4))
container.append(rightDiv(dogimage))