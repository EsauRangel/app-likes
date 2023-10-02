import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {useDispatch} from "react-redux"
import {setStatusModal} from "../../redux/slices/taksSlice.js"
export const Header = () =>  {
  const dispatch = useDispatch();

  const hanldeOpenModal = () => {
    dispatch(setStatusModal());
  }
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Cuida tu comunidad</Navbar.Brand>
        <Button variant="primary" onClick={hanldeOpenModal}>Nueva tarea</Button>
      </Container>
    </Navbar>
  );
}