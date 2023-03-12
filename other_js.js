          $(document).ready(function () {
            
            if($("#reason_sel_down option[value!='']").length==0){

                  $("#reason_sel_down").hide();
            }
         })

            function reason_file_new()
{
    var modal = document.getElementById("myModal_reason");
      var btn=document.getElementById("clo_reason");
   
  
 
      modal.style.display = "block";

      btn.onclick = function() 
      {
      modal.style.display = "none";
      }
     
}


  function data_set_reason()
{

var value_sel=$("#reason_sel_down").val();
var file_address="usr/sdext/live_data/master_reason.csv";



$.ajax({
type: "Get",
url: "classes/productionrealtime.php?area=downtime&type=csv&file="+file_address+"&shop_no="+value_sel,
async: true,
success: function (data1) {
  //console.log(data1);
  $("#inp12255").remove();
  var table = document.createElement("table");
var tblBody = document.createElement("tbody");
table.id = "inp12255";
table.setAttribute("class", "responsive-table");
var body = document.getElementById("data_table_reason1");
var down_data = data1.split(/\r?\n|\r/);
for (var i = -2; i < down_data.length-1; i++) {
   var tr = document.createElement("tr");
for(var j=0;j<13;j++){
if(i==-2){
if(j==0)
      {
        var th = document.createElement("TH");
          var cellText = document.createTextNode("Date");
          th.setAttribute("id","head_col"+j);
          th.appendChild(cellText);
          tr.appendChild(th);
      }
      if(j==1)
      {
        var th = document.createElement("TH");
          var cellText = document.createTextNode("Shift");
          th.setAttribute("id","head_col"+j);
          th.appendChild(cellText);
          tr.appendChild(th);
      }
      if(j==2)
      {
        var th = document.createElement("TH");
          var cellText = document.createTextNode("Shop");
          th.setAttribute("id","head_col"+j);
          th.appendChild(cellText);
          tr.appendChild(th);
      }
      if(j==3)
      {
        var th = document.createElement("TH");
          var cellText = document.createTextNode("Machine");
          th.setAttribute("id","head_col"+j);
          th.appendChild(cellText);
          tr.appendChild(th);
      }
      if(j==4)
      {
        var th = document.createElement("TH");
          var cellText = document.createTextNode("Welder Name");
          th.setAttribute("id","head_col"+j);
          th.appendChild(cellText);
          tr.appendChild(th);
      }
      if(j==5)
      {
        var th = document.createElement("TH");
          var cellText = document.createTextNode("Downtime Min");
          th.setAttribute("id","head_col"+j);
          th.appendChild(cellText);
          tr.appendChild(th);
      }
      if(j==6)
      {
        var th = document.createElement("TH");
          var cellText = document.createTextNode("From time");
          th.setAttribute("id","head_col"+j);
          th.appendChild(cellText);
          tr.appendChild(th);
      }
      if(j==7)
      {
        var th = document.createElement("TH");
          var cellText = document.createTextNode("To time");
          th.setAttribute("id","head_col"+j);
          th.appendChild(cellText);
          tr.appendChild(th);
      }
           if(j==8)
      {
        var th = document.createElement("TH");
          var cellText = document.createTextNode("Unique ID");
          th.setAttribute("id","head_col"+j);
          th.appendChild(cellText);
          tr.appendChild(th);
      }
           if(j==9)
      {
        var th = document.createElement("TH");
          var cellText = document.createTextNode("Major Reason");
          th.setAttribute("id","head_col"+j);
          th.appendChild(cellText);
          tr.appendChild(th);
      }
           if(j==10)
      {
        var th = document.createElement("TH");
          var cellText = document.createTextNode("Minor Reason");
          th.setAttribute("id","head_col"+j);
          th.appendChild(cellText);
          tr.appendChild(th);
      }
           if(j==11)
      {
        var th = document.createElement("TH");
          var cellText = document.createTextNode("Sub Minor Reason");
          th.setAttribute("id","head_col"+j);
          th.appendChild(cellText);
          tr.appendChild(th);
      }
             if(j==12)
      {
        var th = document.createElement("TH");
          var cellText = document.createTextNode("Sub Sub Minor Reason");
          th.setAttribute("id","head_col"+j);
          th.appendChild(cellText);
          tr.appendChild(th);
      }
      


}
else if(i==-1)
{
  if(j==0)
      {
        var th = document.createElement("TH");
          var input=document.createElement("input");
          input.setAttribute("id","myInput8");
          input.setAttribute("oninput","myFunction();");
          input.setAttribute("placeholder","Date");
          input.setAttribute("style","width: 100%;height: 35px;border-radius: 9px;color:black");
          th.appendChild(input);
          tr.appendChild(th);
      }

          if(j==1)
      {
        var th = document.createElement("TH");
          var input=document.createElement("input");
          input.setAttribute("id","myInput1");
          input.setAttribute("oninput","myFunction();");
          input.setAttribute("placeholder","Shift");
          input.setAttribute("style","width: 100%;height: 35px;border-radius: 9px;color:black");
          th.appendChild(input);
          tr.appendChild(th);
      }
      if(j==2)
      {
         var th = document.createElement("TH");
          var input=document.createElement("input");
          input.setAttribute("id","myInput2");
          input.setAttribute("oninput","myFunction();");
          input.setAttribute("placeholder","Shop");
          input.setAttribute("style","width: 100%;height: 35px;border-radius: 9px;color:black");
          th.appendChild(input);
          tr.appendChild(th);
      }
      if(j==3)
      {
         var th = document.createElement("TH");
          var input=document.createElement("input");
          input.setAttribute("id","myInput3");
          input.setAttribute("oninput","myFunction();");
          input.setAttribute("placeholder","Machine");
          input.setAttribute("style","width: 100%;height: 35px;border-radius: 9px;color:black");
          th.appendChild(input);
          tr.appendChild(th);
      }
      if(j==4)
      {
         var th = document.createElement("TH");
          var input=document.createElement("input");
          input.setAttribute("id","myInput4");
          input.setAttribute("oninput","myFunction();");
          input.setAttribute("placeholder","Welder Name");
          input.setAttribute("style","width: 100%;height: 35px;border-radius: 9px;color:black");
          th.appendChild(input);
          tr.appendChild(th);
      }
      if(j==5)
      {
        var th = document.createElement("TH");
          var input=document.createElement("input");
          input.setAttribute("id","myInput5");
          input.setAttribute("oninput","myFunction();");
          input.setAttribute("placeholder","Downtime Min");
          input.setAttribute("style","width: 100%;height: 35px;border-radius: 9px;color:black");
          th.appendChild(input);
          tr.appendChild(th);
      }
     
     
      
      
      if(j==6)
      {
        var th = document.createElement("TH");
          var input=document.createElement("input");
          input.setAttribute("id","myInput6");
          input.setAttribute("oninput","myFunction();");
          input.setAttribute("placeholder","Supplier");
          input.setAttribute("style","width: 100%; visibility:hidden; height: 35px;border-radius: 9px;color:black");
          th.appendChild(input);
          tr.appendChild(th);
      }
      if(j==7)
      {
       var th = document.createElement("TH");
          var input=document.createElement("input");
          input.setAttribute("id","myInput7");
          input.setAttribute("oninput","myFunction();");
          input.setAttribute("placeholder","Major Reason");
          input.setAttribute("style","width: 100%; visibility:hidden; height: 35px;border-radius: 9px;color:black");
          th.appendChild(input);
          tr.appendChild(th);
      }
      if(j==8)
      {
        var th = document.createElement("TH");
           th.setAttribute("style","background: #1d96b2;");
          tr.appendChild(th);
      }
       if(j==9)
      {
        var th = document.createElement("TH");
           th.setAttribute("style","background: #1d96b2;");
          tr.appendChild(th);
      }
       if(j==10)
      {
        var th = document.createElement("TH");
          th.setAttribute("style","background:  #1d96b2;");
          tr.appendChild(th);
      }
   if(j==11)
      {
        var th = document.createElement("TH");
           th.setAttribute("style","background:  #1d96b2;");
          tr.appendChild(th);
      }
       if(j==12)
      {
        var th = document.createElement("TH");
           th.setAttribute("style","background:  #1d96b2;");
          tr.appendChild(th);
      }
       if(j==13)
      {
        var th = document.createElement("TH");
           th.setAttribute("style","background:  #1d96b2;");
          tr.appendChild(th);
      }
       if(j==14)
      {
        var th = document.createElement("TH");
           th.setAttribute("style","background:  #1d96b2;");
          tr.appendChild(th);
      }

}
else
{
  if(i>1)
  {


  var down_line = down_data[i].split(',');
//////console.log(down_line);
if(j==0)
      {
        var split_date=down_line[0].split("/");
        var td = document.createElement("td");
          var cellText = document.createTextNode(split_date[0]);
          td.setAttribute("id","head_col"+j);
          td.appendChild(cellText);
          tr.appendChild(td);
      }
      if(j==1)
      {
        var td = document.createElement("td");
        var cellText = document.createTextNode(down_line[1]);
          td.setAttribute("id","head_col"+j);
          td.appendChild(cellText);
          tr.appendChild(td);
      }
      if(j==2)
      {
        var td = document.createElement("td");
          var cellText = document.createTextNode(down_line[2]);
          td.setAttribute("id","head_col"+j);
          td.appendChild(cellText);
          tr.appendChild(td);
      }
      if(j==3)
      {
        var td = document.createElement("td");
         var cellText = document.createTextNode(down_line[3]);
          td.setAttribute("id","head_col"+j);
          td.appendChild(cellText);
          tr.appendChild(td);
      }
      if(j==4)
      {
        var td = document.createElement("td");
          var cellText = document.createTextNode(down_line[4]);
          td.setAttribute("id","head_col"+j);
          td.appendChild(cellText);
          tr.appendChild(td);
      }
      if(j==5)
      {
        var td = document.createElement("td");
         var cellText = document.createTextNode(down_line[5]);
          td.setAttribute("id","head_col"+j);
          td.appendChild(cellText);
          tr.appendChild(td);
      }
      if(j==6)
      {
        var td = document.createElement("td");
          var cellText = document.createTextNode(down_line[6]);
          td.setAttribute("id","head_col"+j);
          td.appendChild(cellText);
          tr.appendChild(td);
      }
      if(j==7)
      {
        var td = document.createElement("td");
          var cellText = document.createTextNode(down_line[7]);
          td.setAttribute("id","head_col"+j);
          td.appendChild(cellText);
          tr.appendChild(td);
      }
           if(j==8)
      {
        var td = document.createElement("td");
         var cellText = document.createTextNode(down_line[8]);
          td.setAttribute("id","head_col"+j);
          td.appendChild(cellText);
          tr.appendChild(td);
      }
           if(j==9)
      {
        var td = document.createElement("td");
         var cellText = document.createTextNode(down_line[9]);
          td.setAttribute("id","head_col"+j);
          td.appendChild(cellText);
          tr.appendChild(td);
      }
           if(j==10)
      {
        var td = document.createElement("td");
          var cellText = document.createTextNode(down_line[10]);
          td.setAttribute("id","head_col"+j);
          td.appendChild(cellText);
          tr.appendChild(td);
      }
           if(j==11)
      {
        var td = document.createElement("td");
         var cellText = document.createTextNode(down_line[11]);
          td.setAttribute("id","head_col"+j);
          td.appendChild(cellText);
          tr.appendChild(td);
      }
           if(j==12)
      {
        var td = document.createElement("td");
         var cellText = document.createTextNode(down_line[12]);
          td.setAttribute("id","head_col"+j);
          td.appendChild(cellText);
          tr.appendChild(td);
      }
           if(j==13)
      {
        var td = document.createElement("td");
         var cellText = document.createTextNode(down_line[13]);
          td.setAttribute("id","head_col"+j);
          td.appendChild(cellText);
          tr.appendChild(td);
      }
           if(j==14)
      {
        var td = document.createElement("td");
          var cellText = document.createTextNode(down_line[14]);
          td.setAttribute("id","head_col"+j);
          td.appendChild(cellText);
          tr.appendChild(td);
      }




}
}
}
tblBody.appendChild(tr);
                table.appendChild(tblBody);
                body.appendChild(table);


}




}});  

}


