import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";
// TODO: dataPoints - отфильтрованный массив с данными(месяцами и значениями).
const Chart = props => {
    // TODO: dataPointValues = значения dataPoints
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // TODO: получаем максимальное значение
    const totalMax = Math.max(...dataPointValues)

    return (
        <div className="chart">
            {
                props.dataPoints.map(dataPoint => {
                    return(
                        <ChartBar
                            key={dataPoint.label}
                            value={dataPoint.value}
                            maxValue={totalMax}
                            label={dataPoint.label}
                        />
                    ) 
                })
            }
        </div>
    )
}

export default Chart;