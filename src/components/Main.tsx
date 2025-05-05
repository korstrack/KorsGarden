import * as React from "react";
import { JSX } from "react";
import { connect } from "react-redux";
import { RootState } from "../store";
import { Dispatch } from "redux";
import { clearCount } from "../slices/counterSlice";
import { Clickers } from "./Clickers";
import { ProgressionList } from "./ProgressionList";
import { AboutMe } from "./AboutMe";

interface ReactProps {}
interface InjectedProps {
  dispatch?: Dispatch;
}
type Props = ReactProps & InjectedProps;
interface State {
  plotsSelected: boolean;
  upgradesSelected: boolean;
  aboutMeSelected: boolean;
}
class AMain extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      plotsSelected: true,
      upgradesSelected: false,
      aboutMeSelected: false,
    };
  }
  render(): JSX.Element {
    return (
      <div className={"Main"}>
        <div className={"MainHeaderContainer"}>
          {this.getPlots()}
          {this.getPlotUpgrades()}
          {this.getAboutMe()}
        </div>
        {this.state.plotsSelected && <Clickers />}
        {this.state.upgradesSelected && <ProgressionList />}
        {this.state.aboutMeSelected && <AboutMe />}
        <div className={"BoundryLine"} />
        <div
          className="DevButton"
          onClick={this.clearCount.bind(this)}
        >{`Clear Count`}</div>
        <div
          className={"DevButton"}
          onClick={this.clearLocalStorage.bind(this)}
        >{`LS Clear - Resets Progress`}</div>
      </div>
    );
  }

  private getPlots(): JSX.Element {
    const selected = this.state.plotsSelected ? "Selected" : "";
    return (
      <div
        className={`MainHeaderButton ${selected}`}
        onClick={this.onPlotsClick.bind(this)}
      >
        <span className={"ClickerHeader"}>{`Your Plots`}</span>
        <span className={"ClickerHeader KorShimmer"}>{`Your Plots`}</span>
      </div>
    );
  }

  private onPlotsClick(): void {
    this.setState({
      plotsSelected: true,
      upgradesSelected: false,
      aboutMeSelected: false,
    });
  }

  private getPlotUpgrades(): JSX.Element {
    const selected = this.state.upgradesSelected ? "Selected" : "";
    return (
      <div
        className={`MainHeaderButton ${selected}`}
        onClick={this.onUpgradesClick.bind(this)}
      >
        <span className={"ClickerHeader"}>{`Plot Upgrades`}</span>
        <span className={"ClickerHeader KorShimmer"}>{`Plot Upgrades`}</span>
      </div>
    );
  }

  private onUpgradesClick(): void {
    this.setState({
      plotsSelected: false,
      upgradesSelected: true,
      aboutMeSelected: false,
    });
  }

  private getAboutMe(): JSX.Element {
    const selected = this.state.aboutMeSelected ? "Selected" : "";
    return (
      <div
        className={`MainHeaderButton ${selected}`}
        onClick={this.onAboutMeClick.bind(this)}
      >
        <span className={"ClickerHeader"}>{`About Me`}</span>
        <span className={"ClickerHeader KorShimmer"}>{`About Me`}</span>
      </div>
    );
  }

  private onAboutMeClick(): void {
    this.setState({
      plotsSelected: false,
      upgradesSelected: false,
      aboutMeSelected: true,
    });
  }

  private clearCount() {
    this.props.dispatch(clearCount());
  }

  private clearLocalStorage() {
    localStorage.clear();
    location.reload();
  }
}

function mapStateToProps(state: RootState, ownProps: ReactProps): Props {
  return {
    ...ownProps,
  };
}

export const Main = connect(mapStateToProps)(AMain);
