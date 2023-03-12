	function speed_graph(x)
	{
		var modal = document.getElementById("speed_modal");
      var btn=document.getElementById("clo2");
      modal.style.display = "block";
      time_elps=1;
      btn.onclick = function() 
      {
      modal.style.display = "none";
      time_elps=0;
      }
      val12=x;
       speed_graph1();
}
function speed_graph1()
      {
       var machine="";
      var Product="";
        if(time_elps==1)
        {
        var x=val12;
    var shop_name_pop="";
      if((x>=0)&&(x<=11))
      {
        y=x-0;
        shop_name_pop=shopone_name;
        machine=document.getElementById('shop_one0'+y+'0').innerHTML;
        Product=document.getElementById('shop_one3'+y+'3').innerHTML;
      }
      if((x>=12)&&(x<=23))
      {
        y=x-12;
        shop_name_pop=shoptwo_name;
        machine=document.getElementById('shop_two0'+y+'0').innerHTML;
        Product=document.getElementById('shop_two3'+y+'3').innerHTML;
      }
      if((x>=24)&&(x<=35))
      {
        y=x-24;
        shop_name_pop=shopthree_name;
        machine=document.getElementById('shop_three0'+y+'0').innerHTML;
        Product=document.getElementById('shop_three3'+y+'3').innerHTML;
      }
      if((x>=36)&&(x<=48))
      {
        y=x-36;
        shop_name_pop=shopfour_name;
        machine=document.getElementById('shop_four0'+y+'0').innerHTML;
        Product=document.getElementById('shop_four3'+y+'3').innerHTML;
      }
      if((x>=49)&&(x<=59))
      {
        y=x-48;
        shop_name_pop=shopfive_name;
        machine=document.getElementById('shop_five0'+y+'0').innerHTML;
        Product=document.getElementById('shop_five3'+y+'3').innerHTML;
      }
      

      var poll=0;
      var comp= shop_name_pop+'-'+machine+':'+Product; 
      var split_url=window.location.href.split("factory_live");
$.ajax({
    type: "Get",
    url: split_url[0] + "factory_live/livepage/files/speed" + x + ".csv?"+Math.random()*100,
  
    async: true,
    success: function (data1) {
        if (poll == 0) {
            var options = {
                tooltip: {
                    shared: true,
                    style: {
                        fontSize: '12px',
                        fontFamily: undefined,
                        filter: opacity = 40
                    },
                    onDatasetHover: {
                        highlightDataSeries: false,
                    },

                    y: {
                        show: true,

                        formatter: function (opt) {
                            return opt;
                        }
                    }
                },
                chart: {
                    type: 'line',
                    height: 350,
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    background: '#fff',
                    toolbar: {
                        show: true
                    },
                    events: {
                        zoomed: function (chartContext, {
                            xaxis,
                            yaxis
                        }) {
                            if (xaxis == undefined) {
                                poll = 0;
                            } else {
                                if (xaxis.min == undefined) {
                                    poll = 0;
                                } else {
                                    poll = 1;
                                }
                            }
                        },
                    }
                },

                colors: ['#cc0000', '#FFD700', '#006400', '#0000FF', '#ff3399', '#ff6633', '#662E9B', '#D7263D', '#000000', '#7D02EB', '#2983FF', '#546E7A', '#1B998B', '#D4526E', '#4CAF50'],
                stroke: {
                    curve: 'straight',
                    width: 2
                },
                title: {
                    text: comp,
                    align: 'center',
                    floating: true,
                    style: {
                        fontSize: '18px',
                        fontWeight: 'bold',
                        fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                        color: '#263238'
                    },
                },
                subtitle: {
                    text: 'Speed_Data Per min',
                    align: 'center',
                    style: {
                        fontSize: '15px',
                        fontWeight: 'bold',
                        color: '#263238'
                    },
                },

                dataLabels: {
                    enabled: false
                },
                markers: {
                    width: 0,
                    height: 0,
                    strokeWidth: 0,
                    strokeColor: "#fff",
                    radius: 12,
                    offsetX: 0,
                    offsetY: 0
                },

                legend: {
                    layout: 'vertical',
                    align: 'bottom',
                    verticalAlign: 'middle',
                    labels: {
                        useSeriesColors: true
                    },
                },
                series: [{
                        name: "Speed_lsl",

                        data: []
                    },
                    {
                        name: "Speed_usl",
                        data: []
                    },
                    {
                        name: "Standard_Speed",
                        data: []
                    },
                    {
                        name: "Actual_Speed",
                        data: []
                    }
                ],


                xaxis: {
                    categories: [],
                    title: {
                        text: 'Date and Time'
                    }
                }


            }
            options.xaxis.categories = [];
            options.series[0].data = [];
            var setarray1 = data1.split(/\r?\n|\r/);
            for (i = 1; i < setarray1.length - 1; i++) {
                setarray1[i] = setarray1[i].replace(/['"]+/g, '');
                var values1 = setarray1[i].split(',');
                var str = values1[3];
                if (setarray1[i] != '') {
                    options.xaxis.categories.push(values1[0]);
                    options.series[0].data.push(parseFloat(values1[1]))
                    options.series[1].data.push(parseFloat(values1[2]))
                    options.series[2].data.push(parseFloat(values1[3]))
                    options.series[3].data.push(parseFloat(values1[4]))
                }
            }
            var chart = new ApexCharts(
                document.querySelector("#container_speed"),
                options);
            chart.render();
            chart.updateOptions({
                xaxis: {},
                yaxis: {

                }
            })

        }

    }
});
}
}