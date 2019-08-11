//до загрузки
$(document).ready(initialise);
var tn=-3;
var a=1;
function initialise() {
    changeTitle();
    trigTitle(tn);
};
function changeTitle()
{

    $(".titlemenu").on('click', function(ev) {
        ev.stopPropagation();
      //  console.log($(this).width());
        $('.titlemenu').animate({"font-size": "16pt", "margin-top": "0px", opacity: 0.3}, 50);



            var len = 0;
            var i = 0;
            while (i < $(this).index()) {
                len = len + $(".titlemenu:gt(" + (i) + ")").width();
     //           console.log($(".titlemenu:gt(" + (i) + ")").width());
    //            console.log(len);
                i++;
            }
            if ($(".titlemenu:last").index() == $(this).index()) {
  //              console.log(len);
                len = len + 40;
            }
           // console.log($(this).index() - 1);
//            console.log(i);

            $("#slidemenu").animate({"margin-left": -len + "px"}, 350);
            $(this).animate({"font-size": "17pt", "margin-top": "-1px", opacity: 1}, 150);
            tn = $(this).index();
        $(".about").animate({opacity:0},100);
            a=$(this).index();
        slideText(a);
    });

}
function trigTitle(n) {
    //console.log(n);
    //console.log($(".titlemenu:gt("+(n)+")").html());
    $(".titlemenu:eq("+n+")").trigger( "click" );

}
function slideText(tn)
{
    //console.log(tn);


    $(".about:eq("+tn+")").animate({opacity:1},100);
    var slides =$('.about');
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[tn].style.display = "block";

}
