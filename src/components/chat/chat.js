import React, {Component} from 'react';
import Message from './chatMessage/chat-message';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import styles from './chat.css';
import { withStyles } from "@material-ui/core/styles";
import { useEffect, useRef } from 'react';

class Chat extends Component {

  constructor() {
		super();

		this.mesRef = React.createRef();
	}

	componentDidMount() {
		this.scrollToBottom();
	}

	scrollToBottom = () => {
		this.mesRef.current.scrollTop = this.mesRef.current.scrollHeight;
	};
  
  render () {
      const { classes } = this.props;
      return (
          <Paper className={classes.chatBox} elevation={3}>
              <div className={classes.chatBoxTittle}>
              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                Tchat
              </Typography>
              </div>
              <div ref={this.mesRef} className={classes.chatBoxMessages}>
                <Message username="Wilmaxys" isMyMessage={true} message="testqsfqsdfqsfsqfsqfqsdfsdqfqsdfsdfqsdfsfsqdfqsfdqsfqsdfqsdfqsdfsq"/>
                <Message username="Despe" isMyMessage={false} message="test"/>
                <Message username="Despe" isMyMessage={false} message="test"/>
                <Message username="Wilmaxys" isMyMessage={true} message="test"/>
                <Message username="Alfred" isMyMessage={false} message="test"/>
                <Message username="Wilmaxys" isMyMessage={true} message="test"/>
                <Message username="Wilmaxys" isMyMessage={true} message="test"/>
                <Message username="Wilmaxys" isMyMessage={true} message="test"/>
                <Message username="Wilmaxys" isMyMessage={true} message="test"/>
                <Message username="Wilmaxys" isMyMessage={true} message="test"/>
                <Message username="Wilmaxys" isMyMessage={true} message="test"/>
              </div>
              <Divider />
              <div className={classes.chatBoxForm}>
                <TextField xs={12} id="outlined-basic" label="Message..." variant="outlined" className={classes.chatBoxFormSend} />
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<SendIcon />}
                >
                  Send
                </Button>
              </div>
            </Paper>  
      );
  }
}

export default withStyles(styles, { withTheme: true })(Chat);