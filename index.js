const todoInput = document.querySelector('.todoInput');
const todoBtn = document.querySelector('.todoBtn');
const todoList = document.querySelector('.todoList');
const menuList = document.querySelector('.menu-dropdowm');
todoBtn.addEventListener('click', function() {
    var task = todoInput.value;
    if (!task) {
        alert("You need to  write Something...");
        event.preventDefault();
    } else {
        event.preventDefault();
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("do");
        const listTodo = document.createElement('li');
        listTodo.innerText = task;
        listTodo.classList.add('do-changes');
        todoDiv.appendChild(listTodo);
        todoInput.value = '';

        const doneBtn = document.createElement('button');
        doneBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
        doneBtn.classList.add("doneBtn");
        todoDiv.appendChild(doneBtn);

        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = '<i class="fas fa-trash"></i>';
        removeBtn.classList.add("removeBtn");
        todoDiv.appendChild(removeBtn);

        todoList.appendChild(todoDiv);
    }
});
todoList.addEventListener('click', function(e) {

    const item = e.target;
    if (item.classList[0] === 'removeBtn') {
        const youdo = item.parentElement;
        youdo.remove();
    }
    if (item.classList[0] === 'doneBtn') {
        const youdo = item.parentElement;
        youdo.classList.toggle("completed");
    }
});


menuList.addEventListener('click', function(e) {
    const menudo = todoList.childNodes;
    menudo.forEach(function(youdo) {

        switch (e.target.value) {
            case "completed":
                if (youdo.classlist.contains('completed')) {
                    youdo.style.display = 'flex';
                } else {
                    youdo.style.display = "none";
                }
            case "all":
                youdo.style.display = "flex";
                break;
        }
    });



});