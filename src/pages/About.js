import React, { Component } from 'react';
import Nav from './Nav';
import { Container, Card, Avatar, Grid, IconButton } from '@material-ui/core';
import { Row, Col } from 'reactstrap'; 
import Group from '@material-ui/icons/Group'; 

class About extends Component {
  render() {
    return (
        <div>
          <Nav />

          <Container maxWidth="md">
            <Row style={{marginBottom: "20px"}}>
              <Col style={{display: "flex"}}>
              <Avatar style={{backgroundColor: "black"}}>?</Avatar>
                <h2 style={{margin: "5px 20px", position: "relative"}}>
                  Why did we make Knight Club?
                </h2>
              </Col>
              <Card id="info" className="aboutCard" style={{marginTop: "30px"}}>
              <p style={{margin: "15px 60px 5px 60px"}}>
                During this pandemic many of us have missed out on the opportunity to experience college to their fullest. 
                So our team wants to bring light onto this situation and allow for newcomers to experience what it would be like
                to walk around UCF and interact with others. We hope you enjoy this game with your friends and family. 
                Most importantly, stay safe!  
              </p>
              <p style={{margin: "0px", display: "flex", justifyContent: "flex-end", paddingRight: "50px"}}>
                <IconButton 
                  size="small" 
                  style={{backgroundColor: "black", margin: "10px", width: "35px", height: "35px"}} 
                  href="https://github.com/JonathanNJules/KnightClub"
                >
                  <img src={require('../images/github.png')} style={{width: "35px", height: "35px"}}/>
                </IconButton>
              </p>
              </Card>
            </Row>
            <Row>
              <Col style={{display: "flex"}}>
              <Avatar style={{backgroundColor: "black"}}><Group /></Avatar>
                <h2 style={{margin: "5px 20px", position: "relative"}}>
                  Get to Know Our Team
                </h2>
              </Col>
            </Row>
            <Grid container spacing={4} style={{marginTop: "5px"}}>
              <Grid item xs>
                <Card id="info" className="aboutCard">
                  <img 
                    style={{width: "100px", height: "100px", margin: "10px 50px 0px 50px", borderRadius: "50px"}} 
                    src={require('../images/otter.png')}
                  />
                  <h3 style={{display: "flex", justifyContent: "center"}}>Jonathan Jules</h3>
                  <a style={{display: "flex", justifyContent: "center"}}>Game Developer</a>
                  <a style={{display: "flex", justifyContent: "center"}}>Major: Computer Science</a>
                  <Grid container spacing={1} style={{marginTop: "5px"}}>
                    <Grid item xs style={{display: "flex", justifyContent: "flex-end"}}>
                      <IconButton 
                        size="small" 
                        style={{backgroundColor: "black", margin: "10px", width: "35px"}} 
                        href="https://www.linkedin.com/in/jonathan-jules-426a66159/"
                      >
                        <img src={require('../images/linkedin-logo.png')} style={{width: "25px", height: "25px"}}/>
                      </IconButton>
                      <IconButton 
                        size="small" 
                        style={{backgroundColor: "black", margin: "10px", width: "35px"}} 
                        href="https://github.com/JonathanNJules"
                      >
                        <img src={require('../images/github.png')} style={{width: "35px", height: "35px"}}/>
                      </IconButton>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs>
                <Card id="info" className="aboutCard">
                  <img 
                    style={{width: "100px", height: "100px", margin: "10px 50px 0px 50px", borderRadius: "50px"}} 
                    src={require('../images/panda.png')}
                  />
                  <h3 style={{display: "flex", justifyContent: "center"}}>Tiffany Lin</h3>
                  <a style={{display: "flex", justifyContent: "center"}}>Website Developer</a>
                  <a style={{display: "flex", justifyContent: "center"}}>Major: Computer Science</a>
                  <Grid container spacing={1} style={{marginTop: "5px"}}>
                    <Grid item xs style={{display: "flex", justifyContent: "flex-end"}}>
                      <IconButton 
                        size="small" 
                        style={{backgroundColor: "black", margin: "10px", width: "35px"}} 
                        href="https://www.linkedin.com/in/tiffany-lin-15ab931b7/"
                      >
                        <img src={require('../images/linkedin-logo.png')} style={{width: "25px", height: "25px"}}/>
                      </IconButton>
                      <IconButton 
                        size="small" 
                        style={{backgroundColor: "black", margin: "10px", width: "35px"}} 
                        href="https://github.com/lint12"
                      >
                        <img src={require('../images/github.png')} style={{width: "35px", height: "35px"}}/>
                      </IconButton>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs>
                <Card id="info" className="aboutCard">
                  <img 
                    style={{width: "100px", height: "100px", margin: "10px 50px 0px 50px", borderRadius: "50px"}} 
                    src={require('../images/snake.png')}
                  />
                  <h3 style={{display: "flex", justifyContent: "center"}}>Patrick Mesquita</h3>
                  <a style={{display: "flex", justifyContent: "center"}}>Backend Developer</a>
                  <a style={{display: "flex", justifyContent: "center"}}>Major: Computer Science</a>
                  <Grid container spacing={1} style={{marginTop: "5px"}}>
                    <Grid item xs style={{display: "flex", justifyContent: "flex-end"}}>
                      <IconButton 
                        size="small" 
                        style={{backgroundColor: "black", margin: "10px", width: "35px"}} 
                        href="https://www.linkedin.com/in/patrick-mesquita-ab4027180/"
                      >
                        <img src={require('../images/linkedin-logo.png')} style={{width: "25px", height: "25px"}}/>
                      </IconButton>
                      <IconButton 
                        size="small" 
                        style={{backgroundColor: "black", margin: "10px", width: "35px"}} 
                        href="https://github.com/Prexzer"
                      >
                        <img src={require('../images/github.png')} style={{width: "35px", height: "35px"}}/>
                      </IconButton>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item xs>
                <Card id="info" className="aboutCard">
                  <img 
                    style={{width: "100px", height: "100px", margin: "10px 50px 0px 50px", borderRadius: "50px"}} 
                    src={require('../images/fox.png')}
                  />
                  <h3 style={{display: "flex", justifyContent: "center"}}>Catalina Morales</h3>
                  <a style={{display: "flex", justifyContent: "center"}}>Technical Artist</a>
                  <a style={{display: "flex", justifyContent: "center"}}>Major: Computer Science</a>
                  <Grid container spacing={1} style={{marginTop: "5px"}}>
                    <Grid item xs style={{display: "flex", justifyContent: "flex-end"}}>
                      <IconButton 
                        size="small" 
                        style={{backgroundColor: "black", margin: "10px", width: "35px"}} 
                        href="https://www.linkedin.com/in/catalina-morales-3761071b7/"
                      >
                        <img src={require('../images/linkedin-logo.png')} style={{width: "25px", height: "25px"}}/>
                      </IconButton>
                      <IconButton 
                        size="small" 
                        style={{backgroundColor: "black", margin: "10px", width: "35px"}} 
                        href="https://github.com/cmorales99"
                      >
                        <img src={require('../images/github.png')} style={{width: "35px", height: "35px"}}/>
                      </IconButton>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>
    );
  }
}

export default About;