// Mobile sidebar toggle
function initPageChrome() {
    const sidebarEl = document.getElementById("sidebar");
    const navToggle = document.getElementById("navToggle");
    const scrim = document.getElementById("scrim");

    function closeMobileSidebar() {
        if (sidebarEl) sidebarEl.classList.remove("open");
        if (scrim) scrim.classList.remove("show");
        if (navToggle) navToggle.setAttribute("aria-expanded", "false");
    }

    if (navToggle && sidebarEl) {
        navToggle.addEventListener("click", () => {
            const open = sidebarEl.classList.toggle("open");
            if (scrim) scrim.classList.toggle("show", open);
            navToggle.setAttribute("aria-expanded", String(open));
        });
    }
    if (scrim) scrim.addEventListener("click", closeMobileSidebar);

    document.querySelectorAll(".toc a").forEach((a) => {
        a.addEventListener("click", closeMobileSidebar);
    });

    document.querySelectorAll(".toc-twirl").forEach((twirl) => {
        twirl.addEventListener("click", () => {
            const node = twirl.closest(".toc-node");
            if (!node) return;
            const collapsed = node.classList.toggle("collapsed");
            twirl.setAttribute("aria-expanded", String(!collapsed));
        });
    });

    return { closeMobileSidebar };
}

document.addEventListener("DOMContentLoaded", initPageChrome);