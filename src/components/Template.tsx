import * as React from "react";
import { JSX } from "react";
import { RootState } from "../store";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface ReactProps {}
interface InjectedProps {
  counter: number;
  dispatch?: Dispatch;
}
type Props = ReactProps & InjectedProps;
interface State {}
class ATemplate extends React.Component<Props, State> {
  render(): JSX.Element {
    return <></>;
  }
}

function mapStateToProps(state: RootState, ownProps: ReactProps): Props {
  const counter = state.counter.count;

  return {
    ...ownProps,
    counter,
  };
}

export const Template = connect(mapStateToProps)(ATemplate);
