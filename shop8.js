
$(document).on('click', '.apexcharts-legend-series', function () {
var shopeight_poll1=0;
   if ($("#shopeightcontainer .apexcharts-legend-series ").attr('data:collapsed') === 'false') {
      shopeight_poll1 = 0;
      //////console.log(shopeight_poll1);
   } else {
      shopeight_poll1 = 1;
      //////console.log(shopeight_poll1);
   }

});
               


var user_name = "";
  
var res = window.location.href;
  res = decodeURI(res);
  var res1 = res.split("?");
  var res2 = res1[1].split("#");
  var user_detail = res2[0].split("=");
  user_name = user_detail[0];
  session_name = user_detail[1];


var shopeight_machine_array = [];
var shopeight_hr_shop = "";
var shopeight_hr_shift = "";
var shopeight_hr_date = "";



   $(document).on('click', '.shop8_machine_name', function () {

      var shop=shopeight_name[0];
      var machine=$(this).text();
      var date=shopeight_hr_date;
      var shift_name=shopeight_hr_shift[0];
     
      var split_date=shopeight_prev_date.split("-");

      $("html").toggleClass("sidebar-left-opened");
      window.open(basepath + '10.30.0.56/LWSoft/LWSoft_machine_overview/machine_live.php?'+ user_name +'#'+ shop +'#'+ machine +'#'+ split_date[2]+"-"+split_date[1]+"-"+split_date[0] +'#'+ shopeight_prev_shift +'#','_self');

   })

$(document).ready(function () {


   var table = document.createElement("table");
   var tblBody = document.createElement("tbody");
   var tblhed = document.createElement("thead");
   table.id = "inp1";
   table.setAttribute("class", "inp");
   var body = document.getElementById("shopeight_realtime");
   for (var i = 0; i <= 6; i++) {
      var tr = document.createElement("tr");
      tr.setAttribute('id', 'shopeight_row' + i);
      for (var j = 0; j <= 20; j++) {
         if (i == 0) {
            if (j == 0) {
               var th = document.createElement("TH");
               var cellText = document.createTextNode("Machine");
               th.setAttribute('class', 'shop8_machine_name');
               th.appendChild(cellText);
               tr.appendChild(th);
            }
            if (j == 1) {
               var th = document.createElement("TH");
               var cellText = document.createTextNode("Job Name");
               th.setAttribute('class', 'job_name');
               th.appendChild(cellText);
               tr.appendChild(th);
            }
            if (j == 2) {
               var th = document.createElement("TH");
               var cellText = document.createTextNode("Operator Name");
               th.setAttribute('class', 'operator_name1');
               th.appendChild(cellText);
               tr.appendChild(th);
            }
            if (j == 3) {
               var th = document.createElement("TH");
               var cellText = document.createTextNode("Status");
               th.setAttribute('class', 'status');
               th.appendChild(cellText);
               tr.appendChild(th);
            }
                 if (j == 4) {
               var th = document.createElement("TH");
               var cellText = document.createTextNode("Amps");
               th.setAttribute('class', 'amps');
               th.appendChild(cellText);
               tr.appendChild(th);
            }
            if (j == 5) {
               var th = document.createElement("TH");
               var cellText = document.createTextNode("% Amps Deviation");
               th.setAttribute('class', 'amps_dev');
               th.appendChild(cellText);
               tr.appendChild(th);
            }
            if (j == 6) {
               var th = document.createElement("TH");
               var cellText = document.createTextNode("Voltage");
               th.setAttribute('class', 'vol');
               th.appendChild(cellText);
               tr.appendChild(th);
            }
            if (j == 7) {
               var th = document.createElement("TH");
               var cellText = document.createTextNode("% Voltage Deviation");
               th.setAttribute('class', 'vol_dev');
               th.appendChild(cellText);
               tr.appendChild(th);
            }
            if (j == 8) {
               var th = document.createElement("TH");
               var cellText = document.createTextNode("Gas Flow Rate");
               th.setAttribute('class', 'gas_flow_rate');
               th.appendChild(cellText);
               tr.appendChild(th);
            }
            if (j == 9) {
               var th = document.createElement("TH");
               var cellText = document.createTextNode("% Gas Flow Rate Deviation");
               th.setAttribute('class', 'gas_flow_rate_dev');
               th.appendChild(cellText);
               tr.appendChild(th);
            }
            if (j == 10) {
               var th = document.createElement("TH");
               var cellText = document.createTextNode("Total Arching time");
               th.setAttribute('class', 'tot_arc_time');
               th.appendChild(cellText);
               tr.appendChild(th);
            }
            if (j == 11) {
               var th = document.createElement("TH");
               var cellText = document.createTextNode("% ARCON");
               th.setAttribute('class', 'per_arcon');
               th.appendChild(cellText);
               tr.appendChild(th);
            }
            if (j == 12) {
               var th = document.createElement("TH");
               var cellText = document.createTextNode("Downtime");
               th.setAttribute('class', 'd_time');
               th.appendChild(cellText);
               tr.appendChild(th);
            }
            if (j == 13) {
               var th = document.createElement("TH");
               var cellText = document.createTextNode("Machine Off");
               th.setAttribute('class', 'machine_off');
               th.appendChild(cellText);
               tr.appendChild(th);
            }
            if (j == 14) {
               var th = document.createElement("TH");
               var cellText = document.createTextNode("Job [Weld] Count");
               th.setAttribute('class', 'job_weld_count');
               th.appendChild(cellText);
               tr.appendChild(th);
            }
            if (j == 15) {
               var th = document.createElement("TH");
               var cellText = document.createTextNode("Total Weld Deposit");
               th.setAttribute('class', 'tot_weld_deposit');
               th.appendChild(cellText);
               tr.appendChild(th);
            }
            if (j == 16) {
               var th = document.createElement("TH");
               var cellText = document.createTextNode("Arcing time in Last 1 hour");
               th.setAttribute('class', 'arc_one_hr');
               th.appendChild(cellText);
               tr.appendChild(th);
            }
       
            if (j == 17) {
               var th = document.createElement("TH");
               var cellText = document.createTextNode("Cost Per KG");
               th.setAttribute('class', 'cost_per_kg');
               th.appendChild(cellText);
               tr.appendChild(th);
            }

         } else {
            if (j == 0) {
               var td = document.createElement("th");
               var cellText = document.createTextNode("Machine");
               td.setAttribute('class', 'shop8_machine_name font_16');
               td.setAttribute('id', 'shop_eight' + j + i + j);
               td.appendChild(cellText);
               tr.appendChild(td);
            }
            if (j == 1) {
               var td = document.createElement("td");
               var cellText = document.createTextNode("");
               td.setAttribute('id', 'shop_eight' + j + i + j);
               td.setAttribute('class', 'job_name font_16');
               td.appendChild(cellText);
               tr.appendChild(td);
            }
            if (j == 2) {
               var td = document.createElement("td");
               td.setAttribute('id', 'shop_eight' + j + i + j);
               td.setAttribute('class', 'operator_name1 font_16');
               tr.appendChild(td);
            }
            if (j == 3) {
               var td = document.createElement("td");
               td.setAttribute('id', 'shop_eight' + j + i + j);
               td.setAttribute('class', 'status font_16');
               tr.appendChild(td);
            }
              if (j == 4) {
               var td = document.createElement("td");
               td.setAttribute('id', 'shop_eight' + j + i + j);
               td.setAttribute('class', 'amps font_18');
               var add_tab = i + 0;
               td.setAttribute('onclick', ' shopeight_amp_graph(' + add_tab + ');');
               tr.appendChild(td);
            }
            if (j == 5) {
               var td = document.createElement("td");
               td.setAttribute('id', 'shop_eight' + j + i + j);
               td.setAttribute('class', 'amps_dev font_18');

               tr.appendChild(td);
            }
            if (j == 6) {
               var td = document.createElement("td");
               td.setAttribute('id', 'shop_eight' + j + i + j);
               td.setAttribute('class', 'vol font_18');
               var add_tab = i + 0;
               td.setAttribute('onclick', ' shopeight_volt_graph(' + add_tab + ');');
               tr.appendChild(td);
            }
            if (j == 7) {
               var td = document.createElement("td");
               td.setAttribute('class', 'vol_dev font_18');
               td.setAttribute('id', 'shop_eight' + j + i + j);
               tr.appendChild(td);
            }
            if (j == 8) {
               var td = document.createElement("td");
               td.setAttribute('class', 'gas_flow_rate font_18');
               td.setAttribute('id', 'shop_eight' + j + i + j);
               var add_tab = i + 0;
               td.setAttribute('onclick', ' shopeight_gas_graph(' + add_tab + ');');
               tr.appendChild(td);
            }

            if (j == 9) {
               var td = document.createElement("td");
               td.setAttribute('class', 'gas_flow_rate_dev font_18');
               td.setAttribute('id', 'shop_eight' + j + i + j);
               tr.appendChild(td);
            }
            if (j == 10) {
               var td = document.createElement("td");
               td.setAttribute('id', 'shop_eight' + j + i + j);
               td.setAttribute('class', 'tot_arc_time font_18');
               tr.appendChild(td);
            }
            if (j == 11) {
               var td = document.createElement("td");
               td.setAttribute('id', 'shop_eight' + j + i + j);
               td.setAttribute('class', 'per_arcon font_18');
               tr.appendChild(td);
            }
            if (j == 12) {
               var td = document.createElement("td");
               td.setAttribute('id', 'shop_eight' + j + i + j);
               td.setAttribute('class', 'd_time font_18');
               tr.appendChild(td);
            }
            if (j == 13) {
               var td = document.createElement("td");
               td.setAttribute('id', 'shop_eight' + j + i + j);
               td.setAttribute('class', 'machine_off font_18');
               tr.appendChild(td);
            }
            if (j == 14) {
               var td = document.createElement("td");
               td.setAttribute('id', 'shop_eight' + j + i + j);
               td.setAttribute('class', 'job_weld_count font_18');
               td.setAttribute('style', 'white-space: nowrap;');


               tr.appendChild(td);
            }
            if (j == 15) {
               var td = document.createElement("td");
               td.setAttribute('id', 'shop_eight' + j + i + j);
               td.setAttribute('class', 'tot_weld_deposit font_18');
               tr.appendChild(td);
            }
            if (j == 16) {
               var td = document.createElement("td");
               td.setAttribute('id', 'shop_eight' + j + i + j);
               td.setAttribute('class', 'arc_one_hr font_18');
               tr.appendChild(td);
            }
          

            if (j == 17) {
               var td = document.createElement("td");
               td.setAttribute('class', 'cost_per_kg font_18');
               td.setAttribute('id', 'shop_eight' + j + i + j);
               tr.appendChild(td);
            }


         }
      }

      if (i == 0) {
         tblhed.appendChild(tr);
         table.appendChild(tblhed);
      } else {
         tblBody.appendChild(tr);
         table.appendChild(tblBody);
      }
      body.appendChild(table);
   }



   var table = document.createElement("table");
   var tblBody = document.createElement("tbody");
   table.id = "shopeight_wait";
   table.setAttribute("class", "inp");
   var body = document.getElementById("shopeight_wait_down");
   for (var i = 0; i < 2; i++) {
      var tr = document.createElement("tr");
      tr.setAttribute("id", 'shopeight_wait_row' + i)
      for (var j = 0; j < 7; j++) {
         if (i == 0) {
            if (j == 0) {
               var th = document.createElement("TH");
               var cellText = document.createTextNode('Machine');
               th.appendChild(cellText);
               tr.appendChild(th);
            } else {
               var th = document.createElement("TH");
               th.setAttribute("id", 'shopeight_wait_machine' + j);
               var cellText = document.createTextNode('machine' + j);
               th.appendChild(cellText);
               tr.appendChild(th);
            }
         } else {
            if (j == 0) {
               var th = document.createElement("TH");
               var cellText = document.createTextNode('Downtime Min Waiting for Reason Entry:');
               th.appendChild(cellText);
               tr.appendChild(th);
            } else {
               var td = document.createElement("td");
               td.setAttribute('id', 'shopeight_wait_entry' + j);
               tr.appendChild(td);
            }
         }
      }
      tblBody.appendChild(tr);
      table.appendChild(tblBody);
      body.appendChild(table);
   }



});


