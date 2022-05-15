
const { createSlice } = require("@reduxjs/toolkit");


export const currentUser = createSlice({
    name: 'currentUser',
    initialState: "",
    reducers: {
        setCurrentUser: (state, action) => {
            return action.payload
        },
    }
})

export const { setCurrentUser } = currentUser.actions

export default currentUser.reducer