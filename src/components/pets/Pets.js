import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { styles } from '../styles/styles';
import { Link } from 'react-router-dom';
import { ScheduleList } from '../schedule/ScheduleList';
import { useNavigate } from 'react-router-dom';
import { Delete } from './PetDelete';

// base pet card
export const Pet = ({ petObject }) => {

    return (<>
        {Array.from({ length: 1 }).map((_, idx) => (
            <Col >
                <Card  >
                    <Card.Img variant="top" src={petObject.image} />
                    <Card.Body>
                        <Card.Title as="h3"><Link to={`/pets/${petObject.id}`}>{petObject.name}</Link></Card.Title>
                        <Card.Text >
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

    </>
    );
}
// pets that display on the home page
export const HomePets = ({ petObject }) => {

    return (<>
        {Array.from({ length: 1 }).map((_, idx) => (
            <Col>
                <Card >
                    <Card.Img variant="top" src={petObject.image} />
                    <Card.Body>
                        <Card.Title as="h3"><Link to={`/pets/${petObject.id}`}>{petObject.name}</Link></Card.Title>
                        <Card.Text>
                            <div>{petObject.notes}</div>
                            <br></br>
                            <Button style={styles.button}> ❤️ {petObject.upvotes}</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}

    </>
    )
}
// pets for the individual profiles
export const SinglePet = ({ petObject }) => {
    const navigate = useNavigate()
    return (<>
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card >
                        <Card.Img variant="top" src={petObject.image} />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }} as="h3"><Link to={`/profile`}>{petObject.name}</Link></Card.Title>
                            <Card.Text style={{ textAlign: "center" }}>
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
                                <Delete />
                                <Button variant="primary" style={styles.button}> ❤️ {petObject.upvotes}</Button>
                                <Button variant="primary" style={styles.button} onClick={() => {
                                    navigate(`/scheduleEdit/${petObject.id} `)
                                }}>Add to Schedule</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <ScheduleList petId={petObject.id} />
                </Col>
            ))}
    </>
    );
}

