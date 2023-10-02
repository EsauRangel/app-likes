import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    statusModal: false,
    isLoading: false,
}

export const taskSlice = createSlice({
    name: "taskSlice",
    initialState,
    reducers: {
        //Reducer para guardar todas las tareas
        setList: (state, action) => {
            state.list = action.payload;
        },
        //Se setea el valor contraio actual del modal para abrirlo o cerrarlo
        setStatusModal: (state) => {
            state.statusModal = !state.statusModal;
        },
        //Inicia el Spiner de carga 
        startLoading: (state)=> {
            state.isLoading = true;
        },
        //Termina el spiner
        stoptLoading: (state)=> {
            state.isLoading = false;
        },
    }
})

export const { setList, setStatusModal, startLoading, stoptLoading, plusModal } = taskSlice.actions;

export default taskSlice.reducer;