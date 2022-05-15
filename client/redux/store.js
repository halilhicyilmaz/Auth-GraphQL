import { configureStore } from "@reduxjs/toolkit";
import currentUser from "./currentUser";


export default configureStore({
    reducer: {
        currentUser: currentUser

    }
})