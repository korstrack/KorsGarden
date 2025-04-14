import * as React from "react";
import { JSX } from "react";
import { RootState } from "../store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ProgressionNode, ProgressionType } from "../slices/helperStructs";
import { Dictionary } from "lodash";
import { ProgressionNodeListing } from "./ProgressionNodeListing";

interface ReactProps {}
interface InjectedProps {
  gardenProgressionNodes: Dictionary<ProgressionNode>;
  newButtonsProgressionNodes: Dictionary<ProgressionNode>;
  userIntferfaceProgressionNodes: Dictionary<ProgressionNode>;
  carrotProgressionNodes: Dictionary<ProgressionNode>;
  potatoProgressionNodes: Dictionary<ProgressionNode>;
  dispatch?: Dispatch;
}
type Props = ReactProps & InjectedProps;
interface State {
  selectedProgression: ProgressionType;
}
class AProgressionList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedProgression: 3,
    };
  }

  render(): JSX.Element {
    return (
      <div className={"ProgressionContainer"}>
        {this.makeHeader()}
        <div className="ProgressionList">{this.makeList()}</div>
        {this.makeSVG()}
        {this.makeSVG2()}
        {this.makeSVG3()}
      </div>
    );
  }

  private makeHeader(): JSX.Element {
    const gardenIsSelected: string =
      this.state.selectedProgression === ProgressionType.garden
        ? "Selected"
        : "";
    const PlantsIsSelected: string =
      this.state.selectedProgression === ProgressionType.newButtons
        ? "Selected"
        : "";
    const CorruptionIsSelected: string =
      this.state.selectedProgression === ProgressionType.userInterface
        ? "Selected"
        : "";
    const CarrotIsSelected: string =
      this.state.selectedProgression === ProgressionType.carrot
        ? "Selected"
        : "";
    const PotatoIsSelected: string =
      this.state.selectedProgression === ProgressionType.potato
        ? "Selected"
        : "";
    return (
      <div className={"ProgressionHeaderContainer"}>
        <span
          className={`ProgressionHeader ${gardenIsSelected}`}
          onClick={this.onHeaderClick.bind(this, ProgressionType.garden)}
        >{`Garden`}</span>
        <span
          className={`ProgressionHeader ${PlantsIsSelected}`}
          onClick={this.onHeaderClick.bind(this, ProgressionType.newButtons)}
        >{`Plants`}</span>
        <span
          className={`ProgressionHeader ${CorruptionIsSelected}`}
          onClick={this.onHeaderClick.bind(this, ProgressionType.userInterface)}
        >{`Corruption`}</span>
        <span
          className={`ProgressionHeader ${CarrotIsSelected}`}
          onClick={this.onHeaderClick.bind(this, ProgressionType.carrot)}
        >{`Carrot`}</span>
        {this.isPlantUnlocked(ProgressionType.potato) && (
          <span
            className={`ProgressionHeader ${PotatoIsSelected}`}
            onClick={this.onHeaderClick.bind(this, ProgressionType.potato)}
          >{`Potato`}</span>
        )}
      </div>
    );
  }

  private onHeaderClick(type: ProgressionType): void {
    this.setState({
      selectedProgression: type,
    });
  }

  private isPlantUnlocked(type: ProgressionType): boolean {
    switch (type) {
      case ProgressionType.garden:
        return true;
      case ProgressionType.newButtons:
        return true;
      case ProgressionType.userInterface:
        return this.props.gardenProgressionNodes["Skybox!"].isEarned;
      case ProgressionType.carrot:
        return true;
      case ProgressionType.potato:
        return this.props.newButtonsProgressionNodes["UnlockPotato"].isEarned;
    }
    return false;
  }

  private makeList(): JSX.Element[] {
    const progList: JSX.Element[] = [];
    switch (this.state.selectedProgression) {
      case ProgressionType.garden:
        for (let key in this.props.gardenProgressionNodes) {
          const node = this.props.gardenProgressionNodes[key];
          progList.push(<ProgressionNodeListing node={node} key={node.name} />);
        }
        return progList;
      case ProgressionType.newButtons:
        for (let key in this.props.newButtonsProgressionNodes) {
          const node = this.props.newButtonsProgressionNodes[key];
          progList.push(<ProgressionNodeListing node={node} key={node.name} />);
        }
        return progList;
      case ProgressionType.userInterface:
        for (let key in this.props.userIntferfaceProgressionNodes) {
          const node = this.props.userIntferfaceProgressionNodes[key];
          progList.push(<ProgressionNodeListing node={node} key={node.name} />);
        }
        return progList;
      case ProgressionType.carrot:
        for (let key in this.props.carrotProgressionNodes) {
          const node = this.props.carrotProgressionNodes[key];
          progList.push(<ProgressionNodeListing node={node} key={node.name} />);
        }
        return progList;
      case ProgressionType.potato:
        for (let key in this.props.potatoProgressionNodes) {
          const node = this.props.potatoProgressionNodes[key];
          progList.push(<ProgressionNodeListing node={node} key={node.name} />);
        }
        return progList;
      default:
        return progList;
    }
  }

  private makeSVG(): JSX.Element {
    return (
      <svg
        className="KorSvg"
        xmlns="http://www.w3.org/2000/svg"
        width={120}
        height={120}
      >
        <defs>
          <linearGradient x1="50%" y1="0" x2="50%" y2="100%" id="testGradient">
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
        <g strokeWidth={"8px"} stroke={"url(#testGradient)"} fill={"none"}>
          <rect
            className={"KorSVGBlur"}
            width={80}
            height={80}
            x={20}
            y={20}
            rx={7}
            ry={7}
          ></rect>
          <rect
            className={"KorSVGBlur"}
            width={80}
            height={80}
            x={17}
            y={20}
            rx={7}
            ry={7}
            opacity="0.25"
          ></rect>
          <rect
            className={"KorSVGBlur"}
            width={80}
            height={80}
            x={23}
            y={20}
            rx={7}
            ry={7}
            opacity="0.25"
          ></rect>
          <rect width={80} height={80} x={20} y={20} rx={7} ry={7}></rect>
        </g>
      </svg>
    );
  }

  private makeSVG2(): JSX.Element {
    return (
      <svg
        className="KorSVG2"
        xmlns="http://www.w3.org/2000/svg"
        width={60}
        height={60}
      >
        {/* <defs>
          <linearGradient x1="50%" y1="0" x2="50%" y2="100%" id="testGradient">
            <stop stop-color="red" stop-opacity="1" offset="0%"></stop>
            <stop stop-color="blue" stop-opacity="1" offset="100%"></stop>
          </linearGradient>
        </defs> */}
        <g strokeWidth={"5px"} stroke={"url(#testGradient"} fill="none">
          <rect
            className={"KorSVGBlur2"}
            width={48}
            height={48}
            x={6}
            y={6}
            rx={5}
            ry={5}
          ></rect>
          <rect
            className={"KorSVGBlur2"}
            width={48}
            height={48}
            x={4}
            y={6}
            rx={5}
            ry={5}
            opacity="0.25"
          ></rect>
          <rect
            className={"KorSVGBlur2"}
            width={48}
            height={48}
            x={8}
            y={6}
            rx={5}
            ry={5}
            opacity="0.25"
          ></rect>
          <rect width={48} height={48} x={6} y={6} rx={5} ry={5}></rect>
        </g>
      </svg>
    );
  }

  private makeSVG3(): JSX.Element {
    return (
      <svg
        className="KorSVG3"
        xmlns="http://www.w3.org/2000/svg"
        width={36}
        height={36}
      >
        {/* <defs>
          <linearGradient x1="50%" y1="0" x2="50%" y2="100%" id="testGradient">
            <stop stop-color="red" stop-opacity="1" offset="0%"></stop>
            <stop stop-color="blue" stop-opacity="1" offset="100%"></stop>
          </linearGradient>
        </defs> */}
        <g stroke={"url(#testGradient)"} strokeWidth={"3px"} fill="none">
          <rect
            className={"KorSVGBlur2"}
            width={29}
            height={29}
            x={3.5}
            y={3.5}
            rx={3}
            ry={3}
          ></rect>
          <rect
            className={"KorSVGBlur2"}
            width={29}
            height={29}
            x={2.5}
            y={3.5}
            rx={3}
            ry={3}
            opacity="0.25"
          ></rect>
          <rect
            className={"KorSVGBlur2"}
            width={29}
            height={29}
            x={4.5}
            y={3.5}
            rx={3}
            ry={3}
            opacity="0.25"
          ></rect>
          <rect width={29} height={29} x={3.5} y={3.5} rx={3} ry={3}></rect>
        </g>
      </svg>
    );
  }
}

function mapStateToProps(state: RootState, ownProps: ReactProps): Props {
  const {
    gardenProgression,
    newButtonsProgression,
    userInterfaceProgression,
    carrotProgression,
    potatoProgression,
  } = state.progression;

  return {
    ...ownProps,
    gardenProgressionNodes: gardenProgression,
    newButtonsProgressionNodes: newButtonsProgression,
    userIntferfaceProgressionNodes: userInterfaceProgression,
    carrotProgressionNodes: carrotProgression,
    potatoProgressionNodes: potatoProgression,
  };
}

export const ProgressionList = connect(mapStateToProps)(AProgressionList);
