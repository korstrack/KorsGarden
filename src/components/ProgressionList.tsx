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
  selectedProgression: ProgressionType;
  pointProgressionNodes: Dictionary<ProgressionNode>;
  dispatch?: Dispatch;
}
type Props = ReactProps & InjectedProps;
interface State {}
class AProgressionList extends React.Component<Props, State> {
  render(): JSX.Element {
    return (
      <div className={"ProgressionContainer"}>
        <div className={"ProgressionHeaderContainer"}>
          <span className={"ProgressionHeader"}>{`Point`}</span>
        </div>
        <div className="ProgressionList">{this.makeList()}</div>
      </div>
    );
  }

  private makeList(): JSX.Element[] {
    switch (this.props.selectedProgression) {
      case ProgressionType.point:
        const progList: JSX.Element[] = [];
        for (let key in this.props.pointProgressionNodes) {
          const node = this.props.pointProgressionNodes[key];
          progList.push(<ProgressionNodeListing node={node} key={node.name} />);
        }
      default:
        return progList;
    }
  }
}

function mapStateToProps(state: RootState, ownProps: ReactProps): Props {
  const { selectedProgression } = state.counter;
  const pointProgressionNodes = state.point.pointProgression;

  return {
    ...ownProps,
    selectedProgression,
    pointProgressionNodes,
  };
}

export const ProgressionList = connect(mapStateToProps)(AProgressionList);
