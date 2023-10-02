import Swal from "sweetalert2";
import { errorHandler } from "../../helpers/errorHandler";
import { Call } from "../../helpers/fetch";
import { setList, setStatusModal } from "../slices/taksSlice";
import { startLoading, stoptLoading } from "../slices/taksSlice";


//Thunk para obtener lista de tareas
export const startShowTasks = (setErrors = () => { }) => {
    return async (dispatch) => {
        dispatch(startLoading());

        //Obtengo las tareas 
        const resp = await Call("v1/tasks", "GET");


        if (resp.success) {
            //Las meto al store redux
            dispatch(setList(resp.success));

        } else {
            setErrors();
        }
        dispatch(stoptLoading());
    }
}


//Thunk para mandar cadena de filtro 
export const startFilter = ({ query = "" }) => {
    return async (dispatch) => {
        //Creo el parametro q para mandarlo url params
        const params = new URLSearchParams();
        params.append("q", query);

        const resp = await Call("v1/tasks", "GET", params.toString());
        if (resp.success) {
            //Si hay alguna coincidencia la meto al store redux
            dispatch(setList(resp.success));

        }
    }
}


//Thunk para generacion de likes
export const updateLikes = (id, values) => {
    return async (dispatch) => {

        //envio los datos
        const resp = await Call(`v1/tasks/${id}`, "PUT");

        if (resp.success) {
            //Redisparo la peticion 
            dispatch(startShowTasks(values));
        }
    }
}

//Thunk para eliminar una tarea
export const startDelete = (id, values) => {
    return async (dispatch) => {
        dispatch(startLoading());
        //Obtengo los datos
        const resp = await Call(`v1/tasks/${id}`, "DELETE");

        if (resp.success) {
            //Si hay alguna coincidencia lo meto al store redux
            dispatch(startShowTasks(values));
            Swal.fire({
                title: "Éxito",
                text: "Se elimino el recurso",
                icon: "success",
                toast: true,
                position: "bottom-end",
                timer: 8000,
            });
        }

        dispatch(stoptLoading());
    }
}

//Thunk para guardar una tarea
export const startSave = (values, setErrors = () => { }) => {
    return async (dispatch) => {
        dispatch(startLoading());
        const resp = await Call(`v1/tasks`, "POST", values);
        if (resp.success) {
            //Si la tarea se guarda exitosamente cierro el modal y pido las tareas
            dispatch(startShowTasks(values));
            dispatch(setStatusModal());
            Swal.fire({
                title: "Éxito",
                text: "Registro exitoso.",
                icon: "success",
                toast: true,
                position: "bottom-end",
                timer: 8000,
            });
        } else {
            errorHandler(resp, setErrors);
        }
        dispatch(stoptLoading());
    }
}