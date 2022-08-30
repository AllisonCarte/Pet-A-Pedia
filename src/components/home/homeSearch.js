import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

export const HomeSearch = () => {
    const navigate = useNavigate
   return (
    <Form className="d-flex">
    <Form.Control

        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
    />
    <Button variant="outline-success" onClick={() => {
        navigate("/search")
    }}>Search</Button>
</Form>

   )

}