function shopeight_get_live_data() {





   $.ajax({
      type: "Get",
      url: "classes/productionlive.php?area=shopeight&type=json&ip=" + shopeight_ip,
      dataType: "json",
      async: true,
      success: function (da) {
//console.log(da);``
         for (var i = 0; i < 6; i++) {
            var ic = i + 1;
            shopeight_name = da.shop;
            shopeight_machine_array = da.machine;
            shopeight_prev_shift=da.prev_shift[0];
            shopeight_prev_date=da.prev_date[0];
            //console.log(shopeight_prev_date);
            $("#shopeight_lbl").html("Shop :- " + da.shop);
            document.getElementById("reason_sel_down").options[8].text = da.shop;
            $('#shop_eight0' + ic + '0').html(da.machine[i]);
            $('#shop1_chat_mc' + ic).html(da.machine[i]);
            if (da.machine[i] == "N/A") {
               $('#shop1_chat_mc' + ic).hide();
            }

            // $('#shift_r').html(" Shift : " + da.shift + " -- Datetime : " + da.date);
            var change_date = da.per_hour_date[0].split("-");
            shopeight_hr_date = change_date[2] + "-" + change_date[1] + "-" + change_date[0];
            shopeight_hr_shop = da.shop;
            shopeight_hr_shift = da.shift;
            $('#shop_eight0' + ic + '0').html(da.machine[i]);
            $('#shop_eight1' + ic + '1').html(da.Job_name[i]);
            $('#shop_eight2' + ic + '2').html(da.Operator[i]);

            if (da.machine_status[i] == 1) {
               if (da.weld_status[i] == 1) {
                  $('#shop_eight3' + ic + '3').html("Arc On");
                  $('#shop_eight3' + ic + '3').css({
                     'background-color': '#41e541',
                     'color': 'black'
                  });

               } else {
                  $('#shop_eight3' + ic + '3').html("Arc Off");
                  $('#shop_eight3' + ic + '3').css({
                     'background-color': 'yellow',    
                     'color': 'black'
                  });

               }

            } else {
               $('#shop_eight3' + ic + '3').html("Off");
               $('#shop_eight3' + ic + '3').css({
                  'background-color': 'red',
                  'color': 'white'

                  
               });

            }
            var  downtime=parseFloat(da.shift_running)-(parseFloat(da.tarctime[i])+parseFloat(da.mc_off[i]));  
            
            $('#shop_eight10' + ic + '10').html(parseFloat(da.tarctime[i]).toFixed(2));
            $('#shop_eight11' + ic + '11').html(parseFloat(da.perarcon[i]).toFixed(2));
            $('#shop_eight12' + ic + '12').html(parseFloat(downtime).toFixed(2));
            $('#shop_eight13' + ic + '13').html(parseFloat(da.mc_off[i]).toFixed(2));
            $('#shop_eight14' + ic + '14').html(parseFloat(da.job_count[i]).toFixed(0) + ' [ ' + parseFloat(da.weld_count[i]).toFixed(0) + ' ]');
            $('#shop_eight15' + ic + '15').html(parseFloat(da.weld_dep[i]).toFixed(2));
            $('#shop_eight17' + ic + '17').html(parseFloat(da.mc_cost_twc[i]).toFixed(2));

            //*********************waiting for downtime entry********************
           

            $('#shopeight_wait_entry1').html(parseFloat(da.wait_timer[0]).toFixed(2));
            $('#shopeight_wait_entry2').html(parseFloat(da.wait_timer[1]).toFixed(2));
            $('#shopeight_wait_entry3').html(parseFloat(da.wait_timer[2]).toFixed(2));
            $('#shopeight_wait_entry4').html(parseFloat(da.wait_timer[3]).toFixed(2));
            $('#shopeight_wait_entry5').html(parseFloat(da.wait_timer[4]).toFixed(2));
            $('#shopeight_wait_entry6').html(parseFloat(da.wait_timer[5]).toFixed(2));

            if ((da.machine[i] != 'N/A')) {
               if (da.wait_timer[i] != 0) {
                  $("#shopeight_wait_entry" + ic).css({
                     "background-color": "#ff0000",
                     "color": "white",
                     "font-weight": "Bold"
                  }).fadeTo(500, 0.2).fadeTo(750, 1);
               } else {
                  $("#shopeight_wait_entry" + ic).css({
                     "background-color": "white",
                     "color": "black"
                  });
                  $('#shopeight_wait_entry' + ic).stop(true, true).fadeTo(100, 1);
               }
            }

 if ((da.machine[i] != 'N/A')&&(da.machine[i] > '')) {
               $('#shopeight_wait_machine' + ic).html(da.machine[i]);
               $('#shopeight_wait_machine' + ic).show();
               $('#shopeight_wait_entry' + ic).show();
            } else {

               $('#shopeight_wait_machine' + ic).hide();
               $('#shopeight_wait_entry' + ic).hide();
            }

            //**********************end*************************
            var lower = parseFloat(da.amp_dev_lo_lcl[i]).toFixed(2);
            var upper = parseFloat(da.amp_dev_up_ucl[i]).toFixed(2);
            var value = parseFloat(da.amperage[i]).toFixed(2);
            $('#shop_eight4' + ic + '4').html(value);
            if ((value < upper) && (value > lower)) {
               $('#shop_eight4' + ic + '4').css({
                  'background-color': 'lime',
                  'color': 'black'
               });
            } else if ((value == 0) && (0 == value)) {
               $('#shop_eight4' + ic + '4').css({
                  'background-color': 'white',
                  'color': 'black'
               });
            } else if (((value > upper) || (value < lower)) && (value > 0)) {
               $('#shop_eight4' + ic + '4').css({
                  'background-color': 'red',
                  'color': 'white'
               });
            } else {}

            var lower = parseFloat(da.volt_dev_lo_lcl[i]).toFixed(2);
            var upper = parseFloat(da.volt_dev_up_ucl[i]).toFixed(2);
            var value = parseFloat(da.voltage[i]).toFixed(2);
            $('#shop_eight6' + ic + '6').html(value);
            if ((value < upper) && (value > lower)) {
               $('#shop_eight6' + ic + '6').css({
                  'background-color': 'lime',
                  'color': 'black'
               });
            } else if ((value == 0) && (0 == value)) {
               $('#shop_eight6' + ic + '6').css({
                  'background-color': 'white',
                  'color': 'black'
               });
            } else if (((value > upper) || (value < lower)) && (value > 0)) {
               $('#shop_eight6' + ic + '6').css({
                  'background-color': 'red',
                  'color': 'white'
               });
            } else {}


            var lower = parseFloat(da.gas_dev_lo_lcl[i]).toFixed(2);
            var upper = parseFloat(da.gas_dev_up_ucl[i]).toFixed(2);
            var value = parseFloat(da.gas[i]).toFixed(2);
            $('#shop_eight8' + ic + '8').html(value);
            if ((value < upper) && (value > lower)) {
               $('#shop_eight8' + ic + '8').css({
                  'background-color': 'lime',
                  'color': 'black'
               });
            } else if ((value == 0) && (0 == value)) {
               $('#shop_eight8' + ic + '8').css({
                  'background-color': 'white',
                  'color': 'black'
               });
            } else if (((value > upper) || (value < lower)) && (value > 0)) {
               $('#shop_eight8' + ic + '8').css({
                  'background-color': 'red',
                  'color': 'white'
               });
            } else {}


            var upper = parseFloat(da.amp_dev_ucl[i]).toFixed(2);
            var value = parseFloat(da.Ampsdev[i]).toFixed(2);
            var amp = parseFloat(da.amperage[i]).toFixed(2);
            $('#shop_eight5' + ic + '5').html(value);
            if ((value > 0) && (value < upper)) {
               $('#shop_eight5' + ic + '5').css({
                  'background-color': 'yellow',
                  'color': 'black'
               });
            } else if ((value == 0) && (amp > 0)) {
               $('#shop_eight5' + ic + '5').css({
                  'background-color': 'lime',
                  'color': 'black'
               });
            } else if ((value > upper)) {
               $('#shop_eight5' + ic + '5').css({
                  'background-color': 'red',
                  'color': 'white'
               });
            } else {

               $('#shop_eight5' + ic + '5').css({
                  'background-color': 'white',
                  'color': 'black'
               });
            }


            var upper = parseFloat(da.volt_dev_ucl[i]).toFixed(2);
            var value = parseFloat(da.voltdev[i]).toFixed(2);
            var volt = parseFloat(da.voltage[i]).toFixed(2);
            $('#shop_eight7' + ic + '7').html(value);
            if ((value > 0) && (value < upper)) {
               $('#shop_eight7' + ic + '7').css({
                  'background-color': 'yellow',
                  'color': 'black'
               });
            } else if ((value == 0) && (volt > 0)) {
               $('#shop_eight7' + ic + '7').css({
                  'background-color': 'lime',
                  'color': 'black'
               });
            } else if ((value > upper)) {
               $('#shop_eight7' + ic + '7').css({
                  'background-color': 'red',
                  'color': 'white'
               });
            } else {

               $('#shop_eight7' + ic + '7').css({
                  'background-color': 'white',
                  'color': 'black'
               });
            }


            var upper = parseFloat(da.gas_dev_ucl[i]).toFixed(2);
            var value = parseFloat(da.gasdev[i]).toFixed(2);
            var gas = parseFloat(da.gas[i]).toFixed(2);
            $('#shop_eight9' + ic + '9').html(value);
            if ((value > 0) && (value < upper)) {
               $('#shop_eight9' + ic + '9').css({
                  'background-color': 'yellow',
                  'color': 'black'
               });
            } else if ((value == 0) && (gas > 0)) {
               $('#shop_eight9' + ic + '9').css({
                  'background-color': 'lime',
                  'color': 'black'
               });
            } else if ((value > upper)) {
               $('#shop_eight9' + ic + '9').css({
                  'background-color': 'red',
                  'color': 'white'
               });
            } else {

               $('#shop_eight9' + ic + '9').css({
                  'background-color': 'white',
                  'color': 'black'
               });
            }


         }


      }
   });



 
            if ($('#shop_eight010').text() == '') {

            $('#shopeight_row1').hide();

         }

                  if ($('#shop_eight020').text() == '') {
                              
            $('#shopeight_row2').hide();

         }

                  if ($('#shop_eight030').text() == '') {
                              
            $('#shopeight_row3').hide();

         }

                  if ($('#shop_eight040').text() == '') {
                              
            $('#shopeight_row4').hide();

         }


            if ($('#shop_eight050').text() == '') {

            $('#shopeight_row5').hide();

         }


            if ($('#shop_eight060').text() == '') {

            $('#shopeight_row6').hide();

         }

            
}

