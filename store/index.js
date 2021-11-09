import {configureStore} from "@reduxjs/toolkit";
import {projectsModalSlice} from "./projects-modal-slice";
import {projectImageFullViewSlice} from "./projects-modal-slice";

const store = configureStore({
    reducer: {
        projectsModal: projectsModalSlice.reducer,
        projectImageFullView: projectImageFullViewSlice.reducer,
    }
});

export default store;