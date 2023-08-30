var Table = document.querySelector('#table')
var Send = document.querySelector('#Send_info')

var Name = document.querySelector('#Name')
var Number = document.querySelector('#Number')
var Type = document.querySelector('#Type')
var Generation = document.querySelector('#Generation')
var HP = document.querySelector('#HP')
var ATT = document.querySelector('#ATT')
var Def = document.querySelector('#Def')
var S_Att = document.querySelector('#S_Att')
var S_Def = document.querySelector('#S_Def')
var Spd = document.querySelector('#Spd')

Send.addEventListener('click' , Send_info)

Name_inf = Name.innerHTML
Number_inf = Number.innerHTM
Type_inf = Type.innerHTML
Generation_inf = Generation.innerHTML
HP_inf = HP.innerHTML
ATT_inf = ATT.innerHTML
Def_inf = Def.innerHTML
S_Att_inf = S_Att.innerHTML
S_Def_inf = S_Def.innerHTML
Spd_inf = Spd.innerHTML

function Send_info(){
    Table.innerHTML += "<tr><td>" + Name_inf +"</td><td>" + Number_inf +"</td><td>" + Type_inf + "</td><td>" + Generation_inf +"</td><td>" + HP_inf + "</td><td>" + ATT_inf + "</td><td>" + Def_inf + "</td><td>" + S_Att_inf + "</td><td>" + S_Def_inf + "</td><td>" + Spd_inf + "</td></tr>"

    Name.innerHTML = ""
    Number.innerHTM = ""
    Type.innerHTML = ""
    Generation.innerHTML = ""
    HP.innerHTML = ""
    ATT.innerHTML = ""
    Def.innerHTML = ""
    S_Att.innerHTML = ""
    S_Def.innerHTML = ""
    Spd.innerHTM = ""
}
