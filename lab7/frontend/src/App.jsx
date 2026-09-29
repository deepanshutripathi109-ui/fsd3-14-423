const b1 = {
  pickUrl : "https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY218_.jpg",
  bname : "React Design Pattern",
  price:1199,
  quantity: 10,
  rating : 5.0,
};


function Book(){
  return(
    <div>
      <img src="https://m.media-amazon.com/images/I/61aYZnnMaHL._AC_UY218_.jpg" alt="Design Pattern React JS" />
      
      <h1>Let's Learn React</h1>
      <h2>Price : 765.00</h2>
      <h3>Quantity:5</h3>
      <h4>Rating : 5.0</h4>
    </div>
  )
}


export default function App(){
  return(
    <>
      <Book/>
      <h1>Hello React</h1>
      <Book/>
      <Book/>
      <Book/>
    
      
    </>
  )

}

