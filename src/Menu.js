import React from "react";

const Menu = ({ items, remove }) => {
  return (
    <div className="section-center">
      {items.map((menuitem) => {
        const { id, title, price, img, desc } = menuitem;
        return (
          <div>
            <article className="menuitem" key={id}>
              <div className="row">
                <img src={img} alt={title} />
                <div className="menu-info">
                  <div className="menu-head">
                    <div className="title">{title}</div>
                    <div className="price">{price}$</div>
                  </div>
                  <p className="text-info">{desc}</p>
                  <button onClick={() => remove(id)} className="removebtn">
                    Remove
                  </button>
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
