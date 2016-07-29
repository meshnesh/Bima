$('form').on('submit', function (event) {
    event.preventDefault();
    var form = $(this);
    $("#btnGetResponse2").click(function () {
        $.ajax({
            type: "POST"
            , url: 'http://symatechlabs.com/bima/api/submitQuote.php'
            , data: form.serialize()
            , dataType: "json"
            , success: function (d) {
                if (d.submitQuote[0].result == "SUCCESS") {
                    console.log(d);
                    window.location.href = '../profile%20page/index.html';
                } else {
                    // alert('Wrong credentials');


                    console.log('not a success');
                }
            }


        });


    });
    $("form :input").focusout(function(){
        console.log($("form").serialize());
    });
});