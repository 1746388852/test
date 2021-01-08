
    var aSpans = $(".main1_2_body13").find("span");
    var iNow = 0;
    var count = Math.ceil(15 / 4) - 1;
    //启动定时器，让其一开始自己滚动
    var timer = setInterval(function(){
        iNow++;
        tab();
        if(iNow == count){
            clearInterval(timer);
        }
    }, 4000);
    aSpans.click(function(){
        if($(this).index() == 0){
            iNow--;
            iNow = Math.max(0, iNow);
        }else{
            iNow++;
            iNow = Math.min(count, iNow)
        }
        tab();
    })
    function tab(){
        iNow == 0 ? aSpans.eq(0).addClass("span-dis") : aSpans.eq(0).removeClass("span-dis");
        iNow == count ? aSpans.eq(1).addClass("span-dis") : aSpans.eq(1).removeClass("span-dis")
        var iTarget = iNow == count ? iNow * -992 + 496 : iNow * -992;
        $(".main1_2_body12 ul").css({
            transform: `translate3d(${iTarget}px, 0px, 0px)`,
            transitionDuration: "1000ms"
        })
    }

    //定时器倒计时，每天14:00开抢，每天22:00开抢
    function countDown(){
        var nowDate = new Date();
        var hour = nowDate.getHours();
        var date = nowDate.getDate();
        var afterDate = new Date();
        //计算倒计时时间间隔
        if(hour < 14){
            afterDate.setHours(14);
            $(".main1_2_body11 .round").html("14:00 场");
        }else if(hour >= 14 && hour < 22){
            afterDate.setHours(22);
            $(".main1_2_body11 .round").html("22:00 场");
        }else{
            $(".main1_2_body11 .round").html("明日14:00 场");
            afterDate.setHours(14);
            afterDate.setDate(date + 1);
        }
        afterDate.setMilliseconds(0);
        afterDate.setSeconds(0);
        afterDate.setUTCMilliseconds(0);

        //计算倒计时总秒数
        var count = parseInt((afterDate.getTime() - nowDate.getTime()) / 1000);
    

        var aSpans = $(".main1_2_body .count").find("span");
        var timer = setInterval(function(){
            count--;
            aSpans.eq(2).html(doubleNum(count % 60));
            aSpans.eq(1).html(doubleNum(parseInt(count / 60) % 60));
            aSpans.eq(0).html(doubleNum(parseInt(count / 3600) % 24));
            if(count == 0){
                clearInterval(timer);
                $(".main1_2_body .round1").html("本次活动结束");
            }
        }, 1000);
    }
    function doubleNum(num){
        if(num < 10){
            return "0" + num;
        }else{
            return num;
        }
    }
    countDown()
    