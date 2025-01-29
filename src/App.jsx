import React, { useState } from 'react';
    import Header from './components/Header';
    import Hero from './components/Hero';
    import Menu from './components/Menu';
    import OrderList from './components/OrderList';
    import Form from './components/Form';
    import Footer from './components/Footer';
    import HotOffers from './components/HotOffers';
    
    function App() {
      const [order, setOrder] = useState([]);
    
      const updateOrder = (newOrder) => {
        setOrder(newOrder);
      };
    
      return (
        <>
          <Header />
          <Hero />
          <Menu updateOrder={updateOrder} />
          <OrderList order={order} />
          <Form />
          <HotOffers />
          <Footer />
        </>
      );
    }
    
    export default App;
