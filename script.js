var Table = document.querySelector('#table')
var Send = document.querySelector('#Send_info')
var tbody = document.querySelector('#tbody')
var inputs = document.querySelectorAll("input[Type='text']")
var rows = document.getElementsByClassName("row")

var tr = "<tr class='row'>"
var bten = ""
var row_edit_active = false
var Active_row
var strTest

function Row_class(){
    tr = "<tr class='row'>"
}


Send.addEventListener('click' , function(){

    inputs.forEach(
        function(node, index){
            console.log(node.value)
            tr += "<td>" + node.value + "</td>"
          
        })
    bten = "<td><button class='btn'>" + "Remove" + "</button></td>"
    tbody.innerHTML += tr + bten

    document.get
    console.log(tr)
    tr += "</tr>";
    Row_class()
    bten = " "

    removebtn()

    var rows = document.getElementsByClassName("row");
    for (var i = 0; i < rows.length; i++){
    rows[i].addEventListener("click", set_inputs);
    console.log(rows, "update events added")
}

})

function removebtn(){
    var elements = document.getElementsByClassName("btn");
        for (var i = 0; i < elements.length; i++){
            elements[i].addEventListener("click" , removeitem)
    }
}
function removeitem(){
    this.parentNode.parentNode.remove();
}



function set_inputs(){
    if (row_edit_active == false){ 
        tds = this.childNodes
        Active_row = this
        console.log(Active_row)
        tds.forEach(function(node, index){ //node er en stykk TD
           console.log(node)
            strTest = "<input type='text' value='"+node.innerHTML +"'>"
            row_edit_active = true
            console.log(index)  
            if (index < 9){
                node.innerHTML = strTest
            }
        })
        
    }
    this.addEventListener("keydown", function deactivateRowEditActive(event){
        if (event.key === "Enter") {
            row_edit_active = false;
            console.log("row_edit_active has been deactivated.");
            tds.forEach(function(node, index){
                node.innerHTML = node.children[0].value
            })
        }
    })
    

    
}