import * as React from "react";
import { JSX } from "react";
import { RootState } from "../store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ProgressionNode, ProgressionType } from "../slices/helperStructs";
import { decrement } from "../slices/counterSlice";
import {
  addBeetProgression,
  addCarrotProgression,
  addGardenProgression,
  addNewButtonProgression,
  addPotatoProgression,
  addTurnipProgression,
  addUserInterfaceProgression,
} from "../slices/progressionSlice";
import { Kors } from "./Icons/Kors";

interface ReactProps {
  node: ProgressionNode;
}
interface InjectedProps {
  count: number;
  dispatch?: Dispatch;
}
type Props = ReactProps & InjectedProps;
interface State {}
class AProgressionNodeListing extends React.Component<Props, State> {
  render(): JSX.Element {
    const isEarned = this.props.node.isEarned ? "Earned" : "";
    const cost = this.props.node.isEarned ? "Earned" : this.props.node.cost;
    return (
      <div
        className={`ProgressionNodeListingInner ${isEarned}`}
        onClick={this.onClick.bind(this)}
      >
        <span className={`ProgressionNodeListingName ${isEarned}`}>
          {`${this.props.node.name}: ${cost}`}
          {!isEarned && <Kors />}
        </span>
        <span className={`ProgressionNodeListingDescription ${isEarned}`}>
          {this.props.node.description}
        </span>
      </div>
    );
  }

  private onClick() {
    if (!this.props.node.isEarned && this.props.count >= this.props.node.cost) {
      this.props.dispatch(decrement(this.props.node.cost));
      switch (this.props.node.progressionType) {
        case ProgressionType.garden:
          this.props.dispatch(addGardenProgression(this.props.node));
          return;
        case ProgressionType.newButtons:
          this.props.dispatch(addNewButtonProgression(this.props.node));
          return;
        case ProgressionType.userInterface:
          this.props.dispatch(addUserInterfaceProgression(this.props.node));
          return;
        case ProgressionType.carrot:
          this.props.dispatch(addCarrotProgression(this.props.node));
          return;
        case ProgressionType.potato:
          this.props.dispatch(addPotatoProgression(this.props.node));
          return;
        case ProgressionType.beet:
          this.props.dispatch(addBeetProgression(this.props.node));
          return;
        case ProgressionType.turnip:
          this.props.dispatch(addTurnipProgression(this.props.node));
          return;
        default:
          console.error(
            "unrecognized progression attempting to be added : ",
            this.props.node
          );
          return;
      }
    }
  }
}

function mapStateToProps(state: RootState, ownProps: ReactProps): Props {
  const { count } = state.counter;
  return {
    ...ownProps,
    count,
  };
}

export const ProgressionNodeListing = connect(mapStateToProps)(
  AProgressionNodeListing
);
