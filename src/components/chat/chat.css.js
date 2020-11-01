const useStyles = (theme) => ({
    chatBox: {
        padding: '10px',
        flexGrow: '1',
        maxHeight: '95vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      },
      chatBoxTittle: {
        borderRadius: '3px',
        padding: '10px',
        backgroundColor:'#3f51b5',
        color: 'white'
      },
      chatBoxMessages: {
        overflowY: 'scroll',
        padding: '10px 15px 10px 0',
        flexGrow: '1',
        maxWidth: '100%',
      },
      chatBoxFormSend: {
        flexGrow: '1',
        marginRight: '10px'
      },
      chatBoxForm: {
        padding: '20px 0 10px 0',
        display: 'flex',
        alignItems: 'stretch',
      },
  })
;

export default useStyles;