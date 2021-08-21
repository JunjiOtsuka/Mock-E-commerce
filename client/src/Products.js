import { Row, Col, Card, Button } from 'react-bootstrap'

export default function Products({ productInfo, clickedAddToCart }) {

    return (
        <Col>
            <Row xs={1} md={4} className="justify-content-start g-3">
                {productInfo && productInfo.map((item) => (
                    <Col id={item.id}>
                        <Card style={{ border: "none" }}>
                            <Card.Img className="justify-content-center mt-5" src="holder.js/100px160" alt="Product Image" />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text className="mt-3">
                                    {item.description}
                                </Card.Text>
                                <Card.Text>
                                    {item.inStock} in stock
                                </Card.Text>
                                
                                {item.inStock > 0 
                                && <Button variant="warning" onClick={()=>clickedAddToCart(item)} >Add To Cart</Button>
                                }


                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>
    )
}
