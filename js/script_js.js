//작업 이력 리스트
function Worklist(year, name){
    this.year = year;
    this.name = name;
    this.wl = function(){
        document.write('<strong class="work_year">'+this.year+'</strong>  <span class="work_name">', this.name ,'</span>');
    }
}
var worklist = [
    new Worklist('2011', 'KBS 문화탐험-세계의 유산'),
    new Worklist('2012', 'JTBC 청담동 살아요'),
    new Worklist('2013', '(뮤지컬)남자가 사랑할 때 홍보영상'),
    new Worklist('2013', '정부3.0 REDIS'),
    new Worklist('2014', 'A.True 브랜드 홍보영상'),
    new Worklist('2016', 'Cyramza.사이람자 홍보영상'),
    new Worklist('2016', '산업부 균형발전 정책 홍보영상'),
    new Worklist('2017', 'Eisai.에자이 홍보영상'),
    new Worklist('2017', '필립모리스 사내 홍보영상'),
    new Worklist('2017', 'Novatis.노바티스 홍보영상'),
    new Worklist('2018', '포항 봉계지구 키오스크 및 홍보영상'),
    new Worklist('2019', 'Alunbrig.알룬브릭 홍보영상'),
    new Worklist('2019', 'Fiasp.피아스프 홍보영상'),
    new Worklist('2020', '폴리텍 대학 홍보영상'),
    new Worklist('2020', 'Replagal.레프라갈 홍보영상'),
    new Worklist('2021', 'Adalloce.아달로체 홍보영상'),
    new Worklist('2021', 'Esoduo.에소듀오 홍보영상'),
    new Worklist('2021', '질병관리청 유전자질환검사 관련 정보영상'),
    new Worklist('2021', 'AI-X. 인공지능 AI 관련 영상')
]

function working(){
    var num = worklist.length;
    const wList = document.getElementById('work_list');

    wList.innerHTML += '<h4>작업 이력 리스트</h4>';

    for(var i=0; i<num; i++){
        wList.innerHTML += '<li><strong class="work_year">'+worklist[i].year+'</strong>  <span class="work_name">'+worklist[i].name+'</span></li>';
    }
}

working();

//년도별 썸네일 리스트
function Thumnail(pic, title, name, wyear, length){
    this.pic = pic;
    this.title = title;
    this.name = name;
    this.wyear = wyear;
    this.length = length;
}
var thumnail = [
    // 2015 : 0~7
    new Thumnail('img/thumnail/2015/2011_kbs.jpg', 'KBS 문화탐험-세계의 유산', 'kbs', '2011', 22),
    new Thumnail('img/thumnail/2015/2012_chungdamdong.jpg', 'JTBC 청담동 살아요', 'chungdamdong', '2012', 6),
    new Thumnail('img/thumnail/2015/2012_haccp.jpg', 'HACCP', 'haccp', '2012', 12),
    new Thumnail('img/thumnail/2015/2013_manlove.jpg', '뮤지컬 [남자가 사랑할 때]', 'manlove', '2013', 6),
    new Thumnail('img/thumnail/2015/2013_redis.jpg', '정부3.0 REIDS', 'redis', '2013', 9),
    new Thumnail('img/thumnail/2015/2014_ature.jpg', 'A.TRUE 브랜드 홍보영상', 'atrue', '2014', 9),
    new Thumnail('img/thumnail/2015/2015_jeju.jpg', '제주도 관광 안내 영상', 'jeju', '2015', 1),
    new Thumnail('img/thumnail/2015/2015_shingi.jpg', '신기시장 홍보영상(배경)', 'shingi', '2015', 4),
    // 2016 : 8~11
    new Thumnail('img/thumnail/2016/2016_cyramza.jpg','Cyramza.사이람자 홍보영상', 'cyramza', '2016', 8),
    new Thumnail('img/thumnail/2016/2016_ganilever.jpg','Ganilever.가니레버 사용안내영상', 'ganilever', '2016', 4),
    new Thumnail('img/thumnail/2016/2016_kepco.jpg','한국전력공사 홍보 영상', 'kepco', '2016', 7),
    new Thumnail('img/thumnail/2016/2016_motie.jpg','산업통상자원부 정책 홍보영상', 'motie', '2016', 6),
    // 2017 : 12~16
    new Thumnail('img/thumnail/2017/2017_eisai.jpg', 'Eisai.에자이 홍보영상', 'eisai', '2017', 9),
    new Thumnail('img/thumnail/2017/2017_kepco.jpg', '한국전력공사 홍보 영상', 'kepco', '2017', 5),
    new Thumnail('img/thumnail/2017/2017_morris.jpg', '필립모리스 사내 홍보영상', 'morris', '2017', 9),
    new Thumnail('img/thumnail/2017/2017_novartis.jpg', 'Novartis.노바티스 홍보영상', 'novartis', '2017', 11),
    new Thumnail('img/thumnail/2017/2017_two.jpg', 'MBC 투깝스 소품 이미지', 'two', '2017', 1),
    // 2018 : 17~20
    new Thumnail('img/thumnail/2018/2018_bong_ask.jpg', '포항봉계지구 [농업의 길을 묻다]', 'bong_ask', '2018', 2),
    new Thumnail('img/thumnail/2018/2018_bong_kiosk.jpg', '포항봉계지구 [농촌의 4계절]', 'bong_kiosk', '2018', 16),
    new Thumnail('img/thumnail/2018/2018_bong_story.jpg', '포항봉계지구 [농업의 역사]', 'bong_story', '2018', 13),
    new Thumnail('img/thumnail/2018/2018_pnh.jpg', 'PNH치료제 홍보 영상', 'pnh', '2018', 2),
    // 2019 : 21~22
    new Thumnail('img/thumnail/2019/2019_alunbrig.jpg', 'Alunbrig.알룬브릭 홍보영상', 'alunbrig', '2019', 16),
    new Thumnail('img/thumnail/2019/2019_fiasp.jpg', 'Fiasp.피아스프 홍보영상', 'fiasp', '2019', 7),
    // 2020 : 23~24
    new Thumnail('img/thumnail/2020/2020_polytec.jpg', '폴리텍대학 홍보영상', 'polytec', '2020', 6),
    new Thumnail('img/thumnail/2020/2020_replagal.jpg', 'Replagal.레프라갈 홍보영상', 'replagal', '2020', 6),
    // 2021 : 25~31
    new Thumnail('img/thumnail/2021/2021_adalloce.jpg', 'Adalloce.아달로체 홍보영상', 'adalloce', '2021', 4),
    new Thumnail('img/thumnail/2021/2021_esoduo.jpg', 'Esoduo.에소듀오 홍보영상', 'esoduo', '2021', 17),
    new Thumnail('img/thumnail/2021/2021_kdca.jpg', '질병관리청 유전자질환검사 영상', 'kdca', '2021', 3),
    new Thumnail('img/thumnail/2021/2021_mucosta.jpg', 'Mucosta.무코스타 홍보영상', 'mucosta', '2021', 1),
    new Thumnail('img/thumnail/2021/2021_aix_diagnosis.jpg', 'Ai-X 의료 진단 홍보영상', 'aix_diagnosis', '2021', 6),
    new Thumnail('img/thumnail/2021/2021_ivf.jpg', 'IVF-M HP 사용안내 영상', 'ivf', '2021', 13),
    new Thumnail('img/thumnail/2021/2021_aix.jpg', 'Ai-X 정부지원 홍보영상', 'aix', '2021', 9)
]

