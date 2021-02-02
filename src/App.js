import React from 'react';
import './App.css';
import Form from './Form';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import mockJson from './mockData.json';

const useStyles = makeStyles((theme) => ({
  dialog: {
    '& .MuiPaper-root': {
      padding: '20px'
    }
  }
}));

const App = () => {
  const classes = useStyles();
  const [data, setData] = React.useState('');
  const closeHandler = () => setData('');

  return (
    <div className="App">
      <h1 className="AppTitle">Анкета</h1>
      <Form formData={setData} serverData={mockJson.form} />
      <Dialog open={!!data} onClose={closeHandler} className={classes.dialog}>{data}</Dialog>
    </div>
  );
}

export default App;
