
import {Container, Row, Col, Button, Form, Alert, Card} from "react-bootstrap";
import Link from 'next/link';
import { Facebook, Twitter, Google, } from "react-bootstrap-icons";


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
                                    <h3>Sign In to Dashboard</h3>
                                    
                                     <h4>   New Here?
                                        <Link href="/">
                                            <a> Create An Account</a>
                                        </Link>   
                                    </h4>
                                    {/* <div className="info-mail">
                                        <div className="cnt">
                                            <p>Use account <span>admin@demo.com</span> and password <span>demo</span> to continue.</p>
                                        </div>
                                    </div> */}
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
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Şifre</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                        <Link href="/">
                                            <a className="forget-password">Şifremi Unuttum</a>
                                        </Link>
                                    </Form.Group>
                                    <Button className="first-btn" variant="primary" type="submit">
                                        <span className="icon"></span>
                                        <span className="txt">Continue</span>
                                    </Button>
                                    <span className="or">OR</span>
                                    <Button className="button-another" variant="primary" type="submit">
                                        <span className="icon google">
                                            <Google size={20}/>
                                        </span>
                                        <span className="txt google-txt">Continue with Google</span>
                                    </Button>
                                    <Button className="button-another" variant="primary" type="submit">
                                        <span className="icon facebook">
                                            <Facebook size={20}/>
                                        </span>
                                        <span className="txt facebook-txt">Continue with Facebook</span>
                                    </Button>
                                    <Button className="button-another" variant="primary" type="submit">
                                        <span className="icon twitter">
                                            <Twitter size={20}/>
                                        </span>
                                        <span className="txt twitter-txt">Continue with Twitter</span>
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