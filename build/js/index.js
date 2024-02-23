const inputBox = document.getElementById('inputBox');
const todo = document.querySelector('.todo');
const add = document.getElementById('addbtn');

add.addEventListener('click', function(){
    
    if(inputBox.value !=''){
       displayTodo(inputBox.value);
       console.log('not emty');
       inputBox.value = "";
    }
});
function displayTodo(todoValue){
    let todoWrapper = document.createElement('div');
    todoWrapper.classList.toggle('todo-wrapper');

    todoWrapper.innerHTML = `
    <div class=" flex justify-between px-6 items-center list-container my-16">
    <p class="text-3xl text">${inputBox.value}</p>
    <div class="flex gap-6 items-center">
        <svg class="h-8 w-8"  viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ff2929" d="M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"></path></g></svg>
        <svg class="h-8 w-8"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        <svg class="h-8 w-8 hidden"  height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#F91E1E;" d="M256.001,0C114.615,0,0,114.615,0,256.001s114.615,256.001,256.001,256.001 s256.001-114.615,256.001-256.001S397.385,0,256.001,0z"></path> <path style="fill:#E21B1B;" d="M256.001,24c-128.13,0-232,103.87-232,232s103.87,232,232,232S488,384.13,488,256.001 S384.13,24,256.001,24z"></path> <polygon style="fill:#FFFFFF;" points="345.032,137.848 216.896,295.888 163.04,242.728 127.528,281.848 221.056,374.153 384.472,172.608 "></polygon> </g></svg>
    </div>
</div>
    `;
    todo.appendChild(todoWrapper);
}
