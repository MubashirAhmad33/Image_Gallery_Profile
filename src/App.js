import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import "./App.css";

const allcategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allcategories);

function App() {
  const [menuitems, setMenuitems] = useState(items);
  const [categories, setCategories] = useState(allcategories);

  const filteritems = (category) => {
    if (category == "all") {
      setMenuitems(items);
      return;
    }
    const newitems = items.filter((item) => item.category === category);
    setMenuitems(newitems);
  };

  const remove = (id) => {
    const del = menuitems.filter((menuitem) => menuitem.id !== id);
    setMenuitems(del);
    return;
  };

  return (
    <main>
      <section className="title">
        <h2>our Menu</h2>
        <div className="underline"></div>
      </section>
      <Categories categories={categories} filteritems={filteritems} />
      <Menu items={menuitems} remove={remove} setMenuitems={setMenuitems} />
      <div className="btncontainer">
        <button onClick={() => setMenuitems([])} className="removebtn center">
          Claer
        </button>
        <button
          onClick={() => setMenuitems(items)}
          className="removebtn center"
        >
          Recover
        </button>
      </div>
    </main>
  );
}

export default App;
