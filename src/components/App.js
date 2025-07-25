import { useState } from "react";
import Logo from "./Logo";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";
import { Form } from "./Form";

export default function App() {
  const [item, setItems] = useState([]); //lifted state w/props

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItem(id) {
    setItems((item) => item.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((item) =>
      item.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo></Logo>
      <Form onAddItems={handleItems}></Form>
      <PackingList
        items={item}
        onDeleteItems={deleteItem}
        onToggleItem={handleToggleItem}
        handleDeleteItems={handleDeleteItems}
      ></PackingList>
      <Stats item={item}></Stats>
    </div>
  );
}
