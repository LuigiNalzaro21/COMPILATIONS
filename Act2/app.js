import {leftDiv} from "./info.js"
import {rightDiv} from "./img.js"

let container = document.getElementById("container")

const data = {
    title : "This is title",
    para : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias sit quos quia praesentium architecto at dolores amet veniam ratione voluptate, quibusdam, doloremque sed! Laboriosam, sed suscipit repellat eaque placeat aliquam!",
    button1 : "Blank",
    button2 : "Blank",
    button3 : "Blank",
    button4 : "Blank",
    dogimage : "pexels-photo-1108099.jpeg",
}

const {title, para, button1, button2, button3, button4, dogimage} = data

container.append(leftDiv(title, para, button1, button2, button3, button4))
container.append(rightDiv(dogimage))