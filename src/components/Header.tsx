import * as React from "react";
import { JSX } from "react";
import { connect } from "react-redux";
import { RootState } from "../store";
import { Dispatch } from "redux";
import { clearCount, increment } from "../slices/counterSlice";

interface ReactProps {}
interface InjectedProps {
  counter: number;
  pointMultiplier: number;
  dispatch?: Dispatch;
}
type Props = ReactProps & InjectedProps;
class ABloop extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <>
        <div
          className={"Bloop"}
          onClick={this.numberGoUp.bind(this)}
        >{`Click me to make this go up : ${this.props.counter} it will go up this much! : ${1 * this.props.pointMultiplier}`}</div>
        <div
          className="Bloop"
          onClick={this.clearCount.bind(this)}
        >{`Clear Count`}</div>
        <div
          className={"Bloop"}
          onClick={this.clearLocalStorage.bind(this)}
        >{`Local Storage Full Clear`}</div>
      </>
    );
  }

  private numberGoUp() {
    this.props.dispatch(increment(this.props.pointMultiplier));
  }

  private clearCount() {
    this.props.dispatch(clearCount());
  }

  private clearLocalStorage() {
    localStorage.clear();
  }
}

function mapStateToProps(state: RootState, ownProps: ReactProps): Props {
  const counter = state.counter.count;
  const pointMultiplier = state.point.multiplier;

  return {
    ...ownProps,
    counter,
    pointMultiplier,
  };
}

export const Bloop = connect(mapStateToProps)(ABloop);
