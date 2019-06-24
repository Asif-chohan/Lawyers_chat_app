import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Avatar from "./avatar";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Call from "@material-ui/icons/Call";
import CallEnd from "@material-ui/icons/CallEnd";
import UserIcon from '../../assets/images/user.png'

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
    backgroundColor:"grey",
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
    // backgroundColor:"red",
    color:"#ef5350"
  },
  title:{
      color:"white"
  }
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close"  className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    // marginTop:theme.spacing.unit*2,
    justifyContent:"center" ,
    paddingLeft: theme.spacing.unit * 14,
    paddingRight: theme.spacing.unit * 14,
    backgroundColor:"grey",
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    // borderTop: `1px solid ${theme.palette.divider}`,
    justifyContent:"center",
    margin: 0,
    padding: theme.spacing.unit,
    paddingBottom:theme.spacing.unit*3,
    backgroundColor:"grey",
  },
}))(MuiDialogActions);

class CustomizedDialogDemo extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {selectedUser, leaveRoom} = this.props
    return (
      <div>
    
        <Dialog
          fullScreen
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={true}
        >
          <DialogTitle id="customized-dialog-title" >
            <Typography  style={{color:"white",fontSize:"1.4em"}}>
                {selectedUser.name}
            </Typography>
            <Typography color="secondary" style={{color:"#fff"}}>
                calling
            </Typography>

          </DialogTitle>
          <DialogContent style={{display:"flex",alignItems:"center"}}>
            <Avatar src={UserIcon} />
          </DialogContent>
          <DialogActions>
            <Fab style={{color:"red"}} aria-label="Add" onClick={leaveRoom} >
                <CallEnd />   
            </Fab>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CustomizedDialogDemo;
