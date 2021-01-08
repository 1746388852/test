$(".inp1").click(function(){
    $.ajax({
        url:"./api/register.json",
        data:{
            mobile:$("#inp1").val(),
        },
        dataType:"json",
        success:function(res){
            if(res.code==1){
                localStorage.setItem("mobile",$("#inp1").val())
                location.href ="./首页.html"
            }
        }
    })
})