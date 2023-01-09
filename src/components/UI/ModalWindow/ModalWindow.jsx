import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { IconButtonModalWindow } from './modalWindow.styles';

const WrapperTheme = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
}));

export function ModalWindow(props) {
  const { children, onClose, open, title, ...other } = props;

  const handleStopPropagation = (e) => e.stopPropagation();

  return (
    <WrapperTheme open={open} onClick={onClose} disableEscapeKeyDown>
      <DialogTitle sx={{ m: 0, p: 2 }} {...other} onClick={handleStopPropagation}>
        {title}
        {onClose && (
          <IconButtonModalWindow aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButtonModalWindow>
        )}
      </DialogTitle>
      <DialogContent sx={{ overflowX: 'hidden' }} onClick={handleStopPropagation}>
        {children}
      </DialogContent>
    </WrapperTheme>
  );
}
