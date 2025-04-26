import * as _ from "lodash";
import { createRoot } from "react-dom/client";
import { Clickers } from "./components/Clickers";
import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { ProgressionList } from "./components/ProgressionList";
import { Header } from "./components/Header";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <div className={"MainContainer"}>
      <Header />
      <div className={"MainBody"}>
        <div className={"Clickers"}>
          <Clickers />
        </div>
        <ProgressionList />
      </div>
    </div>
  </Provider>
);
