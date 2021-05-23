import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '25ch',
      marginBottom:10
    },
    buttonSpace:{
      marginRight: 10
  }
  },
}));

export { useStyles };
