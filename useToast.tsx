import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import * as React from 'react';

const Toast = (props) => {
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert ref={ref} variant="filled" {...props} />;
  });

  return (
    <div onClick={() => props.onClose(props.uniq)}>
      <Snackbar
        open={props.open}
        onClose={props.handleClose}
        anchorOrigin={{
          vertical: props.vertical,
          horizontal: props.horizontal,
        }}
      >
        <Alert
          sx={{ width: props.width }}
          onClose={props.handleClose}
          severity={props.type}
        >
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

let index = 0;

export const useToast = () => {
  const [items, setItems] = React.useState([]);

  console.log('items', items);

  function handleClose(uniq) {
    setItems((old) => old.filter((item) => item.uniq !== uniq));
  }

  const toast = React.useMemo(() => {
    return items.length
      ? items.map((item) => (
          <Toast key={item.uniq} {...item} onClose={handleClose} />
        ))
      : null;
  }, [items]);

  const autoCloseToast = (item: any) => {
    !!item.autoHideDuration
      ? setTimeout(() => handleClose(item.uniq), item.autoHideDuration)
      : null;
  };

  const addToast = ({
    message,
    type,
    vertical = 'bottom',
    horizontal = 'center',
    width = '800%',
    autoHideDuration = null,
  }) => {
    const newItem = {
      open: true,
      uniq: index,
      message,
      type,
      vertical,
      horizontal,
      width,
      autoHideDuration,
    };
    autoCloseToast(newItem);
    setItems((old) => [...old, newItem]);
    index++;
  };
  return {
    toast,
    addToast,
  };
};
