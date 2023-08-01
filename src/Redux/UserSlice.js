import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isOpen: false,
    resultDish: [],
    collectionDish: [],
    indicatorColor: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    setResultDish: (state, action) => {
      state.resultDish = action.payload;
    },
    setCollectionDish: (state, action) => {
      state.collectionDish = action.payload;
    },
    setIndicatorColor: (state, action) => {
      state.indicatorColor = action.payload;
    },
  },
});

export const {
  login,
  logout,
  openModal,
  closeModal,
  setResultDish,
  setCollectionDish,
  setIndicatorColor,
} = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectIsOpen = (state) => state.user.isOpen;
export const selectResultDish = (state) => state.user.resultDish;
export const selectCollectionDish = (state) => state.user.collectionDish;
export const selectIndicatorColor = (state) => state.user.indicatorColor;

export default userSlice.reducer;
