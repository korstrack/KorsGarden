import * as React from "react";
import { JSX } from "react";
import { connect } from "react-redux";
import { RootState } from "../store";
import { Dispatch } from "redux";
import { clearCount } from "../slices/counterSlice";
import { Dictionary } from "lodash";
import { ProgressionNode, ProgressionType } from "../slices/helperStructs";
import { Clicker } from "./Clicker";

interface ReactProps {}
interface InjectedProps {
  gardenMultiplier: number;
  carrotMultiplier: number;
  potatoMultiplier: number;
  newButtonsProgression: Dictionary<ProgressionNode>;
  dispatch?: Dispatch;
}
type Props = ReactProps & InjectedProps;
class AClickers extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <>
        <div className={"ClickerHeaderContainer"}>
          <span className={"ClickerHeader"}>{`Your Plots`}</span>
          <span className={"ClickerHeader KorShimmer"}>{`Your Plots`}</span>
        </div>
        <Clicker PlantType={ProgressionType.carrot} />
        {this.getPotato(this.props.newButtonsProgression["UnlockPotato"])}
        {this.getBeet(this.props.newButtonsProgression["UnlockBeet"])}
        {this.getTurnip(this.props.newButtonsProgression["UnlockTurnip"])}
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

  private clearCount() {
    this.props.dispatch(clearCount());
  }

  private clearLocalStorage() {
    localStorage.clear();
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
