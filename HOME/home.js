var dd_main = document.querySelector(".dd_main");

	dd_main.addEventListener("click", function(){
		this.classList.toggle("active");
	});    

    
let senBtn=document.querySelector("#send-btn-id");
let recBtn=document.querySelector("#recive-btn-id");
let destAdd=document.querySelector("#frame-parent6");
let amt=document.querySelector("#frame-parent7");
let rece= false;


recBtn.addEventListener("click",function(){
    if(rece==false){
        document.getElementById("recive-btn-id").style.boxShadow = "0px 0px 10px green"
        document.getElementById("frame-child2").style.display ="none"
        document.getElementById("select-coin").style.display ="none"
        document.getElementById("frame-parent7").style.display ="none"
        document.getElementById("frame-input").innerText="Receivers address"
        rece =true
    }
    else{
        rece =false
    }
})
senBtn.addEventListener("click",function(){
    if(send==false){
        document.getElementById("recive-btn-id").style.boxShadow = "0px 0px 10px grey"
        document.getElementById("frame-child2").style.display ="flex"
        document.getElementById("select-coin").style.display ="flex"
        document.getElementById("frame-parent7").style.display ="flex"
        document.getElementById("frame-input").innerText="Destination address"
        send =true
    }
    else{
        send =false
    }
})
