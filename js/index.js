var diyiji=$(".yiji-1");
var dierji=$(".dierji");
for(var i=0;i<diyiji.length;i++){
  diyiji[i].index=i; 
  diyiji[i].onmouseover=function(){
    /*for(var j=0;j<dierji.length;j++){
     dierji[j].style.display="none";
    }*/
    dierji[this.index].style.display="block";
  }
  diyiji[i].onmouseout=function(){
    dierji[this.index].style.display="none";
  }

}

/********************************************/

var sp=$(".sp");
var hoverPic=$(".hover-pic");
for(var i=0;i<sp.length;i++){
  sp[i].index=i; 
  hover(sp[i],function(){
    hoverPic[this.index].style.display="block"
  },function(){
    hoverPic[this.index].style.display="none"

  })

}

/********************************************/

var fenlei=getClass("fenlei");
var titlebox=getClass("titlebox")[0];//document对象//document对象
var con=getClass("con");
var conbox=getClass("conbox")[0];
 titlebox.onmouseover=function(){
     conbox.style.display="block";
  }
  titlebox.onmouseout=function(){
     conbox.style.display="none";
  }
  conbox.onmouseover=function(){
     conbox.style.display="block";
  }
  conbox.onmouseout=function(){
     conbox.style.display="none";
  }
for(var i=0;i<fenlei.length;i++){
  fenlei[i].index=i; 
  fenlei[i].onmouseover=function(){
    for(var j=0;j<con.length;j++){
     con[j].style.display="none";
     fenlei[j].style.background="#EEE4EA";
    }
    con[this.index].style.display="block";
    fenlei[this.index].style.background="white";
  }

}

/********************************************/

var bannerBox=getClass("bannerBox")[0];
var as=bannerBox.getElementsByTagName("a");
var btnbox=getClass("btnbox")[0];
var btn=btnbox.getElementsByTagName("li");
var banner=getClass("banner")[0];
var arrcolor=["#dd2e0f","#0088ff","#ff27a6","#e8e8e8","#e8e8e8"];
var num=0;
function move(){
   num++;
     if(num==as.length){
      num=0;
     }
     //统一操作其他元素
     for(var i=0;i<as.length;i++){
      btn[i].style.background="#000";
      as[i].style.opacity=0;
     banner.style.background="";

     }
     //as[num].style.opacity=1;
     animate(as[num],{opacity:1},600)
     btn[num].style.background="red";
     banner.style.background=arrcolor[num];
}
var t=setInterval(move,2000);


bannerBox.onmouseover=function(){
  clearInterval(t);
}
bannerBox.onmouseout=function(){
  t=setInterval(move,2000);
}
for(var i=0;i<btn.length;i++){
  btn[i].index=i;
  btn[i].onmouseover=function(){
       for (var j=0;j<as.length; j++) {
        as[j].style.opacity=0;
        btn[j].style.background="#000";
        banner.style.background="";

       };
    //当前显示
      as[this.index].style.opacity=1;
      btn[this.index].style.background="red";
     banner.style.background=arrcolor[this.index];

      //改时间函数里的
      num=this.index;
  }
}


/********************************************/
var bigbox=getClass("bigbox");
  var zhenzhao=getClass("zhenzhao");
  var zhenz=getClass("zhenz");
  for(var i=0;i<bigbox.length;i++){
    bigbox[i].index=i;
    bigbox[i].onmouseover=function(){
      for(var j=0;j<zhenzhao.length;j++){
        zhenzhao[j].style.display="none";
      }
      zhenzhao[this.index].style.display="block";
      zhenzh[this.index].style.display="block";
    }
    bigbox[i].onmouseout=function(){
      zhenzhao[this.index].style.display="none";
      zhenzh[this.index].style.display="none";
    }
  }

/********************************************/

