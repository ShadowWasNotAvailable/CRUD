var Table = document.querySelector('#table')
var Send = document.querySelector('#Send_info')
var tbody = document.querySelector('#tbody')
var inputs = document.querySelectorAll("input[Type='text']")
var rows = document.getElementsByClassName("row")
var Save = document.querySelector('#Save')
var Load = document.querySelector('#Load')

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
            node.value = ""
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
            strTest = "<input id='inputValue2' type='text' value='"+node.innerHTML +"'>"
            row_edit_active = true
            console.log(index)  
            if (index < 10){
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

function readTable() {
    const table = document.getElementById('table').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');
    const data = [];

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const rowData = {};
        rowData.name = cells[0].textContent;
        rowData.number = cells[1].textContent;
        rowData.type = cells[2].textContent;
        rowData.generation = cells[3].textContent;
        rowData.HP = cells[4].textContent;
        rowData.ATT = cells[5].textContent;
        rowData.Def = cells[6].textContent;
        rowData.S_Att = cells[7].textContent;
        rowData.S_def = cells[8].textContent;
        rowData.Spd = cells[9].textContent;
    
        data.push(rowData);
    }
      return data;
}

Save.addEventListener('click' , function(){
    const tableData = readTable(); 
    localStorage.setItem('tableData', JSON.stringify(tableData));
})

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
}

// først: hente ut table data fra localstorage
const retrievedData = localStorage.getItem('tableData');
 
function rebuildTable(data) {
  const table = document.getElementById('table').getElementsByTagName('tbody')[0];
  table.innerHTML = ''; // clear existing rows
 
  data.forEach((row) => {
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    const cell10 = newRow.insertCell(9);

    cell1.textContent = row.name
    cell2.textContent = row.number
    cell3.textContent = row.type
    cell4.textContent = row.generation
    cell5.textContent = row.HP
    cell6.textContent = row.ATT
    cell7.textContent = row.Def
    cell8.textContent = row.S_Att
    cell9.textContent = row.S_def
    cell10.textContent = row.Spd
  });
}

Load.addEventListener('click' , function(){
    rebuildTable(JSON.parse(retrievedData)); // kjør funksjon rebuild table med data fra localstorage
})

