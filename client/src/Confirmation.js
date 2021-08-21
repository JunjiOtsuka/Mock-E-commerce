import { Button, Container, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function Confirmation() {
    let history = useHistory()

    return (
        <Container style={{ minHeight: "100vh", marginTop: "250px" }}>
            <Row >
                <div>
                    <div className="d-flex justify-content-center align-items-center" >
                        Order confirmed: your order is now pending and the items will be shipped after payment have been confirmed.
                    </div>
                </div>
            </Row>
            <Row className="d-flex justify-content-center align-items-center">
                <Button 
                    style={{width:"200px"}}
                    onClick={() => {
                        history.push({
                            pathname: "/"
                        })
                    }}>
                    Return to Shopping
                </Button>
            </Row>
        </Container>
    )
}
