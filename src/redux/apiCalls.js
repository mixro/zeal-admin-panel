import { publicRequest, userRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
import { addProductFailure, addProductStart, addProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux";
import { addUsersFailure, addUsersStart, addUsersSuccess, deleteUsersFailure, deleteUsersStart, deleteUsersSuccess, getUsersFailure, getUsersStart, getUsersSuccess, updateUsersFailure, updateUsersStart, updateUsersSuccess } from "./usersRedux";
import { addOrderFailure, addOrderStart, addOrderSuccess, deleteOrderFailure, deleteOrderStart, deleteOrderSuccess, getOrderFailure, getOrderStart, getOrderSuccess, updateOrderFailure, updateOrderStart, updateOrderSuccess } from "./orderRedux";
import { addServiceFailure, addServiceStart, addServiceSuccess, deleteServiceFailure, deleteServiceStart, deleteServiceSuccess, getServiceFailure, getServiceStart, getServiceSuccess, updateServiceFailure, updateServiceStart, updateServiceSuccess } from "./serviceRedux";

// USER  LOGIN
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
      const res = await publicRequest.post("/auth/login", user);
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
};

// USER  LOGOUT
export const userLogout = async (dispatch) => {
    dispatch(logout());
};



// PRODUCTS

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch(err) {
    dispatch(getProductFailure());
  }
}

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch(err) {
    dispatch(deleteProductFailure());
  }
}

export const updateProduct = async (id, dispatch, product) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.put(`/products/${id}`, product);
    const updatedProduct = res.data;
    dispatch(updateProductSuccess({id, updatedProduct }));
  } catch(err) {
    dispatch(updateProductFailure());
  }
}

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch(err) {
    dispatch(addProductFailure());
  }
}


// SERVICES

export const getServices = async (dispatch) => {
  dispatch(getServiceStart());
  try {
    const res = await publicRequest.get("/services");
    dispatch(getServiceSuccess(res.data));
  } catch(err) {
    dispatch(getServiceFailure());
  }
}

export const deleteService = async (id, dispatch) => {
  dispatch(deleteServiceStart());
  try {
    await userRequest.delete(`/services/${id}`);
    dispatch(deleteServiceSuccess(id));
  } catch(err) {
    dispatch(deleteServiceFailure());
  }
}

export const updateService = async (id, dispatch, service) => {
  dispatch(updateServiceStart());
  try {
    const res = await userRequest.put(`/services/${id}`, service);
    const updatedService = res.data;
    dispatch(updateServiceSuccess({id, updatedService }));
  } catch(err) {
    dispatch(updateServiceFailure());
  }
}

export const addService = async (service, dispatch) => {
  dispatch(addServiceStart());
  try {
    const res = await userRequest.post(`/services`, service);
    dispatch(addServiceSuccess(res.data));
  } catch(err) {
    dispatch(addServiceFailure());
  }
}


//USERS

export const addUser = async (dispatch, user) => {
  dispatch(addUsersStart());
  try {
    const res = await userRequest.post("/auth/register", user);
    dispatch(addUsersSuccess(res.data));
  } catch(err) {
    dispatch(addUsersFailure());
  }
}

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await userRequest.get("/users");
    dispatch(getUsersSuccess(res.data));
  } catch(err) {
    dispatch(getUsersFailure());
  }
}

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUsersStart());
  try {
    await userRequest.delete(`/users/${id}`);
    dispatch(deleteUsersSuccess(id));
  } catch(err) {
    dispatch(deleteUsersFailure());
  }
}

export const updateUser = async (id, dispatch, user) => {
  dispatch(updateUsersStart());
  try {
    const res = await userRequest.put(`/users/${id}`, user);
    const updatedUser = res.data;
    dispatch(updateUsersSuccess({id, updatedUser }));
  } catch(err) {
    dispatch(updateUsersFailure());
  }
}


//ORDERS

export const addOrder = async (dispatch, order) => {
  dispatch(addOrderStart());
  try {
    const res = await userRequest.post("/orders", order);
    dispatch(addOrderSuccess(res.data));
  } catch(err) {
    dispatch(addOrderFailure());
  }
}

export const getOrders = async (dispatch) => {
  dispatch(getOrderStart());
  try {
    const res = await userRequest.get("/orders");
    dispatch(getOrderSuccess(res.data));
  } catch(err) {
    dispatch(getOrderFailure());
  }
}

export const deleteOrder = async (id, dispatch) => {
  dispatch(deleteOrderStart());
  try {
    await userRequest.delete(`/orders/${id}`);
    dispatch(deleteOrderSuccess(id));
  } catch(err) {
    dispatch(deleteOrderFailure());
  }
}

export const updateOrder = async (id, dispatch, order) => {
  dispatch(updateOrderStart());
  try {
    const res = await userRequest.put(`/orders/${id}`, order);
    const updatedOrder = res.data;
    dispatch(updateOrderSuccess({id, updatedOrder }));
  } catch(err) {
    dispatch(updateOrderFailure());
  }
}