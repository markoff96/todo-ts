import { nanoid } from 'nanoid';
import { create } from 'zustand';

export const useTodos = create((set: any) => ({
  todos: [
    { id: 1, title: 'LEARN TS', completed: true },
    { id: 2, title: 'LEARN zus', completed: false },
  ],
  loading: false,
  error: null,
  addTodo: (title: string) =>
    set((state: any) => {
      const newTodo = { id: nanoid(), title, completed: false };

      return { todos: [state.todos, newTodo] };
    }),
}));
