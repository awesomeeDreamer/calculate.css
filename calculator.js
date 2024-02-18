function add()
{
    let num1, num2,sum;

    num1 = parseFloat(document.getElementById("firstnumber").value);
    num2 = parseFloat(document.getElementById("secondnumber").value);

    sum = parseFloat(num1 + num2).toFixed(2);
    document.getElementById("answer").value=sum;
} 

function sub()
{
    num1 = parseFloat(document.getElementById("firstnumber").value);
    num2 = parseFloat(document.getElementById("secondnumber").value);

    sum = parseFloat(num1 - num2).toFixed(2);
    document.getElementById("answer").value=sum;

}

function multiplication()
{
    num1 = parseFloat(document.getElementById("firstnumber").value);
    num2 = parseFloat(document.getElementById("secondnumber").value);

    sum = parseFloat(num1 * num2).toFixed(2);
    document.getElementById("answer").value=sum;

}

function division()
{
    num1 = parseFloat(document.getElementById("firstnumber").value);
    num2 = parseFloat(document.getElementById("secondnumber").value);
    if(parseInt(num2) == 0){
        alert("You can not devide a number by 0");
        return false;
    }
    sum = parseFloat(num1 / num2).toFixed(2);
    document.getElementById("answer").value=sum;

}


