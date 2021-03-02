window.onload=function(){
    var navLiS = document.querySelectorAll('#header .headermain .nav li');
    var arrow = document.querySelector('#header .arrow');
    var upnavLis = document.querySelectorAll('#header .headermain .nav li .up');
    var section = document.querySelector('#section');
    var header = document.querySelector('#header');
    var sectionli = document.querySelectorAll('#section .list>li');
    var sectionList = document.querySelector('#section .list');
    var now = 0;
    var anindex=0;
    var timer = null;
    var ulNode = document.querySelectorAll('#section .list .about3 .aboutPicture .picture');
    var iconpoints = document.querySelectorAll('#section .list .home .iconpoint>li');
    var homelinodes = document.querySelectorAll('#section .list .home .homeitem>li');
    var baricon = document.querySelectorAll('#section .baricon li');
    var upside = document.querySelector('#startmovie .upside');
    var downside = document.querySelector('#startmovie .downside');
    var lines1 = document.querySelectorAll('#startmovie>span')[0];
    var lines2 = document.querySelectorAll('#startmovie>span')[1];
    var starmove = document.getElementById('startmovie');
    var music = document.querySelector('#header .headermain .music');
    var myauto = document.getElementById('myAudio')
    //音乐
    music.onclick=function(){
        if(myauto.paused){
            myauto.play();
            music.style.backgroundImage = 'url("img/musicon.gif")';
        }else{
            myauto.paused();
            music.style.backgroundImage = 'url("img/musicoff.gif")';
        }
    }
    
    //开机
    function loading(){
        var imgFlag = 0;
        var arr = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'about1.jpg', 'about2.jpg', 'about3.jpg', 'about4.jpg', 'worksimg1.jpg', 'worksimg2.jpg', 'worksimg3.jpg', 'worksimg4.jpg', 'team.png', 'greenLine.png'];
        for(var i=0;i<arr.length;i++){
            var imgNode = new Image();
            imgNode.src = 'img/' + arr[i];
            imgNode.onload = function(){
                imgFlag++;
                lines1.style.width = imgFlag / arr.length * 50 + "%";
                lines2.style.width = imgFlag / arr.length * 50 + "%";
            }
        }
        lines1.addEventListener('transitionend',function(){
            upside.style.height="0";
            downside.style.height = "0";
            lines1.style.display = 'none';
            lines2.style.display = 'none';
        })
        upside.addEventListener('transitionend',function(){
            animationArr[0]['inanimation']();
            picturehome();
            starmove.remove();
        })
    }
    loading();
    //调整视口
    window.onresize = function(){
        contentBind(); //重新调整视口高度
        

    }
    
    //开机动画
    var animationArr=[{
        //first
            inanimation:function(){
                var headeron = document.querySelector('#section .list .home .homeitem');
                var headericon = document.querySelector(' #section .list .home .iconpoint');
                headeron.style.transform = "translateY(0px)";
                headericon.style.transform = "translateY(0px)";
                headeron.style.opacity = '1';
                headericon.style.opacity = '1';
        },
            outanimation:function(){
                var headeron = document.querySelector('#section .list .home .homeitem');
                var headericon = document.querySelector(' #section .list .home .iconpoint');
                headeron.style.transform = "translateY(-200px)";
                headericon.style.transform = "translateY(-200px)";
                headeron.style.opacity = '0';
                headericon.style.opacity = "0";
                
        }},
        //second
        {
            inanimation: function () {
                var plane1 = document.querySelector('#section .list .course .plane1');
                var plane2 = document.querySelector('#section .list .course .plane2');
                var plane3 = document.querySelector('#section .list .course .plane3');
                plane1.style.transform = "translate(0,0)";
                plane2.style.transform = "translate(0,0)";
                plane3.style.transform = "translate(0,0)";
            },
            outanimation: function () {
                var plane1 = document.querySelector('#section .list .course .plane1');
                var plane2 = document.querySelector('#section .list .course .plane2');
                var plane3 = document.querySelector('#section .list .course .plane3');
                plane1.style.transform = "translate(50px,50px)";
                plane2.style.transform = "translate(50px,-50px)";
                plane3.style.transform = "translate(50px,-50px)";
            }
        },
        //third
        {
            inanimation: function () {
                var pencel1 = document.querySelector('#section .list .works .pencel1');
                var pencel2 = document.querySelector('#section .list .works .pencel2');
                var pencel3 = document.querySelector('#section .list .works .pencel3');
                pencel1.style.transform = "translateY(0)";
                pencel2.style.transform = "translateY(0)";
                pencel3.style.transform = "translateY(0)";
            },
            outanimation: function () {
                var pencel1 = document.querySelector('#section .list .works .pencel1');
                var pencel2 = document.querySelector('#section .list .works .pencel2');
                var pencel3 = document.querySelector('#section .list .works .pencel3');
                pencel1.style.transform = "translateY(-50px)";
                pencel2.style.transform = "translateY(50px)";
                pencel3.style.transform = "translateY(50px)";
            }
        },
        //forth
        {
            inanimation: function () {
                var picutre1 = document.querySelectorAll('#section .list .about3 .aboutPicture')[0];
                var picutre2 = document.querySelectorAll('#section .list .about3 .aboutPicture')[1];
                picutre1.style.transform = "rotate(0deg)";
                picutre2.style.transform="rotate(0deg)";
            },
            outanimation: function () {
                var picutre1 = document.querySelectorAll('#section .list .about3 .aboutPicture')[0];
                var picutre2 = document.querySelectorAll('#section .list .about3 .aboutPicture')[1];
                picutre1.style.transform = "rotate(45deg)";
                picutre2.style.transform = "rotate(-45deg)";
            }
        },
        //five
        {
            inanimation: function () {
                var team1 = document.querySelector('#section .list .team .team2');
                var team2 = document.querySelector('#section .list .team .team1');
                team1.style.transform="translateX(0px)";
                team2.style.transform = "translateX(0px)";
            },
            outanimation: function () {
                var team1 = document.querySelector('#section .list .team .team2');
                var team2 = document.querySelector('#section .list .team .team1');
                team1.style.transform = "translateX(-100px)";
                team2.style.transform = "translateX(100px)";
            }
        }
    ]
    //test
    for(var i = 0;i < 5;i ++){
        animationArr[i]['outanimation']();
    }
        


    //图片翻滚
    function picturehome(){
        var oldindex = 0;
        var autoindex=0;
        var homeTimer = null;
        for(var i = 0; i < iconpoints.length;i++){
            iconpoints[i].index = i;
            iconpoints[i].onclick=function(){
                clearInterval(homeTimer);
                for(var j = 0; j < iconpoints.length;j++){
                    iconpoints[j].className=" ";
                }
                iconpoints[this.index].className ="active";
                if(oldindex<this.index){
                    homelinodes[oldindex].className ="lefthid";
                    homelinodes[this.index].className ="rightshow";
                } else if (oldindex > this.index){
                    homelinodes[oldindex].className = "righthid";
                    homelinodes[this.index].className = "leftshow";
                }
                oldindex=this.index;
                autoindex =  this.index;
                auto();
            }
        }
        //自动
        function auto(){
            homeTimer = setInterval(function(){
                autoindex++;
                if (autoindex == iconpoints.length){
                    autoindex = 0;
                }
                homelinodes[oldindex].className ="lefthid";
                homelinodes[autoindex].className ="rightshow";
                for(var i=0;i<iconpoints.length;i++){
                    iconpoints[i].className="";
                }
                iconpoints[autoindex].className="active";
                oldindex=autoindex;
            },3000)
        }
        auto();
    }
    
    

    //图片炸裂
    picboo();
    function picboo(){
        for(var i=0;i<ulNode.length;i++){
            changeimg(ulNode[i]);
        }
        function changeimg(ul){
            var w = ul.offsetWidth/2;
            var h = ul.offsetHeight/2;
            var imgsrc=ul.dataset.src;
            for(var i=0;i<4;i++){
                var liNode=document.createElement('li');
                var imgNode = new Image();
                liNode.style.width = w+"px";
                liNode.style.height = h+"px";
                imgNode.src=imgsrc;
                imgNode.style.top = -Math.floor(i/2)*h +"px";
                imgNode.style.left = -(i%2)*w +"px";
                ul.appendChild(liNode);
                liNode.appendChild(imgNode);
            }
            var imgNode=ul.querySelectorAll('img');
            ul.onmouseenter=function(){
                imgNode[0].style.top = w+"px";
                imgNode[1].style.left = -2*w + "px";
                imgNode[2].style.left = w + "px";
                imgNode[3].style.top = -2*h + "px";
            }
            ul.onmouseleave = function () {
                imgNode[0].style.top = 0 + "px";
                imgNode[1].style.left = -w + "px";
                imgNode[2].style.left = 0 + "px";
                imgNode[3].style.top = -h + "px";
            }
        }
    }
    //滚轮
    document.onmousewheel = function(event){ //降频
        clearTimeout(timer);
        timer = setTimeout(function(){fun(event)},200)
    }
    
    if(document.addEventListener){
        document.addEventListener("DOMMouseScroll",fun)
    }
    function fun(event){
        event = event || window.event;
    
        var flag="";
        if(event.wheelDelta){
                if(event.wheelDelta>0){
                    flag = "up";
                }else{
                    flag = "down";
                }
        }else if(event.detail){
                if (event.Delta < 0) {
                    flag = "up";
                } else {
                    flag = "down";
                }
            }
            //动画
            anindex = now;
        if ((anindex == 0 && flag == "up") || (anindex == 4 && flag=="down")){
            return
        }
            switch (flag) {
                case "up":
                    if(now > 0){
                        now --;
                    }
                    move(now);
                    break;
                case "down":
                    if (now < navLiS.length - 1) {
                        now++;
                    }
                    move(now);
                    break;
            }
            event.preventDefault && event.preventDefault();
            return false;
    }
    
    function move(now){
        //up width
        for (var i = 0; i < upnavLis.length;i++){
            upnavLis[i].style.width = "";
            baricon[i].className=" ";
        } 
        upnavLis[now].style.width = '100%';
        baricon[now].className = "active";
        arrow.style.left = navLiS[now].getBoundingClientRect().left + navLiS[now].offsetWidth / 2 + "px";
        sectionList.style.top = -now*(document.documentElement.clientHeight - header.offsetHeight) +"px";
        //入场动画
        animationArr[now]['inanimation']();
        //出场动画
        animationArr[anindex]['outanimation']();
        console.log(anindex)
    }



    function contentBind(){
        section.style.height = document.documentElement.clientHeight-header.offsetHeight +"px";
        for (var i = 0; i < sectionli.length;i++){
            sectionli[i].style.height = document.documentElement.clientHeight - header.offsetHeight + "px";
        }
    }
    contentBind();
    function headernav(){
        upnavLis[0].style.width = "100%";
        arrow.style.left = navLiS[0].getBoundingClientRect().left + navLiS[0].offsetWidth / 2 + "px";
        for (var i = 0; i < navLiS.length; i++) {
            navLiS[i].index = i;
            navLiS[i].onclick = function () {
                for (var j = 0; j < upnavLis.length; j++) {
                    upnavLis[j].style.left = "";
                }
                arrow.style.left = navLiS[this.index].getBoundingClientRect().left + navLiS[this.index].offsetWidth / 2 + "px";
            }
        }
        for (var i = 0; i < baricon.length;i++){
            baricon[i].index=i;
            baricon[i].onclick=function(){
                anindex = now;
                now=this.index;
                if(anindex == now){
                    return;
                }
                move(now);
            }
        }
    }
    headernav();
    for (var i = 0; i < navLiS.length; i++) {
        navLiS[i].index = i;
        navLiS[i].onclick = function () {
            anindex = now;
            now = this.index;
            if(anindex == now){
                return;
            }
            move(now);
        }
    }

}