const thumtit = document.getElementById('thum_tit');
const tliSet = document.getElementById('thum_set');

$('.artwork').on('click', function(){
    var $tliSet = $('#thum_set');
    var year = $(this).text();

    $('.thum_wrap').addClass('on');
    $tliSet.empty();

    if(year <= 2015){
        thumtit.innerText = '2015년 이전 작업들';
        for(var i=0; i<8; i++){
            tliSet.innerHTML += '<li class="thum_list"><p class="img_thum"><img src="'+ thumnail[i].pic+'" alt="'+ thumnail[i].title +'"></p><span class="img_tit">'+ thumnail[i].title +'</span><span class="file_name hdd">' + thumnail[i].name +'</span><span class="file_year hdd">' + thumnail[i].wyear +'</span><span class="file_length hdd">' + thumnail[i].length +'</span></li>';
        }
    }else if(year == 2016){
        thumtit.innerText = '2016년 작업들';
        for(var i=8; i<12; i++){
            tliSet.innerHTML += '<li class="thum_list"><p class="img_thum"><img src="'+ thumnail[i].pic+'" alt="'+ thumnail[i].title +'"></p><span class="img_tit">'+ thumnail[i].title +'</span><span class="file_name hdd">' + thumnail[i].name +'</span><span class="file_year hdd">' + thumnail[i].wyear +'</span><span class="file_length hdd">' + thumnail[i].length +'</span></li>';
        }
    }else if(year == 2017){
        thumtit.innerText = '2017년 작업들';
        for(var i=12; i<17; i++){
            tliSet.innerHTML += '<li class="thum_list"><p class="img_thum"><img src="'+ thumnail[i].pic+'" alt="'+ thumnail[i].title +'"></p><span class="img_tit">'+ thumnail[i].title +'</span><span class="file_name hdd">' + thumnail[i].name +'</span><span class="file_year hdd">' + thumnail[i].wyear +'</span><span class="file_length hdd">' + thumnail[i].length +'</span></li>';
        }
    }else if(year == 2018){
        thumtit.innerText = '2018년 작업들';
        for(var i=17; i<21; i++){
            tliSet.innerHTML += '<li class="thum_list"><p class="img_thum"><img src="'+ thumnail[i].pic+'" alt="'+ thumnail[i].title +'"></p><span class="img_tit">'+ thumnail[i].title +'</span><span class="file_name hdd">' + thumnail[i].name +'</span><span class="file_year hdd">' + thumnail[i].wyear +'</span><span class="file_length hdd">' + thumnail[i].length +'</span></li>';
        }
    }else if(year == 2019){
        thumtit.innerText = '2019년 작업들';
        for(var i=21; i<23; i++){
            tliSet.innerHTML += '<li class="thum_list"><p class="img_thum"><img src="'+ thumnail[i].pic+'" alt="'+ thumnail[i].title +'"></p><span class="img_tit">'+ thumnail[i].title +'</span><span class="file_name hdd">' + thumnail[i].name +'</span><span class="file_year hdd">' + thumnail[i].wyear +'</span><span class="file_length hdd">' + thumnail[i].length +'</span></li>';
        }
    }else if(year == 2020){
        thumtit.innerText = '2020년 작업들';
        for(var i=23; i<25; i++){
            tliSet.innerHTML += '<li class="thum_list"><p class="img_thum"><img src="'+ thumnail[i].pic+'" alt="'+ thumnail[i].title +'"></p><span class="img_tit">'+ thumnail[i].title +'</span><span class="file_name hdd">' + thumnail[i].name +'</span><span class="file_year hdd">' + thumnail[i].wyear +'</span><span class="file_length hdd">' + thumnail[i].length +'</span></li>';
        }
    }else if(year == 2021){
        thumtit.innerText = '2021년 작업들';
        for(var i=25; i<32; i++){
            tliSet.innerHTML += '<li class="thum_list"><p class="img_thum"><img src="'+ thumnail[i].pic+'" alt="'+ thumnail[i].title +'"></p><span class="img_tit">'+ thumnail[i].title +'</span><span class="file_name hdd">' + thumnail[i].name +'</span><span class="file_year hdd">' + thumnail[i].wyear +'</span><span class="file_length hdd">' + thumnail[i].length +'</span></li>';
        }
    }
    var thumSet = $('#thum_set');
    var thumLength = thumSet.children().length;
    console.log(thumLength);

    if(thumLength >4){
        var swiper = new Swiper(".mySwiper", {
            direction: "vertical",
            slidesPerView: "auto",
            scrollbar: {
            el: ".swiper-scrollbar",
            },
            mousewheel: false,
        });
    }



    $('main').children().removeClass('on');
    $('.imgwrap').addClass('on');

    var thumnailList = $('.thum_list');
    var thumSubYear = thumnailList.find('.file_year').eq(0).text();
    var thumSubName = thumnailList.find('.img_tit').eq(0).text();
    var thumSubFile = thumnailList.find('.file_name').eq(0).text();
    var thumSubLength = thumnailList.find('.file_length').eq(0).text();
    
    $('span.img_length').text('1');

    const workYear = document.getElementById('year');
    const workTitle = document.getElementById('work_tit');
    const IMG = document.getElementById('workImg');

    function imgSlide(){
        workYear.innerText = '('+thumSubYear+')';
        workTitle.innerText = thumSubName;
        IMG.setAttribute('src','img/illust/'+thumSubYear+'_'+thumSubFile+'_1.jpg');

        var currentNum = 1;
        var totalNum = thumSubLength;

        $('span.arrow.right').click(function(){
            currentNum++;
            if(currentNum > totalNum){currentNum=1;}
            $('span.img_length').text(currentNum);
            $('#workImg').attr('src','img/illust/'+thumSubYear+'_'+thumSubFile+'_'+currentNum+'.jpg');
        });

        $('span.arrow.left').click(function(){
            currentNum--;
            if(currentNum < 1){currentNum = totalNum;}
            $('span.img_length').text(currentNum);
            $('#workImg').attr('src','img/illust/'+thumSubYear+'_'+thumSubFile+'_'+currentNum+'.jpg');
        });
    }

    imgSlide();

    $('.thum_list').click(function(){
        var thumYear = $(this).find('.file_year').text();
        var thumName = $(this).find('.img_tit').text();
        var thumFile = $(this).find('.file_name').text();
        var fileLenght = $(this).find('.file_length').text();

        var currentNum = 1;
        var totalNum = fileLenght;

        $('#year').html('('+thumYear+')');
        $('#work_tit').html(thumName);
        $('span.img_length').text(currentNum);
        $('#workImg').attr('src','img/illust/'+thumYear+'_'+thumFile+'_1.jpg');

        $('span.arrow.right').click(function(){
            currentNum++;
            if(currentNum > totalNum){currentNum=1;}
            $('span.img_length').text(currentNum);
            $('#workImg').attr('src','img/illust/'+thumYear+'_'+thumFile+'_'+currentNum+'.jpg');
        });

        $('span.arrow.left').click(function(){
            currentNum--;
            if(currentNum < 1){currentNum = totalNum;}
            $('span.img_length').text(currentNum);
            $('#workImg').attr('src','img/illust/'+thumYear+'_'+thumFile+'_'+currentNum+'.jpg');
        });
    });


});

