import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { styles } from '../styles/styles';

export const Pet = ({ petObject }) => {

    return (
        <Card style={styles.card}>
            <Card.Img variant="top" src={petObject.image} style={styles.cardImage} />
            <Card.Body>
                <Card.Title>{petObject.name}</Card.Title>
                <Card.Text>
                    <div>{petObject.description}</div>
                    <div>{petObject.notes}</div>
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>)
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