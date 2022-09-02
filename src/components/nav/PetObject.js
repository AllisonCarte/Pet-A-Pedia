import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { styles } from '../styles/styles';
import { Link } from 'react-router-dom';

export const PetsForSearch = ({ petObject }) => {

    return (
        <>
    
       <div style={{display: "flex", flexWrap: "wrap", flexDirection: "column", textAlign: "center"}}>
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col className="m-auto align-items-center">
                    <Card className="mx-auto" style={{width: "25vw", margin: "1rem"}}>
                        <Card.Img variant="top" src={petObject.image} />
                        <Card.Body>
                            <Card.Title as="h3"><Link to={`/pets/${petObject.id}`}>{petObject.name}</Link></Card.Title>
                            <Card.Text>
                                <div>{petObject.description}</div>
                                <br></br>
                                <Button variant="primary" style={styles.button}> ❤️ {petObject.upvotes}</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </div>
            </>
    );
}