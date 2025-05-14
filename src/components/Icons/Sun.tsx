import * as React from "react";
import { JSX } from "react";
import { RootState } from "../../store";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface ReactProps {}
interface InjectedProps {
  dispatch?: Dispatch;
}
type Props = ReactProps & InjectedProps;
interface State {}
class ASun extends React.Component<Props, State> {
  render(): JSX.Element {
    return (
      <svg
        height="5vw"
        width="5vw"
        xmlns="http://www.w3.org/2000/svg"
        className={"Sun"}
      >
        <ellipse rx="5vw" ry="5vw" cx="5vw" cy="0" fill="yellow" />
      </svg>
    );
  }
}

function mapStateToProps(state: RootState, ownProps: ReactProps): Props {
  return {
    ...ownProps,
  };
}

export const Sun = connect(mapStateToProps)(ASun);
