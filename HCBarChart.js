
//BORROWED FROM https://www.highcharts.com/demo/column-basic.com


Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Fulltime Women Applications, Admittances, and Enrollments at UCSD Over 2005 - 2018'
    },
    subtitle: {
      text: 'Source: https://gist.github.com/dingmei/d1ab5dd8ff9597d71b3fba3dc26347fe'
    },
    xAxis: {
      categories: [
        '2018',
        '2017',
        '2016',
        '2015',
        '2014',
        '2013',
        '2012',
        '2011',
        '2010',
        '2009',
        '2008',
        '2006',
        '2005'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'People'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Fulltime Women Applied',
      data: [
        52265,
        46845,
        44430,
        41047,
        38822,
        35408,
        32049,
        28351,
        25761,
        25321,
        25775,
        24507,
        23748,
        22371
      ]  
    }, {
        name: 'Fulltime Women Admitted',
        data: [
        15821,
        16231,
        16170,
        13761,
        12837,
        12966,
        12046,
        10269,
        9991,
        9863,
        11200,
        10759,
        12135,
        10311
        ]
  
    }, {
      name: 'Fulltime Women Enrolled',
      data: [
        3484,
        2974,
        3077,
        2581,
        2383,
        2612,
        2245,
        1861,
        2089,
        2054,
        2399,
        2303,
        2558,
        2113
      ]
    }]
 });
  