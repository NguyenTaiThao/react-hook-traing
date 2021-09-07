import React, { useState } from "react";

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from "./TodoItem";
import Input from "./Input";
import Filter from "./Filter";

/* カスタムフック */
import useStorage from "../hooks/storage";

/* ライブラリ */
import { getKey } from "../lib/util";

function Todo() {
  const [filter, setFilter] = useState("all");
  const [items, putItems] = React.useState([
    { key: getKey(), text: "日本語の宿題", done: false },
    { key: getKey(), text: "reactを勉強する", done: false },
    { key: getKey(), text: "明日の準備をする", done: false },
  ]);

  const handleChange = (checkedItem) => {
    const newItems = items.map((ele, index) =>
      ele.key === checkedItem.key
        ? { ...checkedItem, done: !checkedItem.done }
        : ele
    );
    putItems(newItems);
  };

  const handleAdd = (text) => {
    const newItems = [...items, { key: getKey(), text: text, done: false }];
    putItems(newItems);
  };

  const handleFilter = (value) => setFilter(value);

  const displayItems = items.filter((e) => {
    if(filter === 'all') return true;
    if(filter === 'undone') return !e.done;
    if(filter === 'done') return e.done;

  }) 

  return (
    <div className="panel">
      <div className="panel-heading">ITSS ToDoアプリ</div>
      <Input onAdd={handleAdd} />
      <Filter onChange={handleFilter} value={filter} />
      {displayItems.map((item) => (
        <TodoItem item={item} key={getKey()} onClick={handleChange} />
      ))}
      <div className="panel-block">{items.length} items</div>
    </div>
  );
}

export default Todo;
