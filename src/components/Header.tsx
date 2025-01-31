import * as React from "react";
import { JSX } from "react";
import { connect } from "react-redux";
import { RootState } from "../store";
import { Dispatch } from "redux";
import { clearCount, increment } from "../slices/counterSlice";

interface ReactProps {}
interface InjectedProps {
  counter: number;
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
        >{`Click me to make this go up: ${this.props.counter}`}</div>
        <div
          className="Bloop"
          onClick={this.clearCount.bind(this)}
        >{`Clear Count`}</div>
      </>
    );
  }

  private numberGoUp() {
    this.props.dispatch(increment());
  }

  private clearCount() {
    this.props.dispatch(clearCount());
  }
}

function mapStateToProps(state: RootState, ownProps: ReactProps): Props {
  const counter = state.counter.count;

  return {
    ...ownProps,
    counter,
  };
}

export const Bloop = connect(mapStateToProps)(ABloop);
