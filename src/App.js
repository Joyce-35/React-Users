import React, { Component } from 'react';
import { Container,Row,Col } from "react-bootstrap";
import Users from './Users';
import UsersForm from './UsersForm';

class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        users:[
          {
            name:"Joyce Adzokatse",
            email:"joyce@email.com",
            gen:12,
          },
          {
            name:"Barrister Charlie",
            email:"Barrister@email.com",
            gen:17,
          },
          {
            name:"Kojo Antwi",
            email:"Antwi@email.com",
            gen:20,
          },
        ]
      }
  
  
    }
    addNewUser=(user)=>{
        this.setState({
          users: [...this.state.users, user]
        })
        console.log(this.state)
    }
  render() {
    return (
      <>
      <h1>React Users</h1>
      <Container fluid style={{marginTop:"2rem"}} >
        <Row>
          <Col md="4">
            < UsersForm addUser= {this.addNewUser} />
          </Col>
          <Col>
            <Users userData={this.state.users} />
          </Col>
        </Row>
      </Container>
    </>
    );
  }
}

export default App;

