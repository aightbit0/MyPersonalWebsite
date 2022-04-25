

window.addEventListener("scroll", (event) => {

    var scrollMaxY = window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    let faktor = (scrollMaxY/100);

    let scroll = this.scrollY;
    let percentage = scroll/faktor;
    if(percentage >= 0 && percentage <=100){
        document.getElementsByClassName("status")[0].style.width = percentage+"%";
    }
});