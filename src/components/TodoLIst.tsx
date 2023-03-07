import { TodoItem } from './TodoItem';
import { ITodo } from '../types/data';
import { useTodos } from '../store';

interface ITodoList {
  items: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoList> = (props) => {
  const { items, toggleTodo, removeTodo } = props;
  const todos = useTodos((state: any) => state.todos);
  return (
    <div>
      {props.items.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          {...todo}
        />
      ))}
    </div>
  );
};

export { TodoList };
