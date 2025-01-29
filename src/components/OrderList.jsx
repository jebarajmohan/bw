import React, { useState, useEffect } from 'react';
    import './OrderList.css';
    
    function OrderList({ order }) {
      const [subTotal, setSubTotal] = useState(0);
      const [gst, setGst] = useState(0);
      const [total, setTotal] = useState(0);
    
      useEffect(() => {
        const newSubTotal = order.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        const newGst = newSubTotal * 0.05;
        const newTotal = newSubTotal + newGst;
    
        setSubTotal(newSubTotal);
        setGst(newGst);
        setTotal(newTotal);
      }, [order]);
    
      return (
        <section className="order-list">
          <div className="container">
            <h2>Your order List</h2>
            <div className="order-summary">
              <div className="summary-item">
                <span>Sub Total</span>
                <span>Rs.{subTotal.toFixed(2)}</span>
              </div>
              <div className="summary-item">
                <span>GST</span>
                <span>Rs.{gst.toFixed(2)}</span>
              </div>
              <div className="summary-item total">
                <span>Total</span>
                <span>Rs.{total.toFixed(2)}</span>
              </div>
              <button className="proceed-btn">Proceed to pay</button>
            </div>
            <div className="order-table">
              <table>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {order.filter(item => item.quantity > 0).map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>Rs.{item.price * item.quantity}.00</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      );
    }
    
    export default OrderList;