function shopeight_hr_production() {

   $.ajax({
      type: "Get",
      url: "classes/productionlive.php?area=shopeight&type=csv&file=live.csv&ip=" + shopeight_ip,
      async: true,
      success: function (data1) {
         var live_array = data1.split(/\r?\n|\r/);
         if (live_array.length - 1 < 60) {
            var first_array = live_array[1].split(',');
            var last_array = live_array[live_array.length - 2].split(',');  
            for (var i = 0; i < 6; i++) {
               var ic=i+1;
               var ac=parseFloat(last_array[ic])-parseFloat(first_array[ic]);

             $('#shop_eight16' + ic + '16').html(ac.toFixed(2));

            }


         } else {
            var first_array = live_array[live_array.length -60].split(',');
            var last_array = live_array[live_array.length - 2].split(',');
            //console.log(first_array);
            //console.log(last_array);

            for (var i = 0; i < 6; i++) {
              var ic=i+1;
               var ac=parseFloat(last_array[ic])-parseFloat(first_array[ic]);

               $('#shop_eight16' + ic + '16').html(ac.toFixed(2));

            }


         }
      }
   });
}

function shopeight_amp_graph(x) {
   var modal = document.getElementById("speed_modal");
   var btn = document.getElementById("clo2");
   modal.style.display = "block";
   time_elps = 1;
   btn.onclick = function () {
      modal.style.display = "none";
      time_elps = 0;
   }

   shopeight_speed_amp_graph(x);


}

