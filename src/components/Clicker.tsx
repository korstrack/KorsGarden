import * as React from "react";
import { JSX } from "react";
import { RootState } from "../store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ProgressionNode, ProgressionType } from "../slices/helperStructs";
import { Kors } from "./Icons/Kors";
import {
  increment,
  incrementBeet,
  incrementCarrot,
  incrementPotato,
  incrementTurnip,
} from "../slices/counterSlice";
import { Dictionary } from "lodash";
import { addGardenProgression } from "../slices/progressionSlice";
import { Sun } from "./Icons/Sun";

enum GrowthStage {
  Barren,
  SmallStem,
  FullStem,
  FirstLeaf,
  SecondLeaf,
  FullyGrown,
}

interface ReactProps {
  PlantType: ProgressionType;
}
interface InjectedProps {
  plantMultiplier: number;
  gardenMultiplier: number;
  progression: Dictionary<ProgressionNode>;
  gardenBreakPointsReached: boolean;
  gardenBreakPoint: number;
  massProductionNode: ProgressionNode;
  plantProductionNode: ProgressionNode;
  totalSold: number;
  dispatch?: Dispatch;
}
type Props = ReactProps & InjectedProps;
interface State {
  growthStage: GrowthStage;
  borders: Dictionary<JSX.Element>;
}
class AClicker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      growthStage: GrowthStage.Barren,
      borders: {},
    };
  }
  render(): JSX.Element {
    const fullyGrown: string =
      this.state.growthStage === GrowthStage.FullyGrown ? "FullyGrown" : "";
    const skybox: string = this.getSkybox();
    if (
      this.props.gardenBreakPointsReached &&
      !this.props.massProductionNode.isEarned
    ) {
      this.props.dispatch(addGardenProgression(this.props.massProductionNode));
    }
    return (
      <div className={"ClickerContainer"} onClick={this.onClick.bind(this)}>
        {Object.values(this.state.borders)}
        <div className={"ClickerTextContainer"}>
          <span
            className={"ClickerPlantName"}
          >{`${this.props.PlantType}`}</span>
          <div className={"ClickerSaleDescriptionContainer"}>
            <span
              className={"ClickerSaleDescription"}
            >{`Sells for ${this.getSaleAmount()} Kors`}</span>
            <Kors />
          </div>
        </div>
        <div className={`ClickerPlantContainer ${fullyGrown} ${skybox}`}>
          {this.getSun()}
          {this.getSecondLeaf(fullyGrown)}
          {this.getFirstLeaf(fullyGrown)}
          {this.getStem(fullyGrown)}
          {this.getDirt()}
          {this.getFullyGrownGlow(fullyGrown)}
          {this.getClickerInstructions(fullyGrown)}
        </div>
      </div>
    );
  }

  private onClick(): void {
    if (this.state.growthStage < Object.keys(GrowthStage).length / 2 - 1) {
      const borders = this.state.borders;
      const pulse = this.getPulse();
      borders[pulse.dateID] = pulse.element;
      this.setState({
        growthStage: this.state.growthStage + 1,
        borders: borders,
      });
      setTimeout(this.removePulse.bind(this, pulse.dateID), 3000);
    } else {
      this.props.dispatch(increment(this.getSaleAmount()));
      this.trackSale();
      const borders = this.state.borders;
      const pulse = this.getPulse();
      borders[pulse.dateID] = pulse.element;
      this.setState({
        growthStage: GrowthStage.Barren,
        borders,
      });
      setTimeout(this.removePulse.bind(this, pulse.dateID), 3000);
    }
  }

  private getPulse(): { element: JSX.Element; dateID: string } {
    const dateID = Date.now().toString();
    const element: JSX.Element = (
      <div className={`ClickerOnClickBorderGrow`} key={dateID}></div>
    );
    return { element, dateID };
  }

  private trackSale(): void {
    switch (this.props.PlantType) {
      case ProgressionType.carrot:
        this.props.dispatch(incrementCarrot());
        return;
      case ProgressionType.potato:
        this.props.dispatch(incrementPotato());
        return;
      case ProgressionType.beet:
        this.props.dispatch(incrementBeet());
        return;
      case ProgressionType.turnip:
        this.props.dispatch(incrementTurnip());
        return;
      default:
        return;
    }
  }

  private removePulse(dateID: string) {
    const borders = this.state.borders;
    delete borders[dateID];
  }

  // returns the sale price for this plant, calculated by multiplying the plantMultiplier, by the gardenMultiplier.
  // the plantMultiplier is increased by number of the plant sold divided by the current gardenBreakPoint if mass producing.
  private getSaleAmount(): number {
    return (
      1 *
      (this.props.plantMultiplier + this.getMassProductionMultiplier()) *
      this.props.gardenMultiplier
    );
  }

  // if we've unlocked mass production, return the total sold of this plant over the gardenBreakpoint. truncated.
  private getMassProductionMultiplier(): number {
    if (this.props.plantProductionNode?.isEarned) {
      return Math.trunc(this.props.totalSold / this.props.gardenBreakPoint);
    }
    return 1;
  }

  private getFullyGrownGlow(fullyGrown: string) {
    if (fullyGrown.length <= 0) {
      return null;
    }
    return <div className={`ClickerBorderGlow KorShimmer`}></div>;
  }

  private getSkybox(): string {
    const nodeName = `${this.props.PlantType}box!`;
    return this.props.progression[nodeName]?.isEarned ? "Skybox" : "";
  }

  private getSun(): JSX.Element {
    const nodeName = `${this.props.PlantType}Sun`;
    if (this.props.progression[nodeName]?.isEarned) {
      return <Sun />;
    } else return;
  }

  private getClickerInstructions(fullyGrown: string): JSX.Element {
    const instructionText =
      fullyGrown.length <= 0 ? "Click Me To Grow!" : "Click Me To Sell!";
    return (
      <span className={`ClickerInstructions ${fullyGrown}`}>
        {instructionText}
      </span>
    );
  }

  private getSecondLeaf(fullyGrown: string): JSX.Element {
    if (this.state.growthStage < 4) {
      return null;
    }

    return (
      <svg
        className={`ClickerSecondLeaf ${fullyGrown}`}
        xmlns="http://www.w3.org/2000/svg"
        height={"30%"}
        width={"30%"}
      >
        <defs>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="0" id="StemGrad">
            <stop
              stopColor="rgb(10, 59, 23)"
              stopOpacity="1"
              offset="0%"
            ></stop>
            <stop
              stopColor="rgb(26, 105, 51)"
              stopOpacity="1"
              offset="50%"
            ></stop>
            <stop
              stopColor="rgb(29, 168, 75)"
              stopOpacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <g strokeWidth={0} fill={"url(#StemGrad)"}>
          <ellipse
            width={"100%"}
            height={"100%"}
            cx={"50%"}
            cy={"50%"}
            rx={"50%"}
            ry={"25%"}
          ></ellipse>
        </g>
      </svg>
    );
  }

  private getFirstLeaf(fullyGrown: string): JSX.Element {
    if (this.state.growthStage < 3) {
      return null;
    }
    return (
      <svg
        className={`ClickerFirstLeaf ${fullyGrown}`}
        xmlns="http://www.w3.org/2000/svg"
        height={"30%"}
        width={"30%"}
      >
        <defs>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="0" id="StemGrad">
            <stop
              stopColor="rgb(10, 59, 23)"
              stopOpacity="1"
              offset="0%"
            ></stop>
            <stop
              stopColor="rgb(26, 105, 51)"
              stopOpacity="1"
              offset="50%"
            ></stop>
            <stop
              stopColor="rgb(29, 168, 75)"
              stopOpacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <g strokeWidth={0} fill={"url(#StemGrad)"}>
          <ellipse
            width={"100%"}
            height={"100%"}
            cx={"50%"}
            cy={"50%"}
            rx={"50%"}
            ry={"25%"}
          ></ellipse>
        </g>
      </svg>
    );
  }

  private getStem(fullyGrown: string): JSX.Element {
    if (this.state.growthStage < 1) {
      return null;
    }
    const notStageTwo: boolean = this.state.growthStage < 2;
    const stageOneOffset = notStageTwo ? "StageOneOffset" : "";
    const height = notStageTwo ? "20%" : "30%";
    const width = notStageTwo ? "10%" : "20%";
    const colored = notStageTwo
      ? "url(#StemGrad)"
      : `url(#${this.props.PlantType})`;
    return (
      <svg
        className={`ClickerStem ${fullyGrown} ${stageOneOffset}`}
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
      >
        <defs>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="0" id="StemGrad">
            <stop
              stopColor="rgb(10, 59, 23)"
              stopOpacity="1"
              offset="0%"
            ></stop>
            <stop
              stopColor="rgb(26, 105, 51)"
              stopOpacity="1"
              offset="50%"
            ></stop>
            <stop
              stopColor="rgb(29, 168, 75)"
              stopOpacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="0" id="carrot">
            <stop
              stopColor="rgb(59, 49, 10)"
              stopOpacity="1"
              offset="0%"
            ></stop>
            <stop
              stopColor="rgb(181, 129, 7)"
              stopOpacity="1"
              offset="50%"
            ></stop>
            <stop
              stopColor="rgb(243, 147, 30)"
              stopOpacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="0" id="potato">
            <stop stopColor="rgb(33, 27, 5)" stopOpacity="1" offset="0%"></stop>
            <stop
              stopColor="rgb(82, 61, 11)"
              stopOpacity="1"
              offset="50%"
            ></stop>
            <stop
              stopColor="rgb(110, 73, 29)"
              stopOpacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="0" id="beet">
            <stop stopColor="rgb(57, 4, 4)" stopOpacity="1" offset="0%"></stop>
            <stop
              stopColor="rgb(138, 7, 7)"
              stopOpacity="1"
              offset="50%"
            ></stop>
            <stop
              stopColor="rgb(232, 0, 0)"
              stopOpacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="0" id="turnip">
            <stop
              stopColor="rgb(122, 122, 122)"
              stopOpacity="1"
              offset="0%"
            ></stop>
            <stop
              stopColor="rgb(168, 168, 168)"
              stopOpacity="1"
              offset="50%"
            ></stop>
            <stop
              stopColor="rgb(254, 254, 254)"
              stopOpacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <g strokeWidth={0} fill={colored}>
          <rect
            width={"100%"}
            height={"100%"}
            x={"0"}
            y={"0"}
            rx={"5%"}
            ry={"5%"}
          ></rect>
        </g>
      </svg>
    );
  }

  private getDirt(): JSX.Element {
    return (
      <svg
        className={"ClickerDirt"}
        xmlns="http://www.w3.org/2000/svg"
        height={"40%"}
      >
        <defs>
          <linearGradient x1="50%" y1="100%" x2="50%" y2="0" id="DirtGradient">
            <stop
              stopColor="rgba(59, 38, 10, 1)"
              stopOpacity="1"
              offset="0%"
            ></stop>
            <stop
              stopColor="rgba(105, 77, 26, 1)"
              stopOpacity="1"
              offset="50%"
            ></stop>
            <stop
              stopColor="rgba(168, 124, 29, 1)"
              stopOpacity="1"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <g strokeWidth={0} fill={"url(#DirtGradient)"}>
          <rect
            width={"100%"}
            height={"100%"}
            x={"0"}
            y={"0"}
            rx={"5%"}
            ry={"5%"}
          ></rect>
        </g>
      </svg>
    );
  }
}

