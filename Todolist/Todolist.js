//list the catpured value


function addtask() {

var taskinput = document.getElementById("todoinput")
var tasklist = document.getElementById("tasklist")
//condition if the input is empty
if (taskinput.value === "" ) {
 alert("please places a task" )
 return false
} 
var newtask =document.createElement("li")
newtask.innerHTML = taskinput.value


tasklist.appendChild(newtask)

}