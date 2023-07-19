var count = 1;
function notice_slide(){
    count += 1;
    if( count <=4 ){
        $(".notice_list li").hide();
        $(".notice_list li:nth-child("+count+")").fadeIn();
    }else{
        count = 1;
        $(".notice_list li").hide();
        $(".notice_list li:nth-child(1)").fadeIn("fast");
    };
    $(".notice_controls span:nth-child(1)").text( count );
       
};

function notice_slideRe(){
    count-= 1;
    if( count > 0 ){
        $(".notice_list li").hide();
        $(".notice_list li:nth-child("+count+")").fadeIn("fast");
    }else{
        count=4;
        $(".notice_list li").hide();
        $(".notice_list li:nth-child(4)").fadeIn("fast");
       
    };  
    $(".notice_controls span:nth-child(1)").text( count );
};


$(function(){
    $(".notice_controls button:first").on("click",function(){ notice_slideRe();  });
    $(".notice_controls button:last").on("click",function(){  notice_slide();   });
});