var todoList = document.getElementById("todoList"); //get ul element

var item = document.getElementById("itemCount"); 

var count = 0;
item.innerHTML = count;


// function for Add list 
function addItem(){
    var input = document.getElementById("input"); // get input element
if(input.value.length >= 5 && input.value.length <= 20){
    var li = document.createElement("li"); //creating li 

    var liText = document.createTextNode(input.value);
    
    li.appendChild(liText);


    //creating delete button
    var delbtn = document.createElement("button");
    delbtn.innerHTML = "Delete"
    li.appendChild(delbtn);
    delbtn.setAttribute("onclick", "deleteList(this)");
    delbtn.setAttribute("class", "btn")

   //creating Edited button
    var editbtn = document.createElement("button");
    editbtn.innerHTML = "Edit"
    li.appendChild(editbtn);
    editbtn.setAttribute("onclick", "editList(this)");
    editbtn.setAttribute("class", "btn")


    todoList.appendChild(li);

    input.value = "";
    count++
    item.innerHTML= count;
}
else{
    alert("Fill ur list first!")
}

}

//delete button function
function deleteList(e){
    e.parentNode.remove();
    count--
    item.innerHTML = count
}

//Edit button function

function editList(e){
    var editTodo = prompt("Edited your list here!", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = editTodo;

}

function deleteAll(){
   todoList.innerHTML = ""
   count = 0;
   item.innerHTML= count;
}


function imgChange(e){
    var img = document.getElementById("img");
    img.style.src = "./img2.jpg"
}


var d = new Date();
var container = document.getElementById("container").innerHTML = d;
    console.log(container);
    var d = new Date();






























// var list  =document.getElementById("item_list")
// function newElement(){
    
//     var input = document.getElementById("myInput")
//     var li = document.createElement("li")
//     var liText = document.createTextNode(input.value) 
//     li.appendChild(liText)
//     list.appendChild(li)

//     console.log(liText)
//     var delBtn = document.createElement("button")
//     var delText = document.createTextNode("DELETE")
//     delBtn.appendChild(delText)
//     li.appendChild(delBtn)

//     delBtn.setAttribute("onCLick","delItem(this)")
//     delBtn.setAttribute("class","delitem")
//     delBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'


   

//     var editBtn = document.createElement("button")
//     var editText = document.createTextNode("EDIT")
//     editBtn.appendChild(editText)
//     li.appendChild(editBtn)
//     editBtn.setAttribute("onCLick" , "edititem(this)")
//     editBtn.setAttribute("class","edititem")
//     editBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'


//     input.value = ""

//     // console.log(editBtn)

// }


// function delItem(e){
//     e.parentNode.remove()
     

// }

// function delAll(){
//     list.innerHTML = ""
// }

// function edititem(e){
//     var editBox = prompt("Enter Edit Value" , e.parentNode.firstChild.nodeValue)
//     e.parentNode.firstChild.nodeValue = editBox
    
// }