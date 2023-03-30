let h1 = document.querySelector("h1"),
    h1String = h1.textContent;

// string to spans each one containing a letter
function strToSpans(string) {
    let spansHtml = "";

    for (let index = 0; index < string.length; index++) {
        if(string[index] === " "){
            spansHtml = spansHtml.concat(`&nbsp;`)
        }
        spansHtml = spansHtml.concat(`<div  class="hop_up" style = "animation-delay:${(index*50)}ms;">${string[index]}</div>`)
    }

    return spansHtml;
}
// add the generated spans to the h1 in html file
h1.innerHTML = strToSpans(h1String)
// restart the animation
let divs = h1.querySelectorAll("div");

divs[divs.length-1].addEventListener("animationend",()=>{
    for (let index = 0; index < divs.length; index++) {
            divs[index].classList.remove("hop_up")
            void divs[index].offsetWidth;
            divs[index].classList.add("hop_up")
    }
})

