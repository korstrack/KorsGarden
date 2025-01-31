import * as React from "react";
import { JSX } from "react";

export class Title extends React.Component {
  render(): JSX.Element {
    return (
      <div className={"TitleContainer"}>
        <span className={"Title"}>{`Kor's Garden`}</span>
      </div>
    );
  }
}
