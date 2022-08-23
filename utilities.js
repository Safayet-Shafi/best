function getName(elementId){
    const nameField = document.getElementById(elementId);
    const name =nameField.innerText;
    return name;
}

function setPlayer(name){
    const playerSection=document.getElementById('player-list');
    const li=document.createElement('li');
    li.innerText=name;
    playerSection.appendChild(li);
}

function setAlert(){
    const playerSection=document.getElementById('player-list');
    if(playerSection.childNodes.length>6){
        alert('You Cannot Add More Than 5 players');
         location.reload();
    }
}
function buttonDisabled(elementId){
    const button =document.getElementById(elementId);;
    button.disabled =true;
    button.style.background="gray";
}

function getElementValueById(elementId){
    const elementField = document.getElementById(elementId);
    const elementValueString = elementField.value;
    const elementValue = parseInt(elementValueString);
    // return elementValue;
    if(isNaN(elementValue)){
        elementField.value='';
        return alert('Please Refresh and Enter Number')
    }
    else{
        return elementValue;
    }
}

function setValueById(elementId,value){
    const elementField = document.getElementById(elementId);
    
     elementField.innerText=value;
}