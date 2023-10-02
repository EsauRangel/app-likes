import { useDispatch, useSelector } from "react-redux"
import { setStatusModal } from "../redux/slices/taksSlice"
import { Button, Modal } from "react-bootstrap"
import { InputApp } from "../components/InputApp"
import { SelectSearchApp } from "../components/SelectSearchApp"
import { useForm } from "../hooks/useForm"
import {startSave} from "../redux/thunks/taskThunk"

//Valores iniciales del formulario
const initialValues = {
  title: "",
  description: "",
  mexican_state: "",
  user_name: "",
  creation_date: "",
  errors: {}
};

//JSON para los estados de la republica
const statesOptions = [
  {
    "value": "Jalisco",
    "label": "Jalico"
  },
  {
    "value": "Baja California",
    "label": "Baja California"
  },
  {
    "value": "Baja California Sur",
    "label": "Baja California Sur"
  },
  {
    "value": "Campeche",
    "label": "Campeche"
  },
  {
    "value": "Chiapas",
    "label": "Chiapas"
  },
  {
    "value": "Chihuahua",
    "label": "Chihuahua"
  },
  {
    "value": "Coahuila",
    "label": "Coahuila"
  },
  {
    "value": "Colima",
    "label": "Colima"
  },
  {
    "value": "Durango",
    "label": "Durango"
  },
  {
    "value": "Estado de México",
    "label": "Estado de México"
  },
  {
    "value": "Guanajuato",
    "label": "Guanajuato"
  },
  {
    "value": "Guerrero",
    "label": "Guerrero"
  },
  {
    "value": "Hidalgo",
    "label": "Hidalgo"
  },
  {
    "value": "Michoacán",
    "label": "Michoacán"
  },
  {
    "value": "Morelos",
    "label": "Morelos"
  },
  {
    "value": "Nayarit",
    "label": "Nayarit"
  },
  {
    "value": "Nuevo León",
    "label": "Nuevo León"
  },
  {
    "value": "Oaxaca",
    "label": "Oaxaca"
  },
  {
    "value": "Puebla",
    "label": "Puebla"
  },
  {
    "value": "Querétaro",
    "label": "Querétaro"
  },
  {
    "value": "Quintana Roo",
    "label": "Quintana Roo"
  },
  {
    "value": "San Luis Potosí",
    "label": "San Luis Potosí"
  },
  {
    "value": "Sinaloa",
    "label": "Sinaloa"
  },
  {
    "value": "Sonora",
    "label": "Sonora"
  },
  {
    "value": "Tabasco",
    "label": "Tabasco"
  },
  {
    "value": "Tamaulipas",
    "label": "Tamaulipas"
  },
  {
    "value": "Tlaxcala",
    "label": "Tlaxcala"
  },
  {
    "value": "Veracruz",
    "label": "Veracruz"
  },
  {
    "value": "Yucatán",
    "label": "Yucatán"
  },
  {
    "value": "Zacatecas",
    "label": "Zacatecas"
  }
];

export const TaskForm = () => {
  const dispatch = useDispatch();
  //Obtengo el estado del store redux
  const { statusModal } = useSelector(state => state.tasks);
  //Uso mi custom hook para manejar los estados de las variables de mi form
  const { values, handleInputChange,setErrors } = useForm(initialValues);
  //Extraigo mis variables ya reactivas de values
  const { title, description, mexican_state, user_name, creation_date, errors } = values;


  //Funcion para cerrar el modal form
  const handleCloseModal = () => {
    dispatch(setStatusModal());
  }

  //Funcion para guardar mi modal
  const hanldeSave = () => {
    dispatch(startSave(values, setErrors));
  }

  
  return (
    <Modal show={statusModal} onHide={handleCloseModal} size="xxl">
      <Modal.Header className="p-4" closeButton>
        <Modal.Title>
          <div className="w-100 d-flex justify-content-center">
            <span>Nueva tarea</span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <InputApp
          required={true}
          title="Titulo"
          placeholder="Titulo"
          type="text"
          name="title"
          value={title}
          onChange={handleInputChange}
          errorText={
            errors.title && errors.title[0]
          }
        />

        <InputApp
          required={true}
          title="Descripción"
          placeholder="Descripción"
          type="text"
          name="description"
          value={description}
          onChange={handleInputChange}
          errorText={
            errors.description && errors.description[0]
          }
        />
        <InputApp
          required={true}
          title="Nombre"
          placeholder="Nombre"
          type="text"
          name="user_name"
          value={user_name}
          onChange={handleInputChange}
          errorText={
            errors.user_name && errors.user_name[0]
          }
        />

        <SelectSearchApp
          required={true}
          title="Estado"
          placeholder="Seleccione un estado"
          name="mexican_state"
          value={mexican_state}
          onChange={handleInputChange}
          options={statesOptions}
          errorText={
            errors.mexican_state && errors.mexican_state[0]
          }
        />

        <InputApp
          required={true}
          title="Fecha"
          placeholder="Fecha"
          type="date"
          name="creation_date"
          value={creation_date}
          onChange={handleInputChange}
          errorText={
            errors.creation_date && errors.creation_date[0]
          }
        />



      </Modal.Body>
      <Modal.Footer>
        <Button onClick={hanldeSave}>Guardar</Button>
      </Modal.Footer>
    </Modal>
  )
}

