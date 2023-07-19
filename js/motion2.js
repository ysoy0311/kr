var tabNum = 0;
var count = 0;

function vSlide2(){
 
    count += 1;
    var ln = $(".accomodation_slide_img>div:eq("+tabNum+") ul li:last-child").index();  // last index number 2

    if(count <= ln ){
        $(".accomodation_slide_img>div:eq("+tabNum+") ul").stop().animate({marginLeft: -100 * count + "%"},"fast");
        vSlideBtn2(count);

    }else{
        $(".accomodation_slide_img>div:eq("+tabNum+") ul li:first-child").appendTo(".accomodation_slide_img>div:eq("+tabNum+") ul");
        $(".accomodation_slide_img>div:eq("+tabNum+") ul").css({marginLeft: -100 * (ln-1) + "%" }); 
        $(".accomodation_slide_img>div:eq("+tabNum+") ul").stop().animate({marginLeft: -100 * ln + "%"},"fast", function(){ 
            $(".accomodation_slide_img>div:eq("+tabNum+") ul li:last-child").prependTo(".accomodation_slide_img>div:eq("+tabNum+") ul"); 
            $(".accomodation_slide_img>div:eq("+tabNum+") ul").css({marginLeft:0}); 
            count = 0; 
            vSlideBtn2(count);
        }); 
    };
};

// 이전 이미지를 슬라이드
function vSlideRe2(){ 
    count -= 1; 
    var ln = $(".accomodation_slide_img>div:eq("+tabNum+") ul li:last-child").index();
    if(count >= 0 ){
        $(".accomodation_slide_img>div:eq("+tabNum+") ul").stop().animate({marginLeft: -100 * count + "%"},"fast");
        vSlideBtn2(count);
    }else{
        $(".accomodation_slide_img>div:eq("+tabNum+") ul li:last-child").prependTo(".accomodation_slide_img>div:eq("+tabNum+") ul"); 
        $(".accomodation_slide_img>div:eq("+tabNum+") ul").css({marginLeft:"-100%"});
        $(".accomodation_slide_img>div:eq("+tabNum+") ul").stop().animate({marginLeft: 0},"fast", function(){
            $(".accomodation_slide_img>div:eq("+tabNum+") ul li:first-child").appendTo(".accomodation_slide_img>div:eq("+tabNum+") ul");
            $(".accomodation_slide_img>div:eq("+tabNum+") ul").css({marginLeft: -100 * ln + "%"});
            count = ln;
            vSlideBtn2(count);
        }); 
    };
};

function vSlideBtn2(count){
    $(".accomodation_slide_btn2 button").css({background:"none", width:"10px", border: "1px solid #d82d33"});
    $(".accomodation_slide_btn2 button:eq("+ count +")").css({background:"#d82d33", width:"30px", border: 0 });
};

$(function(){

    $(".gnb>li a").on("mouseover",function(){
        if( $(window).width() >= 1280 ){
            $("#header").stop().animate({ height:"360px"},"fast");
        };
    });

    $("#header").on("mouseleave",function(){
        if( $(window).width() >= 1280 ){
            $("#header").stop().animate({ height:"80px"},"fast");
        };
    });

    $(".nav_view_btn").click(function(){
        $("nav").stop().animate({ marginRight: 0 });
    });
    $(".nav_close_btn").click(function(){
        $("nav").stop().animate({ marginRight: "-100%" });
    });

    $(window).resize(function(){
        if( $(window).width() >=1280){
            $("nav").css({ marginRight:0});
        }else{
            $("nav").css({ marginRight:"-100%"});
        };
    });

    // 맨위로 버튼
    $("#footer>p button").on("click",function(){
        $("html").animate({scrollTop:0});
    });
    $("#footer>p").hide();
    $(window).scroll(function(){
        if( $(window).scrollTop() <200 ){    
            $("#footer>p").hide();
        }else{
            $("#footer>p").show();
        };
    });

    $(".tab_menu_wrap li").on("click",function(){
        tabNum =$(this).index(); // 0, 1, 2
        $(".accomodation_slide_img>div").hide();
        $(".accomodation_slide_img>div:eq("+tabNum+")").show();

        $(".tab_menu_wrap li button").css({ background:"#FDFFFB", border:"1px solid #bababa", color:"#454545" });
        $(this).children("button").css({ background:"#d82d33",  border:"1px solid #d82d33", color:"#fff" });
    });



    $(".accomodation_slide_btn1 button:first").on("click",function(){
        vSlideRe2();
    });

    // 1. 좌우조작1 - 다음버튼 클릭시 다음 이미지 슬라이드
    $(".accomodation_slide_btn1 button:last").on("click",function(){
        vSlide2(); // 다음버튼 클릭시 즉각 vSlide() 사용
    });

    $(".accomodation_slide_btn2 button").on("click",function(){
        count = $(this).index(); // 네비게이션 조작1에서 사용되었던 카운트 변수에 현재 번호를 대입하여 상호 최종 위치를 공유
        $(".accomodation_slide_img>div:eq("+tabNum+") ul").stop().animate({marginLeft: -100 * count  + "%"});
        vSlideBtn2(count);
    });

});