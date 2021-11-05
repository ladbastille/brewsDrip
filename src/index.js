import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Switch } from "react-router-dom";
import "./reset.css";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <App />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);
