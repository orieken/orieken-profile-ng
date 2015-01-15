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

profileApp.controller("OscarDataController", function($scope) {
    $scope.oscarData = {
        firstName: 'Oscar',
        lastName: 'Rieken',
        email: 'oriekenjr@gmail.com',
        date: 'Thu Jan 23 2014 23:59:05',
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.",
        githubUrl: "https://github.com/orieken",
        twitterUrl: "https://twitter.com/OscarRieken",
        twitterUserName: "OscarRieken",
        experience: [
            {
                companyName: 'Ionic Security',
//                    dateStarted: '01.2012',
//                    dateEnded: 'Current',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
                technologies: [
                    {techName: 'Ruby', techIcon: 'ruby-logo', techUrl: ''},
                    {techName: 'Java', techIcon: 'sun-microsystem-java-logo', techUrl: ''},
                    {techName: 'jRuby', techIcon: 'jruby', techUrl: ''},
                    {techName: 'Watir-Webdriver', techIcon: 'watir-so', techUrl: ''},
                    {techName: 'Selenium-WebDriver', techIcon: 'Seleniumlogo', techUrl: ''},
                    {techName: 'Selenium-Grid', techIcon: 'selenium-grid', techUrl: ''},
                    {techName: 'Rails', techIcon: 'rails', techUrl: ''},
                    {techName: 'jQuery', techIcon: 'jquery-logo', techUrl: ''},
                    {techName: 'JavaScript', techIcon: 'nodejs', techUrl: ''},
                    {techName: 'Nodejs', techIcon: 'nodejs', techUrl: ''},
                    {techName: 'Angularjs', techIcon: 'angularjs-logo', techUrl: ''},
                    {techName: 'Grunt', techIcon: 'angularjs-logo', techUrl: ''},
                    {techName: 'Bower', techIcon: 'angularjs-logo', techUrl: ''},
                    {techName: 'Sass', techIcon: 'angularjs-logo', techUrl: ''},
                    {techName: 'Handlebars', techIcon: 'angularjs-logo', techUrl: ''},
                    {techName: 'Karmajs', techIcon: 'angularjs-logo', techUrl: ''},
                    {techName: 'Jasmine', techIcon: 'angularjs-logo', techUrl: ''},
                    {techName: 'Chai', techIcon: 'angularjs-logo', techUrl: ''},
                    {techName: 'Meteorjs', techIcon: 'logo-meteor', techUrl: ''},
                    {techName: 'Puppet', techIcon: 'PL_logo_vertical_RGB_sm', techUrl: ''},
                    {techName: 'Packer', techIcon: 'PL_logo_vertical_RGB_sm', techUrl: ''},
                    {techName: 'Vagrant', techIcon: 'PL_logo_vertical_RGB_sm', techUrl: ''},
                    {techName: 'Ansible', techIcon: 'PL_logo_vertical_RGB_sm', techUrl: ''},
                    {techName: 'GoLang', techIcon: 'PL_logo_vertical_RGB_sm', techUrl: ''}
                ]
            },
            {
                companyName: 'Manheim',
//                    dateStarted: '01.2012',
//                    dateEnded: 'Current',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
                technologies: [
                    {techName: 'Ruby', techIcon: 'ruby-logo', techUrl: ''},
                    {techName: 'Java', techIcon: 'sun-microsystem-java-logo', techUrl: ''},
                    {techName: 'jRuby', techIcon: 'jruby', techUrl: ''},
                    {techName: 'Watir-Webdriver', techIcon: 'watir-so', techUrl: ''},
                    {techName: 'Selenium-WebDriver', techIcon: 'Seleniumlogo', techUrl: ''},
                    {techName: 'Selenium-Grid', techIcon: 'selenium-grid', techUrl: ''},
                    {techName: 'Rails', techIcon: 'rails', techUrl: ''},
                    {techName: 'jQuery', techIcon: 'jquery-logo', techUrl: ''},
                    {techName: 'Nodejs', techIcon: 'nodejs', techUrl: ''},
                    {techName: 'Angularjs', techIcon: 'angularjs-logo', techUrl: ''},
                    {techName: 'Meteorjs', techIcon: 'logo-meteor', techUrl: ''},
                    {techName: 'Puppet', techIcon: 'PL_logo_vertical_RGB_sm', techUrl: ''}
                ]
            },
            {
                companyName: 'ThoughtWorks',
//                    dateStarted: '07.2012',
//                    dateEnded: '12.2011',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
                technologies: [
                    {techName: 'Ruby', techIcon: 'ruby-logo', techUrl: ''},
                    {techName: 'Java', techIcon: 'sun-microsystem-java-logo', techUrl: ''},
                    {techName: 'jRuby', techIcon: 'jruby', techUrl: ''},
                    {techName: 'Watir-Webdriver', techIcon: 'watir-so', techUrl: ''},
                    {techName: 'Selenium-WebDriver', techIcon: 'Seleniumlogo', techUrl: ''},
                    {techName: 'Selenium-Grid', techIcon: 'selenium-grid', techUrl: ''},
                    {techName: 'Rails', techIcon: 'rails', techUrl: ''},
                    {techName: 'CSharp.Net', techIcon: 'csharp-logo', techUrl: ''},
                    {techName: 'jQuery', techIcon: 'jquery-logo', techUrl: ''}
                ]
            },
            {
                companyName: 'S3',
//                    dateStarted: '07.2012',
//                    dateEnded: '12.2011',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
                technologies: [
                    {techName: 'CSharp.Net', techIcon: 'csharp-logo', techUrl: ''},
                    {techName: 'VB.Net', techIcon: 'vb-net-logo', techUrl: ''},
                    {techName: 'QTP', techIcon: 'qtp-logo', techUrl: ''}
                ]
            },
            {
                companyName: 'VGT',
//                    dateStarted: '07.2012',
//                    dateEnded: '12.2011',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
                technologies: [
                    {techName: 'CSharp.Net', techIcon: 'csharp-logo', techUrl: ''},
                    {techName: 'Selenium-WebDriver', techIcon: 'Seleniumlogo', techUrl: ''},
                    {techName: 'QTP', techIcon: 'qtp-logo', techUrl: ''}
                ]
            },
            {
                companyName: 'OCA',
//                    dateStarted: '07.2012',
//                    dateEnded: '12.2011',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac fringilla metus.',
                technologies: [
                    {techName: 'CSharp.Net', techIcon: 'csharp-logo', techUrl: ''},
                    {techName: 'VB.Net', techIcon: 'vb-net-logo', techUrl: ''},
                    {techName: 'Visual Basic', techIcon: 'vb6-logo', techUrl: ''},
                    {techName: 'Rational Robot', techIcon: 'rational-robot-logo', techUrl: ''}
                ]
            }
        ]
    }
});


