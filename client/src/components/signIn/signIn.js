import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles';
import { Container, CssBaseline, Avatar, Box, Typography, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      fontFamily: "Poppins"
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
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    height: 50,
    margin: theme.spacing(3, 0, 2),
  },
}));


const SingIn = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline/>
      <div className={classes.paper}>
        <Avatar >
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
          name= "email"
          fullWidth
          id= "email"
          required
          autoComplete= "email"
          label= "Email address"
          autoFocus
          variant= "outlined"
          margin= "normal"
          />          
          <TextField
          type="password"
          name="password"
          label="password"
          id="password"
          margin="normal"
          fullWidth
          required
          variant= "outlined"
          autoComplete= "current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary"/>}
            label="Remember me"
          />
          <Button 
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}>
            Sign in
          </Button>
          <Box display="flex" justifyContent="space-between">
            <Box >
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Box>
            <Box>
                <Link to="/register" /*href="#" variant="body2"*/>
                Don't have an account? Sign Up
                </Link>
            </Box>
          </Box>
        </form>
      </div>
    </Container>
  );
}

export default SingIn;