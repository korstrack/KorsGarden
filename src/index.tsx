import * as _ from "lodash";
import { createRoot } from "react-dom/client";
import { Main } from "./components/Main";
import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { Header } from "./components/Header";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <div className={"MainContainer"}>
      <Header />
      <div className={"MainBody"}>
        <Main />
      </div>
    </div>
  </Provider>
);
