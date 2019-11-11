function calculate() {
    let a=document.getElementById("value1").value;
    let b=document.getElementById("value2").value;
    let c=document.getElementById("operation").value;
    let d;
    if (c==="+") {d=a+b}
    if (c==="-") {d=a-b}
    if (c==="/") {
        if(b==0) alert('Cannot divide by zero');
        else d=a/b;
    }
    if (c==="*" ) {d=a*b}
    document.getElementById("below").style.display="block";

    document.getElementById("result").innerHTML=d;
}
document.getElementById("below").style.display="none";
document.getElementById("button").onclick=function a(){
    calculate();
};
