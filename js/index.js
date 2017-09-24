/**
 * Created by F on 2017/6/10.
 */
//调用全屏函数
$(function(){
    $('#dowebok').fullpage({
        //设置背景颜色
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        afterLoad:function(link,index){
            //console.log(index);

            $('.section').removeClass('current');
            setTimeout(function () {
                //一个从一开始一个从0开始所以要减1
                $('.section').eq(index-1).addClass("current");
            },100)

        }

    });
});