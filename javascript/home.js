// Function to check if the user is on a mobile device
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Choose the appropriate version of the script based on the device type
if (isMobileDevice()) {
    // Mobile version of the script
    let ulSlider = document.getElementById("ulSlider");
    let isDragging = false, startX, startScrollLeft;

    const dragStart = (e) => {
        isDragging = true;
        ulSlider.classList.add("dragging");

        startX = e.touches[0].pageX;
        startScrollLeft = ulSlider.scrollLeft;
    }

    const dragging = (e) => {
        if (!isDragging) {
            return;
        }
        ulSlider.scrollLeft = startScrollLeft - (e.touches[0].pageX - startX);
    }

    const dragStop = () => {
        isDragging = false;
        ulSlider.classList.remove("dragging");
    }

    ulSlider.addEventListener("touchstart", dragStart);
    ulSlider.addEventListener("touchmove", dragging);
    ulSlider.addEventListener("touchend", dragStop);
} else {
    // Desktop version of the script
    let ulSlider = document.getElementById("ulSlider");
    let isDragging = false, startX, startScrollLeft;

    const dragStart = (e) => {
        isDragging = true;
        ulSlider.classList.add("dragging");

        startX = e.pageX;
        startScrollLeft = ulSlider.scrollLeft;

    }

    const dragging = (e) => {
        if (!isDragging) {
            return;
        }
        ulSlider.scrollLeft = startScrollLeft - (e.pageX - startX);
    }

    const dragStop = () => {
        isDragging = false;
        ulSlider.classList.remove("dragging");
    }

    ulSlider.addEventListener("mousedown", dragStart);
    ulSlider.addEventListener("mousemove", dragging);
    ulSlider.addEventListener("mouseup", dragStop);
}
