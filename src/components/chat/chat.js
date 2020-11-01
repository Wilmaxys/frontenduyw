import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import styles from './chat.css';
import { withStyles } from "@material-ui/core/styles";
import { subscribe, publish, waitForConnect } from '../../security/service/wsService';
import ChatMessage from './chatMessage/chat-message';

class Chat extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      username: this.props.username,
      message: "",
      messages: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.mesRef = React.createRef();
  }

  clickHandler = () => {
    if(this.state.message !== ""){
      publish('/game/' + this.state.id + '/chat', { username: this.state.username, message: this.state.message });
      this.setState({message: ""})
    }
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    )
  }

  async componentDidMount() {
    await waitForConnect();
    subscribe('/game/' + this.state.id + '/chat', response => {
      let responseJson = JSON.parse(response.body);
      this.setState({
        messages: [...this.state.messages, { username:responseJson.username, message:responseJson.message }]
      })
      this.scrollToBottom();
    });

    
  }

  scrollToBottom = () => {
    this.mesRef.current.scrollTop = this.mesRef.current.scrollHeight;
  };


  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.chatBox} elevation={3}>
        <div className={classes.chatBoxTittle}>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Tchat
              </Typography>
        </div>
        <div ref={this.mesRef} className={classes.chatBoxMessages}>
          {
            this.state.messages.map((object, i) => {
              return (<ChatMessage key={i} isMyMessage={this.state.username === object.username} username={object.username}>{object.message}</ChatMessage>)
            })
          }
        </div>
        <Divider />
        <div className={classes.chatBoxForm}>
          <TextField
            variant="outlined"
            fullWidth
            id="message"
            label="Message"
            name="message"
            autoComplete="message"
            className={classes.chatBoxFormSend}
            value={this.state.message} onChange={this.handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<SendIcon />}
            onClick={this.clickHandler}
          >
            Send
                </Button>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Chat);