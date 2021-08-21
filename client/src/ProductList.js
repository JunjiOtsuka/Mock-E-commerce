import { useEffect } from 'react'
import { Row, Container } from 'react-bootstrap'
import NavCheckout from './NavCheckout'
import Products from './Products'
import Checkout from './Checkout'
import axios from 'axios'

export default function ProductList({ productInfo, setProductInfo, shoppingCart, setShoppingCart, checkOutBool, checkOutButton }) {
    function clickedAddToCart(item) {
        const exist = shoppingCart.find(ele => ele.id === item.id)
        if (exist) return

        setShoppingCart([...shoppingCart, item])
    }

    function increment(item) {
        const exist = shoppingCart.find(ele => ele.id === item.id)

        if (exist) {
            if (item.inStock > item.cartQty) {
                setShoppingCart(
                    shoppingCart.map((ele) =>
                        ele.id === item.id ? { ...exist, cartQty: exist.cartQty + 1 } : ele
                    )
                )
            }
        }
    }

    function decrement(item) {
        const exist = shoppingCart.find(ele => ele.id === item.id)

        if (exist) {
            setShoppingCart(
                shoppingCart.map((ele) =>
                    ele.id === item.id ? { ...exist, cartQty: exist.cartQty - 1 } : ele
                )
            )
        }

        if (exist.cartQty === 1) {
            remove(item)
        }
    }

    function remove(item) {
        const exist = shoppingCart.find(ele => ele.id === item.id)
        if (exist) {
            setShoppingCart(shoppingCart.filter((ele) => ele.id !== item.id))
        }
    }

    useEffect(() => {
        let unmounted = false;

        if (!productInfo) return
        axios("http://localhost:3001/")
            .then(data => {
                if (!unmounted) {
                    setProductInfo(data.data)
                    unmounted = false
                }
            })
            .catch(error => {
                if(!unmounted) {
                    console.log(error)
                    unmounted = false
                }
            }, )

        return () => {
            unmounted = true;
        }
    }, [])

    return (
        <Container fluid >
            <NavCheckout />
            <Container className="mt-5">
                <Row >
                    <Products
                        productInfo={productInfo}
                        clickedAddToCart={clickedAddToCart}
                    />
                    <Checkout
                        shoppingCart={shoppingCart}
                        increment={increment}
                        decrement={decrement}
                        remove={remove}
                        checkOutButton={checkOutButton}
                        checkOutBool={checkOutBool}
                    />
                </Row>
            </Container>
        </Container>
    )
}
