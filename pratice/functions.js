// function string(str, n) {
//     var ret = "";
//     var i = 0;
//     while (i<n) {
//         ret += str 
//         i++
//     }
//     return ret 
    
// }

// function caught_speeding(speed, is_birthay) {
//     if (is_birthay) {
//         speed -=5
//     }
//     if (speed <= 60) {
//         return 0
//     }
//     if (60 < speed <= 80) {
//         return 1
//     }
    
// }

// function makeBricks(small, big, goal){
//     return goal 
// }

// var roster = []

// function addNew() {
//     var newName = prompt("what name would you like to add")
//     roster.push(newName)
// }

// function remove() {
//     var remName = prompt("what name would you like to remove")
//     var index = roster.indexOf(remName);
//     roster.splice(index,1)
// }
// function display() {
//     console.log(roster)
// }


// var start = prompt("would you like to start the web app? y/n")

// var request = "empty"

// if (start === "y") {
//     while (request !== "quit") {
//         request = prompt("please select an action: add, remove, display, or quit")
//         if (request === "add") {
//             addNew();
//         }else if (request === "display") {
//             display();
//         }else if (request === "remove") {
//             remove();
//         }else {
//             alert("Not recognized")
//         }
//     }
// }

// alert("thanks bitch")

// var employee = {
//     name: "John Smith",
//     job: "programer",
//     age: 31,
//     report: function () {
//         console.log(this.name.split(" ")[1])
//     }
// }

//  

var Header = document.querySelector("h1")

function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for(var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color
}

function changeHeaderColor(){
    colorInput = getRandomColor()
    Header.style.color = colorInput;
}
setInterval("changeHeaderColor()",500);