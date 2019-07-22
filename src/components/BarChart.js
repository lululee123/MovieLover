import React, { createRef, Component } from "react";
import * as d3 from "d3";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
  }
  componentDidMount() {
    const svg = d3.select(this.ref.current);
    const margin = 1;
    const width = (parseInt(d3.select("#container").style("width"), 10) * 0.9) - margin * 2;
    const height = (parseInt(d3.select("#container").style("height"), 10) * 0.7) - margin * 2;
    const max = maxNum(this.props.data);
    function maxNum(data){
      let num = 0;
      for (let i = 0; i < data.length; i++){
        if (data[i].value > num){
          num = data[i].value
        }
      }
      return num;
    }
    const chart = svg.append('g')
      .attr('transform', `translate(30, 30)`);

    const xScale = d3.scaleBand()
      .range([0, width])
      .domain(this.props.data.map((s) => s.date))
      .padding(0.4)

    const yScale = d3.scaleLinear()
      .range([height, 0])
      .domain([0, max]);

    // const makeYLines = () => d3.axisLeft()
    //   .scale(yScale)

    chart.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    chart.append('g')
      .call(d3.axisLeft(yScale));

    // chart.append('g')
    //   .attr('class', 'grid')
    //   .call(makeYLines()
    //     .tickSize(-width, 0, 0)
    //     .tickFormat('')
    //   )

    const barGroups = chart.selectAll()
      .data(this.props.data)
      .enter()
      .append('g')

    barGroups
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (g) => xScale(g.date))
      .attr('y', (g) => yScale(g.value))
      .attr('height', (g) => height - yScale(g.value))
      .attr('width', width / 20)
      .on('click', function (actual) {
        chart.selectAll('#limit').remove()
        const y = yScale(actual.value)
        chart.append('line')
          .attr('id', 'limit')
          .attr('x1', 0)
          .attr('y1', y)
          .attr('x2', width)
          .attr('y2', y)
      })
      

    barGroups 
      .append('text')
      .attr('class', 'value')
      .attr('x', (a) => xScale(a.date) + xScale.bandwidth() / 2)
      .attr('y', (a) => yScale(a.value) + 30)
      .attr('text-anchor', 'middle')

    // svg
    //   .append('text')
    //   .attr('class', 'label')
    //   .attr('x', -(height / 2) - margin)
    //   .attr('y', margin / 2.4)
    //   .attr('transform', 'rotate(-90)')
    //   .attr('text-anchor', 'middle')
    //   .text('Movies')

    // svg.append('text')
    //   .attr('class', 'label')
    //   .attr('x', width / 2 + margin)
    //   .attr('y', height * 1.2)
    //   .attr('text-anchor', 'middle')
    //   .text('Month')
  }

  render() {
    return <svg ref={this.ref} />;
  }
}

export default BarChart;
