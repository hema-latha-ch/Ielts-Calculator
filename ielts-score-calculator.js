function ieltsCalculator()
{
    var speaking = parseInt(document.getElementById("speakingtextbox").value);
    console.log(speaking);
    var writing = parseInt(document.getElementById("writingtextbox").value);
    var listening = parseInt(document.getElementById("listeningtextbox").value);
    var reading = parseInt(document.getElementById("readingtextbox").value);
    ieltsresult = 0;
    if((speaking) && (writing) && (listening) && (reading) <= 9 && (speaking) && (writing) && (listening) && (reading) >=0)
    {
              ieltsresult = (speaking + writing + listening + reading)/4;
        document.getElementById("overallscoretextbox").value = ieltsresult;
    }
    else
    {
       // document.getElementById("displaymessage").innerHTML = "Please enter valid input";
        if(isNaN(speaking))
        {
            document.getElementById("displaymessage").innerHTML = "Enter valid numeric value for speaking";
        }
        else if(isNaN(listening))
        {
            document.getElementById("displaymessage").innerHTML = "Enter valid numeric value for listening";
        }
        else if(isNaN(reading))
        {
            document.getElementById("displaymessage").innerHTML = "Enter valid numeric value for reading";
        }
        else if(isNaN(writing))
        {
            document.getElementById("displaymessage").innerHTML = "Enter valid numeric value for writing";
        }

    }
}
function clearValues()
{
    document.getElementById("speakingtextbox").value = "";
    document.getElementById("writingtextbox").value = "";
    document.getElementById("listeningtextbox").value = "";
    document.getElementById("readingtextbox").value = "";
    document.getElementById("overallscoretextbox").value = "";
}