import React, {useState, useEffect, useRef} from 'react';
import '../css/style.css';
import '../css/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { TextField, Button, Select, MenuItem } from '@mui/material';
import Cookies from 'js-cookie';

export default function RegisterForm() {


  const [mail, setMail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [school, setSchool] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('Femme')
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const cookie = Cookies.get('csrftoken')

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col lg="5" sm="12" md="8">
            <div className="login-container">
              <form method="post" action="/register/">
                <input type="hidden" name="csrfmiddlewaretoken" value={cookie} />
                <TextField name="email" className="login-input" color='secondary' value={mail} onChange={(e) => setMail(e.target.value)} type="text" label="Adresse email" fullWidth />
                <TextField name="phone-number" className="login-input" color='secondary' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type="text" label="Numéro de téléphone" fullWidth />
                <TextField name="first-name" className="login-input" color='secondary' value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" label="Prénom" fullWidth />
                <TextField name="last-name" className="login-input" color='secondary' value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" label="Nom" fullWidth />
                <TextField name="school" className="login-input" color='secondary' value={school} onChange={(e) => setSchool(e.target.value)} type="text" label="École" fullWidth />
                <TextField name="year" className="login-input" color='secondary' value={year} onChange={(e) => setYear(e.target.value)} type="text" label="Année (BAC+?)" fullWidth />
                <Select value={gender} name="gender" onChange={(e) => setGender(e.target.value)}>
                  <MenuItem value="Femme">Femme</MenuItem>
                  <MenuItem value="Homme">Homme</MenuItem>
                  <MenuItem value="Homme">Déficiant mental</MenuItem>
                </Select>
                <TextField name="password" className="login-input" color='secondary' value={password} onChange={(e) => setPassword(e.target.value)} type="password" label="Mot de passe" fullWidth />
                <TextField className="login-input" color='secondary' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} type="password" label="Confirmation mot de passe" fullWidth />
                <Button className="login-button" variant='outlined' color='secondary' type="submit" fullWidth>Créer un compte</Button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )

}

