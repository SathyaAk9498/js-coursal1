var carousel=document.querySelector("img");
var img=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg"]
var num=4;


function next(){
    num++;
   console.log("step1");
   console.log( "num=",num);
    if(num>=img.length){
        num=0;
       console.log("step2");
       console.log("num",num);
       carousel.src=img[num]
        console.log("num",num);  
    }
    else{
       console.log("step3");
       carousel.src=img[num]
        console.log("num",num);

    }
                    
};
function back(){
    num--;
    if(num<0){
        num=img.length-1;
        carousel.src=img[num]
            }
            else{
              carousel.src=img[num]
            }

};