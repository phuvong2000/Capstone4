import { createSlice } from '@reduxjs/toolkit'
import axios from "axios"
const initialState = {
    userList: []
}

const usersReducer = createSlice({
    name: "usersReducer",
    initialState,
    reducers: {
        getUserListAction: (state, action) => {
            state.userList = action.payload;
        }
    }
});

export const { getUserListAction } = usersReducer.actions

export default usersReducer.reducer

// ----------------------------------------------\
export const getUserListApi = () => {
    return async (dispatch) => {
        const res = await axios.get('https://apistore.cybersoft.edu.vn/api/Users/admin');
        const actionPayload = getUserListAction(res.data.content);
        dispatch(actionPayload);
    }
}