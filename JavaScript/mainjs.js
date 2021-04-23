
/*轮播图*/
var image1={
    src:"images/lunbo1.jpg",
    href:"https://www.gochengdu.cn/"
};
var image2={
    src:"images/lunbo2.jpg",
    href:"https://www.cdu.edu.cn/"
};
var image3={
    src:"images/lunbo3.jpg",
    href:"http://www.2021chengdu.com/"
};
var images=[image1,image2,image3];
var i=0;
function rchangeimage(){
    if(i==images.length-1)
    {
        i=0;
        var img=document.getElementById("lunbo");
        //切换图片
        img.src=images[i].src;
        //切换url地址
        img.parentElement.href=images[i].href;
    } else{
        i=i+1;
        var img=document.getElementById("lunbo");
        //切换图片
        img.src=images[i].src;
        //切换url地址
        img.parentElement.href=images[i].href;
    }
}



function lchangeimage(){
    if(i==0)
    {
        i=images.length-1;
        var img=document.getElementById("lunbo");
        //切换图片
        img.src=images[i].src;
        //切换url地址
        img.parentElement.href=images[i].href;
    } else{
        i=i-1;
        var img=document.getElementById("lunbo");
        //切换图片
        img.src=images[i].src;
        //切换url地址
        img.parentElement.href=images[i].href;
    }
}
var bright=document.getElementById("bright");
bright.onmouseover= rchangeimage;

var bleft=document.getElementById("bleft");
bleft.onmouseover=lchangeimage;

setInterval(rchangeimage,3*1000);



/*关闭广告*/
function deleteAd() {
    var ad= document.getElementById("advising");
    ad.style.display="none";
}
var bt1=document.getElementById("bt1");
bt1.onclick=deleteAd;


