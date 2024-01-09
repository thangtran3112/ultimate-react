import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

/*const initialItems = [
  {
    id: 1,
    description: "Passports",
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    description: "Socks",
    quantity: 12,
    packed: true,
  },
  {
    id: 3,
    description: "Charger",
    quantity: 1,
    packed: false,
  },
];*/

export default function App() {
  const [items, setItems] = useState([]);
  // const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((currentItems) => [...currentItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((it) => it.id !== id));
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure that you want to delete all items?"
    );
    if (confirmed) setItems(() => []);
  }

  //replace packed into reversed packed boolean value, only for the matching item
  //always return new array, as React should always use immutable data
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  //it is a common practice to name the customized props as onAddItems
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
