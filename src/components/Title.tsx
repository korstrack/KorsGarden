import * as React from "react";
import { JSX } from "react";
export class Title extends React.Component {
  render(): JSX.Element {
    const title = "Kor's Garden";
    return (
      <div className={"TitleContainer"}>
        <span className={"Title"}>{`${title}`}</span>
        <span className={"TitleBlur KorShimmer"}>{`${title}`}</span>
      </div>
    );
  }
}
