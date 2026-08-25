const display = document.getElementById("res");


function setvalue(val)
{
   display.value += val
}

function Clear()
{
    display.value =""
}

function Result(){
    try{
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value("Error")
    }


}

