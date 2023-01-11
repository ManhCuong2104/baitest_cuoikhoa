let Container=document.getElementsByClassName("Container")[0];
let valueCheck=document.getElementById('valueIn');
valueCheck.addEventListener('input',function(){
    if(isNaN(parseInt(valueCheck.value)) || parseInt(valueCheck.value)<=0 || parseInt(valueCheck.value) > 3000){
        let Wr=document.getElementById("Wr");
            Wr.style.display='block';
            valueCheck.style.border="0.5px solid red";
            let Test=document.getElementById("Test");
            Test.style.display="none";
            return;
        }
    else{
            let Wr=document.getElementById("Wr");
            Wr.style.display='none';
            valueCheck.style.border="0.5px solid green";
            let Test=document.getElementById("Test");
            Test.style.display="block";
    }
let text3=document.getElementById("valueIn").value;
    if(text3==0){
                document.getElementById("text3").innerHTML="where magic happens";
    }
let laMa = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};
let str = '';
    for (let i in laMa) {
        let s = Math.floor(text3 / laMa[i]);
        text3 -= s * laMa[i];
        str += i.repeat(s);
    }
    if(str!="")
        {
        document.getElementById("text3").innerHTML=str;
        }
});