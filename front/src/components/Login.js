import React, {useState, useEffect, useRef} from 'react';
import '../css/style.css';
import '../css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { TextField, Button, Select, MenuItem } from '@mui/material';
import Cookies from 'js-cookie';

export default function Login() {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const cookie = Cookies.get('csrftoken')

    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col lg="5" sm="12" md="8">     
                        <div className="login-container">
                            <form method="POST" action="/login/">
                                <input type="hidden" name="csrfmiddlewaretoken" value={cookie} />
                                <TextField name="username" className="login-input" color='secondary' value={mail} onChange={(e) => setMail(e.target.value)} type="text" label="Adresse email" fullWidth/>
                                <TextField name="password" className="login-input" color='secondary' value={password} onChange={(e) => setPassword(e.target.value)} type="password" label="Mot de passe" fullWidth/>
                                <Button className="login-button" variant='outlined' color='secondary' type="submit" fullWidth>Se connecter</Button>
                            </form>    
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}