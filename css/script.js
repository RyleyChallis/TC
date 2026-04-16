const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const currentItem = header.parentElement;
        const isOpen = currentItem.classList.contains("active");

        document.querySelectorAll(".accordion-item").forEach(item => {
            item.classList.remove("active");
        });

        if (!isOpen) {
            currentItem.classList.add("active");
        }
    });
});