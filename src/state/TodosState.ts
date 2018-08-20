
import { Container } from 'unstated';
import { ITodo } from '@src/models';

export interface ITodosState {
  todos: ITodo[];
}

export default class TodosState extends Container<ITodosState> {

  nextTodoId: number = 0;

  state = {
    todos: []
  };

  add = (text: string) => {
    this.setState((state) => ({
      todos: [
        ...state.todos,
        { id: this.nextTodoId++, text, completed: false } as ITodo
      ] 
    }));
  }

  toggle = (id: number) => {
    this.setState((state) => ({
      todos: state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo )
    }));
  }
}