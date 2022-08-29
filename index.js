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