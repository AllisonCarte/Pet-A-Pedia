import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';



export const PetSearching = ({ setterFunction }) => {
    return (
        <Container >
            <article className='ms-1' >
            <Form style={{ width: "70vw", textAlign: "center", paddingLeft: "15.5vw", paddingTop: "1vw" }}>
                <div >
                    <Form.Control
                        onChange={
                            (changeEvent) => {
                                setterFunction(changeEvent.target.value)
                            }
                        }
                        style={{ textAlign: "center" }}
                        type="search"
                        placeholder="Enter pet name"
                        className="me-2 align-items-center justify-content-center"
                        aria-label="Search"
                        />
                </div>
            </Form>
                        </article>
        </Container>
    )
}
