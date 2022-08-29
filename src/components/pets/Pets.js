import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { styles } from '../styles/styles';

export const Pet = ({ petObject }) => {

    return (
        <Row xs={1} md={4} className="g-4">
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card >
                        <Card.Img variant="top" src={petObject.image} />
                        <Card.Body>
                            <Card.Title as="h3">{petObject.name}</Card.Title>
                            <Card.Text>
                                <div>{petObject.description}</div>
                                <br></br>
                                <div>{petObject.notes}</div>
                                <br></br>
                                <Button variant="primary" style={styles.button} onClick={""}> ❤️ {petObject.upvotes}</Button>
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
                            <Card.Title as="h3">{petObject.name}</Card.Title>
                            <Card.Text>
                                <br></br>
                                <Button style={styles.button} onClick={""}> ❤️ {petObject.upvotes}</Button>
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

/* return <section className="pet" key={`pet--${petObject.id}`}>
        <ul>
            <div className="image__container"><img className="pet__image" src={petObject.image}></img></div>
            <h3>{petObject.name}</h3>
            <p>{petObject.description}</p>
            <footer>{petObject.notes}</footer>
            <br></br>
        </ul>
    </section> */