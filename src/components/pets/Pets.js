import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { styles } from '../styles/styles';
import { Link } from 'react-router-dom';
import { ReadOnlyRow } from '../schedule/ScheduleList';

export const Pet = ({ petObject }) => {

    return (
        <Row xs={1} md={4} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card >
                        <Card.Img variant="top" src={petObject.image} />
                        <Card.Body>
                            <Card.Title as="h3"><Link to="/pets">{petObject.name}</Link></Card.Title>
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
        <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card >
                        <Card.Img variant="top" src={petObject.image}  />
                        <Card.Body>
                            <Card.Title as="h3"><Link to={`/pets/${petObject.id}`}>{petObject.name}</Link></Card.Title>
                            <Card.Text>
                                <br></br>
                                <Button style={styles.button}> ❤️ {petObject.upvotes}</Button>
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

