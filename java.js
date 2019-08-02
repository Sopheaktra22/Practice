
var quiz = () => {
    var score = 0;
    // Q1
    let html = document.getElementById("html");
    let html1 = document.getElementById("html1");
    let html2 = document.getElementById("html2");
    if (html.checked){
        score += 25;
    }else if( html1.checked){
        score += 0;
    }else if(html2.checked){
        score += 0;
    }

    // Q1
    let css = document.getElementById("css");
    let css1 = document.getElementById("css1");
    let css2 = document.getElementById("css2");
    if (css.checked){
        score += 25;
    }else if( css1.checked){
        score += 0;
    }else if(css2.checked){
        score += 0;
    }

    //Q3
    let subjects = document.getElementsByName("subject[]");
    for (let i =0; i <subjects.length; i++){
        if (subjects[i].checked){
            if (subjects[i].value == "CSS"){
                score += 0;
                break;
            }else if(subjects[i].value == "JavaScript"){
                score += 25/2;
            }else if(subjects[i].value == "PHP"){
                score += 25/2;
            }
        }
    }

    //Q4
    let script = document.getElementById("java");
    if (script.value != "best"){
        score += 0;
    }else{
        score +=25;
    }
    document.getElementById("result").innerHTML = score;
}
let btn = document.getElementById("answer");
btn.addEventListener("click", quiz);

