const btn = document.getElementById('btn');
 const result = document.getElementById('result');

function calculator(){
    const principal = document.getElementById('principle').value;
    const rate = document.getElementById('rate').value;
    const time = document.getElementById('time').value;
 
    const simpleintrest = (principal * rate * time) /100;
     result.innerHTML = `simple interest ${simpleintrest.toFixed(2)}`;
}

btn.addEventListener('click', () => {
    calculator();
})
