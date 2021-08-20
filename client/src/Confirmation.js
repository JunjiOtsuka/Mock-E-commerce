import { Button, Container, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function Confirmation() {
    let history = useHistory()

    return (
        <Container >
            <Row>
                <div>
                    <div>
                        Order confirmed: thank you for using our service your items will be shipped shortly ETA of your shipping is: Date()
                    </div>
                </div>
            </Row>
            <Row>
                <Button onClick={() => {
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
