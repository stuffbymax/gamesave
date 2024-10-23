function filterByPlatformCategoryAndType() {
    var platformFilter = document.getElementById("platform").value;
    var gameCategoryFilter = document.getElementById("game-category").value;
    var gameTypeFilter = document.getElementById("game-type").value;
    var modStatusFilter = document.getElementById("mod-status").value;
    var searchTerm = document.getElementById("search-input").value.toLowerCase();

    var gameBoxes = document.querySelectorAll(".game-box");

    for (var i = 0; i < gameBoxes.length; i++) {
        var box = gameBoxes[i];
        var platform = box.getAttribute("data-platform");
        var category = box.getAttribute("data-category");
        var type = box.getAttribute("data-type");
        var modStatus = box.getAttribute("data-modded");
        var title = box.querySelector("h3").textContent.toLowerCase();

        var platformMatch = platformFilter === "all" || platform === platformFilter;
        var categoryMatch = gameCategoryFilter === "all" || category === gameCategoryFilter;
        var typeMatch = gameTypeFilter === "all" || type === gameTypeFilter;
        var modMatch = modStatusFilter === "all" || modStatus === modStatusFilter;
        var searchMatch = title.indexOf(searchTerm) > -1;

        if (platformMatch && categoryMatch && typeMatch && modMatch && searchMatch) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    }
}

function searchGames(event) {
    event.preventDefault();
    filterByPlatformCategoryAndType();
}

document.addEventListener("DOMContentLoaded", function() {
    filterByPlatformCategoryAndType();

    var filters = document.querySelectorAll("#platform, #game-category, #game-type, #mod-status");
    for (var i = 0; i < filters.length; i++) {
        filters[i].addEventListener("change", filterByPlatformCategoryAndType);
    }

    document.getElementById("search-form").addEventListener("submit", function(event) {
        event.preventDefault();
        filterByPlatformCategoryAndType();
    });
});
