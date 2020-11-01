import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: 'flex',
    flexGrow:1,
    boxSizing: 'border-box',
    padding: '15px'
  },
}));

export default useStyles;