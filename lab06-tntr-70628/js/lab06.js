var totalAtt = 0;
var totalAss = 0;
var totalPwe = 0;
function calculateRating() {
    var choose = document.forms[0];
    var txt = 0;
    var i;
    for(i = 0 ; i < choose.length ; i++)
    {
        if(choose[i].checked)
        {
            txt = i + 1;
        }
    }

    var choose1 = document.forms[1];
    var txt1 = 0;
    var i1;
    for(i1 = 0 ; i1 < choose1.length ; i1++)
    {
        if(choose1[i1].checked)
        {
            txt1 = i1 + 1;
        }
    }

    var choose2 = document.forms[2];
    var txt2 = 0;
    var i2;
    for(i2 = 0 ; i2 < choose2.length ; i2++)
    {
        if(choose2[i2].checked)
        {
            txt2 = i2 + 1;
        }
    }

    var text = document.getElementById("text").value;

    var attRate = document.createElement("p");
    attRate.textContent = "Attendance: " + txt;
    attRate.setAttribute("class", "attLog");
    document.getElementById("four").appendChild(attRate);

    var asRate = document.createElement("p");
    asRate.textContent = "Assignments: " + txt1;
    asRate.setAttribute("class", "asLog");
    document.getElementById("four").appendChild(asRate);

    var weRate = document.createElement("p");
    weRate.textContent = "Work Ethic/Professionalism: " + txt2;
    weRate.setAttribute("class", "weLog");
    document.getElementById("four").appendChild(weRate);

    var cmtRate = document.createElement("p");
    cmtRate.textContent = "Comments: " + text;
    cmtRate.setAttribute("class", "cmtLog");
    document.getElementById("four").appendChild(cmtRate);

    var brLine = document.createElement("p");
    brLine.textContent = "_____________________________________________________________________________";
    brLine.setAttribute("class","rateLog");
    document.getElementById("four").appendChild(brLine);

    var num = document.getElementById("num");
    var c = document.getElementById("four").childElementCount;
    var count = c/5;
    num.textContent = count;
    
    totalAtt += txt;
    rateAtt = totalAtt / count;
    flAtt = parseFloat(rateAtt).toFixed(2);
    var attTxt = document.getElementById("att");
    attTxt.textContent = flAtt;

    totalAss += txt1;
    rateAss = totalAss / count;
    flAss = parseFloat(rateAss).toFixed(2);
    var assTxt = document.getElementById("ass");
    assTxt.textContent = flAss;

    totalPwe += txt2;
    ratePwe = totalPwe / count;
    flPwe = parseFloat(ratePwe).toFixed(2);
    var pweTxt = document.getElementById("pwe");
    pweTxt.textContent = flPwe;

    var totalRating = (rateAtt + rateAss + ratePwe) / 3;
    flRating = parseFloat(totalRating).toFixed(2);
    var rateTxt = document.getElementById("rating");
    rateTxt.textContent = flRating;


}
