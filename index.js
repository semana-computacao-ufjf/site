function changeColor(day)
{
    collection = document.getElementsByClassName("button-programacao");
    for (i in collection) {
        console.log(collection[i])
        if(i < 5){
            collection[i].style.backgroundColor = "#888482"
        }
    };
    document.getElementById(day).style.backgroundColor = '#b01917';
    
}

function changeTable(tday){
    collection = document.getElementsByClassName("table-day");
    for (i in collection) {
        console.log(collection[i])
        if(i < 5){
            collection[i].style.visibility='hidden';
            collection[i].style.display='none';
        }
    };
    document.getElementById(tday).style.display='block';
    document.getElementById(tday).style.visibility='visible';
}
// changeColor("day1");
document.getElementById("day1").click()