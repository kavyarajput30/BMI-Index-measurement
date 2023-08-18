



let btn = document.querySelector("button");
btn.addEventListener("click",()=>{

    let wght = document.querySelector("#weight");
    let hight = document.querySelector("#height");
    let bmi = document.querySelector(".bmi");
    let calculate = (wght.value)/((hight.value)*(hight.value));
    bmi.innerHTML= calculate;
    wght.value="";
    hight.value="";
     
    let cond= document.querySelector(".condition")
    if(calculate<18.6){ 
        cond.innerHTML= "Under Weight";
    }
    else if( calcualte<24.9 && calculate>18.6){
        cond.innerHTML= "Normal Weight";
    }
    else if(calculate>24.9){
        cond.innerHTML= "OverWeight";
    }
})



