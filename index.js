function iphone2(asin,color,display,camera,bluetooth){
    let obj={};

    obj.asin=asin;
    obj.color=color;
    obj.display=display;
    obj.camera=camera;
    obj.bluetooth=bluetooth;

    obj.dial=function(){
        console.log("tring..tring")
    }
    obj.sendmessage=function(){
        console.log("message send")
    }
    return obj;


}
let iphoneA=iphone2("B8976876","black","6.1inch","12mp","5.1")
console.log(iphoneA);
let iphoneB=iphone2("B8976876","black","6.1inch","12mp","5.1")
console.log(iphoneB);