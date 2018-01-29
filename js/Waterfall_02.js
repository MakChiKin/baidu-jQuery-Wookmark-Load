$(document).ready(function () {
    // $(window).on('load',function () {
    //     alert('c1');
        imgLocation();
        // 数据
        var dataImg = {'data':[
            {'src':'1.jpg','name':'张梓琳','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E5%BC%A0%E6%A2%93%E7%90%B3&step_word=&hs=0&pn=5&spn=0&di=144396104160&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=2977316696%2C384155171&os=733902902%2C596732003&simid=3379760579%2C321534288&adpicid=0&lpn=0&ln=3942&fr=&fmq=1499761919431_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fent.gog.cn%2Fpic%2F003%2F017%2F676%2F00301767693_9f938317.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fjgp_z%26e3B252_z%26e3BvgAzdH3Ffyfpj4AzdH3Fda8mAzdH3Fa0AzdH3Fd8AzdH3Fa8cadlddc_z%26e3Bfip4s&gsm=0&rpstart=0&rpnum=0'},
            {'src':'2.jpg','name':'杨颖','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E6%9D%A8%E9%A2%96&step_word=&hs=2&pn=22&spn=0&di=34208049810&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=2208034729%2C1564327302&os=734854794%2C1370141523&simid=3417544856%2C281937411&adpicid=0&lpn=0&ln=3940&fr=&fmq=1499762706856_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fwh%3D450%2C600%2Fsign%3Dc56a3adb870a19d8cb568c0106caaebd%2Ffaf2b2119313b07ec35533620bd7912396dd8ceb.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fzit1w5_z%26e3Bkwt17_z%26e3Bv54AzdH3Fq7jfpt5gAzdH3F8a9lcclblnlcd88nn0l_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0'},
            {'src':'3.jpg','name':'宋祖儿','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%AE%8B%E7%A5%96%E5%84%BF&step_word=&hs=0&pn=22&spn=0&di=87717974520&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3903013608%2C1513068990&os=558880122%2C1621521669&simid=4213259634%2C576552979&adpicid=0&lpn=0&ln=1926&fr=&fmq=1499781808023_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fwww.361news.cn%2Fyuanchuang%2Fimg%2F20150921161138862.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bnm8gjof_z%26e3BvgAzdH3Fgjt1tAzdH3Fdlml8n_d_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0'},
            {'src':'4.jpg','name':'刘亦菲','url':'http://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E5%88%98%E4%BA%A6%E8%8F%B2&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&cs=3029987893,2040557687&os=2794983747,3688949371&pn=199&rn=1&di=23341881780&ln=3894&fr=&fmq=1499782348064_R&fm=detail&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=11&pi=0&gsm=96&objurl=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160520%2F5fdf0302a3c04f9d8cdbaedb20b6c240_th.jpg&rpstart=0&rpnum=0&adpicid=0&ctd=1499782530791^3_1425X803%1'},
            {'src':'5.jpg','name':'新垣结衣','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E6%96%B0%E5%9E%A3%E7%BB%93%E8%A1%A3&step_word=&hs=0&pn=13&spn=0&di=196192382760&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=2351548610%2C3423322282&os=4202870517%2C792508922&simid=4195380418%2C824075555&adpicid=0&lpn=0&ln=3952&fr=&fmq=1499782707856_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimgwx2.2345.com%2Fdianyingimg%2Fstar%2Fimg%2F8%2F0%2F773%2Fphoto.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3F1twgytg2_z%26e3Bdn9c_z%26e3Bv54AzdH3FstfpAzdH3F---xtgy7wg3tjyt--itpf-_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0'},
            {'src':'6.jpg','name':'贾静雯','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E8%B4%BE%E9%9D%99%E9%9B%AF&step_word=&hs=0&pn=284&di=71293411560&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=2487805963%2C746436636&os=459422978%2C1178105441&adpicid=0&lpn=0&ln=3932&fr=&fmq=1499782813924_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&oriquery=&objurl=http%3A%2F%2Fimage.uczzd.cn%2F1726976255440276411.jpeg%3Fid%3D0%26from%3Dexport&gsm=12c&rpstart=0&rpnum=0'},
            {'src':'7.jpg','name':'北川景子','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E5%8C%97%E5%B7%9D%E6%99%AF%E5%AD%90&step_word=&hs=0&pn=100&spn=0&di=121096578350&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=941251728%2C3093017083&os=1274433327%2C3111532196&simid=3430504411%2C309935147&adpicid=0&lpn=0&ln=3934&fr=&fmq=1499783012458_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fpic.newssc.org%2F0%2F12%2F06%2F17%2F12061785_277411.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fjgp_z%26e3Bgjoffv_z%26e3B562AzdH3Ffyfpj4AzdH3Fda88AzdH3Fa0AzdH3Fd8AzdH3Fa8nd989d0_z%26e3Bfip4s&gsm=3c&rpstart=0&rpnum=0'},
            {'src':'8.jpg','name':'古力娜扎','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E5%8F%A4%E5%8A%9B%E5%A8%9C%E6%89%8E&hs=0&pn=-1&spn=0&di=baikeimg&pi=&rn=1&tn=baiduimagedetail&is=&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&lpn=0&ln=undefined&fr=&fmq=undefined&fm=undefined&ic=0&s=&se=&sme=&tab=&width=&height=&face=0&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2Fe824b899a9014c087d101a190e7b02087bf4f466.jpg&fromurl=http%3A%2F%2Fbaike.baidu.com%2Fview%2F5222315.htm&gsm='},
            {'src':'9.jpg','name':'迪丽热巴','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4&step_word=&hs=0&pn=4&spn=0&di=187881530210&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=3008899013%2C2065074894&os=2031756098%2C1772400318&simid=3360717567%2C282355335&adpicid=0&lpn=0&ln=1968&fr=&fmq=1499783287341_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201508%2F14%2F20150814122515_cTSCG.jpeg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B17tpwg2_z%26e3Bv54AzdH3Fks52AzdH3F%3Ft1%3D99bdcc8mb&gsm=0&rpstart=0&rpnum=0'},
            {'src':'10.jpg','name':'张子萱','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E5%BC%A0%E5%AD%90%E8%90%B1&hs=0&pn=-1&spn=0&di=baikeimg&pi=&rn=1&tn=baiduimagedetail&is=&istype=&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=&lpn=0&ln=undefined&fr=ala&fmq=undefined&fm=undefined&ic=&s=&se=&sme=&tab=&width=&height=&face=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F96dda144ad3459826f815c1809f431adcbef8435.jpg&fromurl=http%3A%2F%2Fbaike.baidu.com%2Fview%2F4049.htm&gsm='},
            {'src':'11.jpg','name':'北川景子','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E5%8C%97%E5%B7%9D%E6%99%AF%E5%AD%90&step_word=&hs=0&pn=14&spn=0&di=194516404280&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=2354432931%2C2244029303&os=1063023299%2C566377005&simid=3612339565%2C599157937&adpicid=0&lpn=0&ln=3934&fr=&fmq=1499783012458_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F8474fbdd7b3148d776c638fe.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fks52_z%26e3Bftgw_z%26e3Bv54_z%26e3BvgAzdH3FfAzdH3Fks52_0dnaml8va8aarvw6_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0'},
            {'src':'12.jpg','name':'沈梦辰','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E6%B2%88%E6%A2%A6%E8%BE%B0%E4%B8%AA%E4%BA%BA%E8%B5%84%E6%96%99&step_word=&hs=0&pn=3&spn=0&di=9014176380&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=2323400158%2C2580407910&os=4241692964%2C2719543006&simid=4279826773%2C643643420&adpicid=0&lpn=0&ln=1432&fr=&fmq=1499783941250_R&fm=rs9&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=%E6%B2%88%E6%A2%A6%E8%BE%B0&objurl=http%3A%2F%2Fimg.huachitour.com%2Ftop%2Fuploads%2Fallimg%2F151105%2F1502395008-0.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bqi1xo_z%26e3Bv54AzdH3Fetjo-ccalnAzdH3F&gsm=0&rpstart=0&rpnum=0'},
            {'src':'13.jpg','name':'赵丽颖','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E8%B5%B5%E4%B8%BD%E9%A2%96&step_word=&hs=2&pn=433&spn=0&di=28888288030&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=219254034%2C1323272828&os=1163735027%2C464301734&simid=0%2C0&adpicid=0&lpn=0&ln=3922&fr=&fmq=1499784053155_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&bdtype=11&oriquery=&objurl=http%3A%2F%2Fwww.5djiaren.com%2Fuploads%2F2017-05%2F24-165618_230.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bc13tw6jg_z%26e3Bv54AzdH3Fg14xAzdH3Fda80acAzdH3Fnldb9_z%26e3Bip4s&gsm=186&rpstart=0&rpnum=0'},
            {'src':'14.jpg','name':'林志玲','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E6%9E%97%E5%BF%97%E7%8E%B2&step_word=&hs=2&pn=340&spn=0&di=80866988320&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=2143728877%2C2582180943&os=1913273009%2C939960627&simid=0%2C0&adpicid=0&lpn=0&ln=3920&fr=&fmq=1499784201956_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&bdtype=11&oriquery=&objurl=http%3A%2F%2Fnpic7.fangtoo.com%2Fcn%2Fzixun%2Fzh-chs%2F2017-06%2F29%2F252028-201706291104424635.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fiwg2zi57_z%26e3Buwg2p55_z%26e3Bv54AzdH3Fztx7gAzdH3Ftgu5AzdH3Fb-nl-gdcdadb_z%26e3Bip4s&gsm=12c&rpstart=0&rpnum=0'},
            {'src':'15.jpg','name':'北川景子','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E5%8C%97%E5%B7%9D%E6%99%AF%E5%AD%90&step_word=&hs=0&pn=112&spn=0&di=180940265440&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=4094337951%2C1679793778&os=4121153209%2C646277130&simid=4222634641%2C736710877&adpicid=0&lpn=0&ln=3934&fr=&fmq=1499783012458_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg1.gamersky.com%2Fimage2016%2F06%2F20160602_zy_164_7%2Fimage031_S.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bywi55aa8_z%26e3Bv54AzdH3Fw6ptgu5AzdH3Fdabac&gsm=3c&rpstart=0&rpnum=0'},
            {'src':'16.jpg','name':'古力娜扎','url':'https://www.nvsay.com/ent/news/96132.html'},
            {'src':'17.jpg','name':'佟丽娅','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E4%BD%9F%E4%B8%BD%E5%A8%85&step_word=&hs=2&pn=0&spn=0&di=208273025620&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=2355520272%2C2779999907&os=3595035473%2C589803951&simid=4211762078%2C592232189&adpicid=0&lpn=0&ln=3940&fr=&fmq=1499784329164_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fwww.hinews.cn%2Fpic%2F0%2F12%2F32%2F03%2F12320398_046733.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bitgjof_z%26e3BvgAzdH3FgjofAzdH3Ffyfpj4AzdH3Fda88AzdH3FalAzdH3Fd0AzdH3Fa8n98anma_z%26e3Bfip4s&gsm=0&rpstart=0&rpnum=0'},
            {'src':'18.jpg','name':'赵奕欢','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E8%B5%B5%E5%A5%95%E6%AC%A2&hs=0&pn=-1&spn=0&di=baikeimg&pi=&rn=1&tn=baiduimagedetail&is=&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&lpn=0&ln=undefined&fr=&fmq=undefined&fm=undefined&ic=0&s=&se=&sme=&tab=&width=&height=&face=0&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2Ff603918fa0ec08fa8d38763c5dee3d6d55fbda75.jpg&fromurl=http%3A%2F%2Fbaike.baidu.com%2Fview%2F3935684.htm&gsm='},
            {'src':'19.jpg','name':'佟丽娅','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E4%BD%9F%E4%B8%BD%E5%A8%85&step_word=&hs=2&pn=8&spn=0&di=129416585540&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3956769089%2C1656157814&os=1704131843%2C1335387033&simid=3495859397%2C156398313&adpicid=0&lpn=0&ln=3940&fr=&fmq=1499784329164_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201606%2F24%2F20160624213432_M8x4y.thumb.700_0.jpeg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B17tpwg2_z%26e3Bv54AzdH3Fks52AzdH3F%3Ft1%3Dclna8ccad&gsm=0&rpstart=0&rpnum=0'},
            {'src':'20.jpg','name':'黄圣依','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E9%BB%84%E5%9C%A3%E4%BE%9D&hs=0&pn=-1&spn=0&di=baikeimg&pi=&rn=1&tn=baiduimagedetail&is=&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&lpn=0&ln=undefined&fr=&fmq=undefined&fm=undefined&ic=0&s=&se=&sme=&tab=&width=&height=&face=0&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F6f061d950a7b02083098d80167d9f2d3562cc8f9.jpg&fromurl=http%3A%2F%2Fbaike.baidu.com%2Fview%2F17059.htm&gsm='},
            {'src':'21.jpg','name':'佟丽娅','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E4%BD%9F%E4%B8%BD%E5%A8%85&step_word=&hs=2&pn=26&spn=0&di=157649688460&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3142745750%2C1284798254&os=1634816061%2C1490307728&simid=0%2C0&adpicid=0&lpn=0&ln=3940&fr=&fmq=1499784329164_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201406%2F26%2F20140626143321_2YwBA.jpeg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B17tpwg2_z%26e3Bv54AzdH3Fks52AzdH3F%3Ft1%3D8c0ac0cmm&gsm=0&rpstart=0&rpnum=0'},
            {'src':'22.jpg','name':'赵丽颖','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E8%B5%B5%E4%B8%BD%E9%A2%96&step_word=&hs=2&pn=15&spn=0&di=39679634170&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3857608677%2C2428145376&os=4192567204%2C3813209413&simid=0%2C0&adpicid=0&lpn=0&ln=3922&fr=&fmq=1499784053155_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fphotocdn.sohu.com%2F20150914%2Fmp31787592_1442219816602_7.jpeg&fromurl=ippr_z2C%24qAzdH3FAzdH3F4p_z%26e3Bf5i7_z%26e3Bv54AzdH3Fda8cal89AzdH3Fg9d8abllaa_z%26e3Bfip4s&gsm=0&rpstart=0&rpnum=0'},
            {'src':'23.jpg','name':'泽尻绘里香','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E6%B3%BD%E5%B0%BB%E8%8B%B1%E9%BE%99%E5%8D%8E&step_word=&hs=2&pn=230&spn=0&di=53228081830&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=641228602%2C1195355551&os=2490251439%2C2866916308&simid=4148008034%2C631651448&adpicid=0&lpn=0&ln=3896&fr=&fmq=1499784579583_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg.vogue.com.tw%2Fuserfiles%2FFCK%2F2015121155723341.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Be527j_z%26e3Bv54_z%26e3BpoAzdH3F45ktsjAzdH3Fujwp76jAzdH3Fv5gpjgp-dn0bl_z%26e3Bip4s&gsm=b4&rpstart=0&rpnum=0'},
            {'src':'24.jpg','name':'刘亦菲','url':'http://www.3lian.com/gif/2013/11-01/44340.html'},
            {'src':'25.jpg','name':'杨幂','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E6%9D%A8%E5%B9%82%E8%87%AA%E6%8B%8D&step_word=&hs=2&pn=16&spn=0&di=88049119950&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=4228098368%2C492983528&os=1282480835%2C3489550704&simid=3543936801%2C640982557&adpicid=0&lpn=0&ln=1961&fr=&fmq=1499785179345_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F002xJ02vgy6UNKxCVlX95%26690&fromurl=ippr_z2C%24qAzdH3FAzdH3Fks52_z%26e3Bftgw_z%26e3Bv54_z%26e3BvgAzdH3FfAzdH3Fks52_bwjw9bana8ades4c_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0'},
            {'src':'26.jpg','name':'林志玲','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E6%9E%97%E5%BF%97%E7%8E%B2&step_word=&hs=2&pn=2&spn=0&di=117673603520&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1149660113%2C2951611817&os=3604050856%2C2038149712&simid=3341595708%2C252802039&adpicid=0&lpn=0&ln=3920&fr=&fmq=1499784201956_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fsc.jb51.net%2Fuploads%2Fallimg%2F141205%2F10-141205154506134.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Ffv_z%26e3B3kc8_z%26e3BgjpAzdH3FPtvp76jAzdH3F4tg2xtg2AzdH3Fcb80a_z%26e3Bip4&gsm=0&rpstart=0&rpnum=0'},
            {'src':'27.jpg','name':'郭碧婷','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E9%83%AD%E7%A2%A7%E5%A9%B7&step_word=&hs=2&pn=64&spn=0&di=106021438740&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=1151957665%2C733055261&os=2331676449%2C1317731231&simid=0%2C0&adpicid=0&lpn=0&ln=3962&fr=&fmq=1499784951244_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&bdtype=11&oriquery=&objurl=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170709%2F14124a6bec0d424bb33b988c8cdb60da_th.png&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bf5i7_z%26e3Bv54AzdH3FwAzdH3F8ccmacaaa_0ab9dm&gsm=1e&rpstart=0&rpnum=0'},
            {'src':'28.jpg','name':'刘亦菲','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E5%88%98%E4%BA%A6%E8%8F%B2&step_word=&hs=0&pn=22&spn=0&di=3255027050&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=1952312589%2C1064509272&os=1592032668%2C293280632&simid=0%2C0&adpicid=0&lpn=0&ln=3894&fr=&fmq=1499782348064_R&fm=detail&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201501%2F20%2F20150120130324_zi5LM.thumb.700_0.png&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B17tpwg2_z%26e3Bv54AzdH3Fks52AzdH3F%3Ft1%3D908dbbcnl&gsm=0&rpstart=0&rpnum=0'},
            {'src':'29.jpg','name':'张靓颖','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E5%BC%A0%E9%9D%93%E9%A2%96&step_word=&hs=2&pn=15&spn=0&di=154422788630&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=1650359137%2C1660101708&os=4182257372%2C1233571494&simid=4240103680%2C713662616&adpicid=0&lpn=0&ln=3914&fr=&fmq=1499784998381_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fcdnimg103.lizhi.fm%2Faudio_cover%2F2016%2F10%2F11%2F2561775396751833607_320x320.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fstzit_z%26e3Bu4AzdH3Fln08a8AzdH3Fdcm8009n9dccblnca9m&gsm=0&rpstart=0&rpnum=0'},
            {'src':'30.jpg','name':'邓紫棋','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E9%82%93%E7%B4%AB%E6%A3%8B&hs=0&pn=-1&spn=0&di=baikeimg&pi=&rn=1&tn=baiduimagedetail&is=&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&lpn=0&ln=undefined&fr=&fmq=undefined&fm=undefined&ic=0&s=&se=&sme=&tab=&width=&height=&face=0&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F3c6d55fbb2fb4316fb41d3f525a4462308f7d3e7.jpg&fromurl=http%3A%2F%2Fbaike.baidu.com%2Fview%2F1926035.htm&gsm='},
            {'src':'31.jpg','name':'郑爽','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%BE%AE%E5%BE%AE%E4%B8%80%E7%AC%91%E5%BE%88%E5%80%BE%E5%9F%8E&step_word=&hs=2&pn=29&spn=0&di=31606825030&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=2&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=2472468657%2C2800841851&os=925637841%2C1075649771&simid=4188783077%2C705670780&adpicid=0&lpn=0&ln=1920&fr=&fmq=1499784870577_R&fm=result&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fwww.wed114.cn%2Fjiehun%2Fuploads%2Fallimg%2F160905%2F55_160905090942_1.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Boj1889_z%26e3BvgAzdH3F3tji7gAzdH3Fy7sjAzdH3Fda8mala98c9c0m_d_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0'},
            {'src':'32.jpg','name':'高圆圆','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E9%AB%98%E5%9C%86%E5%9C%86&hs=0&pn=-1&spn=0&di=baikeimg&pi=&rn=1&tn=baiduimagedetail&is=&istype=&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=&lpn=0&ln=undefined&fr=ala&fmq=undefined&fm=undefined&ic=&s=&se=&sme=&tab=&width=&height=&face=&cg=star&bdtype=0&oriquery=&objurl=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2F6d81800a19d8bc3ea28ca6d9878ba61ea8d34518.jpg&fromurl=http%3A%2F%2Fbaike.baidu.com%2Fview%2F10531.htm&gsm='},
            {'src':'33.jpg','name':'沈梦辰','url':'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E6%B2%88%E6%A2%A6%E8%BE%B0%E4%B8%AA%E4%BA%BA%E8%B5%84%E6%96%99&step_word=&hs=0&pn=79&spn=0&di=129178973000&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=-1&cs=2186482975%2C3729625994&os=321057551%2C1778678638&simid=3377277478%2C381540557&adpicid=0&lpn=0&ln=1432&fr=&fmq=1499783941250_R&fm=rs9&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=%E6%B2%88%E6%A2%A6%E8%BE%B0&objurl=http%3A%2F%2Fi.shangc.net%2F2015%2F1019%2F20151019101656599.jpg&fromurl=ippr_z2C%24qAzdH3FAzdH3Ffpw6_z%26e3Bfiwg2v_z%26e3BgjpAzdH3F88AzdH3F9m8_z%26e3Bip4s&gsm=1e&rpstart=0&rpnum=0'}]}
        // alert('c3');
        window.onscroll = function () {
            // console.log(scrollSide());
            if (scrollSide()){
                // console.log('c4');
                $.each(dataImg.data,function (index,value) {//动态创建图片对象
                    var box  = $('<div>').addClass('box').appendTo($('#container'));//创建div标签添加到container并赋予box类
                    var content  = $('<div>').addClass('content').appendTo(box);//创建div标签添加到container并赋予content类
                    var Alabel = $('<a>').addClass('photoArea').appendTo(content);
                    Alabel.attr('href',$(value).attr('url'));
                    Alabel.attr('target','_blank');
                    // console.log('/img/'+$(value).attr('src'));
                    var contentImg = $('<img>').addClass('photoImg').appendTo(Alabel);
                    contentImg.attr('src','img/'+$(value).attr('src'));//Alabel 并给于图片路径
                    // console.log($(value).attr('name'));
                    var contentSpan = $('<span>').addClass('photoSpan').appendTo(Alabel);//Alabel 并给于图片路径
                    contentSpan.text($(value).attr('name'));
                })
                imgLocation();//按照排列算法排列
                // console.log('c5');
            };
        };
    // });
    fixPhotoWidth();

});

