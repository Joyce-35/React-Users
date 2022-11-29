import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Button,Modal} from "react-bootstrap";
import EditUserForm from './EditUserForm';
import logo from './profile pic.jpg';

const User = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (e) => {
        e.preventDefault()
        props.DeleteUser(props.userInfo.id)
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body> <EditUserForm  userInfo={props.userInfo} editUser={props.editUser} closeModal={handleClose} /> </Modal.Body>
            </Modal>
            <Col md="4" style={{ marginBottom: "1rem" }}>
                <Card>
                        <Card.Body variant="danger" >
                 <Card.Title>CodeTrain User</Card.Title>
                     <Card.Img variant="top" src={logo} />
                 <Card.Body/>
                        
                        <Card.Text>
                            <p>Name: {props.userInfo.name}</p>
                            <p>Email: {props.userInfo.email}</p>
                            <p>Gen: {props.userInfo.gen}</p>
                        </Card.Text>
                        <Card.Link href="#" onClick={handleShow}>Edit</Card.Link>
                        <Card.Link href="#"><Button variant="danger" size="sm" onClick={handleDelete}>Delete</Button></Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default User;
