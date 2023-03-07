import { useTodos } from '../store';
import { ITodo } from '../types/data';

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, removeTodo, toggleTodo } = props;
  useTodos((state: any) => state.addTodo);
  return (
    <div>
      <input
        type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      <span>{title}</span>
      <button onClick={() => removeTodo(id)}>Delete</button>
    </div>
  );
};

export { TodoItem };
