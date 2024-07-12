function login(){
    
    const mail = document.getElementById(`email`).value;
    const paswd = document.getElementById(`paswd`).value;
    

    if (mail ==="" || paswd ===""){
        document.getElementById(`change`).style.color = "red";
        document.getElementById(`change`).innerHTML = "We Dogo Acha Wenge";
    }
    else{
        window.location.assign("../index.html"); 
    }
}

function signup() {
    
    const paswd = document.getElementById(`passwd`).value;
    const confpaswd = document.getElementById('confpaswd').value;

    if (paswd === confpaswd){
        document.getElementById('change').style.color = 'red';
        document.getElementById('change').innerHTML = '<strong> Confirmed Password Is Invalid </strong>';
    }
    else{
        winndow.location.assign("../index.html");
    }
}