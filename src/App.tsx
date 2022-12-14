import { Grid } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import MyForm from "./components/MyForm";
import MyTable from "./components/MyTable";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Grid item xs={12} md={4} lg={6}>
          <MyForm />
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <MyTable />
        </Grid>
      </Grid>
    </Provider>
  )
};
export default App;
