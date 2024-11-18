document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("togglebtn");
    const hideItems = document.querySelectorAll(".hideitems");

    toggleBtn.addEventListener("click", () => {
        hideItems.forEach(item => {
            item.classList.toggle("show");
        });
    });
});
