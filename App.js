const { createCanvas, loadImage } = require('canvas')
const fs = require('fs');
const canvas = createCanvas(3000, 6000)
const context = canvas.getContext('2d')
var a={"center_image":"(383168.jpg)",
         "grt":[
         {"id":"  0 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  1 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  2 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  3 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  4 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  5 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  6 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  7 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  8 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  9 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  10 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  11 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  12 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  13 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  14 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  15 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  16 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  17 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  18 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  19 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  20 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  21 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  22 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  23 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  24 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  25 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  26 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  27 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  28 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  29 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  30 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  31 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  32 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  33 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  34 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"},
		 {"id":"  36 ","title":"THE FOX IS A RED FOX", "message" :"Unfortunately, we don't have enough data  to generate an accurate Estimate Unfortunately, we don't have enough data to generate an accurate" ,"profile_image_url":"(Img/001.jpg)","signature":"Robinson Appleson Smith Maccan"} 
		 ], "product":"A"} ;

var b=JSON.parse(JSON.stringify(a));
drawImage(b)

function drawImage(myObj) {

	var idx=0;
    var col_=[3,4,5,10,20];
    var row_=[6,8,10,20,40];
    var img_wi=[500,375,300,150,75];
	var img_hi=[500,375,300,150,75];
  
    var leng=myObj.grt.length;
    var proidx=(myObj.product).toUpperCase();
    if (proidx=="A"){idx=0;}
    else if(proidx=="B"){idx=1;}
    else if(proidx=="C"){idx="2";}
    else{idx=3;}
   

    if(leng>=(2*((col_[idx])*(row_[idx])))){
    var posi=[[1,22,7,28,13,34,19,4,25,10,31,16,2,23,8,29,14,35,20,5,26,11,32,17,3,24,9,30,15,36,21,6,27,12,33,18],
    [1,37,9,45,17,53,25,61,33,5,41,13,49,21,57,29,2,38,10,46,18,54,26,62,34,6,42,14,50,22,58,30,35,7,43,15,51,23,59,31,3,39,11,47,19,55,27,63,36,8,44,16,52,24,60,32,4,40,12,48,20,56,28,64],
    
    [1,55,11,65,21,75,31,85,41,95,51,7,61,17,71,27,81,37,91,47,2,56,12,66,22,76,32,86,42,96,52,8,62,18,72,28,82,38,92,48,3,57,13,67,23,77,33,87,43,97,
    	4,58,14,68,24,78,34,88,44,98,53,9,63,19,73,29,84,39,93,49,5,59,15,60,25,79,35,89,45,99,54,10,64,20,74,30,85,40,94,50,6,60,16,61,26,80,36,90,46,100],
    [1,211,21,231,41,251,61,271,81,291,101,311,121,331,141,351,161,371,181,391,201,11,221,31,241,51,261,71,281,91,301,111,321,131,341,151,361,171,381,191,2,
    	212,22,232,42,252,62,272,82,292,102,312,122,332,142,352,162,372,182,392,202,12,222,32,242,52,262,72,282,92,302,112,322,132,342,152,362,172,382,192,3,213,
    	23,233,43,253,63,273,83,293,103,313,123,333,143,353,163,373,183,393,203,13,223,33,243,53,263,73,283,93,303,113,323,133,343,153,363,173,383,193,4,214,24,
    	234,44,254,64,274,84,294,104,314,124,334,144,354,164,374,184,394,204,14,224,34,244,54,264,74,284,94,304,114,324,134,344,154,364,174,384,194,5,215,25,235,
    	45,255,65,275,85,295,105,315,125,335,145,355,165,375,185,395,205,15,225,35,245,55,265,75,285,95,305,115,325,135,345,155,365,175,385,195,
    	206,16,226,36,246,56,266,76,286,96,306,116,326,136,346,156,366,176,386,196,6,216,26,236,46,256,66,276,86,296,106,316,126,336,146,356,166,376,186,396,207,17,
    	227,37,247,57,267,77,287,97,307,117,327,137,347,157,367,177,387,197,7,217,27,237,47,257,67,277,87,297,107,317,127,337,147,357,167,377,187,397,208,18,228,38,
    	248,58,268,78,288,98,308,118,328,138,348,158,368,178,388,198,8,218,28,238,48,258,68,278,88,298,108,318,128,338,148,358,168,378,188,398,209,19,229,39,249,59,
    	269,79,289,99,309,119,329,139,349,159,369,179,389,199,9,219,29,239,49,259,69,279,89,299,109,319,129,339,149,359,169,379,189,399,210,20,230,40,250,60,270,80,
    	290,100,310,120,330,140,350,160,370,180,390,200,10,220,30,240,50,260,70,280,90,300,110,320,130,340,150,360,170,380,190,400,]
    ];
         
    	var Qty=0;
        var clr='black';
        for (var i = 0; i < col_[idx]; i++) {
        	
    	
        if(clr=='black'){
        clr='gray';
        }else{clr='black';}
        for (var j = 0; j < row_[idx]; j++) {
          	
        if(clr=='black'){
        	
        clr='gray';
        }else{
        clr='black';
    	}
    	
    	if(Qty>=(leng)){
    	images[Qty].src ="miss.png";
    	   	                     images[Qty].onload = dumb(context, images[Qty],Qty, i, j,Qty,img_wi[idx],img_hi[idx],'Miss Title','Miss Your Messag','Signature',clr);
    	                }
    	                else{
							var ss=myObj.grt[Qty].title;
							var sss=myObj.grt[posi[idx][Qty]-1].signature;
    	                	 var   str_ = myObj.grt[posi[idx][Qty]-1].message;
    	                	  var  result_ = str_.replace(/.{42}\S*\s+/g, "$&@").split(/\s+@/);
    	                	
    	                	var img_src =  myObj.grt[posi[idx][Qty]-1].profile_image_url.substr(1).slice(0, -1);
    	             		console.log(context);
    	                     loadImage(img_src).then((image) => { dumb(context, image,Qty, i, j,Qty,img_wi[idx],img_hi[idx],ss,result_[0],result_[1],result_[2],sss,clr);
    	                });}
    				parseInt(Qty+=1);
    }
    }
                        for (var i = 3*col_[idx]; i < 3*col_[idx]+col_[idx]; i++) {
                        	if(clr=='black'){
                        		clr='gray';
                        	}else{
                        		clr='black';
                        	}
                        for (var j = 0; j <row_[idx]; j++) {
                        	if(clr=='black'){
                        		clr='gray';
                        	}else{
                        		clr='black';
                        	}
                     
                        if(Qty>=(leng)){
    	                	 images[Qty].src ="miss.png";
    	             		
    	                     images[Qty].onload = dumb(context, images[Qty],Qty, i, j,Qty,img_wi[idx],img_hi[idx],'Miss Title','Miss Your Messag','Signature',clr);
    	                }
    	                else{
							var ss=myObj.grt[Qty].title;
							var sss=myObj.grt[posi[idx][Qty]-1].signature;
    	                	 var   str_ = myObj.grt[posi[idx][Qty]-1].message;
   	                	  var  result_ = str_.replace(/.{42}\S*\s+/g, "$&@").split(/\s+@/);
    	                	 var img_src =  myObj.grt[posi[idx][Qty]-1].profile_image_url.substr(1).slice(0, -1);
    	             		
    	                    loadImage(img_src).then((image) => { dumb(context, image,Qty, i, j,Qty,img_wi[idx],img_hi[idx],ss,result_[0],result_[1],result_[2],sss,clr);
    	                }); } parseInt(Qty+=1);
    }
    }
   
   img1_src = myObj.center_image.substr(1).slice(0, -1);
   loadImage(img_src).then((image) => {dumb1(context, image);});
    	 

		 
		 
		 
		 
		 
		 const str = canvas.toDataURL();
		console.log(str);
var fs = require("fs");

var base64Data = str.replace("data:image/png;base64,", "");
fs.writeFile("images/b.jpg", base64Data, {encoding: 'base64'}, function(err){
  console.log(err);
});
		 

     }else{
    	 alert("json incompleated");
     }
    
}

