import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {DialogTitle , Container, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    boxShadow: "none",
    borderRadius: 16,
  },
  dialog: {
    // shadows: "none",
    margin: theme.spacing(1),
    borderRadius: 26,
  },
  input: {
    display: "none",
  },
}));

const Send = (props) => {
  const classes = useStyles();
  const [amount, setAmount] = useState('');
  const params = useParams();

  const handleChange = e => {
    e.persist();
    setAmount(e.target.value);
  }

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
    console.log(amount, props.recipientId);
    props.transfer(amount,props.recipientId);
    setAmount('');
  };

  return (
    <div>
    <Dialog className={classes.dialog} fullWidth={true} open={props.view} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">send money</DialogTitle>
        <DialogContent>
          <TextField
          name= "amount"
          type= "Number"
          fullWidth
          id= "amount"
          required
        
          onChange={handleChange}
          /> 
          </DialogContent>
        <DialogActions className={classes.shad}>
          <Button  className={classes.button} onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button className={classes.button} type="submit" onClick={handleClose} variant="outlined">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Send;