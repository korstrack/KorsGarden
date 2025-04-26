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
  beetProgressionNodes: Dictionary<ProgressionNode>;
  turnipProgressionNodes: Dictionary<ProgressionNode>;
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
      selectedProgression: ProgressionType.carrot,
    };
  }

  render(): JSX.Element {
    return (
      <div className={"ProgressionContainer"}>
        {this.makeHeader()}
        <div className="ProgressionList">{this.makeList()}</div>
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
    const BeetIsSelected: string =
      this.state.selectedProgression === ProgressionType.beet ? "Selected" : "";
    const TurnipIsSelected: string =
      this.state.selectedProgression === ProgressionType.turnip
        ? "Selected"
        : "";
    return (
      <div className={"ProgressionHeaderBar"}>
        <div
          className={`ProgressionHeaderContainer ${gardenIsSelected}`}
          key={"garden"}
        >
          <span
            className={`ProgressionHeader ${gardenIsSelected} KorShimmer`}
            onClick={this.onHeaderClick.bind(this, ProgressionType.garden)}
          >{`Garden`}</span>
          <span
            className={`ProgressionHeader ${gardenIsSelected}`}
            onClick={this.onHeaderClick.bind(this, ProgressionType.garden)}
          >{`Garden`}</span>
        </div>
        <div
          className={`ProgressionHeaderContainer ${PlantsIsSelected}`}
          key={"plants"}
        >
          <span
            className={`ProgressionHeader ${PlantsIsSelected} KorShimmer`}
            onClick={this.onHeaderClick.bind(this, ProgressionType.newButtons)}
          >{`Plants`}</span>
          <span
            className={`ProgressionHeader ${PlantsIsSelected}`}
            onClick={this.onHeaderClick.bind(this, ProgressionType.newButtons)}
          >{`Plants`}</span>
        </div>
        <div
          className={`ProgressionHeaderContainer ${CorruptionIsSelected}`}
          key={"corruption"}
        >
          <span
            className={`ProgressionHeader ${CorruptionIsSelected} KorShimmer`}
            onClick={this.onHeaderClick.bind(
              this,
              ProgressionType.userInterface
            )}
          >{`Corruption`}</span>
          <span
            className={`ProgressionHeader ${CorruptionIsSelected}`}
            onClick={this.onHeaderClick.bind(
              this,
              ProgressionType.userInterface
            )}
          >{`Corruption`}</span>
        </div>
        <div
          className={`ProgressionHeaderContainer ${CarrotIsSelected}`}
          key={"carrot"}
        >
          <span
            className={`ProgressionHeader ${CarrotIsSelected}`}
            onClick={this.onHeaderClick.bind(this, ProgressionType.carrot)}
          >{`Carrot`}</span>
          <span
            className={`ProgressionHeader ${CarrotIsSelected} KorShimmer`}
            onClick={this.onHeaderClick.bind(this, ProgressionType.carrot)}
          >{`Carrot`}</span>
        </div>
        {this.isPlantUnlocked(ProgressionType.potato) && (
          <div
            className={`ProgressionHeaderContainer ${PotatoIsSelected}`}
            key={"potato"}
          >
            <span
              className={`ProgressionHeader ${PotatoIsSelected} KorShimmer`}
              onClick={this.onHeaderClick.bind(this, ProgressionType.potato)}
            >{`Potato`}</span>
            <span
              className={`ProgressionHeader ${PotatoIsSelected}`}
              onClick={this.onHeaderClick.bind(this, ProgressionType.potato)}
            >{`Potato`}</span>
          </div>
        )}
        {this.isPlantUnlocked(ProgressionType.beet) && (
          <div
            className={`ProgressionHeaderContainer ${BeetIsSelected}`}
            key={"Beet"}
          >
            <span
              className={`ProgressionHeader ${BeetIsSelected} KorShimmer`}
              onClick={this.onHeaderClick.bind(this, ProgressionType.beet)}
            >{`Beet`}</span>
            <span
              className={`ProgressionHeader ${BeetIsSelected}`}
              onClick={this.onHeaderClick.bind(this, ProgressionType.beet)}
            >{`Beet`}</span>
          </div>
        )}
        {this.isPlantUnlocked(ProgressionType.turnip) && (
          <div
            className={`ProgressionHeaderContainer ${TurnipIsSelected}`}
            key={"Turnip"}
          >
            <span
              className={`ProgressionHeader ${TurnipIsSelected} KorShimmer`}
              onClick={this.onHeaderClick.bind(this, ProgressionType.turnip)}
            >{`Turnip`}</span>
            <span
              className={`ProgressionHeader ${TurnipIsSelected}`}
              onClick={this.onHeaderClick.bind(this, ProgressionType.turnip)}
            >{`Turnip`}</span>
          </div>
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
      case ProgressionType.beet:
        return this.props.newButtonsProgressionNodes["UnlockBeet"].isEarned;
      case ProgressionType.turnip:
        return this.props.newButtonsProgressionNodes["UnlockTurnip"].isEarned;
      default:
        return false;
    }
  }

  private makeList(): JSX.Element[] {
    const progList: JSX.Element[] = [];
    switch (this.state.selectedProgression) {
      case ProgressionType.garden:
        for (let key in this.props.gardenProgressionNodes) {
          const node = this.props.gardenProgressionNodes[key];
          if (this.checkBlockingNodes(node)) {
            progList.push(
              <ProgressionNodeListing node={node} key={node.name} />
            );
          }
        }
        return progList;
      case ProgressionType.newButtons:
        for (let key in this.props.newButtonsProgressionNodes) {
          const node = this.props.newButtonsProgressionNodes[key];
          if (this.checkBlockingNodes(node)) {
            progList.push(
              <ProgressionNodeListing node={node} key={node.name} />
            );
          }
        }
        return progList;
      case ProgressionType.userInterface:
        for (let key in this.props.userIntferfaceProgressionNodes) {
          const node = this.props.userIntferfaceProgressionNodes[key];
          if (this.checkBlockingNodes(node)) {
            progList.push(
              <ProgressionNodeListing node={node} key={node.name} />
            );
          }
        }
        return progList;
      case ProgressionType.carrot:
        for (let key in this.props.carrotProgressionNodes) {
          const node = this.props.carrotProgressionNodes[key];
          if (this.checkBlockingNodes(node)) {
            progList.push(
              <ProgressionNodeListing node={node} key={node.name} />
            );
          }
        }
        return progList;
      case ProgressionType.potato:
        for (let key in this.props.potatoProgressionNodes) {
          const node = this.props.potatoProgressionNodes[key];
          if (this.checkBlockingNodes(node)) {
            progList.push(
              <ProgressionNodeListing node={node} key={node.name} />
            );
          }
        }
        return progList;
      case ProgressionType.beet:
        for (let key in this.props.beetProgressionNodes) {
          const node = this.props.beetProgressionNodes[key];
          if (this.checkBlockingNodes(node)) {
            progList.push(
              <ProgressionNodeListing node={node} key={node.name} />
            );
          }
        }
        return progList;
      case ProgressionType.turnip:
        for (let key in this.props.turnipProgressionNodes) {
          const node = this.props.turnipProgressionNodes[key];
          if (this.checkBlockingNodes(node)) {
            progList.push(
              <ProgressionNodeListing node={node} key={node.name} />
            );
          }
        }
        return progList;
      default:
        return progList;
    }
  }

  private checkBlockingNodes(node: ProgressionNode): boolean {
    for (let blockingNode of node.blockingNodes) {
      switch (blockingNode.progressionType) {
        case ProgressionType.garden:
          if (!this.props.gardenProgressionNodes[blockingNode.name].isEarned) {
            return false;
          }
          continue;
        case ProgressionType.newButtons:
          if (
            !this.props.newButtonsProgressionNodes[blockingNode.name].isEarned
          ) {
            return false;
          }
          continue;
        case ProgressionType.userInterface:
          if (
            !this.props.userIntferfaceProgressionNodes[blockingNode.name]
              .isEarned
          ) {
            return false;
          }
          continue;
        case ProgressionType.carrot:
          if (!this.props.carrotProgressionNodes[blockingNode.name].isEarned) {
            return false;
          }
          continue;
        case ProgressionType.potato:
          if (!this.props.potatoProgressionNodes[blockingNode.name].isEarned) {
            return false;
          }
          continue;
        case ProgressionType.beet:
          if (!this.props.beetProgressionNodes[blockingNode.name].isEarned) {
            return false;
          }
          continue;
        case ProgressionType.turnip:
          if (!this.props.turnipProgressionNodes[blockingNode.name].isEarned) {
            return false;
          }
          continue;
      }
    }
    return true;
  }
}

function mapStateToProps(state: RootState, ownProps: ReactProps): Props {
  const {
    gardenProgression,
    newButtonsProgression,
    userInterfaceProgression,
    carrotProgression,
    potatoProgression,
    beetProgression,
    turnipProgression,
  } = state.progression;

  return {
    ...ownProps,
    gardenProgressionNodes: gardenProgression,
    newButtonsProgressionNodes: newButtonsProgression,
    userIntferfaceProgressionNodes: userInterfaceProgression,
    carrotProgressionNodes: carrotProgression,
    potatoProgressionNodes: potatoProgression,
    beetProgressionNodes: beetProgression,
    turnipProgressionNodes: turnipProgression,
  };
}

export const ProgressionList = connect(mapStateToProps)(AProgressionList);
