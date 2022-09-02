import { useNavigate } from "react-router-dom"
import { PetList } from "../pets/PetList"
import { styles } from "../styles/styles"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export const User = ({ userObject }) => {
    const navigate = useNavigate()

    return <>
     <article className="user" key={`user--${userObject.id}`} >
        <Card style={{ width: '90vw', margin: '5em' }}>
            <Card.Img variant="top" src={userObject.image} className="rounded mx-auto d-block" style={{ width: '45vw', height: 'auto',  }} />
            <Card.Body>
                <Card.Title>
                    <h3 style={{textAlign: "center"}}> {userObject.name}</h3>
                </Card.Title>
            </Card.Body>
            <ListGroup style={{textAlign: "center"}} className="list-group-flush">
                <ListGroup.Item>{userObject.email}</ListGroup.Item>
                <ListGroup.Item>{userObject.location}</ListGroup.Item>
                <ListGroup.Item>{userObject.bio}</ListGroup.Item>
            </ListGroup>
            <Card.Body style={{textAlign: "center"}} >
                <Button style={styles.button} variant="primary" onClick={() => {
                    navigate(`/editUserDetails/${userObject.id}`)
                }}> Edit Profile</Button>
               
            </Card.Body>
            <Container>
                <Row>
              <PetList  />  
                </Row>
            </Container>
        </Card>
             
        </article>
    </>
}