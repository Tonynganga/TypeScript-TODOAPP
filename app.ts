interface ITodo{
    name: string;
    date: string;
    description: string;
    completed: boolean;
}

// class implementing the interface
class Todo implements ITodo{
    constructor(public name: string, public date: string, public description: string, public completed: boolean){}
}

// class which contains lists of todos and the actions
class TodoList{
    public static uncompletedTodos: Todo[] = new Array();

    public static completedTodos: Todo[] = new Array();

    // create a new todo
    createTodoItem(name: string, date: string, description: string):number{
        let newItem = new Todo(name, date, description, false);
        // console.log(newItem);
        let totalCount : number = TodoList.uncompletedTodos.push(newItem);
        // console.log();
        console.log(TodoList.uncompletedTodos);
        
        
                
        return totalCount;
    }

    //return all Todos
    allTodosItems(): Todo[]{
        return TodoList.uncompletedTodos;
    }
}

window.onload = function(){
    let task = <HTMLInputElement>document.getElementById("todoName");
    let date = <HTMLInputElement>document.getElementById("todoDate");
    let description = <HTMLInputElement>document.getElementById("todoDescription");

    // add an event listener for add click
    document.getElementById("add")?.addEventListener("click", ()=>toAllTasks(task.value, date.value, description.value));

}
function toAllTasks(task: string, date: string, description: string){

    let todo = new TodoList();
    // add tasks to the list

    todo.createTodoItem(task, date, description);

    // console.log(todo);
    

    // Fetched the updated list and create a list item for UI
    let div = <HTMLDivElement>document.getElementById("todoList");
    let list = "<dl class='dl-horizontal'>";

    for(let index=0; index <TodoList.uncompletedTodos.length; index++) {
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
    (<HTMLInputElement>document.getElementById("todoName")).value = "";
    (<HTMLInputElement>document.getElementById("todoDescription")).value = "";
}

// Completed tasks
// class Completed {
//     // function markCompleted(index){

//     // }
//     markCompleted(index){
//         const objIndex = 
//     }
// }
