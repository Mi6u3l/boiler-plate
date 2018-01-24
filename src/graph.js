    import * as d3 from "d3";

    class Graph {
        // initialize graph class
        constructor(modelName, foregroundPercentage, total, backgroundColor, foregroundColor) {
            this.foregroundPercentage = foregroundPercentage;
            this.backgroundColor = backgroundColor;
            this.foregroundColor = foregroundColor;
            this.modelName = modelName;
            this.total = total;
        }

        init() {
            // graph initial data, inner and outer radius
            let τ = 2 * Math.PI,
                width = 210,
                height = 210,
                outerRadius = Math.min(width, height) / 2,
                innerRadius = 98;
            const arc = d3.arc()
                .innerRadius(innerRadius)
                .outerRadius(outerRadius)
                .startAngle(0);

            // component to be host graph wrapper
            const graph = d3.select('#graphsContainer').append('graph')
                .attr('id', `graph${this.modelName}`);

            // svg box to host component graph    
            const svg = graph.append('svg')
                .attr('class', 'graphs-container')
                .attr('viewBox', `0 0 ${Math.min(width, height)} ${Math.min(width, height)}`)
                .attr('preserveAspectRatio', 'xMinYMin')
                .append('g')
                .attr('transform', `translate(${Math.min(width, height) / 2},${Math.min(width, height) / 2})`);

            // text compnent for model name
            const title = svg.append('text')
                .text(this.modelName)
                .attr('class', 'graph-title')
                .attr('dx', 2)
                .attr('dy', -18);

            // text component for total value
            const total = svg.append('text')
                .text(this.total)
                .attr('class', 'graph-text')
                .attr('dx', 2)
                .attr('dy', 10);

            // backgound construction properties - tablet percentage
            const background = svg.append('path')
                .datum({
                    endAngle: τ,
                })
                .style('fill', this.backgroundColor)
                .attr('d', arc);

            // foreground construction properties - smartphone percentage
            const foreground = svg.append('path')
                .datum({
                    endAngle: 0 * τ,
                })
                .style('fill', this.foregroundColor)
                .attr('d', arc);

            // call create fill arc effect with transition
            foreground.transition()
                .duration(750)
                .call(arcTween, (this.foregroundPercentage / 100) * τ);

            // create fill arc effect
            function arcTween(transition, newAngle) {
                transition.attrTween('d', (d) => {
                    const interpolate = d3.interpolate(d.endAngle, newAngle);
                    return function (t) {
                        d.endAngle = interpolate(t);
                        return arc(d);
                    };
                });
            }
        }
    }

    module.exports = Graph;