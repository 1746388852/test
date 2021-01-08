$(".btn").click(function(){
    $.ajax({
        url:"./api/login.json",
        data:{
            mobile:$("#item").val(),
            password:$("#item1").val()
        },
        dataType:"json",
        success:function(res){
            if(res.code==1){
                localStorage.setItem("mobile",$("#item").val())
                localStorage.setItem("password",$("#item1").val())
                location.href ="./购物车.html"
            }
        }
    })
})