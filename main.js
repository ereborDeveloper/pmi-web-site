//глобальные переменные
var date=new Date();
var kek=0;	
//до загрузки
$(document).ready(initialise);
//вывод даты
function formatDate() {
var ned;
ned=Math.ceil(countDays(date)/7);
var months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа','сентября','октября','ноября','декабря'];
var dd = date.getDate();
if (dd < 10) dd = '0' + dd;
var mm = months[date.getMonth()];
var yy = date.getFullYear();
if (yy < 10) yy = '0' + yy;
$('#date').text(dd + ' ' + mm + ' ' + yy+' | ' +ned+' неделя');
}
//считает количество дней от текущей даты
function countDays(date)
{
var days=0;
var m=date.getMonth();
while(m!=0)
{
	switch (m)
	{
		case 2:
			if (date.getFullYear()%4==0)
			{
				days+=29;
			}
			else
			{
				days+=28;
			}
		break;
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
		days+=31;
		break;
		case 4:
		case 6:
		case 9:
		case 11:
		days+=30;
		break;
	}
m--;
}
days+=date.getDate();
return days;
}
//выводит и обновляет время
function time()
{
var dat=new Date();
var hh=dat.getHours();
if (hh<10) hh='0'+hh;
var mm=dat.getMinutes();
if (mm<10) mm='0'+mm;
var ss=dat.getSeconds();
if (ss<10) ss='0'+ss;
$('#time').text(hh+":"+mm+":"+ss+" ");   
var interval = setInterval(function() {
var dat=new Date();
var hh=dat.getHours();
if (hh<10) hh='0'+hh;
var mm=dat.getMinutes();
if (mm<10) mm='0'+mm;
var ss=dat.getSeconds();
if (ss<10) ss='0'+ss;
$('#time').text(hh+":"+mm+":"+ss+" ");      
}, 1000);
}
//рандомайзер
function setRandom()
{
var inter=setInterval(function(){
var r=Math.ceil(Math.random()*1000);
if (r%3==0)
{
$('#random_stuff').text("Квадратный корень из "+r+" равен " +Math.sqrt(r).toFixed(4));
}
else
{
if (r%3==1)$('#random_stuff').text("Кубический корень из "+r+" равен " +Math.cbrt(r).toFixed(4));
else $('#random_stuff').text(r);
}

},5000);
}
function Bank()
{
$.ajax({
  url: "https://www.cbr.ru/",
  crossDomain: true,
  data: $(this).attr('href'),
  xhrFields: {
    withCredentials: true
  },
  success: function(out) {
    console.log(out);
  }
});
return value;
}
//Инициализация, считай main и точка входа
function initialise() {
	var top=[0,0,-107,-112,0,0];
	var a;
    $('.short_new').on('click', function(ev){
		ev.stopPropagation();
		ev.preventDefault();
		a=$(this).index();
		if (a!=kek)
		{
			console.log(a);
            $(".short_new:eq("+(a-3)+")").animate({
                top:top[0],
                height: 35
            },245);
            $(".short_new:eq("+(a-2)+")").animate({
                top:top[0],
                height: 35
            },245);
            $(".short_new:eq("+(a-1)+")").animate({
                top:top[0],
                height: 35
            },245);
            $(".short_new:eq("+(a)+")").animate({
				top:top[1],
                height: 137
            },245);
            $(".short_new:eq("+(a+1)+")").animate({
                top:top[2]+a.height,
                height: 35
            },250);
            $(".short_new:eq("+(a+2)+")").animate({
                top:top[3]+a.height	,
                height: 35
            },250);
		kek=$(this).index();
		}
	});

	time();
    formatDate();
	setRandom();
    changeNumbers();
    trigNumber(nn-1);
    displaySlide(1);
    loops();
};

//main сверху, это функции для галереи
var nn=1;
var flag=false;
var dur=5000;
function loops(){
    setTimeout(function(){
        nn=nn%6;
        displaySlide(nn+1);
        trigNumber(nn);
        nn++;
//        console.log(nn);
        loops(); // рекурсия
    }, dur);
};
function displaySlide(n){
    var i;
    var slides =$('.slides');
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[n-1].style.display = "block";

}
function changeNumbers()
{
    $('.gal_click').on('click', function(ev) {
        ev.stopPropagation();
  //      console.log("true");
        $('.gal_click').css({ background:"url(../Резать/новости/подтекст.png)","padding-bottom":"4px",color:"#fff",border:"none","box-shadow":"none"} );
        $(this).css({ background:"#fff",color:"#500",border:"1px #aaa solid", "padding-bottom":"5px","box-shadow":"0 0 2px #9af"} );
        nn=$(this).index();
    });
}
function trigNumber(n) {
    //console.log(n);
    //console.log($(".gal_click:gt("+(n-1)+")").html());
	$(".gal_click:eq("+n+")").trigger( "click" );

}
