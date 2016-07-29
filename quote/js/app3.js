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
                console.log(d)
            }


        });


    });
    $("form :input").focusout(function(){
        console.log($("form").serialize());
    });
});