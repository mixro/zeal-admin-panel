import { createSlice } from "@reduxjs/toolkit"

export const orderSlice = createSlice({
    name: "zealOrders",
    initialState: {
        orders: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getOrderStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getOrderSuccess: (state, action) => {
            state.isFetching = false;
            state.orders = action.payload;
        },
        getOrderFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        //DELETE
        deleteOrderStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteOrderSuccess: (state, action) => {
            state.isFetching = false;
            state.orders.splice(
                state.orders.findIndex((item) => item._id === action.payload),
            );
        },
        deleteOrderFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        //UPDATE
        updateOrderStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateOrderSuccess: (state, action) => {
            state.isFetching = false;
            state.orders[state.orders.findIndex((item) => item._id === action.payload._id)] = action.payload.Order; 
        },
        updateOrderFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        //ADD
        addOrderStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addOrderSuccess: (state, action) => {
            state.isFetching = false;
            state.orders.push(action.payload);
        },
        addOrderFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        clearOrders: (state) => {
            state.orders = [];
            state.isFetching = false;
            state.error = false;
        }
    }
});

export const { 
    getOrderFailure, 
    getOrderStart, 
    getOrderSuccess, 
    deleteOrderFailure, 
    deleteOrderStart, 
    deleteOrderSuccess,
    updateOrderFailure, 
    updateOrderStart, 
    updateOrderSuccess,
    addOrderFailure, 
    addOrderStart, 
    addOrderSuccess,
    clearOrders,
} = orderSlice.actions;

export default orderSlice.reducer;
