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
        <div
          className={`ProgressionHeaderContainer ${PotatoIsSelected}`}
          key={"potato"}
        >
          {this.isPlantUnlocked(ProgressionType.potato) && (
            <span
              className={`ProgressionHeader ${PotatoIsSelected} KorShimmer`}
              onClick={this.onHeaderClick.bind(this, ProgressionType.potato)}
            >{`Potato`}</span>
          )}
          {this.isPlantUnlocked(ProgressionType.potato) && (
            <span
              className={`ProgressionHeader ${PotatoIsSelected}`}
              onClick={this.onHeaderClick.bind(this, ProgressionType.potato)}
            >{`Potato`}</span>
          )}
        </div>
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
