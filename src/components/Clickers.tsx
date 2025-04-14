import * as React from "react";
import { JSX } from "react";
import { connect } from "react-redux";
import { RootState } from "../store";
import { Dispatch } from "redux";
import { clearCount, increment } from "../slices/counterSlice";
import { Dictionary } from "lodash";
import { ProgressionNode } from "../slices/helperStructs";

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
          <span className={"ClickerHeader"}>{`Buttons :D`}</span>
        </div>
        <div
          className={"Clicker"}
          onClick={this.numberGoUp.bind(this)}
        >{`Carrot: +${1 * this.props.gardenMultiplier * this.props.carrotMultiplier} Kors`}</div>
        {this.getButton(this.props.newButtonsProgression["UnlockPotato"])}
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

  private numberGoUp() {
    this.props.dispatch(
      increment(this.props.gardenMultiplier * this.props.carrotMultiplier)
    );
  }

  private multiplyUp() {
    this.props.dispatch(
      increment(this.props.gardenMultiplier * this.props.potatoMultiplier)
    );
  }

  private clearCount() {
    this.props.dispatch(clearCount());
  }

  private clearLocalStorage() {
    localStorage.clear();
  }

  private getButton(progNode: ProgressionNode): JSX.Element {
    if (progNode.isEarned) {
      return (
        <div
          className={"Clicker"}
          onClick={this.multiplyUp.bind(this)}
        >{`Potato: +${1 * this.props.gardenMultiplier * this.props.potatoMultiplier} Kors`}</div>
      );
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
