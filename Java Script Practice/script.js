//Creating object
var car ={
    car_type:"Tesla",
    car_model:"Model 3",
    Price : 3500,
    //Methodin javascript
    teslaAutoPilot : function(){
        document.write("<h2>This car has Auto pilot</h2>");
    }

    
}
car.teslaAutoPilot();

function buttonClick(){
    var str = document.getElementById("heading2").innerHTML;
    alert("value inside the text box is : "+str);
}


//using input text field
function fn1(){
    var str1 = document.getElementById("text1").value;
    alert(str1);
}

//using radio button

function fn2(){
    var rd1 = document.getElementById("option1");
    var rd2 = document.getElementById("option2");

    if(rd1.checked==true)
     alert("The gender selecte is : "+rd1.value);
    else if(rd2.checked==true)
    alert("The gender selecte is : "+rd2.value);
    else
     alert("No gender selected");
}



//using selectBox
function fn3(){
    var select = document.getElementById("selectbox");
    alert(select.options[select.selectedIndex].value);
}

//Regular expression using charset
function validate(){
    var str1 = document.getElementById("text1").value;
    var regx =/[a-z][sdh]Eoo/i;//charset and range
    //if we dont want some charactors
    var reg = /[^asd]00/;
    //regular expression for moblie
    var reex = /^[7-7]\d{9}$/; //^ denote the starting $ denotes the ending.

}