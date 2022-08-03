import createSagaMiddleware from "@redux-saga/core";
import user from "../slice/user";
import users from "../slice/users";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { rootSaga } from "../sagas";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    user,
    users,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>