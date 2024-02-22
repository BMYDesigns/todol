const inputBox = document.getElementById('inputBox');
const listContainer = document.querySelector('.list-container');
const add = document.getElementById('addbtn');

add.addEventListener('click', function(){
    listContainer.classList.toggle('hidden');
    if(inputBox.value === ''){
        alert('Please write something');
    }
    else{
        let p = document.querySelector('.text');
        p.innerText = inputBox.value;
        listContainer.appendChild(p);
    }
})