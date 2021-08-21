import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export default function PrePurchaseConfirmation({ shoppingCart, setShoppingCart }) {
    let history = useHistory()

    function submitPurchaseOrder(history, shoppingCart) {
        shoppingCart.map((item) => 
            axios.post('http://localhost:3001/shopping', {
                shoppingCart: {
                    id: item.id,
                    cartQty: item.cartQty
                }
            })
            .then(data => 
                data
            )
            .catch(error => {
                console.log(error)
            })
        )
        
        setShoppingCart(shoppingCart = [])
        history.push("/Confirmation")

    }

    return (
        <Container>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFullName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="FullName" placeholder="First Name, Last Name, Middle" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Shipping Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Billing Address</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Button onClick={() =>
                    submitPurchaseOrder(history, shoppingCart)
                }>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
