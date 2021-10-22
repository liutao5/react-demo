import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default () => {
  const lineEl = useRef(null);
  useEffect(() => {
    const myChart = echarts.init(lineEl.current, null, {
      width: 600,
      height: 400,
    });
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例',
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  }, [lineEl]);

  return (
    <div ref={lineEl} />
  );
};
