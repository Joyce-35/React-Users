import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from "./components/Users";
import { Component } from "react";
import './App.css';
import AddUserForm from "./components/AddUserForm";


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users:[
        {
          name:"Joyce Adzokatse",
          email:"joyce@email.com",
          gen:12,
          id:"dvj47y4b78"
        },
        {
          name:"Barrister Charlie",
          email:"Barrister@email.com",
          gen:17,
          id:"krlj48u48jns"
        },
        {
          name:"Kojo Antwi",
          email:"Antwi@email.com",
          gen:20,
          id:"ni8944jfbru"
        },
      ]
    }


  }
  addNewUser=(user)=>{
    user.id = Math.random().toString()
      this.setState({
        users: [...this.state.users, user]
      })
  }
  DeleteUser=(id)=>{
      let undeletedUsers =this.state.users.filter(user=>user.id !== id)
      this.setState({
        users: undeletedUsers
      })
  }
  editUser=(id, updatedUser)=>{
    this.setState({
        users: this.state.users.map((user)=> user.id=== id ? updatedUser : user)
    })
}
  render() {
    return (
      <>
       
        <Container fluid style={{marginTop:"2rem"}} className="All">
        <h1>Users Form</h1>
          <Row>
            <Col md="4 myl">
              <AddUserForm  addUser= {this.addNewUser} />
            </Col>
            <Col>
              <Users userData={this.state.users}  DeleteUser={this.DeleteUser} editUser={this.editUser}/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
