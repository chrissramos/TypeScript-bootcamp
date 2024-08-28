import TodoList from './todo';

const todoList = new TodoList();

document.getElementById('add-todo')!.addEventListener('click', () => {
  const inputElement = document.getElementById('new-todo') as HTMLInputElement;
  const text = inputElement.value.trim();
  if (text) {
    todoList.addTodo(text);
    inputElement.value = '';
  }
});