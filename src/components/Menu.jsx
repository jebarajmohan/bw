import React, { useState } from 'react';
    import './Menu.css';
    
    const menuItems = [
      {
        id: 1,
        name: 'Chicken Biriyani',
        description: 'Biryani is not just a dish, it’s a love story..',
        price: 250,
        image: 'https://wallpaperaccess.com/full/1972917.jpg',
      },

      {
        id: 2,
        name: 'Chicken 65 Biriyani',
        description: 'Biryani is not just a dish, it’s a love story..',
        price: 250,
        image: 'https://tse2.mm.bing.net/th?id=OIP.f4i5ifcVPe0__tYXuaWedAAAAA&pid=Api&P=0&h=180',
      },
      {
        id: 3,
        name: 'Mutton Biriyani',
        description: 'Biryani is not just a dish, it’s a love story..',
        price: 250,
        image: 'https://img.freepik.com/premium-photo/indian-mutton-biryani-prepared-basmati-rice-served-with-yogurt-dip-moody-background-selective-focus_466689-53059.jpg?w=2000',
      },
      {
        id: 4,
        name: 'Chicken Biriyani Combo',
        description: 'Biryani is not just a dish, it’s a love story.',
        price: 250,
        image: 'https://tse2.mm.bing.net/th?id=OIP.eJNlXmALwZ_Rwv-7mM7aPAAAAA&pid=Api&P=0&h=180',
      },
      {
        id: 5,
        name: 'Plain Biriyani',
        description: 'Biryani is not just a dish, it’s a love story.',
        price: 250,
        image: 'https://tse4.mm.bing.net/th?id=OIP.dIC_wadW5Oo25aZV2wHiqgHaHa&pid=Api&P=0&h=180',
      },
      {
        id: 6,
        name: 'Butter Nan',
        description: 'Biryani is not just a dish, it’s a love story.',
        price: 250,
        image: 'https://tse1.mm.bing.net/th?id=OIP.wMMXP4l68NMkS7Zjvt1FyQHaHa&pid=Api&P=0&h=180',
      },
    ];
    
    function Menu({ updateOrder }) {
      const [quantities, setQuantities] = useState(menuItems.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {}));
    
      const handleQuantityChange = (itemId, change) => {
        setQuantities(prevQuantities => {
          const newQuantity = Math.max(0, (prevQuantities[itemId] || 0) + change);
          const updatedQuantities = { ...prevQuantities, [itemId]: newQuantity };
          updateOrder(menuItems.map(item => ({
            ...item,
            quantity: updatedQuantities[item.id] || 0
          })));
          return updatedQuantities;
        });
      };
    
      const handleManualQuantityChange = (itemId, event) => {
        const value = parseInt(event.target.value, 10);
        setQuantities(prevQuantities => {
          const newQuantity = isNaN(value) ? 0 : Math.max(0, value);
           const updatedQuantities = { ...prevQuantities, [itemId]: newQuantity };
          updateOrder(menuItems.map(item => ({
            ...item,
            quantity: updatedQuantities[item.id] || 0
          })));
          return updatedQuantities;
        });
      };
    
      return (
        <section className="menu">
          <div className="container">
            <h2>Our Menu</h2>
            <div className="menu-items">
              {menuItems.map((item) => (
                <div key={item.id} className="menu-item">
                  <div className="item-details">
                    <div className="item-header">
                      <span className="rating">★4.8 (2.5 K)</span>
                      <h3>{item.name}</h3>
                    </div>
                    <p className="description">{item.description}</p>
                    <p className="price">Rs.{item.price}.00</p>
                  </div>
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                    <div className="quantity-control">
                      <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                      <input
                        type="number"
                        min="0"
                        value={quantities[item.id] || 0}
                        onChange={(event) => handleManualQuantityChange(item.id, event)}
                        className="quantity-input"
                      />
                      <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }
    
    export default Menu;
