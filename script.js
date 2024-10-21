// Main filter function
function filterByPlatformCategoryAndType() {
    const platformFilter = document.getElementById("platform").value;
    const gameCategoryFilter = document.getElementById("game-category").value; // Renamed to game-category
    const gameTypeFilter = document.getElementById("game-type").value; // New game type (single-player, multiplayer)
    const modStatusFilter = document.getElementById("mod-status").value;
    const searchTerm = document.getElementById("search-input").value.toLowerCase(); // Get the search input

    const gameBoxes = document.querySelectorAll(".game-box");

    gameBoxes.forEach(box => {
        const platform = box.getAttribute("data-platform");
        const category = box.getAttribute("data-category"); // Changed to data-category
        const type = box.getAttribute("data-type"); // Single-player, multiplayer
        const modStatus = box.getAttribute("data-modded");
        const title = box.querySelector("h3").textContent.toLowerCase(); // Get the title text

        // Check platform
        const platformMatch = platformFilter === "all" || platform === platformFilter;
        // Check game category (action, rpg, etc.)
        const categoryMatch = gameCategoryFilter === "all" || category === gameCategoryFilter;
        // Check game type (single-player, multiplayer)
        const typeMatch = gameTypeFilter === "all" || type === gameTypeFilter;
        // Check mod status
        const modMatch = modStatusFilter === "all" || modStatus === modStatusFilter;
        // Check search term
        const searchMatch = title.includes(searchTerm); // Check if the title includes the search term

        // Show or hide the game box based on the filters
        if (platformMatch && categoryMatch && typeMatch && modMatch && searchMatch) {
            box.style.display = "block"; // Show the box
        } else {
            box.style.display = "none"; // Hide the box
        }
    });
}

// Search function to handle form submission
function searchGames(event) {
    event.preventDefault(); // Prevent form submission
    filterByPlatformCategoryAndType(); // Call the main filter function to update the view
}

// Initialize filter function on page load and add event listeners
document.addEventListener("DOMContentLoaded", () => {
    filterByPlatformCategoryAndType(); // Initial call to filter on page load

    // Add event listeners to dropdowns
    const filters = document.querySelectorAll("#platform, #game-category, #game-type, #mod-status");
    filters.forEach(filter => {
        filter.addEventListener("change", filterByPlatformCategoryAndType);
    });

    // Add event listener to search form
    document.getElementById("search-form").addEventListener("submit", searchGames);
});