//离开页面前发生的事件
//原理很简单，就是在body的onbeforeunload事件绑定函数，代码如下：
// document.body.onbeforeunload = function (event)
// {
//
//     var c = event || window.event;
//     if (/webkit/.test(navigator.userAgent.toLowerCase())) {
//         return "离开页面将导致数据丢失！";
//     }
//     else
//     {
//         c.returnValue = "离开页面将导致数据丢失！";
//     }
// }


function fixPhotoWidth() {
    var winWidth =$(window).width();
    var winHeight = $(window).height()-50;
    var everyOnePhotoWidth = ($('.box').eq(0).width());//每张图片的宽度
    var photoTotalNum = Math.floor(winWidth/everyOnePhotoWidth);//一行多少张
    var photoTotalWidth =  photoTotalNum*everyOnePhotoWidth//一行图片的总宽度
    var unnecessaryWidth = winWidth-photoTotalWidth//多出的空间宽度
    var winLeft = (unnecessaryWidth/2);
    var winWidth = winWidth-winLeft;
    console.log('winWidth:'+winWidth+' winLeft: '+winLeft);
    $('.photoPos').css({
        position:'absolute',
        left:winLeft+'px',
        // display: 'block',
        // overflowX: 'auto',
        height: winHeight+'px'
        // width:winWidth+'px',
        // height: '800px',
        // margin: '0 auto',
        // display: 'block',
    })
}

