import Book from "./components/Book";
import Pen from "./components/pen";
const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY218_.jpg",
  bname: "React Design Pattern",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};
const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY218_.jpg",
  bname: "The Road to React",
  price: 2886,
  quantity: 3,
  rating: 4.5,
};
const p1 = {
  picUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pen/y/s/c/4030186-classmate-enriched-transparent-original-imag78yghkqchxdk.png?q=70",
  company: "Reynolds",
  price: 99,
  
};
const p2 = {
  picUrl: "https://rukminim2.flixcart.com/image/612/612/xif0q/pen/n/c/n/91246-flair-enriched-transparent-original-imageexytkdmpq9v.png?q=70",
  company: "Flair",
  price: 199,
  
}

export default function App() {
  
  return (
    <>
    <h1>Online Book Store</h1>
    <div className="container">
        {/* <Book book={b1} />
        
        <Book book={b2} />
        <Book book={b1} />
        <Book book={b2} />
        <Book book={b2} /> */}
        <Pen pen={p1}/>
        <Pen pen={p2}/>

      </div>
    </>
  );
}