import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';

import {
  persistReducer, 
  persistStore, 
  FLUSH, 
  REHYDRATE,
  PAUSE, 
  PERSIST, 
  PURGE, 
  REGISTER
} from 'redux-persist';
import reducers from "./reducers";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export default store


