window.onload=function(){

}

function g(id){
	return document.getElementById(id);	
}


var Zongzi=function(){													//定义一个时间戳函数，定时执行粽子的效果
	this.dataArr=[];
	this.add=function(mytime,fn,mylog){
		this.dataArr.push({
			mytimeout:mytime,
			myfn:fn,
			mylog:mylog	
		})
	}	
	this.start=function(ff){
		for(s in this.dataArr){
			(function(me){
				var ttimeout= me.mytimeout,
					ffn=me.myfn,
					llog=me.mylog;
				
				setTimeout(ffn,ttimeout);
				setTimeout(function(){
					console.log("timeout:"+ttimeout)	
				},ttimeout);
			})(this.dataArr[s])
		}	
	}
	
}

var myzongInit=new Zongzi();
var jieshen=new Zongzi();
var xuanzhuan=new Zongzi();

var flag=true;

myzongInit.add(100,function(){
	g("img_box").className="img_box img_box_rock";
	g("img_box").onclick=function(){
		if(flag==true){
			flag=false;
			jieshen.start();
			
		}
	}
},"mylog")

myzongInit.start();

jieshen.add(100,function(){
	g("img_box").className="img_box img"
});

jieshen.add(500,function(){
	g("rope1").className="rope1 rope1_out"
	g("rope2").className="rope2 rope2_in";
	g("text_box").className="text_box moveIn";
});

jieshen.add(1000,function(){
	g("rope2").className="rope2 rope2_out";
	g("rope3").className="rope3 rope3_in";
});

jieshen.add(1500,function(){
	g("rope3").className="rope3 rope3_out";
	g("rope4").className="rope4 rope4_in";
});

jieshen.add(2000,function(){
	g("rope4").className="rope4 rope4_out";
	g("ricePudding").className="ricePudding ricePudding_out"
});

jieshen.add(2500,function(){
	g("rope4").className="rope4 rope4_out";
	g("ricePudding").className="ricePudding ricePudding_out"
});

jieshen.add(3000,function(){
	g("ricePudding_meat").className="ricePudding_meat ricePudding_meat_in";
	g("leaves_left").className="leaves_left ";
	g("leaves_right").className="leaves_right";
	g("leaves_bottom").className="leaves_bottom "
});

jieshen.add(4000,function(){
	g("leaves_left").className="leaves_left leaves_left_in ";
	g("leaves_right").className="leaves_right leaves_right_in"
	
});

jieshen.add(4800,function(){
	g("leaves_left").className="leaves_left leaves_left_in leaves_left_out";
	g("leaves_right").className="leaves_right leaves_right_in leaves_right_out"
	g("leaves_bottom").className="leaves_bottom leaves_bottom_in"
	xuanzhuan.start();
});

xuanzhuan.add(2000,function(){

	g("zhufu1").className="blessing1_l0";
});

xuanzhuan.add(2500,function(){
	g("ricePudding_meat").className="ricePudding_meat ricePudding_meat_in ricePudding_meat_view2"
	g("zhufu1").className="blessing1_l1"
	g("zhufu2").className="blessing2_r1"
});

xuanzhuan.add(3000,function(){
	g("ricePudding_meat").className="ricePudding_meat ricePudding_meat_in ricePudding_meat_view3"
	g("zhufu1").className="blessing1_l2"
	g("zhufu2").className="blessing2_r2"
});

xuanzhuan.add(3500,function(){
	g("ricePudding_meat").className="ricePudding_meat ricePudding_meat_in ricePudding_meat_view4"
	g("zhufu1").className="blessing1_l3"
	g("zhufu2").className="blessing2_r3"
});

xuanzhuan.add(4000,function(){
	g("ricePudding_meat").className="ricePudding_meat ricePudding_meat_in ricePudding_meat_view5"
	g("zhufu1").className=""
	g("zhufu2").className="blessing2_r4"
});

xuanzhuan.add(4500,function(){
	g("ricePudding_meat").className="ricePudding_meat ricePudding_meat_in ricePudding_meat_view4"
	g("zhufu1").className="blessing1_l3"
	g("zhufu2").className="blessing2_r3"
});

xuanzhuan.add(5000,function(){
	g("ricePudding_meat").className="ricePudding_meat ricePudding_meat_in ricePudding_meat_view3"
	g("zhufu1").className="blessing1_l2"
	g("zhufu2").className="blessing2_r2"
});

xuanzhuan.add(5500,function(){
	g("ricePudding_meat").className="ricePudding_meat ricePudding_meat_in ricePudding_meat_view2"
	g("zhufu1").className="blessing1_l1"
	g("zhufu2").className="blessing2_r1"
});

xuanzhuan.add(6000,function(){
	g("ricePudding_meat").className="ricePudding_meat ricePudding_meat_in ricePudding_meat_view6";
	g("zhufu1").className="blessing1_l0";
	g("zhufu2").className="";

});
xuanzhuan.add(6000,function(){
	xuanzhuan.start();	
})


//图片预加载，解决闪屏问题

var imgSrc=["file:///C|/Users/Administrator/Desktop/study_text/%E6%85%95%E8%AF%BE%E7%BD%91%E8%AF%BE%E7%A8%8B/%E7%B2%BD%E5%AD%90css+js/img/zzr_1.png","file:///C|/Users/Administrator/Desktop/study_text/%E6%85%95%E8%AF%BE%E7%BD%91%E8%AF%BE%E7%A8%8B/%E7%B2%BD%E5%AD%90css+js/img/zzr_2.png","file:///C|/Users/Administrator/Desktop/study_text/%E6%85%95%E8%AF%BE%E7%BD%91%E8%AF%BE%E7%A8%8B/%E7%B2%BD%E5%AD%90css+js/img/zzr_3.png",
"file:///C|/Users/Administrator/Desktop/study_text/%E6%85%95%E8%AF%BE%E7%BD%91%E8%AF%BE%E7%A8%8B/%E7%B2%BD%E5%AD%90css+js/img/zzr_4.png"
];

for(i in imgSrc){
	var myimg=new Image();
	console.log(2);
	myimg.onload=function(){
		imgSrc.pop();
		if(imgSrc.length==0){
			jieshen.start();
		}
	}
	myimg.src=myimg[i];	
	console.log(1);
}



