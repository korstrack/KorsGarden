import * as React from "react";
import { JSX } from "react";
import { RootState } from "../store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ProgressionNode } from "../slices/helperStructs";
import { decrement } from "../slices/counterSlice";
import { addProgression } from "../slices/pointSlice";

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
    return (
      <div className={"ProgressionNodeListingOuter"}>
        <div
          className={"ProgressionNodeListingInner"}
          onClick={this.onClick.bind(this)}
        >
          <span className={"ProgressionNodeListingName"}>
            {`${this.props.node.name}: ${this.props.node.cost}`}
          </span>
          <span className={"ProgressionNodeListingDescription"}>
            {this.props.node.description}
          </span>
          <span className="Earned">{`isEarned: ${this.props.node.isEarned}`}</span>
        </div>
      </div>
    );
  }

  private onClick() {
    if (!this.props.node.isEarned && this.props.count >= this.props.node.cost) {
      this.props.dispatch(decrement(this.props.node.cost));
      this.props.dispatch(addProgression(this.props.node.name));
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
