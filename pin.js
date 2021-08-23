function generateRandom(){
    return Math.floor(Math.random()*(9999-1000 + 1) + 1000);
}

function setValue(value){
    document.getElementById('input-box').value = value;
    document.getElementById('notify-success').style.display = 'none';
    document.getElementById('notify-fail').style.display = 'none';
    document.getElementById('display-input').value = '';

}

function setInput(value){
    const inuputField = document.getElementById('display-input');
    inuputField.value = inuputField.value + String(value);
}

function checkValue(){
    const input = parseInt (document.getElementById('display-input').value);
    const pin = parseInt (document.getElementById('input-box').value);
    document.getElementById('notify-success').style.display = 'none';
    document.getElementById('notify-fail').style.display = 'none';
    let tryRemain = parseInt(document.getElementById('try').innerText);
   
    if(input == pin){
        document.getElementById('notify-success').style.display = 'block';
        document.getElementById('input-box').value = '';
        document.getElementById('display-input').value = '';
    }
    else{
        document.getElementById('notify-fail').style.display = 'block';
        document.getElementById('try').innerText = tryRemain - 1;

    }

}

document.getElementById('pin-btn').addEventListener('click', ()=>{
    const random = generateRandom();
    setValue(random);
})

document.getElementById('number-btn').addEventListener('click', (event)=>{
    const value = parseInt(event.target.innerText);
    const tryRemaining = document.getElementById('try').innerText;
    if(parseInt(tryRemaining) > 0){

        if(!isNaN(value)){
            setInput(value);
         }
         if(event.target.innerText == 'Submit'){
             checkValue()
         }
         if(event.target.innerText == 'C'){
             document.getElementById('display-input').value = '';
         }
         if(event.target.innerText == '<'){
             let innput = document.getElementById('display-input').value;
             innput = innput.slice(0, -1);
             document.getElementById('display-input').value = innput;
         }
    }
    else{
        document.getElementById('notify-try').style.display = 'block';
    }
    
})

