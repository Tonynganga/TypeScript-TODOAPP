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
// class whic contains lists of todos and the actions
class TodoList {
    // create a new todo
    createTodoItem(name, date, description) {
        let newItem = new Todo(name, date, description, false);
        // console.log(newItem);
        let totalCount = TodoList.allTodos.push(newItem);
        // console.log();
        console.log(TodoList.allTodos);
        return totalCount;
    }
    //return all Todos
    allTodosItems() {
        return TodoList.allTodos;
    }
}
TodoList.allTodos = new Array();
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
    for (let index = 0; index < TodoList.allTodos.length; index++) {
        list = list + "<dt> " + TodoList.allTodos[index].name + "</dt> <dd>" + TodoList.allTodos[index].description + "</dd> <dt> " + TodoList.allTodos[index].date + "</dt>";
    }
    list += "</dl>";
    div.innerHTML = list;
    // casting
    document.getElementById("todoName").value = "";
    document.getElementById("todoDescription").value = "";
}
