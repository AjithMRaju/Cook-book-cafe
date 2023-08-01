import {configureStore} from "@reduxjs/toolkit";
import UserSlice, { userSlice } from "./UserSlice";

export default configureStore({
    reducer:{
        user:UserSlice,
        isOpen:UserSlice,
        resultDish:userSlice,
        inidcatorColor:userSlice
    }
})