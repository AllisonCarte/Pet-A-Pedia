import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { styles } from '../styles/styles';
import { Link } from 'react-router-dom';
import { ReadOnlyRow } from '../schedule/ScheduleList';
import { useNavigate } from 'react-router-dom';

export const Pet = ({ petObject }) => {

    return (
        <Row xs={1} md={4} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card >
                        <Card.Img variant="top" src={petObject.image} />
                        <Card.Body>
                            <Card.Title as="h3"><Link to={`/pets/${petObject.id}`}>{petObject.name}</Link></Card.Title>
                            <Card.Text>
                                <div>{petObject.description}</div>
                                <br></br>
                                <div>{petObject.notes}</div>
                                <br></br>
                                <Button variant="primary" style={styles.button}> ❤️ {petObject.upvotes}</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export const HomePets = ({ petObject }) => {

    return (
        <Row xs={1} md={5} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card >
                        <Card.Img variant="top" src={petObject.image} />
                        <Card.Body>
                            <Card.Title as="h3"><Link to={`/pets/${petObject.id}`}>{petObject.name}</Link></Card.Title>
                            <Card.Text>
                                <br></br>
                                <Button style={styles.button}> ❤️ {petObject.upvotes}</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export const SinglePet = ({ petObject }) => {
const navigate = useNavigate()
    return (
        <Row xs={1} md={1} className="g-1">
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card >
                        <Card.Img variant="top" src={petObject.image} />
                        <Card.Body>
                            <Card.Title style={{textAlign: "center"}} as="h3"><Link to={`/profile`}>{petObject.name}</Link></Card.Title>
                            <Card.Text style={{textAlign: "center"}}>
                                <div>{petObject.description}</div>
                                <br></br>
                                <div>{petObject.breed} {petObject.species}</div>
                                <br></br>
                                <div>{petObject.restrictions}</div>
                                <br></br>
                                <div>{petObject.records}</div>
                                <br></br>
                                <div>{petObject.notes}</div>
                                <br></br>
                                <Button variant="primary" style={styles.button} onClick={() => {
                            navigate(`/editDetails/${petObject.id}`)
                        }}> Edit Pet</Button>
                                <Button variant="primary" style={styles.button}> ❤️ {petObject.upvotes}</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

