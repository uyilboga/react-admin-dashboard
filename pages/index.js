import {Container, Row, Col, Button} from "react-bootstrap";

export default function Home() {
  return (
    <div>
        <Container>
            <Row>
                <Col md={12}>
                    admin board
                    <Button variant="primary">Primary</Button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
