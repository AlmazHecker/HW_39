import React from "react";
import './ChartBar.css';
// TODO: ЭТОТ КОМПОНЕНТ ИСПОЛЬЗУЕТСЯ НЕСКОЛЬКО РАЗ 

const ChartBar = props => {
    // TODO: пригодится для установления шкалы 
    let barFillHeight = '0%'
    // maxValue - макс. значение, которое мы получили в компоненте chart
    if(props.maxValue > 0) {
        // TODO: получаем процент (делим значения на макс значение и умножаем на 100)
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                                                        {/*TODO: устанавливаем высоту шкалы */}
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chart-bar__label">
                {props.label}
            </div>
        </div>
    )
}

export default ChartBar;