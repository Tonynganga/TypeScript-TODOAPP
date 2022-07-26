"use strict";
// class implementing the interface
class Todo {
    constructor(name, date, description, completed) {
        this.name = name;
        this.date = date;
        this.description = description;
        this.completed = completed;
    }
}
// class which contains lists of todos and the actions
class TodoList {
    // create a new todo
    createTodoItem(name, date, description) {
        let newItem = new Todo(name, date, description, false);
        // console.log(newItem);
        let totalCount = TodoList.uncompletedTodos.push(newItem);
        // console.log();
        console.log(TodoList.uncompletedTodos);
        return totalCount;
    }
    //return all Todos
    allTodosItems() {
        return TodoList.uncompletedTodos;
    }
}
TodoList.uncompletedTodos = new Array();
TodoList.completedTodos = new Array();
window.onload = function () {
    var _a;
    let task = document.getElementById("todoName");
    let date = document.getElementById("todoDate");
    let description = document.getElementById("todoDescription");
    // add an event listener for add click
    (_a = document.getElementById("add")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => toAllTasks(task.value, date.value, description.value));
};
function toAllTasks(task, date, description) {
    let todo = new TodoList();
    // add tasks to the list
    todo.createTodoItem(task, date, description);
    // console.log(todo);
    // Fetched the updated list and create a list item for UI
    let div = document.getElementById("todoList");
    let list = "<dl class='dl-horizontal'>";
    for (let index = 0; index < TodoList.uncompletedTodos.length; index++) {
        // list = list + "<dt> " + TodoList.allTodos[index].name + "</dt> <dd>" + 
        // TodoList.allTodos[index].description + "</dd>" + "<dd> " + TodoList.allTodos[index].date + "</dd>";
        list = list + `
        <div class="task-holder">
                <input type="checkbox" onclick="taskComplete(this);" class="check">
                <div class="upper">
                    <input type="text" value="${TodoList.uncompletedTodos[index].name}" class="task">
                    <input type="date" value="${TodoList.uncompletedTodos[index].date}" class="task">
                </div>
                <div class="content">
                    <input type="text" value="${TodoList.uncompletedTodos[index].description}" class="task1">
                    <img src="images/circle-check-solid.svg" class="trash" onclick="" alt="">
                    <img src="images/trash-solid.svg" class="trash" onclick="" alt="">
                </div>
        </div>`;
    }
    div.innerHTML = list;
    // casting
    document.getElementById("todoName").value = "";
    document.getElementById("todoDescription").value = "";
}
// Completed tasks
// class Completed {
//     // function markCompleted(index){
//     // }
//     markCompleted(index){
//         const objIndex = 
//     }
// }
