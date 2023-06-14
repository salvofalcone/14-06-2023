import "./App.css";
import Title from "./components/title";
import Button from "./components/button";
import TodoList from "./components/todoList/TodoList";
import { todoList } from "./mocks/todos";

function App() {
  return (
    <div className="App">
      {/* <Button /> */}
      <Title />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
