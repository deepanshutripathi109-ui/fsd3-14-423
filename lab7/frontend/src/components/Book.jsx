 export default function Book(props) {
  const {rating,bname,price ,quantity,picURL} = props.book;
  return (
    <div>
      <img src={props.book.picUrl} alt={props.book.bname}/>
      <h1>{props.book.bname}</h1>
      <h2>Price: {props.book.price}</h2>
      <h3>Quantity: {props.book.quantity}</h3>
      <h4  style={{color:"blue"}}>Rating: {props.book.rating}</h4>
      <button className="button">Buy now</button>
    </div>
  );
}
