import { configureStore } from '@reduxjs/toolkit';
/* import { setupListeners } from '@reduxjs/toolkit/query'; */
import { contactApi } from './contacts/contactsApi';
export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

/* setupListeners(store.dispatch); */
