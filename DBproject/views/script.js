document.addEventListener("DOMContentLoaded", function () {
    const images = [ "tree1.png", "tree2.png", "tree3.png"];
    let currentIndex = 0;
    const background = document.getElementById("background");
    const title = document.getElementById("title");
    const description = document.getElementById("description");

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;

        // Change the background image
        background.style.opacity = 0;
        setTimeout(function () {
            background.innerHTML = `<img src="${images[currentIndex]}" alt="Background Image">`;
            background.style.opacity = 1;
        }, 500);

        // Add animation classes to the title and description
        title.classList.remove("show");
        description.classList.remove("show");

        // Trigger a reflow by reading the offsetHeight, then add the show class
        title.offsetHeight;
        description.offsetHeight;
        
        title.classList.add("show");
        description.classList.add("show");
    }

    // Initial background image change
    changeBackground();

    // Set an interval to change the background image every 3 seconds
    setInterval(changeBackground, 3000);
});
