import "./index.css";
import { useState } from "react";

const Todo = ({ data }) => {

  /* useState */
  const [isDone, setDone] = useState(data.completed);

  const handleToggle = () => {
    setDone(!isDone);
  };

  return (
    <>
      <li
        key={data.id}
        className={` todo__li ${isDone ? "done" : ""}`}
        id={data.id}
        onClick={handleToggle}>
        {data.todo}
      </li>
    </>
  );
};

export default Todo;
