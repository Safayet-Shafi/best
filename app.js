document.getElementById('btn-select1').addEventListener('click',function(){
    const playername = getName('name-field1');
    setPlayer(playername);
    setAlert();
    buttonDisabled('btn-select1');

});
document.getElementById('btn-select2').addEventListener('click',function(){
    const playerName=getName('name-field2');
    setPlayer(playerName);
    setAlert();
    buttonDisabled('btn-select2');
});
document.getElementById('btn-select3').addEventListener('click',function(){
    const PlayerName=getName('name-field3');
    setPlayer(PlayerName);
    setAlert();
    buttonDisabled('btn-select3');
});
document.getElementById('btn-select4').addEventListener('click',function(){
    const playerName = getName('name-field4');
    setPlayer(playerName);
    setAlert();
    buttonDisabled('btn-select4');
});
document.getElementById('btn-select5').addEventListener('click',function(){
    const playerName = getName('name-field5');
    setPlayer(playerName);
    setAlert();
    buttonDisabled('btn-select5');
});
document.getElementById('btn-select6').addEventListener('click',function(){
    const playerName = getName('name-field6');
    setPlayer(playerName);
    setAlert();
    buttonDisabled('btn-select6');

});
document.getElementById('btn-select7').addEventListener('click',function(){
    const playerName = getName('name-field7');
    setPlayer(playerName);
    setAlert();
    buttonDisabled('btn-select7');

});
document.getElementById('btn-select8').addEventListener('click',function(){
    const playerName = getName('name-field8');
    setPlayer(playerName);
    setAlert();
    buttonDisabled('btn-select8');

});
document.getElementById('btn-select9').addEventListener('click',function(){
    const playerName = getName('name-field9');
    setPlayer(playerName);
    setAlert();
    buttonDisabled('btn-select9');

});

// calculation section

document.getElementById('btn-calculate').addEventListener('click',function(){
     const perPlayerCost = getElementValueById('player-budget');
     const playerSection=document.getElementById('player-list');
    
    const totalPlayerCost =perPlayerCost*(playerSection.childNodes.length-1);
    

    
    setValueById('total-player-cost',totalPlayerCost);
    
});

document.getElementById('btn-calculate-total').addEventListener('click',function(){
    const managerCost = getElementValueById('manager-cost');
    const coachCost = getElementValueById('coach-cost');

     const perPlayerCost = getElementValueById('player-budget');
     const playerSection=document.getElementById('player-list');
    
    const totalPlayerCost =perPlayerCost*(playerSection.childNodes.length-1);

    const totalAllCost=totalPlayerCost+managerCost+coachCost;

                  
    setValueById('all-total',totalAllCost);
    
});

