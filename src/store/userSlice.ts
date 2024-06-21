import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    users: Array<{ username: string, email: string }>;
}
const initialState: UserState = {
    users: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        registerUser: (state, action: PayloadAction<{ username: string, email: string }>) => {
            state.users.push(action.payload);
        },
    },

});

export const { registerUser } = userSlice.actions;
export default userSlice.reducer;