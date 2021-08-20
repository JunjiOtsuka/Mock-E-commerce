import { Container, Navbar } from 'react-bootstrap'

export default function NavCheckout() {
    return (
        <Navbar bg="light" variant="light" className="fixed-top mb-5">
            <Container>
                <Navbar.Brand href="#home" className="mx-auto">
                    Sample E-commerce
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
