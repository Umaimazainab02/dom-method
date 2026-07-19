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


