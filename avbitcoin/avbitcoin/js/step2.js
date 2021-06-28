function initCountdownTime(){
    var visitTime = (new Date(new Date().valueOf() + 9*60*1000 + 45*1000)).getTime(); 
    $('#modal-crazy .secondModal p strong').countdown(visitTime, function(event){
        $(this).text(event.strftime('%M:%S'));
    });
}

$('body').mouseleave(function(){
	if( mp < 150 && modal_crazy == true ){
		initCountdownTime();
	}
});
$(window).mousemove(function(e){
	mp = e.clientY;
});