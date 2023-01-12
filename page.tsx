import * as React from 'react';
import { useToast } from './useToast';
export default function Page() {
  const { addToast, toast } = useToast();
  const toastHandler = () => {
    addToast({
      message: 'Sucesso',
      type: 'success',
      vertical: 'top',
      horizontal: 'right',
    });
  };

  return (
    <div>
      <h1>Essa é a Page</h1>
      <button onClick={toastHandler}>Clique para abrir snackbar da page</button>
      {toast}
    </div>
  );
}
