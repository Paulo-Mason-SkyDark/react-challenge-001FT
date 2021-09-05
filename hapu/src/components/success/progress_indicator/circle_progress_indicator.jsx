import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className="circle">
      <h3 >Loading</h3>
      <CircularProgress />
      <br/>
    </div>
  );
}
// desenvolvido por Paulo Daniel de Araújo - SkyDark - Mason