import { Dialog, DialogContent, DialogTitle, Divider } from '@mui/material';
import React from 'react';

const CustomDialog = (props) => {
  const { open, setOpen, title, children } = props;
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <Divider/>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
