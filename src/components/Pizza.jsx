import "./styles/Pizza.css";

export function Pizza(props) {
  return (
    <li className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <img src={props.photoName} alt="Pizza" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>

        {props.soldOut ? <p>SOLD OUT</p> : <span>R{props.price}</span>}
      </div>
    </li>
  );
}
