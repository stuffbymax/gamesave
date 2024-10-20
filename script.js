// Main filter function
function filterByPlatformAndType() {
    const platformFilter = document.getElementById("platform").value;
    const gameTypeFilter = document.getElementById("game-type").value;
    const modStatusFilter = document.getElementById("mod-status").value;
    const searchTerm = document.getElementById("search-input").value.toLowerCase(); // Get the search input

    const gameBoxes = document.querySelectorAll(".game-box");

    gameBoxes.forEach(box => {
        const platform = box.getAttribute("data-platform");
        const type = box.getAttribute("data-type");
        const modStatus = box.getAttribute("data-modded");
        const title = box.querySelector("h3").textContent.toLowerCase(); // Get the title text

        // Check platform
        const platformMatch = platformFilter === "all" || platform === platformFilter;
        // Check game type
        const typeMatch = gameTypeFilter === "all" || type === gameTypeFilter;
        // Check mod status
        const modMatch = modStatusFilter === "all" || modStatus === modStatusFilter;
        // Check search term
        const searchMatch = title.includes(searchTerm); // Check if the title includes the search term

        // Show or hide the game box based on the filters
        if (platformMatch && typeMatch && modMatch && searchMatch) {
            box.style.display = "block"; // Show the box
        } else {
            box.style.display = "none"; // Hide the box
        }
    });
}

// Search function to handle form submission
function searchGames(event) {
    event.preventDefault(); // Prevent form submission
    filterByPlatformAndType(); // Call the main filter function to update the view
}

// Initialize filter function on page load and add event listeners
document.addEventListener("DOMContentLoaded", () => {
    filterByPlatformAndType(); // Initial call to filter on page load

    // Add event listeners to dropdowns
    const filters = document.querySelectorAll("#platform, #game-type, #mod-status");
    filters.forEach(filter => {
        filter.addEventListener("change", filterByPlatformAndType);
    });

    // Add event listener to search form
    document.getElementById("search-form").addEventListener("submit", searchGames);
});
