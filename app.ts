
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
        console.log( TodoList.uncompletedTodos);        
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
    let form = <HTMLFormElement>document.getElementById("form");
    let msg = <HTMLDivElement>document.getElementById("msg");

    form.addEventListener("submit", (e) => {
        formValidation();
        e.preventDefault();
        
    });

    let formValidation = () => {
        if (task.value === "" ) {
            msg.innerHTML = "Task Name cannot be blank!!";
        }else if(date.value === ""){
            msg.innerHTML = "Task Date cannot be empty!!";
        }else if(description.value === ""){
            msg.innerHTML = "Task Description cannot be empty!!";
        }
        else{
            msg.innerHTML = "";
            toAllTasks(task.value, date.value, description.value);     
        }
    };
    
}

function toAllTasks(this: any, task: string, date: string, description: string){

    let todo = new TodoList();
    // add tasks to the list

    todo.createTodoItem(task, date, description);

    // console.log(todo);
    renderUncompleted();

    // casting
    (<HTMLInputElement>document.getElementById("todoName")).value = "";
    (<HTMLInputElement>document.getElementById("todoDate")).value = "";
    (<HTMLInputElement>document.getElementById("todoDescription")).value = "";

}

function Complete(index: number){
    var taskItem = TodoList.uncompletedTodos[index];
    TodoList.uncompletedTodos.splice(index, 1);
    let secondarray: number = TodoList.completedTodos.push(taskItem);
    renderUncompleted();
    renderCompleted();
    return secondarray;
    
}
function renderCompleted(){
    
    let div3 = <HTMLDivElement>document.getElementById("todoList2");
    let list3 = "<dl class='dl-horizontal'>";

    for(let index=0; index <TodoList.completedTodos.length; index++) {
        console.log("Console name" + TodoList.completedTodos[index].name);
                
        list3 = list3 + `
        <div class="task-holder">
                <input type="checkbox" onclick="taskComplete(this);" class="check">
                <div class="upper">
                    <input type="text" value="${TodoList.completedTodos[index].name}" class="task">
                    <input type="date" value="${TodoList.completedTodos[index].date}" class="task">
                </div>
                <div class="content">
                    <input type="text" value="${TodoList.completedTodos[index].description}" class="task1">
                    <img src="images/trash-solid.svg" class="trash" onclick="deleteTask(${index})"  alt="">
                </div>
        </div>`;
    }
    div3.innerHTML = list3;
    
}
function renderUncompleted(){
    let div = <HTMLDivElement>document.getElementById("todoList");
    let list = "<dl class='dl-horizontal'>";

    for(let index=0; index <TodoList.uncompletedTodos.length; index++) {
        list = list + `
        <div class="task-holder">
                <input type="checkbox" onclick="taskComplete(this);" class="check">
                <div class="upper">
                    <input type="text" value="${TodoList.uncompletedTodos[index].name}" class="task">
                    <input type="date" value="${TodoList.uncompletedTodos[index].date}" class="task">
                </div>
                <div class="content">
                    <input type="text" value="${TodoList.uncompletedTodos[index].description}" class="task1">
                    <img src="images/circle-check-solid.svg" class="trash" onclick="Complete(${index})"  alt="">
                    <img src="images/trash-solid.svg" class="trash" onclick="deleteTaskU(${index})" alt="">
                </div>
        </div>`;





    }
    div.innerHTML = list;

}
function deleteTask(index:number){
    TodoList.completedTodos.splice(index, 1);
    console.log(TodoList.completedTodos);
    renderCompleted();
}
function deleteTaskU(index: number){
    TodoList.uncompletedTodos.splice(index, 1);
    console.log("This" + TodoList.uncompletedTodos);

    renderUncompleted();
    
}
