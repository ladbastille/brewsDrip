import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Switch } from "react-router-dom";
import './reset.css'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <App />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
