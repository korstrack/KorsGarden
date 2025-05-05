import * as React from "react";
import { JSX } from "react";
import { RootState } from "../store";
import { connect } from "react-redux";
import { Clicker } from "./Clicker";
import { ProgressionNode, ProgressionType } from "../slices/helperStructs";
import { Dictionary } from "lodash";

interface ReactProps {}
interface InjectedProps {
  gardenMultiplier: number;
  carrotMultiplier: number;
  potatoMultiplier: number;
  newButtonsProgression: Dictionary<ProgressionNode>;
}
type Props = ReactProps & InjectedProps;
interface State {}
class AClickers extends React.Component<Props, State> {
  render(): JSX.Element {
    return (
      <div className={"ClickersContainer"}>
        {this.getCarrot()}
        {this.getPotato(this.props.newButtonsProgression["UnlockPotato"])}
        {this.getBeet(this.props.newButtonsProgression["UnlockBeet"])}
        {this.getTurnip(this.props.newButtonsProgression["UnlockTurnip"])}
      </div>
    );
  }

  private getCarrot(): JSX.Element {
    return <Clicker PlantType={ProgressionType.carrot} />;
  }

  private getPotato(progNode: ProgressionNode): JSX.Element {
    if (progNode.isEarned) {
      return <Clicker PlantType={ProgressionType.potato} />;
    }
    return null;
  }

  private getBeet(progNode: ProgressionNode): JSX.Element {
    if (progNode.isEarned) {
      return <Clicker PlantType={ProgressionType.beet} />;
    }
    return null;
  }

  private getTurnip(progNode: ProgressionNode): JSX.Element {
    if (progNode.isEarned) {
      return <Clicker PlantType={ProgressionType.turnip} />;
    }
    return null;
  }
}

function mapStateToProps(state: RootState, ownProps: ReactProps): Props {
  const {
    gardenMultiplier,
    carrotMultiplier,
    potatoMultiplier,
    newButtonsProgression,
  } = state.progression;

  return {
    ...ownProps,
    gardenMultiplier,
    carrotMultiplier,
    potatoMultiplier,
    newButtonsProgression,
  };
}

export const Clickers = connect(mapStateToProps)(AClickers);
