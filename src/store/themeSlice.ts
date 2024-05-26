import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const themes = [
  {
    name: "Aurora",
    layout: "side-menu",
    // component: ,
  },
] as const;

export type Themes = (typeof themes)[number];

export const getTheme = (search?: {
  name: Themes["name"];
  layout: Themes["layout"];
}) => {
  const searchValues =
    search === undefined
      ? {
          name: localStorage.getItem("theme"),
          layout: localStorage.getItem("layout"),
        }
      : search;
  return themes.filter((item) => {
    return (
      item.name === searchValues.name && item.layout === searchValues.layout
    );
  })[0];
};
const initialState = {
  value: {
    name: themes[0].name,
    layout: themes[0].layout
  },
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Themes["name"]>) => {
      state.value = {
        name: action.payload,
        layout: state.value.layout,
      };

      localStorage.setItem("theme", action.payload);
    },
    setLayout: (state, action: PayloadAction<Themes["layout"]>) => {
      state.value = {
        name: state.value.name,
        layout: action.payload,
      };

      localStorage.setItem("layout", action.payload);
    },
  },
});

export default themeSlice.reducer;