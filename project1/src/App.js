import logo from "./logo.svg";
import "./App.css";
import useStorage from "./hooks/localStorage";
import { useState } from "react";

const studentList = ["Huyen", "Hoa", "Hung", "Long"];
function App() {
  const [position, nextStudent, previousStudent] = useStorage();

  return (
    <div className="App">
      <h4>学生一覧：[{studentList.toString()}]</h4>
      <h4>位置：{position}</h4>
      <h4>名前：{studentList[position-1]}</h4>
      <button　onClick={nextStudent}>次に</button>
      <button onClick={previousStudent}>前に</button>
    </div>
  );
}

export default App;
