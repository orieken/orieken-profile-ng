'use strict';

var profileApp = angular.module('profileApp', ["highcharts-ng"]);

var Skills = [
    {axis: "Ruby", value: 4},
    {axis: "Rails", value: 3},
    {axis: "Python", value: 3},
    {axis: "Java", value: 3},
    {axis: "JavaScript", value: 3},
    {axis: "C#", value: 4},
    {axis: "VB.net", value: 4},
    {axis: "Haskell", value: 1},
    {axis: "Clojure", value: 2},
    {axis: "Scala", value: 2},
    {axis: "Selenium-WebDriver", value: 5},
    {axis: "Watir-WebDriver", value: 5},
    {axis: "Erlang", value: 2},
    {axis: "Io", value: 1},
    {axis: "Prolog", value: 1},
    {axis: "Cucumber-JVM", value: 4},
    {axis: "Puppet", value: 3},
    {axis: "Cucumber", value: 5},
    {axis: "Linux", value: 4},
    {axis: "Windows", value: 5},
    {axis: "OsX", value: 5},
    {axis: "Git", value: 4},
    {axis: "SVN", value: 3},
    {axis: "Nodejs", value: 3},
    {axis: "Meteorjs", value: 3},
    {axis: "Knockoutjs", value: 3},
    {axis: "Angularjs", value: 3},
    {axis: "HTML5", value: 5},
    {axis: "CSS3", value: 5},
    {axis: "XML", value: 4},
    {axis: "YAML", value: 4},
    {axis: "DB2", value: 3},
    {axis: "MSSQL", value: 3},
    {axis: "MongoDB", value: 3},
    {axis: "CouchDB", value: 3},
    {axis: "Json", value: 4},
    {axis: "Vagrant", value: 4},
    {axis: "Packer", value: 4},
    {axis: "Ansible", value: 4},
    {axis: "MySQL", value: 3}
];

var categories = Skills.map(function (i) {
    return i.axis;
});

var sdata = Skills.map(function (i) {
    return i.value;
});

var totalSkills = categories.length;

var chartColors = ['#A7DBDB','#69D2E7','#00B7FF'];

profileApp.controller("ChartDataController", function ($scope) {

    $scope.chartConfig = {
        options: {
            chart: {
                polar: true,
                type: 'line',
                backgroundColor: '#E0E4CC',
                borderColor: '#F38630',
                borderWidth: 1,
                borderRadius: 20
            },
            legend: {
                align: 'right',
                verticalAlign: 'top',
                y: 70,
                layout: 'vertical'
            }
        },
        title: {
            text: 'Current Skills Radar'
        },
        xAxis: {
            categories: categories,
            tickmarkPlacement: 'on',
            tickInterval: 1,
            lineWidth: 0,
            labels: {
                style: {
                    fontSize: '10px'
                }
            }
        },
        yAxis: {
            allowDecimals: false,
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 5,
            lineColor: '#FA6900',
            plotlines: [{
                color: '#FA6900'
            }]
        },
        series: [{
            name: 'Level of Skill',
            data: sdata,
            pointPlacement: 'on',
            color: '#FA6900',
            marker: {
                fillColor: '#FA6900'
            }
        }]
    }
});
