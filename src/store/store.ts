import { reducer as formReducer } from "redux-form";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// partner
import auth from "./partner/reducers/auth";


export const store = configureStore({
  reducer: {
    form: formReducer,
    // partner
    auth: auth,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