$(function(){
    var mainnav=$(".mainnav")[0];
      var flag=true;
      var flag2=true;
    var jump=$(".jump")[0];
    var qingzi=$(".qingzi");
    var btn=$(".btn");
    var now=0;//记录单击了谁
    var arrColor=["#F7A945","#19C8A9","#F15453","#64C333","#0AA6E8","#EA5F8D","#000","#000"];
     document.body.scrollTop=1;//解决chrome与360的onscroll无法触发的问题
    document.onscroll=function(){//onscroll是给能添加overflow:auto属性的元素加
      var tops=document.body.scrollTop||document.documentElement.scrollTop;
      document.title=tops;
      //主菜单
      if(tops>=830){
        if(flag2){
        //search.style.top=0;
        animate(mainnav,{top:0});
        flag2=false;
        flag=true;  
        }
        
      }else{
        if(flag){
          //mainnav.style.top="-50px";
        animate(mainnav,{top:-50});
        flag=false;
        flag2=true;
        }
        
      }
        //左侧导航
        if(tops>=1000){
          jump.style.display="block";
        }else{
          jump.style.display="none";
        }
          //楼层跳转效果
         for (var i = 0; i < qingzi.length; i++){
          if(qingzi[i].offsetTop<=tops+80){//每一个楼层到页面顶端的距离
            for(var j=0;j<btn.length;j++){
              
                 btn[j].style.background="#ccc";
            
            
            
            }
            btn[i].style.background=arrColor[i];
            
            now=i;
         };
      }
      //图片的按需要加载
      //scrollTop+clientHeight>=offsetTop
      var ch=document.documentElement.clientHeight;
      for (var i = 0; i < qingzi.length; i++) {
        if(qingzi[i].offsetTop<=tops+ch){
          //src=data-src
          //获取当前楼层的所在图片
          var imgs=$("img",qingzi[i]);
          for(var j=0;j<imgs.length;j++){
            //获取自定义的属性
            var src=imgs[j].getAttribute("data-src");
            imgs[j].src=src;
          }
        }
      };
  }

  
  for (var i = 0; i < btn.length; i++) {
    btn[i].index=i;
    btn[i].onclick=function(){
    now=this.index; 
      var obj=document.body.scrollTop?document.body:document.documentElement;
            //obj.scrollTop=qingzi[this.index].offsetTop-80;
            animate(obj,{scrollTop:qingzi[this.index].offsetTop-80},300,Tween.Linear);
            for(var j=0;j<btn.length;j++){
              btn[j].style.background="#ccc";
            }
            this.style.background=arrColor[this.index];
    }
    btn[i].onmouseover=function(){
      for(var j=0;j<btn.length;j++){
               if(j!=now){//下标不是now时，background变回原来的样子
                    btn[j].style.background="#ccc";
               }
        
      }
      btn[this.index].style.background=arrColor[this.index];
    }
    btn[i].onmouseout=function(){
      if(this.index!=now){
      btn[this.index].style.background="#ccc";
      }
    }
  };
})


var tabLogo=$(".tab-logo");
var tequan=$(".tequan");
for(var i=0;i<tabLogo.length;i++){
  tabLogo[i].index=i; 
  tabLogo[i].onmouseover=function(){
    /*for(var j=0;j<tequan.length;j++){
     tequan[j].style.display="none";
    }*/
    tequan[this.index].style.display="block";
  }
  tabLogo[i].onmouseout=function(){
    tequan[this.index].style.display="none";
  }

}



/********************************************/

$(".ssk").focus(function(){
    if($(this).val()=="百搭T恤 女神衣橱必备"){
      $(this).val("");
    }
  }).blur(function(){
    if($(this).val()==""){
      $(this).val("百搭T恤 女神衣橱必备")
    }
  })


/********************************************/

$(".ssk1").focus(function(){
    if($(this).val()=="百搭T恤 女神衣橱必备"){
      $(this).val("");
    }
  }).blur(function(){
    if($(this).val()==""){
      $(this).val("百搭T恤 女神衣橱必备")
    }
  })