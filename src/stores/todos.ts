import { defineStore } from 'pinia';
import type { RootTodoState } from '@/utils/types';

const local_json = localStorage.getItem("state");
const local_state = (!local_json ? {todos: [], next_id: 0} : JSON.parse(local_json));

export const useTodos = defineStore('todos', {
  state: () => ({
    todos: local_state.todos || [],
    next_id: local_state.next_id || 0,
  } as RootTodoState),
  actions: {
    addTodo(title: String) {
      this.todos.push({ 
        id: ++this.next_id,
        title,
        is_finished: false
      })
    },
    checkTodo(id: number) {
      const todo = this.todos.find(item => item.id === id);
      if(!todo) return;

      todo.is_finished = !todo.is_finished;
    },
    removeTodo(id: number) {
      const remove_index = this.todos.findIndex(item => item.id === id);
      if(remove_index === -1) return;

      this.todos.splice(remove_index, 1);
    }
  },
})