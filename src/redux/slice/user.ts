import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from '../../interfaces/index';

const initialState: User = {
    id: '',
    name: '',
    email: '',
    password: '',
    createdAt: ''
}
const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state = action.payload;
            return state;
        }
    }
});

export const { setUser } = user.actions;
export default user.reducer;