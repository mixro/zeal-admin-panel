import { configureStore, combineReducers } from "@reduxjs/toolkit";
import adminReducer from "./userRedux";
import productReducer from "./productRedux";
import usersReducer from "./usersRedux";
import orderReducer from "./orderRedux";
import servicesReducer from "./serviceRedux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };
  
const rootReducer = combineReducers({ 
  zealAdmin: adminReducer, 
  zealProducts: productReducer, 
  zealServices: servicesReducer, 
  zealUsers: usersReducer, 
  zealOrders: orderReducer 
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export let persistor = persistStore(store);