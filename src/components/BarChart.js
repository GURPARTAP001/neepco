import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
    const chartRef = useRef();

    useEffect(() => {
        const svg = d3.select(chartRef.current);
        svg.selectAll("*").remove();

        const margin = { top: 20, right: 20, bottom: 70, left: 50 };
        const width = 600 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        const x = d3.scaleBand()
            .range([0, width])
            .padding(0.1)
            .domain(data.map(d => d.year));

        const y = d3.scaleLinear()
            .range([height, 0])
            .domain([0, d3.max(data, d => d.value)]);

        const g = svg.append("g")
                     .attr("transform", `translate(${margin.left},${margin.top})`);

        // X Axis
        g.append("g")
         .attr("transform", `translate(0,${height})`)
         .call(d3.axisBottom(x))
         .append("text")
         .attr("y", margin.bottom - 20)
         .attr("x", width / 2)
         .attr("text-anchor", "end")
         .attr("stroke", "black")
         .text("Year");

        // Y Axis
        g.append("g")
         .call(d3.axisLeft(y))
         .append("text")
         .attr("transform", "rotate(-90)")
         .attr("y", 20 - margin.left)
         .attr("x", 0 - (height / 2))
         .attr("text-anchor", "end")
         .attr("stroke", "black")
         .text("Amount");

        // Bars
        g.selectAll(".bar")
          .data(data)
          .enter().append("rect")
          .attr("class", "bar")
          .attr("x", d => x(d.year))
          .attr("width", x.bandwidth())
          .attr("y", d => y(d.value))
          .attr("height", d => height - y(d.value))
          .attr("fill", "#4e79a7");
    }, [data]);

    return <svg ref={chartRef} width={600} height={400}></svg>;
};

export default BarChart;

