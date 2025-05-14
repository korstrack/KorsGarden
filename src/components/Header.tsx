import * as React from "react";
import { JSX } from "react";
import { RootState } from "../store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Title } from "./Title";
import { Counter } from "./Counter";
import { Dictionary } from "lodash";
import { ProgressionNode } from "../slices/helperStructs";
import { Sun } from "./Icons/Sun";

interface ReactProps {}
interface InjectedProps {
  gardenProgression: Dictionary<ProgressionNode>;
  dispatch?: Dispatch;
}
type Props = ReactProps & InjectedProps;
interface State {}
class AHeader extends React.Component<Props, State> {
  render(): JSX.Element {
    const skybox = this.props.gardenProgression["Skybox!"].isEarned
      ? "Skybox"
      : "";
    return (
      <div className={`Header ${skybox}`}>
        <Title />
        <Counter />
        {this.getSun()}
      </div>
    );
  }

  private getSun(): JSX.Element {
    if (this.props.gardenProgression["LET THERE BE LIGHT"].isEarned) {
      return <Sun />;
    } else return;
  }
}

function mapStateToProps(state: RootState, ownProps: ReactProps): Props {
  const { gardenProgression } = state.progression;
  return {
    ...ownProps,
    gardenProgression,
  };
}

export const Header = connect(mapStateToProps)(AHeader);
