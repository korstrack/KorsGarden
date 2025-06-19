import * as React from "react";
import { JSX } from "react";
import { RootState } from "../store";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface ReactProps {
  click: Function;
}
interface InjectedProps {
  dispatch?: Dispatch;
}
type Props = ReactProps & InjectedProps;
interface State {}
class ASprinkler extends React.Component<Props, State> {
  render(): JSX.Element {
    return (
      <div className="SprinklerContainer">
        <div className="SprinklerTop"></div>
        <div className="SprinklerBottom"></div>
      </div>
    );
  }

  componentDidMount(): void {
    this.sprinkle();
  }

  private sprinkle(): void {
    setInterval(this.props.click.bind(this), 3000);
  }
}

function mapStateToProps(state: RootState, ownProps: ReactProps): Props {
  return {
    ...ownProps,
  };
}

export const Sprinkler = connect(mapStateToProps)(ASprinkler);
