import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
    name: "zealServices",
    initialState: {
        services: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getServiceStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getServiceSuccess: (state, action) => {
            state.isFetching = false;
            state.services = action.payload;
        },
        getServiceFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        //DELETE
        deleteServiceStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteServiceSuccess: (state, action) => {
            state.isFetching = false;
            state.services.splice(
                state.services.findIndex((item) => item._id === action.payload),
            );
        },
        deleteServiceFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        //UPDATE
        updateServiceStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateServiceSuccess: (state, action) => {
            state.isFetching = false;
            state.services[state.services.findIndex((item) => item._id === action.payload._id)] = action.payload.service; 
        },
        updateServiceFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        //ADD
        addServiceStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addServiceSuccess: (state, action) => {
            state.isFetching = false;
            state.services.push(action.payload);
        },
        addServiceFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        clearServices: (state) => {
            state.services = [];
            state.isFetching = false;
            state.error = false;
        }
    }
});

export const {
    getServiceFailure,
    getServiceStart,
    getServiceSuccess,
    deleteServiceFailure,
    deleteServiceStart,
    deleteServiceSuccess,
    updateServiceFailure,
    updateServiceStart,
    updateServiceSuccess,
    addServiceFailure,
    addServiceStart,
    addServiceSuccess,
    clearServices,
} = serviceSlice.actions;

export default serviceSlice.reducer
