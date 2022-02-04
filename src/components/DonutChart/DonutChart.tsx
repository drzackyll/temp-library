import React, {ReactElement, useRef, useEffect} from 'react';
import * as d3 from 'd3';

export interface DonutChartProps {
  percentages: number[],
  colors: string[],
  dark?: boolean,
  index?: number
} 

const DonutChart = (props: DonutChartProps): ReactElement => {
  const { percentages, colors, index = 0, dark = false } = props;
  const d3Container = useRef(null);

  // if percentages do not sum to at least 100, handle the remainder
  const percentagesSum = percentages.reduce((acc, elem) => acc + elem);
  if (percentagesSum < 100) {
    percentages.push(100 - percentagesSum);
    dark ? colors.push('#332D3C') : colors.push('#F2F2F2')
  }

  const width = 20,
        height = 20
  
  // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
  const radius = Math.min(width, height) / 2

  // remove old visualizations on rerender
  // d3.selectAll('.viz').remove()

  useEffect(() => {
    // remove old visualizations on rerender
    d3.selectAll(`#donut-${index} > svg`).remove()
    // append the svg object to the div called 'donut'
    const svg = d3.select(`#donut-${index}`)
                  .append('svg')
                  .attr('width', width)
                  .attr('height', height)
                  .attr('style', 'padding-right: 8px')
                  .append('g')
                  .attr('transform', `translate(${width / 2},${height / 2})`);
    
    // set the color scale
    const color = d3.scaleOrdinal<number, string>()
                    .range([...colors])

    // Compute the position of each group on the pie:
    const pie = d3.pie<any>()
                  .value(d => d)
                  .sort(null)

    const arc = d3.arc<any>()
                  .innerRadius(6)         // This is the size of the donut hole
                  .outerRadius(radius)

    // Build the pie chart
    svg
      .selectAll('path')
      .data(pie(percentages))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i): string => color(i))
  }, [percentages, colors, index, radius])

  return <div ref={d3Container} id={`donut-${index}`} style={{height: '20px'}} />
}

export default DonutChart;