import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '../FormLabel';

const useStyles = makeStyles((theme) => ({
  textInput: {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#ffe683',
      },
    },
    '&:focus': {
      backgroundColor: '#a79656',
    },
  },
}));

const FormText = ({ data, onChange, value }) => {
  const classes = useStyles();
  const changeHandler = (event) => onChange(event.target.value);

  return (
    <>
      <Grid item xs={3}>
        <FormLabel label={data.label} required={data.required} />
      </Grid>
      <Grid item xs={9}>
        <TextField
          required={!!data.required}
          value={value}
          placeholder={data.placeholder}
          className={classes.textInput}
          onChange={changeHandler}
          variant="outlined"
          type="text"
          size="small"
        />
      </Grid>
    </>
  )
};

export default FormText;
