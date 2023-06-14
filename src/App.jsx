import "./App.css";
import Todo from "./components/todo";
import Title from "./components/title";
import Button from "./components/button";
import { todoList } from "./mocks/todos";

function App() {
  return (
    <>
      <div className="App">
        <Button />
        <Title />
        
        <ul className="todo__ul">
          {/* faccio un map su todoList e creo un componente list item per ogni elemento dell'array */}
          {todoList.map((todo) => (
            <Todo data={todo} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
