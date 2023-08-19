let  ulSlider = document.getElementById("ulSlider");
let isdragging = false, startX, startScrollLeft;
const dragStart = (e)=>{
    isdragging = true;
    ulSlider.classList.add("dragging");

    startX = e.pageX;
    startScrollLeft = ulSlider.scrollLeft;

} 

const dragging = (e) =>{
if(isdragging == false){
    return;
}    
ulSlider.scrollLeft= startScrollLeft - (e.pageX - startX);

}

const draggStop = ()=>{
    isdragging = false;
    ulSlider.classList.remove("dragging")
}

ulSlider.addEventListener("mousedown", dragStart);
ulSlider.addEventListener("mousemove", dragging);
ulSlider.addEventListener("mouseup", draggStop);