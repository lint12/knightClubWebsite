import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button'; 
import Grid from '@material-ui/core/Grid';
import Nav from '../pages/Nav';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: "#551b8b",
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "30%",
  },
}));

export default function Home() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Nav />

      <img 
        src={require('../images/KnightClubText.png')}
        style={{position: "absolute", left: "300px", top: "150px", width: "60%"}}
      />

      <Button type="button" onClick={handleOpen} style={{position: "absolute", left: "630px", top: "330px", 
            backgroundColor: "#551b8b", color: "white", zIndex: "1", width: "200px", fontSize: "30px", fontWeight: "bold"}}>
        Join Us
      </Button>

      <img 
        src={require('../images/duck.png')}
        style={{position: "relative", left: "200px", top: "220px", width: "20%"}}
      />

      <img 
        src={require('../images/friends.png')}
        style={{position: "relative", left: "400px", top: "220px"}}
      />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" style={{display: "flex", justifyContent: "center", textDecoration: "underline"}}>
              Get Setup to Play
            </h2>
            <Grid container spacing={2} style={{marginTop: "5px"}}>
              <Grid item xs style={{display: "flex", justifyContent: "center"}}>
                <p>I don't have an account yet</p>
                  <Link to='/register' style={{textDecoration: "none"}}>
                    <Button style={{backgroundColor: "yellow", fontWeight: "800"}}>
                      Make One  
                    </Button>
                  </Link>
              </Grid>
              <Grid item xs style={{display: "flex", justifyContent: "center"}}>
                <p>I already have an account</p>
                  <Link to='/game' style={{textDecoration: "none"}}>
                    <Button style={{backgroundColor: "yellow", fontWeight: "800"}}>
                      Play Now
                    </Button>
                  </Link>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}