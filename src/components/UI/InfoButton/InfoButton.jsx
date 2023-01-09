import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { InfoIconButton } from './infoButton.styles';

export const InfoButton = ({ onAction }) => {
  return (
    <InfoIconButton onClick={onAction}>
      <InfoOutlinedIcon />
    </InfoIconButton>
  );
};