function mapStateToProps(state: RootState, ownProps: ReactProps): Props {
  const gardenBreakPointsReached = state.counter.gardenBreakPointsReached;
  const gardenBreakPoint = state.counter.gardenBreakPoint;
  const massProductionNode =
    state.progression.gardenProgression["MassProduction"];
  switch (ownProps.PlantType) {
    case ProgressionType.carrot:
      return {
        ...ownProps,
        plantMultiplier: state.progression.carrotMultiplier,
        gardenMultiplier: state.progression.gardenMultiplier,
        progression: state.progression.carrotProgression,
        gardenBreakPointsReached,
        massProductionNode,
        plantProductionNode:
          state.progression.carrotProgression["CarrotProduction!"],
        totalSold: state.counter.totalCarrotsSold,
        gardenBreakPoint,
      };
    case ProgressionType.potato:
      return {
        ...ownProps,
        plantMultiplier: state.progression.potatoMultiplier,
        gardenMultiplier: state.progression.gardenMultiplier,
        progression: state.progression.potatoProgression,
        gardenBreakPointsReached,
        massProductionNode,
        plantProductionNode:
          state.progression.potatoProgression["PotatoProduction!"],
        totalSold: state.counter.totalPotatoSold,
        gardenBreakPoint,
      };
    case ProgressionType.beet:
      return {
        ...ownProps,
        plantMultiplier: state.progression.beetMultiplier,
        gardenMultiplier: state.progression.gardenMultiplier,
        progression: state.progression.beetProgression,
        gardenBreakPointsReached,
        massProductionNode,
        plantProductionNode:
          state.progression.beetProgression["BeetProduction!"],
        totalSold: state.counter.totalBeetsSold,
        gardenBreakPoint,
      };
    case ProgressionType.turnip:
      return {
        ...ownProps,
        plantMultiplier: state.progression.turnipMultiplier,
        gardenMultiplier: state.progression.gardenMultiplier,
        progression: state.progression.turnipProgression,
        gardenBreakPointsReached,
        massProductionNode,
        plantProductionNode:
          state.progression.turnipProgression["TurnipProduction!"],
        totalSold: state.counter.totalTurnipsSold,
        gardenBreakPoint,
      };
    default:
      console.error(
        "Improper Type used when creating clicker, unexpected type: ",
        ownProps.PlantType,
        "Setting multiplier to 1."
      );
      return {
        ...ownProps,
        plantMultiplier: 1,
        gardenMultiplier: state.progression.gardenMultiplier,
        progression: {},
        gardenBreakPointsReached: false,
        massProductionNode,
        plantProductionNode: null,
        totalSold: 0,
        gardenBreakPoint: 100,
      };
  }
}

export const Clicker = connect(mapStateToProps)(AClicker);
