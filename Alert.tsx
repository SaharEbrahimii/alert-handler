import React from 'react';
import {
  Box, Grid, Typography, 
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import styles from './Alert.module.scss';

type AlertProps = {
  type:string,
  title?:string,
  description?:string,
  icon?:React.ReactElement
};
export default function Alert({
  type, title, description, icon, 
}: AlertProps){

  let defaultIcon, alertClass = '' ;
  switch (type){
    case 'success' : 
      defaultIcon = <CheckCircleIcon/>;
      alertClass = styles.root__success;
      break;
    case 'error':
      defaultIcon = <ErrorIcon />;
      alertClass = styles.root__error;
      break;
    case 'info':
      defaultIcon = <InfoIcon />;
      alertClass = styles.root__info;
      break;
    case 'warning':
      defaultIcon = <WarningIcon />;
      alertClass = styles.root__warning;
      break;
  }
  return (
    <Grid 
      item 
      display='flex'
      xs={12} 
      className={`${styles.root} ${alertClass}`}
    >
      <Box 
        component='div' 
        className={styles.root__icon}
      >
        {icon ? icon : defaultIcon}
      </Box>
      <Typography
        component='p'
        className={styles.root__data}
      >
        {title && (
          <Typography 
            component='h3' 
            className={styles.root__data__title}
          >
            {title}
          </Typography>
        )}
        {description && (
          <Typography
            component='span'
            className={styles.root__data__description}
          >
            {description}
          </Typography>
        )}
      </Typography>
    </Grid>
  );
}
