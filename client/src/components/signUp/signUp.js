import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import { mergeClasses } from '@material-ui/styles';
import './signUp.css'
import CreditCardForm from '../creditCardForm/creditCardForm';
// import { Switch } from '@material-ui/core';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height: 40
  },
}));


const SignUp = ({ createUser }) => {
  const classes = useStyles();
  const [inputs, setInputs] = useState({});
  let history = useHistory();

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({...inputs, [e.target.name]: e.target.value}));
    console.log(e.target.value);
  }


  const handleSubmit = e => {
    e.preventDefault();
    createUser(inputs);
    history.push('/card')
    setInputs('');
  }

  return (
   <Container component="main" maxWidth="xs">
    <CssBaseline/>
    <div className={classes.paper}>
      <Avatar className="avatar">
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant = "outlined"
              required
              fullWidth
              id="FirstName"
              label="First Name"
              autoFocus
              onChange={handleInputChange}
              value={inputs.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="lname"
              name="lastName"
              variant = "outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              onChange={handleInputChange}
              value={inputs.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="email"
              name="email"
              variant = "outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              onChange={handleInputChange}
              value={inputs.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoComplete="current-password"
              name="password"
              variant = "outlined"
              required
              fullWidth
              id="password"
              label="password"
              type="password"
              onChange={handleInputChange}
              value={inputs.password}
            />
          </Grid>
          <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I accept the Terms of Services and Privacy Policy."
              />
            </Grid>
        </Grid>
        {/* <NavLink to="/card"> */}
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            >
            sign Up
            </Button>
          {/* </NavLink> */}
        <Grid container justify="center">
          <Grid item>
            <Link href="#" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
   </Container>
  );
}

export default SignUp;
