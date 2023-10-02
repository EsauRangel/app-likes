import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { startShowTasks, startFilter } from "../redux/thunks/taskThunk";
import { CardTask } from "./CardTask";
import { CardContainer } from "../components/layout/CardContainer";
import { Col, Container, Row, } from "react-bootstrap";
import { TaskForm } from "./TaskForm";
import { useForm } from "../hooks/useForm";
import { InputApp } from "../components/InputApp";

//Variables iniciales de mi pantalla, solo para realizar el filtrado
const initialValues = {
  query: "",
  errors: {},
};


const Tasks = () => {
  const dispatch = useDispatch();
  //Uso mi custom hook para manejar los estados de las variables de mi form
  const { values, handleInputChange } = useForm(initialValues);
  //desestructuro mis variables 
  const { query, errors } = values;

  //Obtengo la lista de tareas de mi store redux
  const { list } = useSelector(state => state.tasks);

  //UseEffect para obtener los datos de la app
  useEffect(() => {
    dispatch(startShowTasks());
  }, [dispatch]);


  //Se ejecuta la funcion de filtro cada que la cadena es multiplo de 3
  useEffect(() => {
    if (values.query.length % 3 === 0) {
      dispatch(startFilter(values));
    }
  }, [values, dispatch])

  return (
    <CardContainer title="Tareas">

      <Container>
        <Row>
          <Col sm={4}>
            <InputApp
              title="Busqueda"
              placeholder="Busqueda"
              type="text"
              name="query"
              value={query}
              onChange={handleInputChange}
              errorText={
                errors.query && errors.query[0]
              }
            />
          </Col>
        </Row>
      </Container>
      <br />
      <Container>

        <Row >

          {list.map(task => (
            <Col sm={4} key={task.id} className="">
              <CardTask values={values} task_id={task.id} className="my-4" title={task.title} description={task.description} mexican_state={task.mexican_state} creation_date={task.creation_date} user_name={task.user_name} likes={task.likes} />
            </Col>


          ))}
        </Row>
      </Container>
      <TaskForm />
    </CardContainer>
  )
}

export default Tasks
