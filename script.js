// Offer Bar Close
const offerClose = document.getElementById("offerClose");
const offerBar = document.getElementById("offerBar");

if (offerClose && offerBar) {
    offerClose.addEventListener("click", function () {
        offerBar.style.display = "none";
    });
}

// Side Navbar Toggle (Mobile)
const sideNavbar = document.getElementById("sideNavbar");

function showNavbar() {
    if (sideNavbar) sideNavbar.style.left = "0";
}

function closeNavbar() {
    if (sideNavbar) sideNavbar.style.left = "-60%";
}

// Collections Page: Search & Filter Functionality
const searchInput = document.getElementById("searchInput");
const checkboxes = document.querySelectorAll(".filter-checkbox");
const productItems = document.querySelectorAll(".collection-item");

function filterProducts() {
    const searchText = searchInput ? searchInput.value.toLowerCase().trim() : "";

    // Collect all checked filter values
    const selectedTags = [];
    checkboxes.forEach(function (box) {
        if (box.checked) {
            selectedTags.push(box.value.toLowerCase());
        }
    });

    productItems.forEach(function (item) {
        const productName = item.querySelector("h4").textContent.toLowerCase();
        const itemTags = item.getAttribute("data-tags").toLowerCase().split(",");

        // Check search match
        const matchesSearch = productName.includes(searchText);

        // Check filter match (if no checkbox selected, show all; otherwise match at least one tag)
        const matchesFilter =
            selectedTags.length === 0 ||
            selectedTags.some((tag) => itemTags.includes(tag));

        if (matchesSearch && matchesFilter) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

if (searchInput) {
    searchInput.addEventListener("keyup", filterProducts);
}

checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", filterProducts);
});

// Contact Form Submission Alert
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for contacting Nostra! We will get back to you soon.");
        contactForm.reset();
    });
}