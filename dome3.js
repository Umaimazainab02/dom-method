//////////Question 01/////////
//Change the text of a heading when a button is clicked.
function change1() {
    let heading = document.getElementById("line1");
    let heading1 = document.getElementById("line2");

    let box = document.getElementById("box")
    heading.textContent = "hello beautiful!!!";
    heading.style.paddingLeft="30px"

    heading.style.color = "red"
    heading.style.width = "300px"
    box.style.border = "3px solid greenyellow"
    box.style.borderRadius = "20px"
    box.style.width = "350px"
    box.style.height = "300px"
    heading1.style.borderTopLeftRadius = "18px";
    heading1.style.borderTopRightRadius = "18px";
    heading1.style.backgroundColor ="rgb(12, 156, 156)"
    
}



///////////Question no 02///////
////Change the background color of a <div>.////////
function change2(){
    let heading3 = document.getElementById("box1")
    let heading4 = document.getElementById("line4")
    let heading5 = document.getElementById("line5")
    heading3.style.backgroundColor ="lightblue"
    heading3.style.transition="0.8"
}


/////////Questin no 03/////
////////Hide and show an element using a button.///////

function hideText() {
    let text = document.getElementById("text");
    text.style.display = "none";
}

function showText() {
    let text = document.getElementById("text");
    text.style.display = "block";
}



///////Question no 04//////////
/////////Change an image when a button is clicked.///////////

function change5(){
    let imgchng = document.getElementById("link8");
    imgchng.style.backgroundImage = "url('dog.jpg')";

}



///////Question no 05/////////
///////Count how many times a button has been clicked.//////
let count = 0;
function countbtn(){
    count++;
    document.getElementById("count").textContent = count;
}


//////Question no 06///////
//////Display the current date and time in a paragraph.//////////
function showdatetime() {
    let today = new Date();

    document.getElementById("time").textContent =
        today.toLocaleDateString() + " " + today.toLocaleTimeString();
}




//////Question no 07/////////
/////////Change the font size of a paragraph.//////////
function fontsizechng(){
    let font =document.getElementById("line20")
    font.style.fontSize="30px"
}


/////////Question no 08////////
////////Add a CSS class to an element.////////
function change77() {
    let text = document.getElementById("line55");

    text.classList.add(
        "text-pink-600",
        "bg-blue-200",
        "p-4",
    );
}


/////////Question no 08////////
//////Toggle dark mode./////

function toogle11() {
    let box = document.getElementById("darkBox");
    let heading = document.getElementById("text");
    let title = document.getElementById("text2");
    let moon = document.querySelector(".fa-moon");
    let sun = document.querySelector(".fa-sun");
    let knob = document.getElementById("switchKnob");

    box.classList.toggle("bg-gray-900");
    box.classList.toggle("bg-amber-50");
    heading.classList.toggle("text-white");
    heading.classList.toggle("text-red-800");
    title.classList.toggle("bg-black");
    title.classList.toggle("bg-red-800");
    moon.classList.toggle("hidden");
    sun.classList.toggle("hidden");
    knob.classList.toggle("translate-x-8");
}



////////Question no 9////////
//////Build a character counter for a textarea.///////
document.addEventListener("DOMContentLoaded", function () {
    function characterCounter() {
        let text = document.getElementById("textArea").value;
        document.getElementById("count").textContent = text.length;
    }

    document.getElementById("textArea").addEventListener("input", characterCounter);
});




////////Question no 10////////
function filterList() {
    let searchValue = document.getElementById("search").value.toLowerCase();
    let items = document.querySelectorAll("#itemList li");

    items.forEach(function (item) {
        let text = item.textContent.toLowerCase();

        if (text.includes(searchValue)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

document.getElementById("search").addEventListener("input", filterList);
