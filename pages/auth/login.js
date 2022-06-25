
import {Container, Row, Col, Button, Form, Alert} from "react-bootstrap";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
        <Container fluid>
            <Row className="align-items-md-center flex-column justify-content-md-center">
                <Col md={4}>
                    <h3>Sign In to Metronic</h3>
                    <h4>New Here? 
                        <Link href="/">
                            <a>Create An Account</a>
                        </Link> 
                    </h4>
                </Col>
                
                <Col md={4}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Şifre</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
  )
}