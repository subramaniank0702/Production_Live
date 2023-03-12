function reload_fun()
 {
  location.reload();
 setTimeout(function () { 
      reload_fun();
    }, 3600000);
 }

 function live()
 {
    
          if(shopone_ip>"")
          {    
            shopone_get_live_data();
    $("#reason_sel_down option[value='1']").show();

          }
             if(shoptwo_ip>"")
          { 
 shoptwo_get_live_data();
    $("#reason_sel_down option[value='2']").show();


}

     if(shopthree_ip>"")
          { 
  shopthree_get_live_data();
    $("#reason_sel_down option[value='3']").show();

  
}
       if(shopfour_ip>"")
          { 
  shopfour_get_live_data();
    $("#reason_sel_down option[value='4']").show();


 }

       if(shopfive_ip>"")
          { 
  shopfive_get_live_data();
    $("#reason_sel_down option[value='5']").show();

  
}

     if(shopsix_ip>"")
      { 
  shopsix_get_live_data();
    $("#reason_sel_down option[value='6']").show();

  
  }

  if(shopseven_ip>"")
   { 
  shopseven_get_live_data(); 
    $("#reason_sel_down option[value='7']").show();

 }

if(shopeight_ip>""){
  shopeight_get_live_data();
    $("#reason_sel_down option[value='8']").show();


 }
    if(shopnine_ip>"")
      { 
  shopnine_get_live_data();
    $("#reason_sel_down option[value='9']").show();

 
 } 

     if(shopten_ip>"")
          { 
  shopten_get_live_data(); 
    $("#reason_sel_down option[value='10']").show();

 }

     if(shopeleven_ip>"")
          { 
  shopeleven_get_live_data();
    $("#reason_sel_down option[value='11']").show();


 }   

     if(shoptwelve_ip>"")
          { 
  shoptwelve_get_live_data();
    $("#reason_sel_down option[value='12']").show();

  
}

     if(shopthirteen_ip>"")
          { 
  shopthirteen_get_live_data();
    $("#reason_sel_down option[value='13']").show();

 
 } 

 if(shopfourteen_ip>"")
          { 
  shopfourteen_get_live_data();
    $("#reason_sel_down option[value='14']").show();


 }

 if(shopfifteen_ip>"")
          { 
  shopfifteen_get_live_data();
    $("#reason_sel_down option[value='15']").show();


 }   

 if(shopsixteen_ip>"")
          { 
  shopsixteen_get_live_data();
    $("#reason_sel_down option[value='16']").show();


 }  

 if(shopseventeen_ip>"")
          { 
  shopseventeen_get_live_data();
    $("#reason_sel_down option[value='17']").show();


 }   
 if(shopeighteen_ip>"")
          { 
  shopeighteen_get_live_data();
    $("#reason_sel_down option[value='18']").show();

 
}

 if(shopnineteen_ip>"")
          { 
 shopnineteen_get_live_data();
    $("#reason_sel_down option[value='19']").show();

 
 } 

 if(shoptwenty_ip>"")
          { 
  shoptwenty_get_live_data();
    $("#reason_sel_down option[value='20']").show();

    
}
    
  setTimeout(function () {
     
     
      live();
   }, 2000);
 }
 function min()
 {

      if(shopone_ip>"")
          {    
            shopone_downtime(); //1 min
            
          }
             if(shoptwo_ip>"")
          { 
 shoptwo_downtime();

}

     if(shopthree_ip>"")
          { 
 shopthree_downtime();
 
}
       if(shopfour_ip>"")
          { 
 shopfour_downtime();

 }

       if(shopfive_ip>"")
          { 
 shopfive_downtime();

}

     if(shopsix_ip>"")
      { 
 shopsix_downtime();
 
  }

  if(shopseven_ip>"")
   { 
 shopseven_downtime();

 }

if(shopeight_ip>""){
 shopeight_downtime();

 }
    if(shopnine_ip>"")
      { 
 shopnine_downtime();
  
 } 

     if(shopten_ip>"")
          { 
 shopten_downtime();

 }

     if(shopeleven_ip>"")
          { 
 shopeleven_downtime();

 }   

     if(shoptwelve_ip>"")
          { 
 shoptwelve_downtime(); 
}

     if(shopthirteen_ip>"")
          { 
 shopthirteen_downtime();  
 } 

 if(shopfourteen_ip>"")
          { 
 shopfourteen_downtime();
 }

 if(shopfifteen_ip>"")
          { 
 shopfifteen_downtime();
 }   

 if(shopsixteen_ip>"")
          { 
 shopsixteen_downtime();
 }  

 if(shopseventeen_ip>"")
          { 
 shopseventeen_downtime();
 }   
 if(shopeighteen_ip>"")
          { 
 shopeighteen_downtime();  
}

 if(shopnineteen_ip>"")
          { 
 shopnineteen_downtime(); 
 } 

 if(shoptwenty_ip>"")
          { 
 shoptwenty_downtime();   
}

      if(shopone_ip>"")
          {    
     
            shopone_hr_production()  //1 min
      
          }
             if(shoptwo_ip>"")
          { 

 shoptwo_hr_production(); 

}

     if(shopthree_ip>"")
          { 
 shopthree_hr_production();  
}
       if(shopfour_ip>"")
          { 
 shopfour_hr_production(); 

 }

       if(shopfive_ip>"")
          { 
 shopfive_hr_production(); 
}

     if(shopsix_ip>"")
      { 
 shopsix_hr_production(); 
  }

  if(shopseven_ip>"")
   { 
 shopseven_hr_production(); 
 }

if(shopeight_ip>""){
 shopeight_hr_production(); 
 }
    if(shopnine_ip>"")
      { 
 shopnine_hr_production(); 
 } 

     if(shopten_ip>"")
          { 
 shopten_hr_production(); 
 }

     if(shopeleven_ip>"")
          { 
 shopeleven_hr_production(); 
 }   

     if(shoptwelve_ip>"")
          { 
 shoptwelve_hr_production(); 
}

     if(shopthirteen_ip>"")
          { 
 shopthirteen_hr_production(); 
 } 

 if(shopfourteen_ip>"")
          { 
 shopfourteen_hr_production(); 
 }

 if(shopfifteen_ip>"")
          { 
 shopfifteen_hr_production(); 
 }   

 if(shopsixteen_ip>"")
          { 
 shopsixteen_hr_production(); 
 }  

 if(shopseventeen_ip>"")
          { 
 shopseventeen_hr_production(); 
 }   
 if(shopeighteen_ip>"")
          { 
 shopeighteen_hr_production(); 
}

 if(shopnineteen_ip>"")
          { 
 shopnineteen_hr_production(); 
 } 

 if(shoptwenty_ip>"")
          { 
 shoptwenty_hr_production(); 
}

setTimeout(function () {
  
      min();
   }, 60000);
 }

 function hr_min()
 {
   shopone_per_hour();  
 setTimeout(function () {
    
      hr_min();
   }, 300000);
 }




