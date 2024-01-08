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

function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  //do not use items.sort(), as it will mutate the original array
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul className="list">
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  //when 'items' state is updated, App component will be re-rendered
  //at that time, the 'numItems' will be recalculated anyway
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `🧳 You have ${numItems} items on your list, and you already packed 
         ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
