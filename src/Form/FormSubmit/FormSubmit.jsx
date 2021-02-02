import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  submit: {
    '&:hover': {
      backgroundColor: '#ead273',
    },
    '&:active': {
      backgroundColor: '#a79656',
    },
    fontSize: '15px',
    backgroundColor: '#ffe683',
    marginTop: '20px',
  }
}));

const FormSubmit = ({ disabled, text }) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={3}>
      </Grid>
      <Grid item xs={9}>
        <Button className={classes.submit} disabled={disabled} type="submit">{text}</Button>
      </Grid>
    </>
  )
};

export default FormSubmit;
