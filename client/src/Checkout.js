import { Col, Card, Button, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function Checkout({ shoppingCart, increment, decrement, remove }) {
    let history = useHistory()
    return (
        <Col md={2}>
            <Card.Body className="position-fixed">
                <Card.Title className="mb-4">
                    My Cart {shoppingCart.length}
                </Card.Title>
                <div>
                    {shoppingCart.length >= 0
                    && shoppingCart.map((item) => (
                        <Row className="d-flex align-items-center mb-3">
                            <Col md={3}>
                                {item.name}
                            </Col>
                            <Col md={9}>
                                <Button variant="light" onClick={() => decrement(item)}>
                                    -
                                </Button>
                                <span> Qty:{item.cartQty}</span>
                                <Button variant="light" onClick={() => increment(item)}>
                                    +
                                </Button>
                                <Button variant="danger" onClick={() => remove(item)}>
                                    R
                                </Button>
                            </Col>
                        </Row>
                    ))}
                </div>
                <Button onClick={() => {
                    history.push({
                        pathname: "/PrePurchaseConfirmation", 
                        state: shoppingCart
                    })
                }}>Checkout</Button>
            </Card.Body>
        </Col>
    )
}
