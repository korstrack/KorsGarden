import * as React from "react";
import { JSX } from "react";
import { RootState } from "../store";
import { connect } from "react-redux";
import { Kors } from "./Icons/Kors";

interface ReactProps {}
interface InjectedProps {
  counter: number;
}
type Props = ReactProps & InjectedProps;
class ACounter extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <div className="CounterContainer">
        <span
          className={"Counter"}
        >{`Current Kors: ${this.props.counter}`}</span>
        <span
          className={"Counter KorShimmer"}
        >{`Current Kors: ${this.props.counter}`}</span>
        <Kors />
      </div>
    );
  }
}

function mapStateToProps(state: RootState, ownProps: ReactProps): Props {
  const counter = state.counter.count;

  return {
    ...ownProps,
    counter,
  };
}

export const Counter = connect(mapStateToProps)(ACounter);