function chat()
{
    var modal = document.getElementById("myModal1");
      var btn=document.getElementById("clo1");
      var btn1=document.getElementById("sub1");
     
    //console.log("yes");
      modal.style.display = "block";
      btn.onclick = function() 
      {
      modal.style.display = "none";
      }
     
}


function shopone_chat_fun(x)
{
shop_no=1;
machine_no=x;
chat_shop_name=shopone_name;
  if(x==1)
{
chat_machine_name=shopone_machine_array[0]; 
}
else if (x==2) {chat_machine_name=shopone_machine_array[1];}
else if (x==3) {chat_machine_name=shopone_machine_array[2];}
else if (x==4) {chat_machine_name=shopone_machine_array[3];}
else if (x==5) {chat_machine_name=shopone_machine_array[4];}
else if (x==6) {chat_machine_name=shopone_machine_array[5];}
else if (x==8) {chat_machine_name=shopone_machine_array[6];}
else if (x==9) {chat_machine_name=shopone_machine_array[7];}
else if (x==10) {chat_machine_name=shopone_machine_array[8];}
else if (x==11) {chat_machine_name=shopone_machine_array[9];}
else if (x==12) {chat_machine_name=shopone_machine_array[10];}
else if (x==13) {chat_machine_name=shopone_machine_array[11];}
else
{
}

get_chat_msg_data();
}
function shoptwo_chat_fun(x)
{
shop_no=2;
machine_no=x;
chat_shop_name=shoptwo_name;
  if(x==1)
{
chat_machine_name=shoptwo_machine_array[0]; 
}
else if (x==2) {chat_machine_name=shoptwo_machine_array[1];}
else if (x==3) {chat_machine_name=shoptwo_machine_array[2];}
else if (x==4) {chat_machine_name=shoptwo_machine_array[3];}
else if (x==5) {chat_machine_name=shoptwo_machine_array[4];}
else if (x==6) {chat_machine_name=shoptwo_machine_array[5];}
else if (x==8) {chat_machine_name=shoptwo_machine_array[6];}
else if (x==9) {chat_machine_name=shoptwo_machine_array[7];}
else if (x==10) {chat_machine_name=shoptwo_machine_array[8];}
else if (x==11) {chat_machine_name=shoptwo_machine_array[9];}
else if (x==12) {chat_machine_name=shoptwo_machine_array[10];}
else if (x==13) {chat_machine_name=shoptwo_machine_array[11];}
else
{
}

get_chat_msg_data();
}
function shopthree_chat_fun(x)
{
shop_no=3;
machine_no=x;
chat_shop_name=shopthree_name;
  if(x==1)
{
chat_machine_name=shopthree_machine_array[0]; 
}
else if (x==2) {chat_machine_name=shopthree_machine_array[1];}
else if (x==3) {chat_machine_name=shopthree_machine_array[2];}
else if (x==4) {chat_machine_name=shopthree_machine_array[3];}
else if (x==5) {chat_machine_name=shopthree_machine_array[4];}
else if (x==6) {chat_machine_name=shopthree_machine_array[5];}
else if (x==8) {chat_machine_name=shopthree_machine_array[6];}
else if (x==9) {chat_machine_name=shopthree_machine_array[7];}
else if (x==10) {chat_machine_name=shopthree_machine_array[8];}
else if (x==11) {chat_machine_name=shopthree_machine_array[9];}
else if (x==12) {chat_machine_name=shopthree_machine_array[10];}
else if (x==13) {chat_machine_name=shopthree_machine_array[11];}
else
{
}

get_chat_msg_data();
}
function shopfour_chat_fun(x)
{
shop_no=4;
machine_no=x;
chat_shop_name=shopfour_name;
  if(x==1)
{
chat_machine_name=shopfour_machine_array[0]; 
}
else if (x==2) {chat_machine_name=shopfour_machine_array[1];}
else if (x==3) {chat_machine_name=shopfour_machine_array[2];}
else if (x==4) {chat_machine_name=shopfour_machine_array[3];}
else if (x==5) {chat_machine_name=shopfour_machine_array[4];}
else if (x==6) {chat_machine_name=shopfour_machine_array[5];}
else if (x==8) {chat_machine_name=shopfour_machine_array[6];}
else if (x==9) {chat_machine_name=shopfour_machine_array[7];}
else if (x==10) {chat_machine_name=shopfour_machine_array[8];}
else if (x==11) {chat_machine_name=shopfour_machine_array[9];}
else if (x==12) {chat_machine_name=shopfour_machine_array[10];}
else if (x==13) {chat_machine_name=shopfour_machine_array[11];}
else
{
}

get_chat_msg_data();
}
function shopfive_chat_fun(x)
{
shop_no=5;
chat_shop_name=shopfive_name;
machine_no=x;
  if(x==1)
{
chat_machine_name=shopfive_machine_array[0]; 
}
else if (x==2) {chat_machine_name=shopfive_machine_array[1];}
else if (x==3) {chat_machine_name=shopfive_machine_array[2];}
else if (x==4) {chat_machine_name=shopfive_machine_array[3];}
else if (x==5) {chat_machine_name=shopfive_machine_array[4];}
else if (x==6) {chat_machine_name=shopfive_machine_array[5];}
else if (x==8) {chat_machine_name=shopfive_machine_array[6];}
else if (x==9) {chat_machine_name=shopfive_machine_array[7];}
else if (x==10) {chat_machine_name=shopfive_machine_array[8];}
else if (x==11) {chat_machine_name=shopfive_machine_array[9];}
else if (x==12) {chat_machine_name=shopfive_machine_array[10];}
else if (x==13) {chat_machine_name=shopfive_machine_array[11];}
else
{
}

get_chat_msg_data();
}


