//https://www.highcharts.com/demo/column-basic


Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Fulltime Women Applications at UCSD Over 2005 - 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Year',
        colorByPoint: true,
        data: [{
            name: '2018',
            y: 11.19884294,
            sliced: true,
            selected: true
        }, {
            name: '2017',
            y: 10.03749732
        }, {
            name: '2016',
            y: 9.520034283
        }, {
            name: '2015',
            y: 8.795157489
        }, {
            name: '2014',
            y: 8.318405828
        }, {
            name: '2013',
            y: 7.586886651
        }, {
            name: '2012',
            y: 6.867152346
        }, {
            name: '2011',
            y: 6.074780373
        }, {
            name: '2010',
            y: 5.519820013
        }, {
            name: '2009',
            y: 5.425541033
        }, {
            name: '2008',
            y: 5.522819799
        }, {
            name: '2007',
            y: 5.25112492
        }, {
            name: '2006',
            y: 5.088493679
        }, {
            name: '2005',
            y: 4.793443325
        }]
    }]
});
