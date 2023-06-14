import "./index.css";
import Todo from "../todo/Todo";

const TodoList = ({ todoList }) => {
  return (
    <>
      <ul className="todo__ul">
        {todoList.map((todo) => (
          <Todo data={todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
