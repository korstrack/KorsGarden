import * as React from "react";
import { JSX } from "react";
import { RootState } from "../store";
import { connect } from "react-redux";

interface ReactProps {}
interface InjectedProps {
  counter: number;
}
type Props = ReactProps & InjectedProps;
class ACounter extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <span className={"Counter"}>{`Current Kors: ${this.props.counter}`}</span>
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
