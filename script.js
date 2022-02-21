//This validates and sets the focus, but it almost seems like changing the color of the element would make sense here.
function validatePrincipal(value)
{
  if(value <= 0)
  {
    alert("Enter a positive number")
    document.getElementById("principal").focus();
    return false;
  }
  return true;
}

//computes interest rates
function compute()
{
    var principal = document.getElementById("principal").value;
    if(!validatePrincipal(principal))
    {
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result")
    result.innerHTML = "If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"

}

//updates the range slider for the rate value.
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
