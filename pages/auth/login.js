
import {Container, Row, Col, Button, Form, Alert, Card} from "react-bootstrap";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
        <div className="login-page">
            <Container fluid>
                <Row className="">
                    <Col md={4} className="mx-auto">
                        <Card className="login-card">
                            <Card.Header>
                                <div className="login-header">
                                    <h3>Sign In to Metronic</h3>
                                    <Alert variant="warning">
                                        New Here?
                                        <Alert.Link href="#">
                                            Create An Account   
                                        </Alert.Link>
                                    </Alert>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="login-content">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            {/* eslint-disable-next-line react/no-unescaped-entities */}
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
                                    <Button className="first-btn" variant="primary" type="submit">
                                        <span className="icon"></span>
                                        <span className="txt">Continue</span>
                                    </Button>
                                    <span className="or">OR</span>
                                    <Button className="button-another" variant="primary" type="submit">
                                        <span className="icon"></span>
                                        <span className="txt">Continue with Google</span>
                                    </Button>
                                    <Button className="button-another" variant="primary" type="submit">
                                        <span className="icon"></span>
                                        <span className="txt">Continue with Facebook</span>
                                    </Button>
                                    <Button className="button-another" variant="primary" type="submit">
                                        <span className="icon"></span>
                                        <span className="txt">Continue with Apple</span>
                                    </Button>

                                </Form>
                            </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}