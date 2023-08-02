import { memo } from "react";
const Autoclicker = memo(({ tier, amount, cost, dispatch, enabled }) => {
  const buy = () => dispatch({ type: "increase", tier });
  const sell = () => dispatch({ type: "decrease", tier });

  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="clicker">
      <div className="info">
        <h2>{`${Intl.NumberFormat().format(amount)} × ${capitalizeWords(
          tier
        )}`}</h2>
        <p>{`this ${tier} buys and sells for ${Intl.NumberFormat().format(
          cost
        )}`}</p>
      </div>
      <button
        className={`buy ${enabled ? undefined : "disabled"}`}
        type="button"
        onClick={buy}
      >
        {`Raise ${capitalizeWords(tier)} - ${Intl.NumberFormat().format(
          cost
        )} Blood`}
      </button>
      {amount > 0 && (
        <button className="sell" type="button" onClick={sell}>
          -
        </button>
      )}
    </div>
  );
});
export default Autoclicker;
