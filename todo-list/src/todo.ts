interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  
  class TodoList {
    todos: Todo[] = [];
  
    addTodo(text: string): void {
      const newTodo: Todo = {
        id: Date.now(),
        text,
        completed: false,
      };
      this.todos.push(newTodo);
      this.render();
    }
  
    deleteTodo(id: number): void {
      this.todos = this.todos.filter(todo => todo.id !== id);
      this.render();
    }
  
    toggleComplete(id: number): void {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
      this.render();
    }
  
    render(): void {
      const todoListElement = document.getElementById('todo-list')!;
      todoListElement.innerHTML = '';
  
      this.todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = todo.completed ? 'completed' : '';
        li.innerHTML = `
          ${todo.text}
          <button class="delete" data-id="${todo.id}">Delete</button>
          <button class="toggle" data-id="${todo.id}">${todo.completed ? 'Undo' : 'Complete'}</button>
        `;
        todoListElement.appendChild(li);
      });
  
      document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', () => {
          const id = parseInt((button as HTMLButtonElement).dataset.id!);
          this.deleteTodo(id);
        });
      });
  
      document.querySelectorAll('.toggle').forEach(button => {
        button.addEventListener('click', () => {
          const id = parseInt((button as HTMLButtonElement).dataset.id!);
          this.toggleComplete(id);
        });
      });
    }
  }
  
  export default TodoList;
  