$(document).ready(function () {

    $("#reason_sel_down option[value='1']").hide();
    $("#reason_sel_down option[value='2']").hide();
    $("#reason_sel_down option[value='3']").hide();
    $("#reason_sel_down option[value='4']").hide();
    $("#reason_sel_down option[value='5']").hide();
    $("#reason_sel_down option[value='6']").hide();
    $("#reason_sel_down option[value='7']").hide();
    $("#reason_sel_down option[value='8']").hide();
    $("#reason_sel_down option[value='9']").hide();
    $("#reason_sel_down option[value='10']").hide();
    $("#reason_sel_down option[value='11']").hide();
    $("#reason_sel_down option[value='12']").hide();
    $("#reason_sel_down option[value='13']").hide();
    $("#reason_sel_down option[value='14']").hide();
    $("#reason_sel_down option[value='15']").hide();
    $("#reason_sel_down option[value='16']").hide();
    $("#reason_sel_down option[value='17']").hide();
    $("#reason_sel_down option[value='18']").hide();
    $("#reason_sel_down option[value='19']").hide();
    $("#reason_sel_down option[value='20']").hide();


  $(".job_name").hide();
$(".operator_name1").hide();
$(".per_arcon").hide();
$(".d_time").hide();
$(".machine_off").hide();
$(".amps").hide();
$(".amps_dev").hide();
$(".vol").hide();
$(".vol_dev").hide();
$(".gas_flow_rate").hide();
$(".gas_flow_rate_dev").hide();
$(".cost_per_kg").hide();

var res=window.location.href;
var atd=res.split("?");
var atd23;
if (typeof atd[1] !== "undefined") 
{
atd23=atd[1].split("#");
atd23[0]=decodeURI(atd23[0]);

}
 $.ajax({
        type: "get",
        url: "classes/getdata.php?type=check11&module=check_info",
        data: {
          user_name:atd23[0]
       },
       async: true,
        dataType: "json",
        success: function (data1) {

         if(data1[0].job_name==1){$(".job_name").show();}else{$(".job_name").hide();}
         if(data1[0].op_name==1){$(".operator_name1").show();}else{$(".operator_name1").hide();}
         if(data1[0].arc_on==1){$(".per_arcon").show();}else{$(".per_arcon").hide();}
         if(data1[0].down_t==1){$(".d_time").show();}else{$(".d_time").hide();}
         if(data1[0].mc_off==1){$(".machine_off").show();}else{$(".machine_off").hide();}
         if(data1[0].amps==1){$(".amps").show();}else{$(".amps_dev").hide();}
         if(data1[0].amps_dev==1){$(".amps_dev").show();}else{$(".amps_dev").hide();}
         if(data1[0].volt==1){$(".vol").show();}else{$(".vol").hide();}
         if(data1[0].volt_dev==1){$(".vol_dev").show();}else{$(".vol_dev").hide();}
         if(data1[0].gas==1){$(".gas_flow_rate").show();}else{$(".gas_flow_rate").hide();}
         if(data1[0].gas_dev==1){$(".gas_flow_rate_dev").show();}else{$(".gas_flow_rate_dev").hide();}
         if(data1[0].cost_kg==1){$(".cost_per_kg").show();}else{$(".cost_per_kg").hide();}

         if(data1[0].shop1==1){$("#shopone").show();}else{$("#shopone").hide();}
         if(data1[0].shop1_l1==1){$("#shopone_live_label").show();$("#shopone_realtime").show();}else{$("#shopone_live_label").hide();$("#shopone_realtime").hide();}
         if(data1[0].shop1_l2==1){$("#shopone_downtime").show();}else{$("#shopone_downtime").hide();}
         if(data1[0].shop1_l3==1){$("#shopone_hr").show();}else{$("#shopone_hr").hide();}
         if(data1[0].shop1_l4==1){$("#shopone_wait_down").show();}else{$("#shopone_wait_down").hide();}


         if(data1[0].shop2==1){$("#shoptwo").show();}else{$("#shoptwo").hide();}
         if(data1[0].shop2_l1==1){$("#shoptwo_live_label").show();$("#shoptwo_realtime").show();}else{$("#shoptwo_live_label").hide();$("#shoptwo_realtime").hide();}
         if(data1[0].shop2_l2==1){$("#shoptwo_downtime").show();}else{$("#shoptwo_downtime").hide();}
         if(data1[0].shop2_l3==1){$("#shoptwo_hr").show();}else{$("#shoptwo_hr").hide();}
         if(data1[0].shop2_l4==1){$("#shoptwo_wait_down").show();}else{$("#shoptwo_wait_down").hide();}

         if(data1[0].shop3==1){$("#shopthree").show();}else{$("#shopthree").hide();}
         if(data1[0].shop3_l1==1){$("#shopthree_live_label").show();$("#shopthree_realtime").show();}else{$("#shopthree_live_label").hide();$("#shopthree_realtime").hide();}
         if(data1[0].shop3_l2==1){$("#shopthree_downtime").show();}else{$("#shopthree_downtime").hide();}
         if(data1[0].shop3_l3==1){$("#shopthree_hr").show();}else{$("#shopthree_hr").hide();}
         if(data1[0].shop3_l4==1){$("#shopthree_wait_down").show();}else{$("#shopthree_wait_down").hide();}

         if(data1[0].shop4==1){$("#shopfour").show();}else{$("#shopfour").hide();}
         if(data1[0].shop4_l1==1){$("#shopfour_live_label").show();$("#shopfour_realtime").show();}else{$("#shopfour_live_label").hide();$("#shopfour_realtime").hide();}
         if(data1[0].shop4_l2==1){$("#shopfour_downtime").show();}else{$("#shopfour_downtime").hide();}
         if(data1[0].shop4_l3==1){$("#shopfour_hr").show();}else{$("#shopfour_hr").hide();}
         if(data1[0].shop4_l4==1){$("#shopfour_wait_down").show();}else{$("#shopfour_wait_down").hide();}

         if(data1[0].shop5==1){$("#shopfive").show();}else{$("#shopfive").hide();}
         if(data1[0].shop5_l1==1){$("#shopfive_live_label").show();$("#shopfive_realtime").show();}else{$("#shopfive_live_label").hide();$("#shopfive_realtime").hide();}
         if(data1[0].shop5_l2==1){$("#shopfive_downtime").show();}else{$("#shopfive_downtime").hide();}
         if(data1[0].shop5_l3==1){$("#shopfive_hr").show();}else{$("#shopfive_hr").hide();}
         if(data1[0].shop5_l4==1){$("#shopfive_wait_down").show();}else{$("#shopfive_wait_down").hide();}

         if(data1[0].shop6==1){$("#shopsix").show();}else{$("#shopsix").hide();}
         if(data1[0].shop6_l1==1){$("#shopsix_live_label").show();$("#shopsix_realtime").show();}else{$("#shopsix_live_label").hide();$("#shopsix_realtime").hide();}
         if(data1[0].shop6_l2==1){$("#shopsix_downtime").show();}else{$("#shopsix_downtime").hide();}
         if(data1[0].shop6_l3==1){$("#shopsix_hr").show();}else{$("#shopsix_hr").hide();}
         if(data1[0].shop6_l4==1){$("#shopsix_wait_down").show();}else{$("#shopsix_wait_down").hide();}

         if(data1[0].shop7==1){$("#shopseven").show();}else{$("#shopseven").hide();}
         if(data1[0].shop7_l1==1){$("#shopseven_live_label").show();$("#shopseven_realtime").show();}else{$("#shopseven_live_label").hide();$("#shopseven_realtime").hide();}
         if(data1[0].shop7_l2==1){$("#shopseven_downtime").show();}else{$("#shopseven_downtime").hide();}
         if(data1[0].shop7_l3==1){$("#shopseven_hr").show();}else{$("#shopseven_hr").hide();}
         if(data1[0].shop7_l4==1){$("#shopseven_wait_down").show();}else{$("#shopseven_wait_down").hide();}

         if(data1[0].shop8==1){$("#shopeight").show();}else{$("#shopeight").hide();}
         if(data1[0].shop8_l1==1){$("#shopeight_live_label").show();$("#shopeight_realtime").show();}else{$("#shopeight_live_label").hide();$("#shopeight_realtime").hide();}
         if(data1[0].shop8_l2==1){$("#shopeight_downtime").show();}else{$("#shopeight_downtime").hide();}
         if(data1[0].shop8_l3==1){$("#shopeight_hr").show();}else{$("#shopeight_hr").hide();}
         if(data1[0].shop8_l4==1){$("#shopeight_wait_down").show();}else{$("#shopeight_wait_down").hide();}

         if(data1[0].shop9==1){$("#shopnine").show();}else{$("#shopnine").hide();}
         if(data1[0].shop9_l1==1){$("#shopnine_live_label").show();$("#shopnine_realtime").show();}else{$("#shopnine_live_label").hide();$("#shopnine_realtime").hide();}
         if(data1[0].shop9_l2==1){$("#shopnine_downtime").show();}else{$("#shopnine_downtime").hide();}
         if(data1[0].shop9_l3==1){$("#shopnine_hr").show();}else{$("#shopnine_hr").hide();}
         if(data1[0].shop9_l4==1){$("#shopnine_wait_down").show();}else{$("#shopnine_wait_down").hide();}

         if(data1[0].shop10==1){$("#shopten").show();}else{$("#shopten").hide();}
         if(data1[0].shop10_l1==1){$("#shopten_live_label").show();$("#shopten_realtime").show();}else{$("#shopten_live_label").hide();$("#shopten_realtime").hide();}
         if(data1[0].shop10_l2==1){$("#shopten_downtime").show();}else{$("#shopten_downtime").hide();}
         if(data1[0].shop10_l3==1){$("#shopten_hr").show();}else{$("#shopten_hr").hide();}
         if(data1[0].shop10_l4==1){$("#shopten_wait_down").show();}else{$("#shopten_wait_down").hide();}

         if(data1[0].shop11==1){$("#shopeleven").show();}else{$("#shopeleven").hide();}
         if(data1[0].shop11_l1==1){$("#shopeleven_live_label").show();$("#shopeleven_realtime").show();}else{$("#shopeleven_live_label").hide();$("#shopeleven_realtime").hide();}
         if(data1[0].shop11_l2==1){$("#shopeleven_downtime").show();}else{$("#shopeleven_downtime").hide();}
         if(data1[0].shop11_l3==1){$("#shopeleven_hr").show();}else{$("#shopeleven_hr").hide();}
         if(data1[0].shop11_l4==1){$("#shopeleven_wait_down").show();}else{$("#shopeleven_wait_down").hide();}

         if(data1[0].shop12==1){$("#shoptwelve").show();}else{$("#shoptwelve").hide();}
         if(data1[0].shop12_l1==1){$("#shoptwelve_live_label").show();$("#shoptwelve_realtime").show();}else{$("#shoptwelve_live_label").hide();$("#shoptwelve_realtime").hide();}
         if(data1[0].shop12_l2==1){$("#shoptwelve_downtime").show();}else{$("#shoptwelve_downtime").hide();}
         if(data1[0].shop12_l3==1){$("#shoptwelve_hr").show();}else{$("#shoptwelve_hr").hide();}
         if(data1[0].shop12_l4==1){$("#shoptwelve_wait_down").show();}else{$("#shoptwelve_wait_down").hide();}

         if(data1[0].shop13==1){$("#shopthirteen").show();}else{$("#shopthirteen").hide();}
         if(data1[0].shop13_l1==1){$("#shopthirteen_live_label").show();$("#shopthirteen_realtime").show();}else{$("#shopthirteen_live_label").hide();$("#shopthirteen_realtime").hide();}
         if(data1[0].shop13_l2==1){$("#shopthirteen_downtime").show();}else{$("#shopthirteen_downtime").hide();}
         if(data1[0].shop13_l3==1){$("#shopthirteen_hr").show();}else{$("#shopthirteen_hr").hide();}
         if(data1[0].shop13_l4==1){$("#shopthirteen_wait_down").show();}else{$("#shopthirteen_wait_down").hide();}

         if(data1[0].shop14==1){$("#shopfourteen").show();}else{$("#shopfourteen").hide();}
         if(data1[0].shop14_l1==1){$("#shopfourteen_live_label").show();$("#shopfourteen_realtime").show();}else{$("#shopfourteen_live_label").hide();$("#shopfourteen_realtime").hide();}
         if(data1[0].shop14_l2==1){$("#shopfourteen_downtime").show();}else{$("#shopfourteen_downtime").hide();}
         if(data1[0].shop14_l3==1){$("#shopfourteen_hr").show();}else{$("#shopfourteen_hr").hide();}
         if(data1[0].shop14_l4==1){$("#shopfourteen_wait_down").show();}else{$("#shopfourteen_wait_down").hide();}

         if(data1[0].shop15==1){$("#shopfifteen").show();}else{$("#shopfifteen").hide();}
         if(data1[0].shop15_l1==1){$("#shopfifteen_live_label").show();$("#shopfifteen_realtime").show();}else{$("#shopfifteen_live_label").hide();$("#shopfifteen_realtime").hide();}
         if(data1[0].shop15_l2==1){$("#shopfifteen_downtime").show();}else{$("#shopfifteen_downtime").hide();}
         if(data1[0].shop15_l3==1){$("#shopfifteen_hr").show();}else{$("#shopfifteen_hr").hide();}
         if(data1[0].shop15_l4==1){$("#shopfifteen_wait_down").show();}else{$("#shopfifteen_wait_down").hide();}

         if(data1[0].shop16==1){$("#shopsixteen").show();}else{$("#shopsixteen").hide();}
         if(data1[0].shop16_l1==1){$("#shopsixteen_live_label").show();$("#shopsixteen_realtime").show();}else{$("#shopsixteen_live_label").hide();$("#shopsixteen_realtime").hide();}
         if(data1[0].shop16_l2==1){$("#shopsixteen_downtime").show();}else{$("#shopsixteen_downtime").hide();}
         if(data1[0].shop16_l3==1){$("#shopsixteen_hr").show();}else{$("#shopsixteen_hr").hide();}
         if(data1[0].shop16_l4==1){$("#shopsixteen_wait_down").show();}else{$("#shopsixteen_wait_down").hide();}

         if(data1[0].shop17==1){$("#shopseventeen").show();}else{$("#shopseventeen").hide();}
         if(data1[0].shop17_l1==1){$("#shopseventeen_live_label").show();$("#shopseventeen_realtime").show();}else{$("#shopseventeen_live_label").hide();$("#shopseventeen_realtime").hide();}
         if(data1[0].shop17_l2==1){$("#shopseventeen_downtime").show();}else{$("#shopseventeen_downtime").hide();}
         if(data1[0].shop17_l3==1){$("#shopseventeen_hr").show();}else{$("#shopseventeen_hr").hide();}
         if(data1[0].shop17_l4==1){$("#shopseventeen_wait_down").show();}else{$("#shopseventeen_wait_down").hide();}

         if(data1[0].shop18==1){$("#shopeighteen").show();}else{$("#shopeighteen").hide();}
         if(data1[0].shop18_l1==1){$("#shopeighteen_live_label").show();$("#shopeighteen_realtime").show();}else{$("#shopeighteen_live_label").hide();$("#shopeighteen_realtime").hide();}
         if(data1[0].shop18_l2==1){$("#shopeighteen_downtime").show();}else{$("#shopeighteen_downtime").hide();}
         if(data1[0].shop18_l3==1){$("#shopeighteen_hr").show();}else{$("#shopeighteen_hr").hide();}
         if(data1[0].shop18_l4==1){$("#shopeighteen_wait_down").show();}else{$("#shopeighteen_wait_down").hide();}

         if(data1[0].shop19==1){$("#shopnineteen").show();}else{$("#shopnineteen").hide();}
         if(data1[0].shop19_l1==1){$("#shopnineteen_live_label").show();$("#shopnineteen_realtime").show();}else{$("#shopnineteen_live_label").hide();$("#shopnineteen_realtime").hide();}
         if(data1[0].shop19_l2==1){$("#shopnineteen_downtime").show();}else{$("#shopnineteen_downtime").hide();}
         if(data1[0].shop19_l3==1){$("#shopnineteen_hr").show();}else{$("#shopnineteen_hr").hide();}
         if(data1[0].shop19_l4==1){$("#shopnineteen_wait_down").show();}else{$("#shopnineteen_wait_down").hide();}

         if(data1[0].shop20==1){$("#shoptwenty").show();}else{$("#shoptwenty").hide();}
         if(data1[0].shop20_l1==1){$("#shoptwenty_live_label").show();$("#shoptwenty_realtime").show();}else{$("#shoptwenty_live_label").hide();$("#shoptwenty_realtime").hide();}
         if(data1[0].shop20_l2==1){$("#shoptwenty_downtime").show();}else{$("#shoptwenty_downtime").hide();}
         if(data1[0].shop20_l3==1){$("#shoptwenty_hr").show();}else{$("#shoptwenty_hr").hide();}
         if(data1[0].shop20_l4==1){$("#shoptwenty_wait_down").show();}else{$("#shoptwenty_wait_down").hide();}


        }});


   $.ajax({
      type: "Get",
      url: "classes/productionlive.php?area=shops",
      async: true,
      dataType: "json",
      success: function (data1) {
         shopone_ip = data1.hours[0];
         shoptwo_ip = data1.hours[1];
         shopthree_ip = data1.hours[2];
         shopfour_ip = data1.hours[3];
         shopfive_ip = data1.hours[4];
         shopsix_ip = data1.hours[5];
         shopseven_ip = data1.hours[6];
         shopeight_ip = data1.hours[7];
         shopnine_ip = data1.hours[8];
         shopten_ip = data1.hours[9];
         shopeleven_ip = data1.hours[10];
         shoptwelve_ip = data1.hours[11];
         shopthirteen_ip = data1.hours[12];
         shopfourteen_ip = data1.hours[13];
         shopfifteen_ip = data1.hours[14];
         shopsixteen_ip = data1.hours[15];
         shopseventeen_ip = data1.hours[16];
         shopeighteen_ip = data1.hours[17];
         shopnineteen_ip = data1.hours[18];
         shoptwenty_ip = data1.hours[19];

      
    
          if(shopone_ip>"")
          {    
            shopone_get_live_data();
            shopone_downtime(); //1 min
            shopone_hr_production()  //1 min
            setTimeout(function() { shopone_per_hour() ; }, 2000);
              //5 min
          }
          else{$("#shopone").hide();}
             if(shoptwo_ip>"")
          { 
 shoptwo_get_live_data();
 shoptwo_downtime();
 shoptwo_hr_production(); 
   setTimeout(function() { shoptwo_per_hour() ; }, 2000);
}
          else{$("#shoptwo").hide();}

     if(shopthree_ip>"")
          { 
  shopthree_get_live_data();
 shopthree_downtime();
 shopthree_hr_production(); 
   setTimeout(function() { shopthree_per_hour() ; }, 2000);
 
}
          else{$("#shopthree").hide();}

       if(shopfour_ip>"")
          { 
  shopfour_get_live_data();
 shopfour_downtime();
 shopfour_hr_production(); 
   setTimeout(function() { shopfour_per_hour() ; }, 2000);

 }
          else{$("#shopfour").hide();}

       if(shopfive_ip>"")
          { 
  shopfive_get_live_data();
 shopfive_downtime();
 shopfive_hr_production(); 
    setTimeout(function() { shopfive_per_hour() ; }, 2000);
  
}
          else{$("#shopfive").hide();}

     if(shopsix_ip>"")
      { 
  shopsix_get_live_data();
 shopsix_downtime();
 shopsix_hr_production(); 
    setTimeout(function() { shopsix_per_hour() ; }, 2000);
 
  }
          else{$("#shopsix").hide();}

  if(shopseven_ip>"")
   { 
  shopseven_get_live_data();
 shopseven_downtime();
 shopseven_hr_production(); 
    setTimeout(function() { shopseven_per_hour() ; }, 2000);
 
 }
          else{$("#shopseven").hide();}

if(shopeight_ip>""){
  shopeight_get_live_data();
 shopeight_downtime();
 shopeight_hr_production(); 
    setTimeout(function() { shopeight_per_hour() ; }, 2000);

 }
          else{$("#shopeight").hide();}

    if(shopnine_ip>"")
      { 
  shopnine_get_live_data();
 shopnine_downtime();
 shopnine_hr_production(); 
    setTimeout(function() { shopnine_per_hour() ; }, 2000);

 } 
          else{$("#shopnine").hide();}

     if(shopten_ip>"")
          { 
  shopten_get_live_data();
 shopten_downtime();
 shopten_hr_production(); 
    setTimeout(function() { shopten_per_hour() ; }, 2000);

 }
          else{$("#shopten").hide();}

     if(shopeleven_ip>"")
          { 
  shopeleven_get_live_data();
 shopeleven_downtime();
 shopeleven_hr_production(); 
    setTimeout(function() { shopeleven_per_hour() ; }, 2000);

 }   
  else{$("#shopeleven").hide();}

     if(shoptwelve_ip>"")
          { 
  shoptwelve_get_live_data();
 shoptwelve_downtime();
 shoptwelve_hr_production(); 
    setTimeout(function() { shoptwelve_per_hour() ; }, 2000);

}
          else{$("#shoptwelve").hide();}

     if(shopthirteen_ip>"")
          { 
  shopthirteen_get_live_data();
 shopthirteen_downtime();
 shopthirteen_hr_production(); 
    setTimeout(function() { shopthirteen_per_hour() ; }, 2000);

 } 
          else{$("#shopthirteen").hide();}

 if(shopfourteen_ip>"")
          { 
  shopfourteen_get_live_data();
 shopfourteen_downtime();
 shopfourteen_hr_production(); 
    setTimeout(function() { shopfourteen_per_hour() ; }, 2000);

 }
          else{$("#shopfourteen").hide();}

 if(shopfifteen_ip>"")
          { 
  shopfifteen_get_live_data();
 shopfifteen_downtime();
 shopfifteen_hr_production(); 
    setTimeout(function() { shopfifteen_per_hour() ; }, 2000);

 }   
          else{$("#shopfifteen").hide();}

 if(shopsixteen_ip>"")
          { 
  shopsixteen_get_live_data();
 shopsixteen_downtime();
 shopsixteen_hr_production(); 
    setTimeout(function() { shopsixteen_per_hour() ; }, 2000);

 }  
          else{$("#shopsixteen").hide();}

 if(shopseventeen_ip>"")
          { 
  shopseventeen_get_live_data();
 shopseventeen_downtime();
 shopseventeen_hr_production(); 
    setTimeout(function() { shopseventeen_per_hour() ; }, 2000);

 }   
          else{$("#shopseventeen").hide();}

 if(shopeighteen_ip>"")
          { 
  shopeighteen_get_live_data();
 shopeighteen_downtime();
 shopeighteen_hr_production(); 
    setTimeout(function() { shopeighteen_per_hour() ; }, 2000);

}
          else{$("#shopeighteen").hide();}

 if(shopnineteen_ip>"")
          { 
 shopnineteen_get_live_data();
 shopnineteen_downtime();
 shopnineteen_hr_production(); 
    setTimeout(function() { shopnineteen_per_hour() ; }, 2000);

 } 
          else{$("#shopnineteen").hide();}

 if(shoptwenty_ip>"")
          { 
  shoptwenty_get_live_data();
 shoptwenty_downtime();
 shoptwenty_hr_production(); 
    setTimeout(function() { shoptwenty_per_hour() ; }, 2000);
    
}
          else{$("#shoptwenty").hide();}
            
          
      }
   });
   


       setTimeout(function () { reload_fun();
    }, 3600000);

 setTimeout(function () {

      live();
   }, 2000);
   setTimeout(function () {
      min();
   }, 60000);
   setTimeout(function () {
      hr_min();
   }, 300000);
    });



 


