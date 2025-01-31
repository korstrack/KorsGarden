import * as _ from "lodash";
import { createRoot } from "react-dom/client";
import { Bloop } from "./components/Header";
import "./styles.css";
import { Title } from "./components/Title";
import { Provider } from "react-redux";
import { store } from "./store";
import { Counter } from "./components/Counter";
import { ProgressionList } from "./components/ProgressionList";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <div className={"MainContainer"}>
      <div className={"Header"}>
        <Title />
        <Counter />
      </div>
      <div className={"MainBody"}>
        <div className={"Clickers"}>
          <Bloop />
        </div>
        <ProgressionList />
      </div>
    </div>
  </Provider>
);
