import React, {useState, useEffect, useRef} from 'react';
import '../css/style.css';
import '../css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { TextField, Button, Select, MenuItem } from '@mui/material';

export default function Login() {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {

    }

    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col lg="5" sm="12" md="8">     
                        <div className="login-container">
                            <form onSubmit={onSubmit}>
                                <TextField className="login-input" color='secondary' value={mail} type="text" label="Adresse email" fullWidth/>
                                <TextField className="login-input" color='secondary' value={password} type="password" label="Mot de passe" fullWidth/>
                                <Button className="login-button" variant='outlined' color='secondary' fullWidth>Se connecter</Button>
                            </form>    
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}