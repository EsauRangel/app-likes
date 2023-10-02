import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { updateLikes, startDelete } from '../redux/thunks/taskThunk';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

//Se desestructuran las props para crear la Car
export const CardTask = ({
  task_id, title, description, mexican_state, creation_date, user_name, likes, values
}) => {

  //Estado usado para deshabilitar el boton like
  const [clicked, setClicked] = useState(true);

  const dispatch = useDispatch();
  //Funcion para hacer like a una card
  const handleLike = () => {
    dispatch(updateLikes(task_id, values));
    setClicked(false);
  }

  //Funcion para eliminar una card
  const hanldeDelete = () => {
    dispatch(startDelete(task_id, values));
  }


  return (
    // Card para cada tarea
    <Card style={{ width: '18rem', marginBottom: '15px' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>Autor: {user_name}</Card.Text>
        <Card.Text>Fecha: {creation_date}</Card.Text>
        <Card.Text>Estado: {mexican_state}</Card.Text>
        <Card.Text>Likes: {likes}</Card.Text>
        <Button variant="primary" disabled={!clicked} onClick={handleLike}>like</Button>

        {(likes === 0) && <Button variant="danger" onClick={hanldeDelete}>Eliminar</Button>}
      </Card.Body>
    </Card>
  )
}

CardTask.propTypes = {
  task_id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mexican_state: PropTypes.string.isRequired,
  creation_date: PropTypes.string.isRequired,
  user_name: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  values: PropTypes.object.isRequired
}

export default CardTask
