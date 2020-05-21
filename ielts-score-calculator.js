function ieltsCalculator()
{
    var speaking = parseInt(document.getElementById("speakingtextbox").value);
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
        document.getElementById("displaymessage").innerHTML = "Please enter valid input";
    }
}