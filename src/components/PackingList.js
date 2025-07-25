import { useState } from "react";
import { Item } from "./Item";

export function PackingList({
  items,
  onDeleteItems,
  onToggleItem,
  handleDeleteItems,
}) {
  const [select, setSelect] = useState("input");

  let sortedItems;

  if (select === "input") sortedItems = items;
  if (select === "alphabetical")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (select === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            onDeleteItems={onDeleteItems}
            onToggleItem={onToggleItem}
            key={item.id}
            item={item}
          ></Item>
        ))}
      </ul>
      <select
        className="actions"
        value={select}
        onChange={(e) => {
          setSelect(e.target.value);
        }}
      >
        <option value="input">Sort by input order</option>
        <option value="alphabetical">Sort by alphabetical</option>
        <option value="packed">Sort by packed</option>
      </select>
      <button onClick={handleDeleteItems}>Clear Items</button>
    </div>
  );
}
