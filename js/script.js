// -----------------------------scroll-bar-----------------------------------
let bar = document.querySelector(".bar");
let round = document.querySelector(".round");
let span = document.querySelector(".round span");



function handleScroll() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );

    const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;
    const finalValue = scrollPercentage.toFixed(2);

    bar.style.width = `${finalValue}%`;
    const roundValue = Math.floor(finalValue);
    span.innerHTML = `${roundValue}%`;
}

// Call handleScroll on page load
handleScroll();

// Add a scroll event listener
window.addEventListener("scroll", handleScroll);

