var count = 0;
var vS = setInterval("vSlide()", 3000);

// 다음 이미지를 슬라이드
function vSlide(){
    count += 1;
    var ln = $(".visual_slide li:last").index();  // last index number 2

    if(count <= ln ){
        $(".visual_slide").stop().animate({marginLeft: -100 * count + "%"},"fast");
        vSlideBtn(count);

    }else{
        $(".visual_slide li:first").appendTo(".visual_slide");
        $(".visual_slide").css({marginLeft: -100 * (ln-1) + "%" }); 
        $(".visual_slide").stop().animate({marginLeft: -100 * ln + "%"},"fast", function(){ 
            $(".visual_slide li:last").prependTo(".visual_slide"); 
            $(".visual_slide").css({marginLeft:0}); 
            count = 0; 
            vSlideBtn(count);
        }); 
    };
};

// 이전 이미지를 슬라이드
function vSlideRe(){ 
    count -= 1; 
    var ln = $(".visual_slide li:last").index();
    if(count >= 0 ){
        $(".visual_slide").stop().animate({marginLeft: -100 * count + "%"},"fast");
        vSlideBtn(count);
    }else{
        $(".visual_slide li:last").prependTo(".visual_slide"); 
        $(".visual_slide").css({marginLeft:"-100%"});
        $(".visual_slide").stop().animate({marginLeft: 0},"fast", function(){
            $(".visual_slide li:first").appendTo(".visual_slide");
            $(".visual_slide").css({marginLeft: -100 * ln + "%"});
            count = ln;
            vSlideBtn(count);
        }); 
    };
};

// 현재 선택 버튼의 하이라이트 효과 ● ○ ○ ○    css 배경색 조작 (background)
function vSlideBtn(count){
    $(".slide_btn button").css({background:"rgba(255,255,255,0.2)"});
    $(".slide_btn button:eq("+ count +")").css({background:"#d82d33"});
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

    vSlideBtn(count); // 초기 현재 선택 버튼의 하이라이트 효과 설정
    // 0. 좌우조작0 - 이전버튼 클릭시 이전 이미지 슬라이드
    $(".visual_controls1 button:first").on("click",function(){
        clearInterval(vS);
        vSlideRe();
    });
    
    
    // 1. 좌우조작1 - 다음버튼 클릭시 다음 이미지 슬라이드
    $(".visual_controls1 button:last").on("click",function(){
        clearInterval(vS);
        vSlide(); // 다음버튼 클릭시 즉각 vSlide() 사용
    });

    // 2. 좌우조작2 - 정지된 이미지 슬라이드, 다시 자동재생
    $(".player button:last").on("click", function(){
        vSlide();
        vS = setInterval("vSlide()",3000);
    });

    // 바형식의 네비게이션 조작2 는 개별 버튼을 선택자로 지정하여 일일이 제어하는 방식X
    $(".slide_btn button").on("click",function(){
        clearInterval(vS);
        count = $(this).index(); // 네비게이션 조작1에서 사용되었던 카운트 변수에 현재 번호를 대입하여 상호 최종 위치를 공유
        vSlideBtn(count);
        $(".visual_slide").stop().animate({marginLeft: -100 * count  + "%"});
    });

    // 바 형식의 네비게이션 조작2의 일시정지, 자동재생 버튼을 따로 개별 구성
    $(".player button:first").on("click",function(){ clearInterval(vS); });

    $(".player button:last").on("click",function(){
        clearInterval(vS);
        vS = setInterval("vSlide()",3000);
    });

    // faq_list.dl리스트
    $(".faq_list dd:not(:first)").hide();
    $(".faq_list dt").on("click",function(){
        if($(this).next().is(":visible")){
            $(".faq_list dd").slideUp();
        }else{
            $(".faq_list dd").slideUp();
            $(this).next().slideDown();
        };
    });

    // 아도니스
    $(".adonis_info1_img_list img").click(function(){
        $(".adonis_info1_main_img img").attr("src",$(this).attr("src"));
        $(".adonis_info1_main_img img").attr("alt",$(this).attr("alt"));

        $(".adonis_info1_img_list img").removeClass("list_shadow");
        $(this).addClass("list_shadow");

    });

    // 탭메뉴
    $(".tab_menu_wrap li").on("click",function(){

        $(".tab_menu_wrap li button").css({ background:"#FDFFFB", border:"1px solid #bababa", color:"#454545" });
        $(this).children("button").css({ background:"#d82d33",  border:"1px solid #d82d33", color:"#fff" });
    });

    $(".tab_menu_wrap2 li").on("click",function(){

        $(".tab_menu_wrap2 li button").css({ background:"#FDFFFB", border:"1px solid #bababa", color:"#454545" });
        $(this).children("button").css({ background:"#d82d33",  border:"1px solid #d82d33", color:"#fff" });
    });

    $(".tab_menu_wrap3 li").on("click",function(){

        $(".tab_menu_wrap3 li button").css({ background:"#FDFFFB", border:"1px solid #bababa", color:"#454545" });
        $(this).children("button").css({ background:"#d82d33",  border:"1px solid #d82d33", color:"#fff" });
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

    // sub2_1 버튼 클릭 시 스크롤
    // 금호통영마리나리조트
    $(".location_info ul:eq(0) li button").on("click",function(){
        if( $(window).width() >= 1400 ){
            $("html").animate({scrollTop:1400});
        }else if( $(window).width() >= 1280 ){
            $("html").animate({scrollTop:1300});
        }else if( $(window).width() > 800 ){
            $("html").animate({scrollTop:2130});
        }else if( $(window).width() > 490 ){
            $("html").animate({scrollTop:3250});
        }else if( $(window).width() <= 490 ){
            $("html").animate({scrollTop:3250});
        };
        
    });
    // 금호화순리조트
    $(".location_info ul:eq(1) li button").on("click",function(){
        if( $(window).width() >= 1400 ){
            $("html").animate({scrollTop:1850});
        }else if( $(window).width() >= 1280 ){
            $("html").animate({scrollTop:1700});
        }else if( $(window).width() > 800 ){
            $("html").animate({scrollTop:3000});
        }else if( $(window).width() > 490 ){
            $("html").animate({scrollTop:4100});
        }else if( $(window).width() <= 490 ){
            $("html").animate({scrollTop:4200});
        };
        
    });
    // 금호설악리조트
    $(".location_info ul:eq(2) li button").on("click",function(){
        if( $(window).width() >= 1400 ){
            $("html").animate({scrollTop:2300});
        }else if( $(window).width() >= 1280 ){
            $("html").animate({scrollTop:2100});
        }else if( $(window).width() > 800 ){
            $("html").animate({scrollTop:3860});
        }else if( $(window).width() > 490 ){
            $("html").animate({scrollTop:4970});
        }else if( $(window).width() <= 490 ){
            $("html").animate({scrollTop:5170});
        };
        
    });
    // 금호제주리조트
    $(".location_info ul:eq(3) li button").on("click",function(){
        if( $(window).width() >= 1400 ){
            $("html").animate({scrollTop:2800});
        }else if( $(window).width() >= 1280 ){
            $("html").animate({scrollTop:2500});
        }else if( $(window).width() > 800 ){
            $("html").animate({scrollTop:4730});
        }else if( $(window).width() > 490 ){
            $("html").animate({scrollTop:5820});
        }else if( $(window).width() <= 490 ){
            $("html").animate({scrollTop:6120});
        };
        
    });


});


