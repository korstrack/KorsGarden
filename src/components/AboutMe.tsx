import * as React from "react";
import { JSX } from "react";
import { RootState } from "../store";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { increment } from "../slices/counterSlice";
import { addGardenProgression } from "../slices/progressionSlice";
import { ProgressionNode } from "../slices/helperStructs";

interface ReactProps {}
interface InjectedProps {
  aboutMeNode: ProgressionNode;
  dispatch?: Dispatch;
}
type Props = ReactProps & InjectedProps;
interface State {}
class AAboutMe extends React.Component<Props, State> {
  render(): JSX.Element {
    return (
      <div className={"AboutMeContainer"}>
        <span className={"AboutMeHeader"}>{this.getIntroHeader()}</span>
        <span className={"AboutMeBody"}>{this.getIntro()}</span>
        <span className={"AboutMeHeader"}>{this.getWebsiteHeader()}</span>
        <span className={"AboutMeBody"}>
          {this.getWebsite()}
          {<a href="https://github.com/korstrack/KorsGarden">Repo</a>}
        </span>
        <span className={"AboutMeHeader"}>
          {`Linkdin: `}
          <a href="https://www.linkedin.com/in/ianschmidtis/">IanSchmidt</a>
        </span>
        <span className={"AboutMeHeader"}>
          {`Github: `}
          <a href="https://github.com/korstrack">Korstrack</a>
        </span>
        {this.getAboutMeBonus()}
      </div>
    );
  }

  private getIntroHeader(): string {
    return "Hello! I'm Ian Schmidt";
  }

  private getIntro(): string {
    return "I am a software engineer with a passion for user interface and games. I've been programming professionally for the past 5 years and built this website as a showcase of my skills. I also have adopted Korstrack as the name I frequent the internet with, and thus I welcome you to the garden I am building up.";
  }

  private getWebsiteHeader(): string {
    return "How This Website Is Built:";
  }

  private getWebsite(): string {
    return `Kor's Garden is built with the Typescript framework React - Redux. I chose this framework due to a combination of my familiarity with it as well as the ability to store specific state information in a central Redux Store. The Redux Store is split into slices, that I can then connect various individual React Components to. This means that I can limit the volatility of information passed around the UI, as well as only give individual components access to the actual information they need to work. Kor's Garden is built with Webpack, and transpiled with the Typescript loader. If you'd like to see more how I built out various components and took advantage of the centralized Redux Store, you can see all the code behind this website at: `;
  }

  private getAboutMeBonus(): JSX.Element {
    if (this.props.aboutMeNode.isEarned) {
      return;
    }
    return (
      <span className={"AboutMeBonus"} onClick={this.onClickBonus.bind(this)}>
        {"Thanks For Reading! (Click Me For Bonus Kors :D)"}
      </span>
    );
  }

  private onClickBonus(): void {
    this.props.dispatch(increment(100));
    this.props.dispatch(addGardenProgression(this.props.aboutMeNode));
  }
}

function mapStateToProps(state: RootState, ownProps: ReactProps): Props {
  const aboutMeNode = state.progression.gardenProgression["AboutMe"];
  return {
    ...ownProps,
    aboutMeNode,
  };
}

export const AboutMe = connect(mapStateToProps)(AAboutMe);
