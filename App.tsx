import * as React from 'react';
import './style.css';
import { useToast } from './useToast';
import { StyledEngineProvider } from '@mui/material/styles';
export default function App() {
  const { addToast, toast } = useToast();
  const toastHandler = () => {
    addToast({
      message: 'Sucesso',
      type: 'success',
      autoHideDuration: '2000',
    });
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <button onClick={toastHandler}>Click To Open To Snackbar</button>
      {toast}
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
