import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data }) => {
    const chartRef = useRef();

    useEffect(() => {
        const svg = d3.select(chartRef.current);
        svg.selectAll("*").remove();

        const width = 600;
        const height = 400;
        const radius = Math.min(width, height) / 2;

        svg.attr("width", width)
           .attr("height", height);

        const g = svg.append("g")
                     .attr("transform", `translate(${width / 2}, ${height / 2})`);

        const pie = d3.pie()
                      .value(d => d.womenCount);

        const path = d3.arc()
                       .outerRadius(radius - 10)
                       .innerRadius(0);

        const label = d3.arc()
                        .outerRadius(radius - 40)
                        .innerRadius(radius - 40);

        const arc = g.selectAll(".arc")
                     .data(pie(data))
                     .enter().append("g")
                     .attr("class", "arc");

        arc.append("path")
           .attr("d", path)
           .attr("fill", (d, i) => d3.schemeCategory10[i % 10]);

        const total = d3.sum(data, d => d.womenCount);

        arc.append("text")
           .attr("transform", d => `translate(${label.centroid(d)})`)
           .text(d => `${d.data.tenderId}: ${(d.data.womenCount / total * 100).toFixed(2)}%`)
           .style("font-size", "10px")
           .style("text-anchor", "middle");
    }, [data]);

    return <svg ref={chartRef}></svg>;
};

export default PieChart;

