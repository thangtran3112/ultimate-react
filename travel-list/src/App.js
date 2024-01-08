import { useState } from "react";

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

  //it is a common practice to name the customized props as onAddItems
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️Far Away 🧳</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    //console.log(e);
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    console.log(newItem);
    onAddItems(newItem);

    //reset description to initial stage
    setDescription("");
    setQuantity(1);
  }

  /*
   *By default, form will be submit, when we hit 'Enter' on input
   *Or click Add button. We can also put onClick event on <button>Add</button> ,
   *if we do not want to natural form submit event.
   *Note that we can print out event by console.log(e)
   */
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trips?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem }) {
  return (
    <div className="list">
      <ul className="list">
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>🧳 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
