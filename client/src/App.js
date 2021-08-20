import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductList from "./ProductList";
import PrePurchaseConfirmation from "./PrePurchaseConfirmation"
import Confirmation from "./Confirmation"


function App() {
  let [checkOutBool, setCheckOutBool] = useState(false)
  const [productInfo, setProductInfo] = useState([])  //{id:1}, {id:2}, {id:3}
  const [shoppingCart, setShoppingCart] = useState([]) //{id:1}, {id:2}, {id:3}

  function checkOutButton() {

    setCheckOutBool(
      checkOutBool = !checkOutBool
    )
  }

  // useEffect (async() => {
  //   await axios.post('http://localhost:3001/PrePurchase', {
  //     data: { data: "hello" },
  //   })
  // }, [checkOutBool]) 

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" >
            <ProductList
              checkOutButton={checkOutButton}
              productInfo={productInfo}
              setProductInfo={setProductInfo}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          </Route>
          <Route exact path="/PrePurchaseConfirmation">
            <PrePurchaseConfirmation 
              shoppingCart={shoppingCart}
            />
          </Route>
          <Route exact path="/Confirmation">
            <Confirmation />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
