import {upProf} from "./info.js"
import {right, bckOne, bckTwo, bckThr} from "./img.js"
import {dwnProf} from "./card.js"


const fSec = {
    title : "Hello! Luigi",
    para : "This is an activity that was asked from us to do",
    clickBtn : "Contact Me",
    fImg : "4230990.jpg"
}

const sSec = {
    title1 : "PROJECT COMPLETED",
    imgOne : "1764669.jpg",
    para1 : "This image shows the whole experiences Sung Jin Woo has accumulated and experienced to get stronger.",
    fBtn : "Learn More",
    imgTwo : "3231246.png",
    para2 : "This image shows the chapter, where hunter Sung Jin Woo fought Igris the Red-Blood and Obtaining him as part of his shadow army after defeating him.",
    sBtn : "Learn More",
    imgThr : "4230932.png",
    para3 : "This image shows how much Sung Jin Woo has grown over the experiences from the battles that he's been through, now he's even capable of clearing even an S Rank Gate all by himself along with his Shadow Army.",
    tBtn : "Learn More"
}

const {title, para, clickBtn, fImg } = fSec

const { title1, imgOne, para1, fBtn, imgTwo, para2, sBtn, imgThr, para3, tBtn} = sSec


let container = document.getElementById("sectionOne")
let containers = document.getElementById("sectionTwo")

container.append(upProf(title, para, clickBtn, fImg))
container.append(dwnProf(title1, imgOne, para1, fBtn, imgTwo, para2, sBtn, imgThr, para3, tBtn))