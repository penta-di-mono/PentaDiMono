$(document).ready(function(){
    // 메뉴(about me)
    $('.main_menu>li:nth-child(1)').click(function(){

        $('.thum_wrap').removeClass('on', function(){
            $('#thum_tit').text('');
            $('#thum_set').empty();
        });
        $('main').children().removeClass('on');
        $('#aboutme').addClass('on');
    })

    //견적서
    $('div.contact ul>li:nth-child(3)').click(function(){
        $('.thum_wrap').removeClass('on', function(){
            $('#thum_tit').text('');
            $('#thum_set').empty();
        });
        $('main').children().removeClass('on');
        $('#estimate').addClass('on');
    });
});     