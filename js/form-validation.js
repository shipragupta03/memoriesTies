$(function(){
    $("form[name='contactUs']").validate({
        rules:{
            name:"required",
            email:{
                 required:true,
                 email: true,
                 maxlength:"100",
                 pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            },
            phNum:{
                required: true,
                number:true,
                maxlength:10,
                pattern:"^?\d3?(-| )?\d{3}(-| )?\d{4}$"
            },
            message:{
                maxlength:500
            }
        },
        messages:{
            name: "Please enter name!",
            email:"Please enter email with correct format",
            phNum:"Please enter phone number with correct format",
            message:"Message cannot be larger than 500 words"
        },
        submitHandler: function(form) {
            form.submit();
        }
    });

});

