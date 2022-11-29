import React from 'react';
import { Container, Row,} from "react-bootstrap";
import User from './User';

const Users = (props) => {
    return (
            <Container>
                <Row>
                    {
                        props.userData.map((user)=>{
                            return    <User userInfo={user} key= {user.id} DeleteUser={props.DeleteUser}
                            editUser={props.editUser}
                            />
                        })
                    }
                </Row>
            </Container>
    );
}

export default Users;
