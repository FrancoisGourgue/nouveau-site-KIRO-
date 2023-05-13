import React from 'react';
import AuthContext from '../auth/AuthContext';
import {
    Grid,
    Paper,
    TextField,
    FormControlLabel,
    FormControl,
    FormLabel,
    Radio,
    RadioGroup,
    Button,
    Checkbox,
    Link,
    Typography,
    FormHelperText,
  } from '@mui/material';


class RegisterForm extends React.Component{
    
    static contextType = AuthContext;
    
    constructor(){
        super();
        this.state = {
            fields:{
                email: '',
                firstName: '',
                lastName: '',
                password: '',
                passwordConfirmation: '',
            }, 
            errors: {},
            mainError: ''
          };
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
            this,
        );
    }

    handleChange(e) {
        const fields = this.state.fields;
        if (e.target.name === 'checkbox') {
          fields[e.target.name] = e.target.checked;
        } else {
          fields[e.target.name] = e.target.value;
        }
        this.setState({fields});
      }
      
    submituserRegistrationForm(e) {
        const {registerTeam} = this.context;
        e.preventDefault();
        if (this.validateForm()) {
            registerTeam(e).then((a) => {
            this.setErrorMessage(a);
          });
        }
      }
      validateForm() {
        let formIsValid = true;
        return formIsValid;
      }
    render() {
        const paperStyle = {
          padding: 20,
          width: 450,
          margin: '0',
        };
        return (
          <Grid>
            <Paper elevation={0} style={paperStyle}>
              <Grid align='center'>
                <Typography variant="h5">Créer une équipe</Typography>
                <Typography variant='caption'>
                  Remplir ce formulaire pour créer une équipe
                </Typography>
                <br />
                <br />
                <Link href='/'>Retour à l'acueil</Link>
                <br />
                <br />
                <Typography color="red">
                  {this.state.mainError}
                </Typography>
              </Grid>
              <Grid>
                <form onSubmit={this.submituserRegistrationForm}>
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    margin="dense"
                    label="Nom"
                    name='firstName'
                    value={this.state.fields.firstName}
                    onChange={this.handleChange}
                    fullWidth
                    error={this.state.errors.firstName ? true : false}
                    helperText={this.state.errors.firstName}
                  />
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    margin="dense"
                    label="Prénom"
                    name='lastName'
                    value={this.state.fields.lastName}
                    onChange={this.handleChange}
                    fullWidth
                    error={this.state.errors.lastName ? true : false}
                    helperText={this.state.errors.lastName}
                  />
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    margin="dense"
                    label="Adresse mail"
                    name='email'
                    value={this.state.fields.email}
                    onChange={this.handleChange}
                    fullWidth
                    error={this.state.errors.email ? true : false}
                    helperText={this.state.errors.email}
                  />
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    margin="dense"
                    label="Nom d'équipe"
                    name='team'
                    value={this.state.fields.team}
                    onChange={this.handleChange}
                    fullWidth
                    error={this.state.errors.team ? true : false}
                    helperText={this.state.errors.team}
                  />
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    margin="dense"
                    label="Mail équipier 1"
                    name='mail2'
                    value={this.state.fields.mail2}
                    onChange={this.handleChange}
                    fullWidth
                    error={this.state.errors.mail2 ? true : false}
                    helperText={this.state.errors.team}
                  />
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    margin="dense"
                    label="Mail équipier 2"
                    name='mail2'
                    value={this.state.fields.mail3}
                    onChange={this.handleChange}
                    fullWidth
                    error={this.state.errors.mail3 ? true : false}
                    helperText={this.state.errors.team}
                  />
                  <FormControl
                    margin="normal"
                    error={
                      this.state.errors.gender ? true : false
                    }
                  >
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                    >
                      Type d'équipe
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="gender"
                      value={this.state.fields.gender}
                      onChange={this.handleChange}
                    >
                      <FormControlLabel
                        value="1A Ponts"
                        control={<Radio />}
                        label="1A Ponts"
                      />
                      <FormControlLabel
                        value="Étudiant"
                        control={<Radio />}
                        label="Étudiant"
                      />
                    </RadioGroup>
                    <FormHelperText>{this.state.errors.gender}</FormHelperText>
                  </FormControl>
                  
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    type="password"
                    margin="dense"
                    label="Mot de passe"
                    name='password'
                    fullWidth
                    value={this.state.fields.password}
                    onChange={this.handleChange}
                    error={this.state.errors.password ? true : false}
                    helperText={this.state.errors.password}
                  />
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    type="password"
                    margin="dense"
                    label="Confirmation mot de passe"
                    name='passwordConfirmation'
                    value={this.state.fields.passwordConfirmation}
                    onChange={this.handleChange}
                    fullWidth
                    error={this.state.errors.passwordConfirmation ? true : false}
                    helperText={this.state.errors.passwordConfirmation}
                  />
                  <FormControl error={this.state.errors.checkbox ? true : false}>
                    <FormControlLabel
                      control={<Checkbox
                        name="checkbox"
                        value={this.state.fields.checkbox}
                        onChange={this.handleChange}
                      />}
                      label={<Typography
                      >
                        J'accèpte les &nbsp;
                        <Link href="#">
                          conditions générales
                        </Link>
                      </Typography>}
                    />
                    <FormHelperText>{this.state.errors.checkbox}</FormHelperText>
                  </FormControl>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                  >
                    Créer mon compte
                  </Button>
                </form>
              </Grid>
            </Paper>
          </Grid>
        );
      }
    }
    
    
    export default RegisterForm;