function get_chat_msg_data()
{
  var chat_file_name="sh2_chat"+machine_no+".csv";
  $("#machine_name").html(chat_shop_name+"-"+chat_machine_name);
  $('#chat_msg').empty();
$.ajax({
type: "Get",
url: "classes/productionrealtime.php?area=chat_msg_data&type=csv&file="+chat_file_name,
data: {
          shop_name:shop_no
        },
async: true,
success: function (data1) {
//console.log(data1);
var chat_data = data1.split(/\r?\n|\r/);
var name="";
var body = document.getElementById("chat_msg");
for(var i=0;i<chat_data.length;i++)
{
var chat_line = chat_data[i].split(',');
    name3="";
  if (typeof chat_line[2] === "undefined") {
      name3 = "";
    } else {
      name3= chat_line[2];
    }

    var div1 = document.createElement("div");
      var div2 = document.createElement("div");
      var div3 = document.createElement("div");
      if(name3===user_name)
{
  div1.setAttribute("class", "sen");
}
else
{
  div1.setAttribute("class", "rec");
}

  if ((chat_line[0] != "") && (chat_line[1] != "") && (chat_line[2] != "") && (chat_line[3] != "")) {

    var topic = chat_line[4];
    if (typeof chat_line[4] === "undefined") {
      topic = "No Thread";
    } else {
      topic =chat_line[4];
    }

    
    div2.setAttribute("class", "r1");
    
    div3.setAttribute("class", "r2");
    var ul = document.createElement("ul");
    ul.setAttribute("class", "ul1");
    var li1 = document.createElement("li");
    li1.setAttribute("class", "l1");
    var li2 = document.createElement("li");
    li2.setAttribute("class", "l1");
    li2.setAttribute("style"," word-break: break-word;white-space: normal;");
    var li3 = document.createElement("li");
    li3.setAttribute("class", "l2");
    var li4 = document.createElement("li");
    li4.setAttribute("class", "l3");

    

    if(shop_no<6)
          {
          var name1 = document.createTextNode(chat_line[2]);
    var machine1 = document.createTextNode(chat_line[1]);
    var thread1 = document.createTextNode(topic);
    var time1 = document.createTextNode(chat_line[0]);
    var msg1 = document.createTextNode(chat_line[3]);
          }
          else
          {
            var name1 = document.createTextNode(chat_line[1]);
    var machine1 = document.createTextNode(chat_line[3]);
    var thread1 = document.createTextNode(topic);
    var time1 = document.createTextNode(chat_line[0]);
    var msg1 = document.createTextNode(chat_line[2]);
          
          }
  
    li1.appendChild(name1);
    li2.appendChild(machine1);
    li3.appendChild(thread1);
    li4.appendChild(time1);

      li3.setAttribute("id",'shopone_thread'+i)
            li3.setAttribute("style","cursor: pointer;color:blue;");
            li3.setAttribute("onclick",'shopone_thread_select('+i+');');
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);

    div2.appendChild(ul);
    div3.appendChild(msg1);

div1.appendChild(div2);
  div1.appendChild(div3);
  body.appendChild(div1);
  }
}
document.getElementById('chat_msg').scrollTop = 9999999;
}});
}


