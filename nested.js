//to print a biggest number i
var a = parseInt(prompt("enter a number"));
var b = parseInt(prompt("enter a number"));
var c = parseInt(prompt("enter a number"));
if(a>b)
{
    if(a>c)
    {
        document.write(`${a} biggest number`)
    }
    else
    {
        document.write(`${c} is biggest number`)
    }
}
else{
    if(b>c)
    {
        document.write(`${b} is biggest number`)
    }
    else
    {
        document.write(`${c} is biggest number`)
    }
}
