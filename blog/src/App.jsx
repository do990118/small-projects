/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";

function List() {
  let [title, setTitle] = useState("여자 코트 추천");
  let [count, setCount] = useState(0);

  return (
    <div className="list">
      <h4
        onClick={() => {
          setTitle("남자 코트 추천");
        }}
      >
        {title}{" "}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          💗
        </button>
        {count}
      </h4>
      <p>2024.03.13</p>
    </div>
  );
}

function Modal() {
  return (
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세 내용</p>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      <List />
      <List />
      <List />
      <Modal></Modal>
    </div>
  );
}

export default App;