function dumb(ctx,img,index,i,j,Qty,wii,hii,title_,msg_,msg_1,msg_2,Sing_,clr){
return function (){
	 ctx.fillStyle =clr;
	  
	  ctx.strokeRect(i * wii, j * hii, wii, hii);
	  ctx.fillRect(i * wii,j * hii,wii,(hii/100)*10);
	   ctx.textAlign = "center";    
	   ctx.fillStyle = "white";
      ctx.font =((hii/100)*10)/2+"pt sans-serif";
	  ctx.fillText(title_, (i*wii)+(wii)/2, (j*hii)+(hii*.065));
	  
	  
	  ctx.fillStyle = "black";
      ctx.font =wii*.03+"pt arial";
	  ctx.fillText(msg_, (i*wii)+(wii/2), (j*hii)+(hii*.16) ); 
	  ctx.fillText(msg_1, (i*wii)+(wii/2), (j*hii)+(hii*.22) ); 
	  ctx.fillText(msg_2, (i*wii)+(wii/2), (j*hii)+(hii*.28) ); 
		 
	   
	  ctx.drawImage(img, (i*wii)+(wii*.2), (j*hii)+(hii*.3), wii*.6, hii*.6);
	  ctx.font = "bold "+wii*.03+"pt  arial";
	   ctx.fillText(Sing_, (i*wii)+(wii/2), (j*hii)+(hii*.95) );};
}
function dumb1(ctx,img){
   return function () {
	   ctx.strokeRect(1500, 0 , 3000, 3000);
        context.drawImage(img,1500,0, 3000, 3000); 
    };
}







 
  
