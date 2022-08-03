import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces";
import { RootState } from "../store";

const initialState: User[] = [];

const users = createSlice({
    name: "users",
    initialState,
    reducers: {
        getUsers: (state, action: PayloadAction<User[]>) => {
            state = action.payload;
            return state;
        },
        addUser: (state, action: PayloadAction<User>) => {
            state = [...state, { ...action.payload, id: nanoid(8) }];
            return state;
        },
        deleteUser: (state, action: PayloadAction<string>) => {
            state = state.filter(item => item.id !== action.payload);
            return state;
        },
        updateUser: (state, action: PayloadAction<User>) => {
            state = state.map(item => item.id == action.payload.id ? action.payload : item);
            return state;
        }
    }
});

export const { getUsers, addUser, deleteUser, updateUser } = users.actions;

export const selectUsers = (state: RootState) => state.users;

export default users.reducer;