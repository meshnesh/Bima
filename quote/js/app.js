$('#next, #tab2' ).on('click',function(){

    var a = document.getElementById("value").value;
    var b = document.getElementById("car").value;
    var c = document.getElementById("type").value;
    var d = document.getElementById("year").value;
    var message = document.getElementById('confirmMessage');
    var badColor = "#ff6666";

    if ( a, b, c, d === "") {



        message.style.color = badColor;
        message.innerHTML = "* FIELDS ARE MANDATORY!";
        $('#content2').hide();
        return false
    }else {
        // alert('magic will happen!');
        $('#content2').show();
        $('#content1').hide();


    }
});




$('#btnGetResponse, #tab3').on('click',function(){

    var e = document.getElementById("email").value;
    var f = document.getElementById("first_name").value;
    var g = document.getElementById("last_name").value;
    var h = document.getElementById("plan").value;
    var i = document.getElementById("phone_number").value;
    var j = document.getElementById("date").value;
    var message2 = document.getElementById('confirmMessage2');
    var badColor = "#ff6666";
    if ( e, f, g, f, h, i, j === "") {


        message2.style.color = badColor;
        message2.innerHTML = "* FIELDS ARE MANDATORY!";
        $('#content3').hide();
        return false
    }else {
        // alert('magic will happen!');
        $('#content3').show();
        $('#content2').hide();
        $('#content1').hide();

    }
});