function shopeight_volt_graph(x) {
   var modal = document.getElementById("speed_modal");
   var btn = document.getElementById("clo2");
   modal.style.display = "block";
   time_elps = 1;
   btn.onclick = function () {
      modal.style.display = "none";
      time_elps = 0;
   }

   shopeight_speed_volt_graph(x);


}

function shopeight_gas_graph(x) {
   var modal = document.getElementById("speed_modal");
   var btn = document.getElementById("clo2");
   modal.style.display = "block";
   time_elps = 1;
   btn.onclick = function () {
      modal.style.display = "none";
      time_elps = 0;
   }

   shopeight_speed_gas_graph(x);


}

function shopeight_speed_amp_graph(x) {

   var machine = $("shop_eight0" + x + "0").html();
   //console.log("yes");
   $.ajax({
      type: "Get",
      url: window.location.protocol + "classes/productionlive.php?area=shopeight&type=csv&file=machine" + x + ".csv&ip=" + shopeight_ip,
      // url: "live_data.csv",
      async: true,
      success: function (data1) {
         if (shopeight_poll1 == 0) {
            //////console.log("load");
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
               legend: {
                  layout: 'vertical',
                  align: 'bottom',
                  verticalAlign: 'middle',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  fontFamily: 'Helvetica, Arial',
                  fontWeight: 400,
                  labels: {
                     useSeriesColors: true
                  }

               },

               colors: ['#912921', '#4f6611', '#085e4a', '#08585e', '#083e5e', '#08295e', '#0b085e', '#33085e', '#0ae4fc', '#00ff11', '#ff8400', '#546E7A', '#1B998B', '#D4526E', '#4CAF50'],
               stroke: {
                  curve: 'straight',
                  width: 2
               },
               title: {
                  text: "Amperage Vs Time",
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
                  text: 'Amperage with Limit',
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


               series: [{
                     name: 'Amperage',
                     data: []
                  },
                  {
                     name: 'Amp_lcl',
                     data: []
                  },
                  {
                     name: 'Amp_ucl',
                     data: []
                  }


               ],


               xaxis: {
                  categories: [],
                  title: {
                     text: 'Date and Time'
                  }
               },
               chart: {
                  type: 'line',
                  height: 450,
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
                           shopeight_poll1 = 0;
                        } else {
                           if (xaxis.min == undefined) {
                              shopeight_poll1 = 0;
                           } else {
                              shopeight_poll1 = 1;
                           }
                        }
                     },
                     legendClick: function (chartContext, seriesIndex, config) {

                        // //////console.log(chartContext);
                        //  //////console.log(seriesIndex);


                     }
                  }
               },


            }
            //////console.log(legend1);
            options.xaxis.categories = [];
            options.series[0].data = [];
            var setarray1 = data1.split(/\r?\n|\r/);
            for (i = 1; i < setarray1.length - 1; i++) {
               // setarray1[i] = setarray1[i].replace(/['"]+/g, '');
               var values1 = setarray1[i].split(',');
               // var str = values1[3];
               if (setarray1[i] != '') {


                  options.xaxis.categories.push(values1[0]);
                  if (values1[1] == '') values1[1] = 0;
                  if (values1[2] == '') values1[2] = 0;
                  if (values1[3] == '') values1[3] = 0;


                  options.series[0].data.push(parseFloat(values1[1]));
                  options.series[1].data.push(parseFloat(values1[2]));
                  options.series[2].data.push(parseFloat(values1[3]));

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

function shopeight_speed_volt_graph(x) {
   var modal = document.getElementById("speed_modal");
   var btn = document.getElementById("clo2");
   modal.style.display = "block";
   time_elps = 1;
   btn.onclick = function () {
      modal.style.display = "none";
      time_elps = 0;
   }
   var machine = $("shop_eight0" + x + "0").html();
   //console.log("yes");
   $.ajax({
      type: "Get",
      url: window.location.protocol + "classes/productionlive.php?area=shopeight&type=csv&file=machine" + x + ".csv&ip=" + shopeight_ip,
      // url: "live_data.csv",
      async: true,
      success: function (data1) {
         if (shopeight_poll1 == 0) {
            //////console.log("load");
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
               legend: {
                  layout: 'vertical',
                  align: 'bottom',
                  verticalAlign: 'middle',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  fontFamily: 'Helvetica, Arial',
                  fontWeight: 400,
                  labels: {
                     useSeriesColors: true
                  }

               },

               colors: ['#912921', '#4f6611', '#085e4a', '#08585e', '#083e5e', '#08295e', '#0b085e', '#33085e', '#0ae4fc', '#00ff11', '#ff8400', '#546E7A', '#1B998B', '#D4526E', '#4CAF50'],
               stroke: {
                  curve: 'straight',
                  width: 2
               },
               title: {
                  text: "voltage Vs Time",
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
                  text: 'voltage with Limit',
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


               series: [{
                     name: 'voltage',
                     data: []
                  },
                  {
                     name: 'volt_lcl',
                     data: []
                  },
                  {
                     name: 'volt_ucl',
                     data: []
                  }


               ],


               xaxis: {
                  categories: [],
                  title: {
                     text: 'Date and Time'
                  }
               },
               chart: {
                  type: 'line',
                  height: 450,
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
                           shopeight_poll1 = 0;
                        } else {
                           if (xaxis.min == undefined) {
                              shopeight_poll1 = 0;
                           } else {
                              shopeight_poll1 = 1;
                           }
                        }
                     },
                     legendClick: function (chartContext, seriesIndex, config) {

                        // //////console.log(chartContext);
                        //  //////console.log(seriesIndex);


                     }
                  }
               },


            }
            //////console.log(legend1);
            options.xaxis.categories = [];
            options.series[0].data = [];
            var setarray1 = data1.split(/\r?\n|\r/);
            for (i = 1; i < setarray1.length - 1; i++) {
               // setarray1[i] = setarray1[i].replace(/['"]+/g, '');
               var values1 = setarray1[i].split(',');
               // var str = values1[3];
               if (setarray1[i] != '') {


                  options.xaxis.categories.push(values1[0]);
                  if (values1[1] == '') values1[1] = 0;
                  if (values1[2] == '') values1[2] = 0;
                  if (values1[3] == '') values1[3] = 0;


                  options.series[0].data.push(parseFloat(values1[4]));
                  options.series[1].data.push(parseFloat(values1[5]));
                  options.series[2].data.push(parseFloat(values1[6]));

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

function shopeight_speed_gas_graph(x) {
   var modal = document.getElementById("speed_modal");
   var btn = document.getElementById("clo2");
   modal.style.display = "block";
   time_elps = 1;
   btn.onclick = function () {
      modal.style.display = "none";
      time_elps = 0;
   }
   var machine = $("shop_eight0" + x + "0").html();
   //console.log("yes");
   $.ajax({
      type: "Get",
      url: window.location.protocol + "classes/productionlive.php?area=shopeight&type=csv&file=machine" + x + ".csv&ip=" + shopeight_ip,
      // url: "live_data.csv",
      async: true,
      success: function (data1) {
         if (shopeight_poll1 == 0) {
            //////console.log("load");
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
               legend: {
                  layout: 'vertical',
                  align: 'bottom',
                  verticalAlign: 'middle',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  fontFamily: 'Helvetica, Arial',
                  fontWeight: 400,
                  labels: {
                     useSeriesColors: true
                  }

               },

               colors: ['#912921', '#4f6611', '#085e4a', '#08585e', '#083e5e', '#08295e', '#0b085e', '#33085e', '#0ae4fc', '#00ff11', '#ff8400', '#546E7A', '#1B998B', '#D4526E', '#4CAF50'],
               stroke: {
                  curve: 'straight',
                  width: 2
               },
               title: {
                  text: "Gas Vs Time",
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
                  text: 'Gas with Limit',
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


               series: [{
                     name: 'Gas',
                     data: []
                  },
                  {
                     name: 'Gas_lcl',
                     data: []
                  },
                  {
                     name: 'Gas_ucl',
                     data: []
                  }


               ],


               xaxis: {
                  categories: [],
                  title: {
                     text: 'Date and Time'
                  }
               },
               chart: {
                  type: 'line',
                  height: 450,
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
                           shopeight_poll1 = 0;
                        } else {
                           if (xaxis.min == undefined) {
                              shopeight_poll1 = 0;
                           } else {
                              shopeight_poll1 = 1;
                           }
                        }
                     },
                     legendClick: function (chartContext, seriesIndex, config) {

                        // //////console.log(chartContext);
                        //  //////console.log(seriesIndex);


                     }
                  }
               },


            }
            //////console.log(legend1);
            options.xaxis.categories = [];
            options.series[0].data = [];
            var setarray1 = data1.split(/\r?\n|\r/);
            for (i = 1; i < setarray1.length - 1; i++) {
               // setarray1[i] = setarray1[i].replace(/['"]+/g, '');
               var values1 = setarray1[i].split(',');
               // var str = values1[3];
               if (setarray1[i] != '') {


                  options.xaxis.categories.push(values1[0]);
                  if (values1[1] == '') values1[1] = 0;
                  if (values1[2] == '') values1[2] = 0;
                  if (values1[3] == '') values1[3] = 0;


                  options.series[0].data.push(parseFloat(values1[7]));
                  options.series[1].data.push(parseFloat(values1[8]));
                  options.series[2].data.push(parseFloat(values1[9]));

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


function shopeight_downtime() {

   $.ajax({
      type: "Get",
      url: "classes/productionlive.php?area=shopeight&type=csv&file=down_reason.csv&ip=" + shopeight_ip,
      // url: "energy_record.csv",
      async: true,
      success: function (data1) {
         var count_shopeightr1 = 0.0;
         var machine1_arr = [];
         var machine2_arr = [];
         var machine3_arr = [];
         var machine4_arr = [];
         var machine5_arr = [];
         var machine6_arr = [];
         var machine7_arr = [];
         var machine8_arr = [];
         var machine9_arr = [];
         var machine10_arr = [];
         var machine11_arr = [];
         var machine12_arr = [];
         var machine13_arr = [];
         var machine14_arr = [];
         var machine15_arr = [];
         var machine1_cou = [];
         var machine2_cou = [];
         var machine3_cou = [];
         var machine4_cou = [];
         var machine5_cou = [];
         var machine6_cou = [];
         var machine7_cou = [];
         var machine8_cou = [];
         var machine9_cou = [];
         var machine10_cou = [];
         var machine11_cou = [];
         var machine12_cou = [];
         var machine13_cou = [];
         var machine14_cou = [];
         var machine15_cou = [];
         var shopeightr1_machine = [];
         var shopeightr1_reason = [];
         var shopeightr1_machine_unique = [];
         var shopeightr1_reason_unique = [];
         var shopeightr1_reason_data = [];
         var count_shopeightr1 = 0.0;
         var data_a = [];
         var down_data = data1.split(/\r?\n|\r/);
         for (var i = 1; i < down_data.length - 1; i++) {
             down_data[i]=down_data[i].replace(/['"]+/g,'');
            var down_line = down_data[i].split(',');
            if (down_line[0] !== "N/A") {
               shopeightr1_machine[count_shopeightr1] = down_line[0];
               shopeightr1_reason[count_shopeightr1] = down_line[1];
               shopeightr1_reason_data[count_shopeightr1] = down_line[2];
               count_shopeightr1++;
               data_a[count_shopeightr1] = down_line;
            }
         }
         const s1 = new Set(shopeightr1_machine);
         const s2 = new Set(shopeightr1_reason);
         shopeightr1_machine_unique = [...s1];
         shopeightr1_reason_unique = [...s2];
         var collator = new Intl.Collator(undefined, {
            numeric: true,
            sensitivity: 'base'
         });
         shopeightr1_machine_unique = shopeightr1_machine_unique.sort(collator.compare);
         shopeightr1_reason_unique = shopeightr1_reason_unique.sort(collator.compare);
         var arshopeightr11 = [];
         var add = 0.0;
         var count = 0;
         for (var i = 0; i < shopeightr1_machine_unique.length; i++) {
            for (var j = 0; j < shopeightr1_reason_unique.length; j++) {
               for (var k = 1; k < data_a.length; k++) {
                  if (data_a[k] != undefined) {
                     var chk1 = shopeightr1_machine_unique[i].localeCompare(data_a[k][0]);
                     var chk2 = shopeightr1_reason_unique[j].localeCompare(data_a[k][1]);
                     if ((chk1 == 0) && (chk2 == 0)) {
                        add = add + parseFloat(data_a[k][2]);
                        count++;
                     }
                  }
               }
               if (i == 0) {
                  machine1_arr[j] = add.toFixed(0);
                  machine1_cou[j] = count;
               }
               if (i == 1) {
                  machine2_arr[j] = add.toFixed(0);
                  machine2_cou[j] = count;
               }
               if (i == 2) {
                  machine3_arr[j] = add.toFixed(0);
                  machine3_cou[j] = count;
               }
               if (i == 3) {
                  machine4_arr[j] = add.toFixed(0);
                  machine4_cou[j] = count;
               }
               if (i == 4) {
                  machine5_arr[j] = add.toFixed(0);
                  machine5_cou[j] = count;
               }
               if (i == 5) {
                  machine6_arr[j] = add.toFixed(0);
                  machine6_cou[j] = count;
               }
               if (i == 6) {
                  machine7_arr[j] = add.toFixed(0);
                  machine7_cou[j] = count;
               }
               if (i == 7) {
                  machine8_arr[j] = add.toFixed(0);
                  machine8_cou[j] = count;
               }
               if (i == 8) {
                  machine9_arr[j] = add.toFixed(0);
                  machine9_cou[j] = count;
               }
               if (i == 9) {
                  machine10_arr[j] = add.toFixed(0);
                  machine10_cou[j] = count;
               }
               if (i == 10) {
                  machine11_arr[j] = add.toFixed(0);
                  machine11_cou[j] = count;
               }
               if (i == 11) {
                  machine12_arr[j] = add.toFixed(0);
                  machine12_cou[j] = count;
               }
               if (i == 12) {
                  machine13_arr[j] = add.toFixed(0);
                  machine13_cou[j] = count;
               }
               if (i == 13) {
                  machine14_arr[j] = add.toFixed(0);
                  machine14_cou[j] = count;
               }
               if (i == 14) {
                  machine15_arr[j] = add.toFixed(0);
                  machine15_cou[j] = count;
               }
               count = 0;
               add = 0.0;
            }
         }
         $("#shopeightdown2").remove();
         var table = document.createElement("table");
         var tblBody = document.createElement("tbody");
         table.id = "shopeightdown2";
         table.setAttribute("class", "tab2");
         var body = document.getElementById("shopeight_downtime");
         for (var i = -1; i < shopeightr1_reason_unique.length + 1; i++) {
            var tr = document.createElement("tr");
            if (i == -1) {
               tr.setAttribute("style", "position: sticky;top: 0;word-wrap: break-word;");
            }
            for (var j = 0; j <= shopeightr1_machine_unique.length + 1; j++) {
               if (i == -1) {
                  if (j == 0) {
                     var th = document.createElement("TH");
                     var cellText = document.createTextNode("Reason/Machine:-");
                     th.setAttribute("style", "position: sticky;top: 0;");
                     th.appendChild(cellText);
                     tr.appendChild(th);
                  } else if (shopeightr1_machine_unique.length >= j) {
                     var th = document.createElement("TH");
                     var cellText = document.createTextNode(shopeightr1_machine_unique[j - 1] + " " + ":" + "Downtime Min" + " " + "[" + "Count]");
                     th.appendChild(cellText);
                     th.setAttribute("style", "position: sticky;top: 0;");
                     tr.appendChild(th);
                  } else {
                     var th = document.createElement("TH");
                     var cellText = document.createTextNode("Total Downtime Min");
                     th.setAttribute("style", "position: sticky;top: 0;");
                     th.appendChild(cellText);
                     tr.appendChild(th);
                  }
               } else if (shopeightr1_reason_unique.length > i) {
                  if (j == 1) {
                     var th = document.createElement("th");
                     var cellText = document.createTextNode(shopeightr1_reason_unique[i]);
                     th.appendChild(cellText);
                     tr.appendChild(th);
                  }
                  if (j == 2) {
                     var th = document.createElement("td");
                     var trd = j - 2;
                     th.id = "shopeight_tbw2" + i + trd;
                     if (parseFloat(machine1_arr[i]) == 0) {
                        var cellText = document.createTextNode(" ");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     } else {
                        var cellText = document.createTextNode(machine1_arr[i] + " " + "[" + machine1_cou[i] + "]");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     }
                  }
                  if (j == 3) {
                     var th = document.createElement("td");
                     var trd = j - 2;
                     th.id = "shopeight_tbw2" + i + trd;
                     if (parseFloat(machine2_arr[i]) == 0) {
                        var cellText = document.createTextNode(" ");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     } else {
                        var cellText = document.createTextNode(machine2_arr[i] + " " + "[" + machine2_cou[i] + "]");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     }
                  }
                  if (j == 4) {
                     var th = document.createElement("td");
                     var trd = j - 2;
                     th.id = "shopeight_tbw2" + i + trd;
                     if (parseFloat(machine3_arr[i]) == 0) {
                        var cellText = document.createTextNode(" ");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     } else {
                        var cellText = document.createTextNode(machine3_arr[i] + " " + "[" + machine3_cou[i] + "]");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     }
                  }
                  if (j == 5) {
                     var th = document.createElement("td");
                     var trd = j - 2;
                     th.id = "shopeight_tbw2" + i + trd;
                     if (parseFloat(machine4_arr[i]) == 0) {
                        var cellText = document.createTextNode(" ");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     } else {
                        var cellText = document.createTextNode(machine4_arr[i] + " " + "[" + machine4_cou[i] + "]");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     }
                  }
                  if (j == 6) {
                     var th = document.createElement("td");
                     var trd = j - 2;
                     th.id = "shopeight_tbw2" + i + trd;
                     if (parseFloat(machine5_arr[i]) == 0) {
                        var cellText = document.createTextNode(" ");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     } else {
                        var cellText = document.createTextNode(machine5_arr[i] + " " + "[" + machine5_cou[i] + "]");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     }
                  }
                  if (j == 7) {
                     var th = document.createElement("td");
                     var trd = j - 2;
                     th.id = "shopeight_tbw2" + i + trd;
                     if (parseFloat(machine6_arr[i]) == 0) {
                        var cellText = document.createTextNode(" ");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     } else {
                        var cellText = document.createTextNode(machine6_arr[i] + " " + "[" + machine6_cou[i] + "]");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     }
                  }
                  if (j == 8) {
                     var th = document.createElement("td");
                     var trd = j - 2;
                     th.id = "shopeight_tbw2" + i + trd;
                     if (parseFloat(machine7_arr[i]) == 0) {
                        var cellText = document.createTextNode(" ");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     } else {
                        var cellText = document.createTextNode(machine7_arr[i] + " " + "[" + machine7_cou[i] + "]");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     }
                  }
                  if (j == 9) {
                     var th = document.createElement("td");
                     var trd = j - 2;
                     th.id = "shopeight_tbw2" + i + trd;
                     if (parseFloat(machine8_arr[i]) == 0) {
                        var cellText = document.createTextNode(" ");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     } else {
                        var cellText = document.createTextNode(machine8_arr[i] + " " + "[" + machine8_cou[i] + "]");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     }
                  }
                  if (j == 10) {
                     var th = document.createElement("td");
                     var trd = j - 2;
                     th.id = "shopeight_tbw2" + i + trd;
                     if (parseFloat(machine9_arr[i]) == 0) {
                        var cellText = document.createTextNode(" ");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     } else {
                        var cellText = document.createTextNode(machine9_arr[i] + " " + "[" + machine9_cou[i] + "]");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     }
                  }
                  if (j == 11) {
                     var th = document.createElement("td");
                     var trd = j - 2;
                     th.id = "shopeight_tbw2" + i + trd;
                     if (parseFloat(machine10_arr[i]) == 0) {
                        var cellText = document.createTextNode(" ");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     } else {
                        var cellText = document.createTextNode(machine10_arr[i] + " " + "[" + machine10_cou[i] + "]");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     }
                  }
                  if (j == 12) {
                     var th = document.createElement("td");
                     var trd = j - 2;
                     th.id = "shopeight_tbw2" + i + trd;
                     var cellText = document.createTextNode(machine11_arr[i] + " " + "[" + machine11_cou[i] + "]");
                     th.appendChild(cellText);
                     tr.appendChild(th);
                  }
                  if (j == 13) {
                     var th = document.createElement("td");
                     var trd = j - 2;
                     th.id = "shopeight_tbw2" + i + trd;
                     if (parseFloat(machine12_arr[i]) == 0) {
                        var cellText = document.createTextNode(" ");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     } else {
                        var cellText = document.createTextNode(machine12_arr[i] + " " + "[" + machine12_cou[i] + "]");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     }
                  }
                  if (j == 14) {
                     var th = document.createElement("td");
                     var trd = j - 2;
                     th.id = "shopeight_tbw2" + i + trd;
                     if (parseFloat(machine13_arr[i]) == 0) {
                        var cellText = document.createTextNode(" ");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     } else {
                        var cellText = document.createTextNode(machine13_arr[i] + " " + "[" + machine13_cou[i] + "]");
                        th.appendChild(cellText);
                        tr.appendChild(th);
                     }
                  }
                  if (j >= shopeightr1_machine_unique.length + 1) {
                     var th = document.createElement("td");
                     var trd = j - 1;
                     th.id = "shopeight_tbw2" + i + trd;
                     var cellText = document.createTextNode("");
                     th.appendChild(cellText);
                     tr.appendChild(th);
                  }
               } else {
                  if (j >= shopeightr1_machine_unique.length + 1) {
                     var th = document.createElement("td");
                     var trd = j - 1;
                     th.id = "shopeight_tbw2" + i + trd;
                     var cellText = document.createTextNode("");
                     th.appendChild(cellText);
                     tr.appendChild(th);
                  }
                  if (j == 0) {
                     var th = document.createElement("th");
                     var cellText = document.createTextNode("Total Downtime Min");
                     th.appendChild(cellText);
                     tr.appendChild(th);
                  }
                  if ((j == 1) && (j < shopeightr1_machine_unique.length + 1)) {
                     var add = 0;
                     for (var dd = 0; dd < shopeightr1_reason_unique.length; dd++) {
                        var cd = j - 1;
                        var a = document.getElementById('shopeight_tbw2' + dd + cd).innerHTML;
                        if (a > " ") {
                           add = add + parseFloat(a);
                        }
                     }
                     var th = document.createElement("td");
                     var trd = j - 1;
                     th.id = 'shopeight_tbw2' + i + trd;
                     var cellText = document.createTextNode(add.toFixed(0));
                     th.appendChild(cellText);
                     tr.appendChild(th);
                  }
                  if ((j == 2) && (j < shopeightr1_machine_unique.length + 1)) {
                     var add = 0;
                     for (var dd = 0; dd < shopeightr1_reason_unique.length; dd++) {
                        var cd = j - 1;
                        var a = document.getElementById('shopeight_tbw2' + dd + cd).innerHTML;
                        if (a > " ") {
                           add = add + parseFloat(a);
                        }
                     }
                     var th = document.createElement("td");
                     var trd = j - 1;
                     th.id = 'shopeight_tbw2' + i + trd;
                     var cellText = document.createTextNode(add.toFixed(0));
                     th.appendChild(cellText);
                     tr.appendChild(th);
                  }
                  if ((j == 3) && (j < shopeightr1_machine_unique.length + 1)) {
                     var add = 0;
                     for (var dd = 0; dd < shopeightr1_reason_unique.length; dd++) {
                        var cd = j - 1;
                        var a = document.getElementById('shopeight_tbw2' + dd + cd).innerHTML;
                        if (a > " ") {
                           add = add + parseFloat(a);
                        }
                     }
                     var th = document.createElement("td");
                     var trd = j - 1;
                     th.id = 'shopeight_tbw2' + i + trd;
                     var cellText = document.createTextNode(add.toFixed(0));
                     th.appendChild(cellText);
                     tr.appendChild(th);
                  }
                  if ((j == 4) && (j < shopeightr1_machine_unique.length + 1)) {
                     var add = 0;
                     for (var dd = 0; dd < shopeightr1_reason_unique.length; dd++) {
                        var cd = j - 1;
                        var a = document.getElementById('shopeight_tbw2' + dd + cd).innerHTML;
                        if (a > " ") {
                           add = add + parseFloat(a);
                        }
                     }
                     var th = document.createElement("td");
                     var trd = j - 1;
                     th.id = 'shopeight_tbw2' + i + trd;
                     var cellText = document.createTextNode(add.toFixed(0));
                     th.appendChild(cellText);
                     tr.appendChild(th);
                  }
                  if ((j == 5) && (j < shopeightr1_machine_unique.length + 1)) {
                     var add = 0;
                     for (var dd = 0; dd < shopeightr1_reason_unique.length; dd++) {
                        var cd = j - 1;
                        var a = document.getElementById('shopeight_tbw2' + dd + cd).innerHTML;
                        if (a > " ") {
                           add = add + parseFloat(a);
                        }
                     }
                     var th = document.createElement("td");
                     var trd = j - 1;
                     th.id = 'shopeight_tbw2' + i + trd;
                     var cellText = document.createTextNode(add.toFixed(0));
                     th.appendChild(cellText);
                     tr.appendChild(th);
                  }
                  if ((j == 6) && (j < shopeightr1_machine_unique.length + 1)) {
                     var add = 0;
                     for (var dd = 0; dd < shopeightr1_reason_unique.length; dd++) {
                        var cd = j - 1;
                        var a = document.getElementById('shopeight_tbw2' + dd + cd).innerHTML;
                        if (a > " ") {
                           add = add + parseFloat(a);
                        }
                     }
                     var th = document.createElement("td");
                     var trd = j - 1;
                     th.id = 'shopeight_tbw2' + i + trd;
                     var cellText = document.createTextNode(add.toFixed(0));
                     th.appendChild(cellText);
                     tr.appendChild(th);
                  }
                  if ((j == 7) && (j < shopeightr1_machine_unique.length + 1)) {
                     var add = 0;
                     for (var dd = 0; dd < shopeightr1_reason_unique.length; dd++) {
                        var cd = j - 1;
                        var a = document.getElementById('shopeight_tbw2' + dd + cd).innerHTML;
                        if (a > " ") {
                           add = add + parseFloat(a);
                        }
                     }
                     var th = document.createElement("td");
                     var trd = j - 1;
                     th.id = 'shopeight_tbw2' + i + trd;
                     var cellText = document.createTextNode(add.toFixed(0));
                     th.appendChild(cellText);
                     tr.appendChild(th);
                  }
                  if ((j == 8) && (j < shopeightr1_machine_unique.length + 1)) {
                     var add = 0;
                     for (var dd = 0; dd < shopeightr1_reason_unique.length; dd++) {
                        var cd = j - 1;
                        var a = document.getElementById('shopeight_tbw2' + dd + cd).innerHTML;
                        if (a > " ") {
                           add = add + parseFloat(a);
                        }
                     }
                     var th = document.createElement("td");
                     var trd = j - 1;
                     th.id = 'shopeight_tbw2' + i + trd;
                     var cellText = document.createTextNode(add.toFixed(0));
                     th.appendChild(cellText);
                     tr.appendChild(th);
                  }
                  if ((j == 9) && (j < shopeightr1_machine_unique.length + 1)) {
                     var add = 0;
                     for (var dd = 0; dd < shopeightr1_reason_unique.length; dd++) {
                        var cd = j - 1;
                        var a = document.getElementById('shopeight_tbw2' + dd + cd).innerHTML;
                        if (a > " ") {
                           add = add + parseFloat(a);
                        }
                     }
                     var th = document.createElement("td");
                     var trd = j - 1;
                     th.id = 'shopeight_tbw2' + i + trd;
                     var cellText = document.createTextNode(add.toFixed(0));
                     th.appendChild(cellText);
                     tr.appendChild(th);
                  }
                  if ((j == 10) && (j < shopeightr1_machine_unique.length + 1)) {
                     var add = 0;
                     for (var dd = 0; dd < shopeightr1_reason_unique.length; dd++) {
                        var cd = j - 1;
                        var a = document.getElementById('shopeight_tbw2' + dd + cd).innerHTML;
                        if (a > " ") {
                           add = add + parseFloat(a);
                        }
                     }
                     var th = document.createElement("td");
                     var trd = j - 1;
                     th.id = 'shopeight_tbw2' + i + trd;
                     var cellText = document.createTextNode(add.toFixed(0));
                     th.appendChild(cellText);
                     tr.appendChild(th);
                  }
                  if ((j == 11) && (j < shopeightr1_machine_unique.length + 1)) {
                     var add = 0;
                     for (var dd = 0; dd < shopeightr1_reason_unique.length; dd++) {
                        var cd = j - 1;
                        var a = document.getElementById('shopeight_tbw2' + dd + cd).innerHTML;
                        if (a > " ") {
                           add = add + parseFloat(a);
                        }
                     }
                     var th = document.createElement("td");
                     var trd = j - 1;
                     th.id = 'shopeight_tbw2' + i + trd;
                     var cellText = document.createTextNode(add.toFixed(0));
                     th.appendChild(cellText);
                     tr.appendChild(th);
                  }
                  if ((j == 12) && (j < shopeightr1_machine_unique.length + 1)) {
                     var add = 0;
                     for (var dd = 0; dd < shopeightr1_reason_unique.length; dd++) {
                        var cd = j - 1;
                        var a = document.getElementById('shopeight_tbw2' + dd + cd).innerHTML;
                        if (a > " ") {
                           add = add + parseFloat(a);
                        }
                     }
                     var th = document.createElement("td");
                     var trd = j - 1;
                     th.id = 'shopeight_tbw2' + i + trd;
                     var cellText = document.createTextNode(add.toFixed(0));
                     th.appendChild(cellText);
                     tr.appendChild(th);
                  }
               }
            }
            tblBody.appendChild(tr);
            table.appendChild(tblBody);
            body.appendChild(table);
         }
         for (var i = 0; i < shopeightr1_reason_unique.length + 1; i++) {
            var add = 0.0;
            for (var j = 0; j < shopeightr1_machine_unique.length; j++) {
               var aa = document.getElementById("shopeight_tbw2" + i + j).innerHTML;
               if (aa > " ") {
                  add = add + parseFloat(aa);
               }
            }
            document.getElementById("shopeight_tbw2" + i + j).innerHTML = add.toFixed(0);
         }
      }
   });


}


function shopeight_per_hour() {


   $.ajax({
      type: "Get",
      url: "classes/productionlive.php?area=shopeight&type=per_hour&date="+shopeight_hr_date+"&shop="+shopeight_hr_shop+"&shift="+shopeight_hr_shift+"&shop_no=1",
      async: true,
      dataType: "json",
      success: function (data1) {
         $("#shopeighthr_table").remove();
         var table = document.createElement("table");
         var tblBody = document.createElement("tbody");
         table.id = "shopeighthr_table";
         table.setAttribute("class", "inp");
         var body = document.getElementById("shopeight_hr");
         var tr = document.createElement("tr");
         var th = document.createElement("TH");
         var cellText = document.createTextNode("Machine");
         th.appendChild(cellText);
         tr.appendChild(th);
         $.each(data1['hours'], function (hr1, hrs) {
            var th = document.createElement("TH");
            var cellText = document.createTextNode(hrs);
            th.appendChild(cellText);
            tr.appendChild(th);

         });
         tblBody.appendChild(tr);
         table.appendChild(tblBody);
         body.appendChild(table);

         $.each(data1['machines'], function (machine, machinevalues) {

         
            var tr = document.createElement("tr");
            var th = document.createElement("TH");
            var cellText = document.createTextNode(machine);
            th.appendChild(cellText);
            tr.appendChild(th);
            $.each(machinevalues, function (hr, hr_val) {
               var th = document.createElement("td");
               var cellText = document.createTextNode(parseFloat(hr_val.arc_time).toFixed(2));
               th.setAttribute('class', 'cur_speed font_18');
               th.appendChild(cellText);
               tr.appendChild(th);
            })
            tblBody.appendChild(tr);
            table.appendChild(tblBody);
            body.appendChild(table);
         })

      }
   });


}