function send_msg()
{
var message=document.getElementById("msg_rec").value;
var thread_t=document.getElementById("Thread_topic").value;
var sender_name=user_name;
var shop_name=chat_shop_name;
var machine_name=chat_machine_name;

if(thread_t=="")
{
thread_t="No Thread"; 
}

if(message=="")
{
    swal({
        title: "Please enter Message",
        text: "Write message in Message box",
        type: "warning",
        showCancelButton: false,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Ok",
        closeOnConfirm: false
      });
 
}
else
{
  if(shop_no<6)
  {
var chat_msg=machine_name+","+sender_name+","+message+","+thread_t;
  }
  else
  {
  
    var chat_msg=sender_name+","+message+","+chat_shop_name+","+thread_t;
  }

//console.log(chat_msg);
$.ajax({
type: "Get",
url: "classes/productionrealtime.php?area=chat_msg_send",
data: {
          shop_name:shop_no,
          msg:chat_msg,
          machine_no:machine_no

      },
async: true,
success: function (data1) {
swal({
        title: "Message sent",
        text: "* * * *",
        type: "success",
        showCancelButton: false,
        showConfirmButton: false,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Ok",
        closeOnConfirm: false,
        timer: 1000
      });
document.getElementById("msg_rec").value="";
document.getElementById("Thread_topic").value="";


  get_chat_msg_data();





  }});
}



}

