import React, { Component } from 'react';
import Nav from './Nav';
import { Row, Col } from 'reactstrap';
import { FormControl, FormHelperText, Card, Button, IconButton, Input, InputLabel, InputAdornment } from '@material-ui/core'; 
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Mail from '@material-ui/icons/Mail'; 
import Person from '@material-ui/icons/Person'

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      username: "", 
      password: "", 
      showPassword: false,
      confirm: "", 
      showConfirm: false,
      match: false, 
      response: false
    }

  }

  handleChange = (e) => {
    this.setState({ [e.target.id] : e.target.value }); 
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword }); 
  }

  handleClickShowConfirm = () => {
    this.setState({ showConfirm: !this.state.showConfirm }); 
  }

  validatePassword = (e) => {
    let id = e.target.id === "password" ? 0 : 1; 

    this.setState({
      [e.target.id]: e.target.value
    })

    if (id === 0) {
      if ((e.target.value.length === 0 && this.state.confirm.length === 0)|| 
        (e.target.value.length > 0 && this.state.confirm.length === 0)) {
        this.setState({
          response: false,
          match: false
        })
      }
      else if (e.target.value.localeCompare(this.state.confirm) === 0) {
        this.setState({
          response: true,
          match: true
        })
      }
      else {
        this.setState({
          response: true,
          match: false
        })
      }
    }
    else {
      if ((e.target.value.length === 0 && this.state.password.length === 0)) {
        this.setState({
          response: false,
          match: false
        })
      }
      else if (e.target.value.localeCompare(this.state.password) === 0) {
        this.setState({
          response: true,
          match: true
        })
      }
      else {
        this.setState({
          response: true,
          match: false
        })
      }
    }
  }

  registerUser = () => { 
    console.log("Values: ", this.state.email, this.state.username, this.state.password, this.state.confirm); 
  }

  render() {
    return (
        <div>
          <Nav />
          <br /><br /><br /><br />
          <Row style={{display: "flex", justifyContent: "center"}}>
          <Col>
            <Card style={{padding: "10px 10px 25px 10px"}} className="registerForm">
              <Row style={{display: "flex", justifyContent: "center"}}>
                <Col style={{margin: "10px 20px"}}>
                  <FormControl>
                  <InputLabel id="email">Email</InputLabel>
                    <Input
                      id="email"
                      type='text'
                      autoComplete="off"
                      value={this.state.email}
                      onChange={e => this.handleChange(e)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton>
                            <Mail />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Col>
              </Row>
              <Row style={{display: "flex", justifyContent: "center"}}>
                <Col style={{margin: "10px 20px"}}>
                  <FormControl>
                    <InputLabel id="username">Username</InputLabel>
                    <Input
                      id="username"
                      type='text'
                      autoComplete="off"
                      value={this.state.username}
                      onChange={e => this.handleChange(e)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton>
                            <Person />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Col>
              </Row>
              <Row style={{display: "flex", justifyContent: "center"}}>
                <Col style={{margin: "10px 20px"}}>
                  <FormControl>
                    <InputLabel id="password">Password</InputLabel>
                    <Input
                      id="password"
                      type={this.state.showPassword ? 'text' : 'password'}
                      autoComplete="off"
                      value={this.state.password}
                      onChange={e => this.validatePassword(e)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={this.handleClickShowPassword}
                          >
                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Col>
              </Row>
              <Row style={{display: "flex", justifyContent: "center"}}>
                <Col style={{margin: "10px 20px 20px 20px"}}>
                  <FormControl error={this.state.response ? true : false}>
                    <InputLabel id="confirm">Confirm Password</InputLabel>
                    <Input
                      id="confirm"
                      type={this.state.showConfirm ? 'text' : 'password'}
                      autoComplete="off"
                      value={this.state.confirm}
                      onChange={e => this.validatePassword(e)}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={this.handleClickShowConfirm}
                          >
                            {this.state.showConfirm ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <FormHelperText style={{color: "yellow"}}>
                      {this.state.response ? this.state.match ? "Passwords match!" : "Passwords do not match." : null}
                    </FormHelperText>
                  </FormControl>
                </Col>
              </Row>
              <Row style={{display: "flex", justifyContent: "center"}}>
                    <Button 
                      variant="contained" 
                      style={{backgroundColor: "purple", color: "white", width: "31vh"}}
                      onClick={() => this.registerUser()}
                    >
                      Register
                    </Button>
              </Row>
            </Card>
            </Col>
            </Row>
        </div>
    );
  }
}

export default Register;