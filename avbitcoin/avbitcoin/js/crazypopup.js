var modal_crazy = true;
function initCrazyPopup(){
    var mp = 0;
    $('#modal-crazy').modal({
        show: false
    });
    $('body').mouseleave(function(){

        if( mp < 150 && modal_crazy == true ){
            $('#modal-crazy').modal('show');
            modal_crazy = false;
        }
    });
    $(window).mousemove(function(e){
        mp = e.clientY;
    });
    $('#modal-crazy a').click(function(){
        conf = false;
        return true;
    });
}