function shopone_thread_select (x)
{

  value1=x;
document.getElementById("Thread_topic").value=document.getElementById('shopone_thread'+x).innerHTML;
document.getElementById('shopone_thread'+x).style.background="lightgrey";
document.getElementById("Thread_topic").style.background="lightgrey";
}
function shopone_reset1()
{
if(value1!="")
{
 document.getElementById('shopone_thread'+value1).style.background="white";
}
  document.getElementById("Thread_topic").style.background="white";
  document.getElementById("Thread_topic").value="";
}

function user_set()
{
  let ipv4Url = RegExp([
    '^https?:\/\/([a-z0-9\\.\\-_%]+:([a-z0-9\\.\\-_%])+?@)?',
    '((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(25[0-5]|2[0-4',
    '][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])?',
    '(:[0-9]+)?(\/[^\\s]*)?$'
  ].join(''), 'i');

  if (!ipv4Url.test(window.location.href)) {
    var url = window.location.href;
    var hostname = new URL(url).hostname;
    var pathname = new URL(url).pathname;
    var splitUrl = pathname.split('/');
    var spliturl1 = splitUrl[2].split(":");
    basepath = 'https://in.m2web.talk2m.com/LEI_Master/Connect To MES Lite/proxy/';
    ////////console.log(basepath);

  } else {
    basepath = "http://";
  }
 window.open(basepath+'10.30.0.56/LWSoft/user_assign/index.php?'+user_name+'#','_self');
}
$(document).ready(function () {





});

