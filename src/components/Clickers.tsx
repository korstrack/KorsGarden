import * as React from "react";
import { JSX } from "react";
import { connect } from "react-redux";
import { RootState } from "../store";
import { Dispatch } from "redux";
import { clearCount, increment } from "../slices/counterSlice";
import { Dictionary } from "lodash";
import { ProgressionNode } from "../slices/helperStructs";

interface ReactProps {}
interface InjectedProps {
  counter: number;
  pointMultiplier: number;
  pointProgression: Dictionary<ProgressionNode>;
  dispatch?: Dispatch;
}
type Props = ReactProps & InjectedProps;
class AClickers extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <>
        <div className={"ClickerHeaderContainer"}>
          <span className={"ClickerHeader"}>{`Buttons :D`}</span>
        </div>
        <div
          className={"Clicker"}
          onClick={this.numberGoUp.bind(this)}
        >{`Click me to make this go up : ${this.props.counter} it will go up this much! : ${1 * this.props.pointMultiplier}`}</div>
        {this.getButton(this.props.pointProgression["2ndButton"])}
        <div
          className="Clicker"
          onClick={this.clearCount.bind(this)}
        >{`Clear Count`}</div>
        <div
          className={"Clicker"}
          onClick={this.clearLocalStorage.bind(this)}
        >{`Local Storage Full Clear`}</div>
      </>
    );
  }

  private numberGoUp() {
    this.props.dispatch(increment(this.props.pointMultiplier));
  }

  private multiplyUp(scaler: number) {
    this.props.dispatch(increment(this.props.pointMultiplier * scaler));
  }

  private clearCount() {
    this.props.dispatch(clearCount());
  }

  private clearLocalStorage() {
    localStorage.clear();
  }

  private getButton(progNode: ProgressionNode): JSX.Element {
    if (progNode.isEarned) {
      return (
        <div
          className={"Clicker"}
          onClick={this.multiplyUp.bind(this, 2)}
        >{`${progNode.name} will increase by : ${1 * this.props.pointMultiplier * 2}`}</div>
      );
    }
    return null;
  }
}

function mapStateToProps(state: RootState, ownProps: ReactProps): Props {
  const counter = state.counter.count;
  const pointMultiplier = state.point.multiplier;
  const pointProgression = state.point.pointProgression;

  return {
    ...ownProps,
    counter,
    pointMultiplier,
    pointProgression,
  };
}

export const Clickers = connect(mapStateToProps)(AClickers);
