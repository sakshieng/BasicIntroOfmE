const header = document.getElementById("header");

header.addEventListener("mouseover", function () {
    header.classList.add("bg-white-800-hover"); // Add a class for the hover effect
});
header.addEventListener("mouseout", function () {
    header.classList.remove("bg-white-800-hover");
});