$(function () {
    slider()
    goods()

})



/* 轮播图 */
function slider() {
    $.ajax({
        type: 'get',
        url: 'home/swiperdata',
        datatype: 'json',
        success: function (result) {
            // console.log(result);
            // 获取数据成功得到响应
            if (result.meta.status == 200) {
                var html = template('sliderTemp', result)
                $('.pyg_banner').html(html)
            }
            //获得slider插件对象  轮播图自动轮播
            var gallery = mui('.mui-slider');
            gallery.slider({
                interval: 2000 //自动轮播周期，若为0则不自动播放，默认为0；
            });
        }
    })
}


/* 商品列表 */
function goods() {
    $.ajax({
        type: 'get',
        url: 'home/goodslist',
        datatype: 'json',
        success: function (result) {
            // console.log(result);
            if (result.meta.status == 200) {
                var html = template('goodsTemp', result)
                $('.pyg_goods').html(html)
            }
        }
    })
}