import * as React from "react";
import { JSX } from "react";

interface Props {}
interface State {}
export class Kors extends React.Component<Props, State> {
  render(): JSX.Element {
    return (
      <div className={"KorsContainer"}>
        {this.getOuterSVG()}
        {this.getMiddleSVG()}
        {this.getInnerSVG()}
      </div>
    );
  }

  private getOuterSVG(): JSX.Element {
    return (
      <svg
        className="KorsSVG"
        xmlns="http://www.w3.org/2000/svg"
        height={"100%"}
      >
        <defs>
          <linearGradient x1="50%" y1="0" x2="50%" y2="100%" id="KorsGradient">
            <stop
              stopColor="hsl(0, 95.90%, 71.00%)"
              stopOpacity="1"
              offset="0%"
            ></stop>
            <stop
              stopColor="hsl(247, 100.00%, 68.20%)"
              stopOpacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <g strokeWidth={"8%"} stroke={"url(#KorsGradient)"} fill={"none"}>
          <rect
            className={"KorsSVGBlur"}
            width={"66.66%"}
            height={"66.66%"}
            x={"16.66%"}
            y={"16.66%"}
            rx={"5%"}
            ry={"5%"}
          ></rect>
          <rect
            className={"KorsSVGBlur"}
            width={"66.66%"}
            height={"66.66%"}
            x={"10.66%"}
            y={"16.66%"}
            rx={"5%"}
            ry={"5%"}
            opacity="0.25"
          ></rect>
          <rect
            className={"KorsSVGBlur"}
            width={"66.66%"}
            height={"66.66%"}
            x={"19.66%"}
            y={"16.66%"}
            rx={"5%"}
            ry={"5%"}
            opacity="0.25"
          ></rect>
          <rect
            width={"66.66%"}
            height={"66.66%"}
            x={"16.66%"}
            y={"16.66%"}
            rx={"5%"}
            ry={"5%"}
          ></rect>
        </g>
      </svg>
    );
  }

  private getMiddleSVG(): JSX.Element {
    return (
      <svg
        className="KorsSVG2"
        xmlns="http://www.w3.org/2000/svg"
        height={"66.66%"}
      >
        <g strokeWidth={"7%"} stroke={"url(#KorsGradient)"} fill={"none"}>
          <rect
            className={"KorsSVGBlur"}
            width={"66.66%"}
            height={"66.66%"}
            x={"16.66%"}
            y={"16.66%"}
            rx={"5%"}
            ry={"5%"}
          ></rect>
          <rect
            className={"KorsSVGBlur"}
            width={"66.66%"}
            height={"66.66%"}
            x={"10.66%"}
            y={"16.66%"}
            rx={"5%"}
            ry={"5%"}
            opacity="0.25"
          ></rect>
          <rect
            className={"KorsSVGBlur"}
            width={"66.66%"}
            height={"66.66%"}
            x={"19.66%"}
            y={"16.66%"}
            rx={"5%"}
            ry={"5%"}
            opacity="0.25"
          ></rect>
          <rect
            width={"66.66%"}
            height={"66.66%"}
            x={"16.66%"}
            y={"16.66%"}
            rx={"5%"}
            ry={"5%"}
          ></rect>
        </g>
      </svg>
    );
  }

  private getInnerSVG(): JSX.Element {
    return (
      <svg
        className="KorsSVG3"
        xmlns="http://www.w3.org/2000/svg"
        height={"44.44%"}
      >
        <g strokeWidth={"7%"} stroke={"url(#KorsGradient)"} fill={"none"}>
          <rect
            className={"KorsSVGBlur"}
            width={"66.66%"}
            height={"66.66%"}
            x={"16.66%"}
            y={"16.66%"}
            rx={"5%"}
            ry={"5%"}
          ></rect>
          <rect
            className={"KorsSVGBlur"}
            width={"66.66%"}
            height={"66.66%"}
            x={"10.66%"}
            y={"16.66%"}
            rx={"5%"}
            ry={"5%"}
            opacity="0.25"
          ></rect>
          <rect
            className={"KorsSVGBlur"}
            width={"66.66%"}
            height={"66.66%"}
            x={"19.66%"}
            y={"16.66%"}
            rx={"5%"}
            ry={"5%"}
            opacity="0.25"
          ></rect>
          <rect
            width={"66.66%"}
            height={"66.66%"}
            x={"16.66%"}
            y={"16.66%"}
            rx={"5%"}
            ry={"5%"}
          ></rect>
        </g>
      </svg>
    );
  }
}
