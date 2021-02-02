import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '../FormLabel';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#ffe683',
      },
    },
    minWidth: 194,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const FormFamily = ({ data, value, onChange }) => {

  const classes = useStyles();
  const changeHandler = (event) => {
    onChange(event.target.value)
  };

  return (
    <>
      <Grid item xs={3}>
        <FormLabel label={data.label} required={data.required} />
      </Grid>
      <Grid item xs={9}>
        <FormControl variant="outlined" onChange={changeHandler} className={classes.formControl} size="small" required={!!data.required}>
          <Select value={value} variant="outlined" onChange={changeHandler} >
            {data.items.map(item => <MenuItem key={item.value} value={item.value}>{item.text}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
    </>
  )
};

export default FormFamily;
