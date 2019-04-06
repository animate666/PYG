$(function () {
    totalCate()

    var cateData
    // 先获取本地数据 判断是否有数据 没有的话就发起ajax重新获取数据
    function totalCate() {
        cateData = JSON.parse(localStorage.getItem('pyg_cateData'))
        if (cateData && Date.now() - cateData.time < 3 * 60 * 1000) {
            leftCate()
            rightCate(0)
            
        } else {
            getCate()
        }
    }


    // 重新获取新数据
    function getCate() {
        $.get('categories',function (result) {
            // console.log(result);
            if (result.meta.status == 200) {
                
                cateData = {
                    'list': result.data,
                    time: Date.now()
                }
                localStorage.setItem('pyg_cateData', JSON.stringify(cateData))
                leftCate()
                rightCate(0)
            }
        }, 'json')
        
    }

    // 左侧
    function leftCate() {
        var html = template('leftTemp', cateData)
        $('.pyg_left ul').html(html)
        
        /* IScoll初始化 */
        var myScroll = new IScroll('.pyg_left');
        /* 注册左侧滚动事件  滚动到左上角 */
        $('.pyg_left').on('tap', 'li', function () {
            $(this).addClass('active').siblings().removeClass('active')
            myScroll.scrollToElement(this)
            // 将一级分类的索引绑定给对应的二级分类
            var index = $(this).index()
            rightCate(index)
        })
    }

    // 右侧
    function rightCate(index) {
        var html = template('rightTemp', cateData.list[index])
        $('.pyg_lists').html(html)
        // console.log(html);
        var imgCount = $('.pyg_lists img').length
        console.log(imgCount);
        
        // 图片加载完毕后 实现二级分类的滑动
        $('.pyg_lists img').on('load', function () {
            
            imgCount--
            if (imgCount == 0) {
                var iscroll = new IScroll('.pyg_right')
              
            }
        })
    }

})