import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { DefaultLayout } from "./components/DefaultLayout";
import {
  CssBaseline
} from "@mui/material"

export const App = () => {
  return (
    <BrowserRouter>
      < CssBaseline />
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <MainPage />
          </DefaultLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
