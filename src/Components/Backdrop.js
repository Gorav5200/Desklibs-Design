import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

export default function SimpleBackdrop({handleOpen, close}) {
//   const [open, setOpen] = React.useState(false);
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleOpen = () => {
//     setOpen(true);
//   };

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: handleOpen ? 1200 : -1 }}
        open={handleOpen}
        onClick={close}
      >
      
      </Backdrop>
    </div>
  );
}