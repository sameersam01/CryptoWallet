var dd_main = document.querySelector(".dd_main");

	dd_main.addEventListener("click", function(){
		this.classList.toggle("active");
	});    

    
let senBtn=document.querySelector("#send-btn");
let recBtn=document.querySelector("#rec-btn");

let curr=true;

senBtn.addEventListener("click",function(){
    if(curr==false){
        document.getElementById("amount").style.display= "flex";   
        document.getElementById("send-btn").style.color= "white";   
        document.getElementById("rec-btn").style.color= "grey";   
        document.getElementById("dest-address").innerText= "Destination address";   
        
        curr=true;
    }
})

recBtn.addEventListener("click",function(){
    if(curr==true){
        document.getElementById("amount").style.display= "none";
        document.getElementById("send-btn").style.color= "grey";   
        document.getElementById("rec-btn").style.color= "white";   
        document.getElementById("dest-address").innerText= "Address";   
        curr=false;
    }
})
