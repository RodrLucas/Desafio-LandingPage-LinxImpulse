const btn = document.getElementById("btn")
const algoritimoParagraph = document.getElementsByClassName('algoritimo__paragraph')[0]


btn.addEventListener('click', hideShowText)

// Function responsible for hiding and showing paragraph of the algorithms section

let visibility = true
function hideShowText(){
    if(visibility == true){
        algoritimoParagraph.style.display = 'none'
        visibility = false; 
        btn.style.transform = "rotate(315deg)";
    }else{
        algoritimoParagraph.style.display = 'block'
        visibility = true;
        btn.style.transform = "rotate(135deg)";
    }
}
