const Clicker = ({ amount, dispatch }) => (
  <div className="clicker">
    <h1>{amount}</h1>
    <h3>Drops of blood</h3>
    <button
      className="buy"
      type="button"
      onClick={() => dispatch({ type: "click" })}
    >
      {" "}
      Cut your finger
    </button>
  </div>
);

export default Clicker;
