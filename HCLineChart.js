// console.log("Hello World from simple_highcharts.js!");


//BORROWED FROM THE EXAMPLE TA'S GAVE ON SLACK

// Data of the line chart
var series = [
    {
       name: 'Fulltime Women Applied',
       data: [
        22371,
        23748,
        24507,
        25775,
        25321,
        25761,
        28351,
        32049,
        35408,
        38822,
        41047,
        44430,
        46845,
        52265
       ]
    }, 
    {
       name: 'Fulltime Women Admitted',
       data: [
        10311,
        12135,
        10759,
        11200,
        9863,
        9991,
        10269,
        12046,
        12966,
        12837,
        13761,
        16170,
        16231,
        15821
       ]
    }, 
    {
       name: 'Fulltime Women Enrolled',
       data: [

        
        2113,
        2558,
        2303,
        2399,
        2054,
        2089,
        1861,
        2245,
        2612,
        2383,
        2581,
        3077,
        2974,
        3484
       ]}
 ];

 // Configuration about the plot
 var title = {
    text: 'Fulltime Women Applications, Admittances, and Enrollments at UCSD Over 2005 - 2018'   
 };
 var subtitle = {
    text: 'Source: https://gist.github.com/dingmei/d1ab5dd8ff9597d71b3fba3dc26347fe'
 };
 var xAxis = {
    categories: ['2005 ', '2006', '2007', '2008', '2009', '2010'
       ,'2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
 };
 var yAxis = {
    title: {
       text: 'People'
    },
    plotLines: [{
       value: 0,
       width: 1,
       color: '#808080'
    }]
 };  
 var tooltip = {
    valueSuffix: '\xB0C'    // /xB0C is basically degrees
 }
 var legend = {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
 };

 // Data structure to hold all the configurations together
 var json = {};

 // Tying all the configurations
json.title = title;
json.subtitle = subtitle;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.tooltip = tooltip;
json.legend = legend;

// Tying the data as the series data
json.series = series;

// We need to couple the chart data structure with the chartPlaceHolder div
var someVar = document.getElementById("chartPlaceHolder");
Highcharts.chart(someVar, json);
