game_codes = {

}


with open("game_saves.html", "w") as f:
    for code, title in game_codes.items():
        html = f"""<div class="game-box" data-platform="ps3" data-category="action" data-type="multiplayer" data-modded="modded">
    <a href="./saves/PS3/{code}/{code}.zip">
        <img src="./saves/PS3/{code}/ICON0.PNG" alt="{title} (modded)">
    </a>
    <h3>{title} (PS) .zip - Action (Single Player, Modded)</h3>
</div>
"""
        f.write(html)


print("HTML generated in game_saves.html")
