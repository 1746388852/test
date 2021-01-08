showData()
async function showData(){
    var data =await $.ajax({
        url:"./interface/showlist.php",
        dataType:"json",
        
    })
    
    if(data.code==1){
        data =data.data;
        $(".container11112").empty()
        $.each(data,function(index,item){
            $(`<div class="item">
            <div class="item-box">
                <div class="item-table">
                    <div class="item-row">
                        <div class="col-img">
                            <a href="#">
                                <img src="${item.product_img}">
                            </a>
                        </div>
                        <div class="col-name">
                            <div class="tag"></div>
                            <h3 class="title">
                                <a href="#">${item.product_name}</a>
                            </h3>
                        </div>
                        <div class="col-price">
                            ${item.product_price}
                        </div>
                        <div class="col-num">
                            <div class="col-num1">
                                <a href="#" class="cut">-</a>
                                <span>${item.product_num}</span>
                                <a href="#" class="add">+</a>
                            </div>
                        </div>
                        <div class="col-total">
                            元
                        </div>
                        <div class="col-action">
                            <a href="#" class="del">x</a>
                        </div>
                        <div class="id">${item.product_id}</div>
                    </div>
                </div>
            </div>
        </div>`).appendTo($(".container11112"))
        $(".col-total").eq(index).text(parseInt(item.product_num*item.product_price));
        })
    }
}
$(".container11112").on("click",".add",async function(){
    var data =await $.ajax({
        url:"./interface/update.php",
        type:"get",
        data:{
            id:$(this).parents(".col-num").siblings(".id").html(),
            type:"add"
        },
        dataType:"json"
    })
    if(data.code==1){
            $(this).prev().html(parseInt($(this).prev().html())+1);
            
        }
    })
    $(".container11112").on("click",".cut",async function(){
        console.log($(this).parents(".col-num"))
        console.log($(this).parents(".col-num").siblings(".id"))
        var data =await $.ajax({
            url:"./interface/update.php",
            type:"get",
            data:{
                id:$(this).parents(".col-num").siblings(".id").html(),
                type:"cut"
            },
            dataType:"json"
        })
        if(data.code==1){
                $(this).next().html(parseInt($(this).next().html())-1);
                
            }
        })

$(".container11112").on("click",".del",async function(){
    var data =await $.ajax({
        url:"./interface/del.php",
        data:{
            id:$(this).parent().next().html()
        },
        dataType:"json"
    })
    if(data.code==1){
        showData()
    }
})
