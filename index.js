// shared.js
let video = document.getElementById('video')
video?.addEventListener('ended', ()=>{
    window.location.assign('page2.html')
})





// Function to add a todo to local storage
function addTodoToLocalStorage(key, todo) {
    let todos = JSON.parse(localStorage.getItem(key)) || [];
    todos.push(todo);
    localStorage.setItem(key, JSON.stringify(todos));
}

// Function to get todos from local storage
function getTodosFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}
