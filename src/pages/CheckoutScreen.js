import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import styled from 'styled-components'

const CheckoutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CheckoutColumn = styled.div`
  flex: 1;
  margin-right: 2rem;

  &:last-child {
    margin-right: 0;
  }
`;

const CheckoutHeader = styled.h2`
  margin-bottom: 1rem;
`;

const CheckoutLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const CheckoutInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  width: 100%;
`;

const CheckoutButton = styled.button`
  background-color: #008CBA;
  border: none;
  color: white;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #006080;
  }
`;

const CheckoutScreen = () => {
  const navigate = useNavigate();
  const { cart: cartItems, clearCart } = useCartContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send order data to server
    clearCart();
    navigate.push('/order-confirmation');
  };

  return (
    <div>
      <div>
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>Qty: {item.quantity}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
          <h3>Total: 25050</h3>
          {/* <button onClick={handlePlaceOrder}>Place Order</button> */}
        </>
      )}
    </div>
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" value={formData.state} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="zip">Zip Code:</label>
          <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleInputChange} required />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
    </div>
  );
};

export default CheckoutScreen;