function scrollSide() {
    var box = $('.box');
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height()/2);//最后一张图片离顶栏的距离加上最后一张图片自身一半的高度 得出刷新的距离值
    var docunmentHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();//滚动的高度
    return(lastboxHeight<docunmentHeight+scrollHeight?true:false);
}
function imgLocation() {
    var box = $('.box');
    var boxWidth = box.eq(0).width();//获取每个box的宽度
    var imgAmountDecimal = $(window).width()/boxWidth;//用当前设备的宽度除box的宽度获取一行的数量
    var imgAmount = Math.floor(imgAmountDecimal);//转换为整数
    console.log('一行最多显示数量：'+imgAmount+'个box');
    var boxArr = [];
    box.each(function (index,value) {//index是索引号数 value是数值对象
        // console.log(index+'---'+value);
        var boxHeight = box.eq(index).height();//对象高度
        if (index<imgAmount){//如果索引位数小于一行的最大数量 代表为第一行
            boxArr[index]= boxHeight;//记录第一行中每一个box的高度为数组
            // console.log(boxHeight);
        }
        else {//把其他图片放入第一行最小高度图片下方的位置
            var minboxHeight = Math.min.apply(null,boxArr);//获取第一行中最小高度的box
            // console.log(minboxHeight);
            var minboxHeight =  minboxHeight//+133// 加上百度导航栏的高度
            var minBoxIndex = $.inArray(minboxHeight,boxArr)//找到相应高度的位置就能找到相应的box位置
            $(value).css({
                'position': 'absolute',//设定绝对布局
                'top': minboxHeight,//最小图片的高度
                'left':box.eq(minBoxIndex).position().left//最小图片的坐标
            });
            boxArr[minBoxIndex] = boxArr[minBoxIndex]+boxHeight;//更新最小图片位置高度
        }
    })
}