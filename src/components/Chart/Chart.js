import './Chart.css';
import ChartBar from './ChartBar';
const Chart = ({ dataPoints }) => {
  const tataPointsValue = dataPoints.map((dataPoints) => dataPoints.value);
  const totalMaximum = Math.max(...tataPointsValue);
  return (
    <div className="chart">
      {dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={totalMaximum}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
};
export default Chart;
