import * as React from "react";
import { JSX } from "react";
import { RootState } from "../store";
import { connect } from "react-redux";

interface ReactProps {}
interface InjectedProps {
  count: number;
  totalSold: number;
  totalCarrotsSold: number;
  totalPotatoSold: number;
  totalBeetsSold: number;
  totalTurnipsSold: number;
  totalKorsEarned: number;
  gardenMultiplier: number;
  carrotMultiplier: number;
  potatoMultiplier: number;
  beetMultiplier: number;
  turnipMultiplier: number;
}
type Props = ReactProps & InjectedProps;
interface State {}
class APlotStats extends React.Component<Props, State> {
  render(): JSX.Element {
    return (
      <div className="PlotStatsContainer">
        <span className="PlotStatsHeader">
          {"Here are the statistics for your plots!"}
        </span>
        <span className="PlotStatsValue">{`Current Kors: ${this.props.count}`}</span>
        <span className="PlotStatsValue">{`Total Kors Earned: ${this.props.totalKorsEarned}`}</span>
        <span className="PlotStatsValue">{`Total Plants Sold: ${this.props.totalSold}`}</span>
        <span className="PlotStatsValue">{`Carrots Sold: ${this.props.totalCarrotsSold}`}</span>
        <span className="PlotStatsValue">{`Potatos Sold: ${this.props.totalPotatoSold}`}</span>
        <span className="PlotStatsValue">{`Beets Sold: ${this.props.totalBeetsSold}`}</span>
        <span className="PlotStatsValue">{`Turnips Sold: ${this.props.totalTurnipsSold}`}</span>
        <span className="PlotStatsHeader">
          {
            "Here are your multipliers, a plant sells for your (Garden Multiplier x Plant Multiplier):"
          }
        </span>
        <span className="PlotStatsValue">{`Garden Multiplier: ${this.props.gardenMultiplier}`}</span>
        <span className="PlotStatsValue">{`Carrot Multiplier: ${this.props.carrotMultiplier}`}</span>
        <span className="PlotStatsValue">{`Potato Multiplier: ${this.props.potatoMultiplier}`}</span>
        <span className="PlotStatsValue">{`Beet Multiplier: ${this.props.beetMultiplier}`}</span>
        <span className="PlotStatsValue">{`Turnip Multiplier: ${this.props.turnipMultiplier}`}</span>
      </div>
    );
  }
}

function mapStateToProps(state: RootState, ownProps: ReactProps): Props {
  const {
    count,
    totalSold,
    totalCarrotsSold,
    totalPotatoSold,
    totalBeetsSold,
    totalTurnipsSold,
    totalKorsEarned,
  } = state.counter;
  const {
    gardenMultiplier,
    carrotMultiplier,
    potatoMultiplier,
    beetMultiplier,
    turnipMultiplier,
  } = state.progression;

  return {
    ...ownProps,
    count,
    totalSold,
    totalCarrotsSold,
    totalPotatoSold,
    totalBeetsSold,
    totalTurnipsSold,
    totalKorsEarned,
    gardenMultiplier,
    carrotMultiplier,
    potatoMultiplier,
    beetMultiplier,
    turnipMultiplier,
  };
}

export const PlotStats = connect(mapStateToProps)(APlotStats);
