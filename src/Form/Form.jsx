import React from 'react';
import './Form.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FormText from './FormText';
import FormNum from './FormNum';
import FormFamily from './FormFamily';
import FormSubmit from './FormSubmit';


const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    alignItems: 'center'
  }
}));

const Form = ({ formData, serverData }) => {
  const classes = useStyles();
  const { name, age, family } = serverData;

  const [textValue, setText] = React.useState((name && name.value) || '');
  const [ageValue, setAge] = React.useState((age && age.value) || 0);
  const [familyValue, setFamily] = React.useState((family && family.value) || "0");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(textValue, ageValue, familyValue);

    formData(`Name: ${textValue}, Age: ${ageValue}, Family: ${familyValue}`);

    /*
      Here will be submitting form data to server
      fetch(...)
    */
  }

  const canSubmit = textValue && ageValue;

  return (
    <form className="form" onSubmit={submitHandler}>
      <Grid container spacing={3} className={classes.grid}>
        {name && <FormText data={name} value={textValue} onChange={setText} />}
        {age && <FormNum data={age} value={ageValue} onChange={setAge} />}
        {family && <FormFamily data={family} value={familyValue} onChange={setFamily} />}
        <FormSubmit disabled={!canSubmit} text="Отправить" />
      </Grid>
    </form>
  )
};

export default Form;
