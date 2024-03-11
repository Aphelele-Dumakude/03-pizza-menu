function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 pm to {closeHour}:00 pm. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Order;
