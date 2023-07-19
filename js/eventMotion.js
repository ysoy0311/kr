var egList = setInterval("egNext()",3000);

//이벤트 배너 다음 슬라이드
function egNext(){

    if( $(window).width() > 800 ){

        $(".event_banner").stop().animate({ marginLeft: "-33.3333%"},"slow",function(){
            $(".event_banner>li:first").appendTo(".event_banner");
            $(".event_banner>li:nth-child(2) img").css({ width: "100%" });
            $(".event_banner>li:not(:nth-child(2)) img").css({ width:"80%" });
            $(".event_banner").css({ marginLeft: 0});
        });
    }else{
        $(".event_banner").stop().animate({ marginLeft: "-100%"},"slow",function(){
            $(".event_banner>li:first").appendTo(".event_banner");
            $(".event_banner").css({ marginLeft: 0});
        });
    };
    
};

//이벤트 배너 이전 슬라이드
function egPrv(){

    if( $(window).width() > 800 ){

        $(".event_banner>li:last").prependTo(".event_banner");
        $(".event_banner").css({ marginLeft: "-33.3333%"});
        $(".event_banner").stop().animate({ marginLeft: 0},"slow",function(){
            
            $(".event_banner>li:nth-child(2) img").css({ width: "100%"});
            $(".event_banner>li:not(:nth-child(2)) img").css({ width:"80%" });
            
        });

    }else{
        $(".event_banner>li:last").prependTo(".event_banner");
        $(".event_banner").css({ marginLeft: "-100%"});
        $(".event_banner").stop().animate({ marginLeft: 0},"slow",function(){
            
            $(".event_banner>li:nth-child(2) img").css({ width: "100%" });
            $(".event_banner>li:not(:nth-child(2)) img").css({ width:"80%" });
            
        });
    };
    
};

//브라우저 리사이즈 발생시 이벤트 배너 3리스트,1리스트 제어
function egResize(){

    if( $(window).width() > 800 ){
        $(".event_banner").css({ width: "200%"});        
        $(".event_banner>li img").css({ width: "80%"});
        $(".event_banner>li:nth-child(2) img").css({ width: "100%"});
    }else{
        $(".event").css({  height:"1000px"});
        $(".event_banner").css({ width: "600%", height:"700px"});
        $(".event_banner>li img").css({ width: "80%"});
    };

};

$(function(){


    $(".event_banner>li").css({ textAlign:"center" });

    egResize();
    $(window).resize(function(){  egResize()  });

    $(".event_controls p:last").click(function(){
        clearInterval(egList);
        egNext();      
    });

    $(".event_controls p:first").click(function(){
        clearInterval(egList);
        egPrv();
    });

    $(".event_player button:first").on("click",function(){
        clearInterval(egList);
    });
    $(".event_player button:last").on("click",function(){
        clearInterval(egList);
        egNext(); 
        egList = setInterval("egNext()",3000);
    });

});