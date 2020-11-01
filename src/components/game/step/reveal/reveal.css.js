
const useStyles = (theme) => ({
    contentShape: {
      position: 'absolute',
      top: '50%',
      left: '50%', 
      transform: 'translate(-50%, -50%)', 
      color: 'white'
    },
    avatarBig: {
      display: 'flex',
      alignItems: 'center'
    },
    shape: {
      borderRadius: '5px',
      backgroundColor: 'rgba(0,0,0,0.5)',
      margin: '5%',
      flexGrow: '1'
    },
    shapeActive: {
      backgroundColor: '#3f51b5',
      opacity: '75%'
    },
    square: {
      position: 'relative',
      '&::after': {
      content: '""',
      display: 'block',
      paddingBottom: '100%'
      }
    },
    gridContainer: {
      paddingRight: '20px'
    },
    avatarContainer: {
      display: 'flex',
      paddingRight:'10px'
    }
  });
  
  export default useStyles;