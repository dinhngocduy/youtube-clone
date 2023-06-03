import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
export interface SlidebarActiveState {
  value: boolean;
}
const initialState: SlidebarActiveState = {
  value: true,
};

export const slideBarActiveSlice = createSlice({
  name: "slideBarActive",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = state.value ? false : true;
    },
  },
});

export const { toggle } = slideBarActiveSlice.actions;
export const selectSlideBarActive = (state: RootState) =>
  state.slideBarActive.value;
export default slideBarActiveSlice.reducer;
