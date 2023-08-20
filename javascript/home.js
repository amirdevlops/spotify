let ulSlider = document.getElementById("ulSlider");
let isDragging = false, startX, startScrollLeft;
let isScrolling = false;

const dragStart = (e) => {
    isDragging = true;
    ulSlider.classList.add("dragging");

    startX = e.touches[0].pageX; // Use the first touch event's X position
    startScrollLeft = ulSlider.scrollLeft;

    isScrolling = true; // Enable scrolling flag
}

const dragging = (e) => {
    if (!isDragging) {
        return;
    }

    if (!isScrolling) {
        return; // Ignore if not scrolling
    }

    ulSlider.scrollLeft = startScrollLeft - (e.touches[0].pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    ulSlider.classList.remove("dragging");
    isScrolling = false; // Disable scrolling flag
}

ulSlider.addEventListener("touchstart", dragStart);
ulSlider.addEventListener("touchmove", () => {
    // Debounce the touchmove event
    if (!isScrolling) {
        requestAnimationFrame(() => {
            dragging(event);
        });
    }
});
ulSlider.addEventListener("touchend", dragStop);
