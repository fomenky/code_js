var todos = ["item 1", "item 2"]

function addTodo(todo) {
  todos.push(todo);
  displayTodos()
}

//funtion sleep(ms) {
//  return new Promise(resolve => setTimeout(resolve, ms));
//}

async function displayTodos(){
  console.log("My todos:", todos);
  //await sleep(2000);
}

function changeTodo(pos, newVal) {
  todos[pos] = newVal;
  displayTodos();
}

addTodo("new todo")
changeTodo(0, 'chnaged')