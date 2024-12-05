async function loadGameData() {
  const gameData = [];
  const gameFiles = [
        "afro_samurai_3.json",
        "after_burner_climax_4.json",
        "akibas_trip_undead_undressed_5.json",
        "alice_madness_returns_6.json",
        "aliens_colonial_marines_7.json",
        "aliens_colonial_marines_8.json",
        "aliens_vs_predator_9.json",
        "aliens_vs_predator_10.json",
        "alone_in_the_dark_inferno_11.json",
        "alone_in_the_dark_inferno_12.json",
        "altered_beast_13.json",
        "army_of_two_the_40th_day_14.json",
        "army_of_two_the_devils_cartel_15.json",
        "arslan_the_warriors_of_legend_16.json",
        "assassins_creed_17.json",
        "assassins_creed_18.json",
        "assassins_creed_ii_19.json",
        "assassins_creed_iii_20.json",
        "asuras_wrath_21.json",
        "atelier_ayesha_the_alchemist_of_dusk_22.json",
        "batman_arkham_asylum_23.json",
        "batman_arkham_asylum_24.json",
        "batman_arkham_city_25.json",
        "batman_arkham_origins_26.json",
        "battle_los_angeles_27.json",
        "battlefield_bad_company_2_28.json",
        "bayonetta_29.json",
        "bayonetta_30.json",
        "bioshock_31.json",
        "bioshock_32.json",
        "bioshock_2_33.json",
        "bioshock_2_34.json",
        "bioshock_infinite_35.json",
        "black_knight_sword_36.json",
        "bladestorm_the_hundred_years_war_37.json",
        "blazblue_calamity_trigger_38.json",
        "blazblue_calamity_trigger_39.json",
        "blazblue_continuum_shift_40.json",
        "blazblue_continuum_shift_41.json",
        "blazblue_continuum_shift_extend_42.json",
        "blazblue_continuum_shift_extend_43.json",
        "bleach_soul_resurreccion_44.json",
        "borderlands_45.json",
        "borderlands_2_46.json",
        "burnout_paradise_47.json",
        "call_of_duty_black_ops_48.json",
        "call_of_duty_black_ops_49.json",
        "call_of_duty_ghosts_50.json",
        "call_of_duty_modern_warfare_2_51.json",
        "call_of_duty_modern_warfare_3_52.json",
        "call_of_duty_advanced_warfare_53.json",
        "call_of_duty_black_ops_ii_54.json",
        "call_of_juarez_bound_in_blood_55.json",
        "cars_race_o_rama_56.json",
        "castlevania_lords_of_shadow_2_57.json",
        "castlevania_lords_of_shadow_58.json",
        "castlevania_lords_of_shadow_59.json",
        "castlevania_lords_of_shadow_mirror_of_fate_60.json",
        "catherine_61.json",
        "catherine_62.json",
        "condemned_2_bloodshot_63.json",
        "crazy_taxi_64.json",
        "cross_edge_65.json",
        "crysis_hd_66.json",
        "crystal_defenders_67.json",
        "dai_3_ji_super_robot_taisen_z_jigoku_hen_68.json",
        "dantes_inferno_69.json",
        "dantes_inferno_70.json",
        "dark_sector_71.json",
        "dark_souls_72.json",
        "dark_souls_ii_73.json",
        "dark_void_74.json",
        "darksiders_75.json",
        "darksiders_ii_76.json",
        "daytona_usa_77.json",
        "dead_island_78.json",
        "dead_island_riptide_79.json",
        "dead_island_riptide_80.json",
        "dead_or_alive_5_81.json",
        "dead_or_alive_5_82.json",
        "dead_or_alive_5_83.json",
        "dead_rising_2_84.json",
        "dead_rising_2_85.json",
        "dead_rising_2_off_the_record_86.json",
        "dead_space_87.json",
        "dead_space_88.json",
        "dead_space_2_89.json",
        "dead_space_2_90.json",
        "dead_space_3_91.json",
        "dead_space_3_92.json",
        "dead_space_ignition_93.json",
        "deadpool_94.json",
        "demons_souls_95.json",
        "dengeki_bunko_fighting_climax_ignition_96.json",
        "deus_ex_human_revolution_97.json",
        "devil_may_cry_123_hd_collection_98.json",
        "devil_may_cry_4_99.json",
        "diablo_iii_100.json",
        "digimon_all_star_rumble_101.json",
        "dirt_3_102.json",
        "dishonored_103.json",
        "dmc_devil_may_cry_104.json",
        "dmc_devil_may_cry_105.json",
        "doodle_god_106.json",
        "doom_3_bfg_edition_107.json",
        "dragon_age_inquisition_108.json",
        "dragon_ball_xenoverse_109.json",
        "dragon_ball_raging_blast_110.json",
        "dragon_ball_raging_blast_2_111.json",
        "dragon_ball_z_battle_of_z_112.json",
        "dragon_ball_z_ultimate_tenkaichi_113.json",
        "dragon_ball_z_ultimate_tenkaichi_114.json",
        "dragons_dogma_115.json",
        "dragons_dogma_dark_arisen_116.json",
        "drakengard_3_117.json",
        "driver_san_francisco_118.json",
        "ducktales_remastered_119.json",
        "duke_nukem_3d_megaton_edition_120.json",
        "dungeon_siege_3_121.json",
        "dynasty_warriors_gundam_122.json",
        "dynasty_warriors_gundam_123.json",
        "dynasty_warriors_8_124.json",
        "dynasty_warriors_8_xtreme_legends_125.json",
        "f1_race_stars_126.json",
        "fallout_new_vegas_127.json",
        "fallout_3_128.json",
        "far_cry_2_129.json",
        "far_cry_3_130.json",
        "far_cry_3_131.json",
        "far_cry_3_132.json",
        "farming_simulator_15_133.json",
        "fat_princess_134.json",
        "fat_princess_135.json",
        "fifa_street_3_136.json",
        "final_fantasy_x_x_2_hd_remaster_137.json",
        "final_fantasy_x_x_2_hd_remaster_138.json",
        "final_fantasy_xiii_139.json",
        "final_fantasy_xiii_2_140.json",
        "final_fantasy_xiii_2_141.json",
        "fist_of_the_north_star_kens_rage_2_142.json",
        "fuse_143.json",
        "god_of_war_iii_144.json",
        "god_of_war_ascension_145.json",
        "god_of_war_collection_146.json",
        "god_of_war_origins_collection_147.json",
        "god_of_war_origins_single_player_148.json",
        "god_mode_149.json",
        "goldeneye_007_reloaded_150.json",
        "goldeneye_007_reloaded_151.json",
        "gran_turismo_5_152.json",
        "gran_turismo_5_153.json",
        "gran_turismo_5_prologue_154.json",
        "gran_turismo_6_155.json",
        "gran_turismo_hd_concept_156.json",
        "grand_theft_auto_iv_157.json",
        "grand_theft_auto_v_158.json",
        "grand_theft_auto_v_159.json",
        "grand_theft_auto_san_andreas_160.json",
        "grand_theft_auto_san_andreas_161.json",
        "green_lantern_rise_of_the_manhunters_162.json",
        "green_lantern_rise_of_the_manhunters_163.json",
        "guacamelee_164.json",
        "guardians_of_middle_earth_165.json",
        "guilty_gear_xrd_revelator_166.json",
        "gundam_musou_167.json",
        "hard_corps_uprising_168.json",
        "hatsune_miku_project_diva_f_169.json",
        "hatsune_miku_project_diva_f_2nd_170.json",
        "heavy_rain_171.json",
        "hell_yeah_wrath_of_the_dead_rabbit_172.json",
        "hitman_absolution_173.json",
        "hitman_blood_money_174.json",
        "hot_shots_golf_world_invitational_175.json",
        "hotline_miami_176.json",
        "hyperdimension_neptunia_victory_177.json",
        "i_am_alive_178.json",
        "i_am_alive_179.json",
        "infamous_180.json",
        "infamous_2_181.json",
        "infamous_festival_of_blood_182.json",
        "injustice_gods_among_us_183.json",
        "injustice_gods_among_us_184.json",
        "jetpack_joyride_185.json",
        "jojos_bizarre_adventure_all_star_battle_186.json",
        "kane_lynch_2_dog_days_187.json",
        "killzone_2_188.json",
        "killzone_2_189.json",
        "kingdom_hearts_hd_15_remix_190.json",
        "kingdom_hearts_hd_25_remix_191.json",
        "kingdoms_of_amalur_reckoning_192.json",
        "kung_fu_panda_193.json",
        "lara_croft_and_the_guardian_of_light_194.json",
        "lego_batman_2_dc_super_heroes_195.json",
        "lego_harry_potter_years_1_4_196.json",
        "lego_harry_potter_years_1_4_197.json",
        "lego_harry_potter_years_5_7_198.json",
        "lego_indiana_jones_2_the_adventure_continues_199.json",
        "lego_marvels_avengers_200.json",
        "lego_pirates_of_the_caribbean_the_video_game_201.json",
        "lego_star_wars_the_force_awakensq_202.json",
        "lego_star_wars_the_force_awakensq_203.json",
        "lego_star_wars_iii_the_clone_warsq_204.json",
        "lego_the_hobbitq_205.json",
        "lego_the_lord_of_the_ringsq_206.json",
        "lightning_returns_final_fantasy_xiiiq_207.json",
        "lollipop_chainsawq_208.json",
        "lollipop_chainsawq_209.json",
        "madden_nfl_13q_210.json",
        "marvel_vs_capcom_3_fate_of_two_worldsq_211.json",
        "max_payne_3_212.json",
        "metal_gear_rising_revengeance_213.json",
        "metal_gear_rising_revengeance_214.json",
        "metal_gear_solid_23_215.json",
        "metal_gear_solid_4_guns_of_the_patriots_216.json",
        "metal_gear_solid_peace_walker_hd_edition_217.json",
        "metal_gear_solid_v_ground_zeroes_218.json",
        "metal_gear_solid_v_ground_zeroes_219.json",
        "metal_gear_solid_v_the_phantom_pain_220.json",
        "metal_gear_solid_v_the_phantom_pain_221.json",
        "middle_earth_shadow_of_mordor_222.json",
        "minecraft_playstation_3_edition_223.json",
        "mini_ninjas_224.json",
        "mortal_kombat_225.json",
        "mortal_kombat_vs_dc_universe_226.json",
        "motorstorm_227.json",
        "motorstorm_apocalypse_228.json",
        "motorstorm_apocalypse_229.json",
        "motorstorm_apocalypse_digital_edition_230.json",
        "motorstorm_rc_231.json",
        "naruto_shippuden_ultimate_ninja_storm_2_232.json",
        "naruto_shippuden_ultimate_ninja_storm_2_233.json",
        "naruto_shippuden_ultimate_ninja_storm_3_full_burst_234.json",
        "naruto_shippuden_ultimate_ninja_storm_generations_235.json",
        "naughty_bear_panic_in_paradise_236.json",
        "need_for_speed_the_run_237.json",
        "need_for_speed_carbon_238.json",
        "need_for_speed_rivals_239.json",
        "need_for_speed_undercover_240.json",
        "neverdead_241.json",
        "nier_242.json",
        "ninja_gaiden_3_razors_edge_243.json",
        "of_orcs_and_men_244.json",
        "okami_hd_245.json",
        "okami_hd_246.json",
        "one_piece_unlimited_world_red_247.json",
        "one_piece_pirate_warriors_248.json",
        "one_piece_pirate_warriors_249.json",
        "one_piece_pirate_warriors_2_250.json",
        "one_piece_pirate_warriors_3_251.json",
        "outland_252.json",
        "outrun_online_arcade_253.json",
        "pac_man_championship_edition_dx_254.json",
        "payday_the_heist_255.json",
        "payday_2_256.json",
        "persona_4_arena_ultimax_257.json",
        "phantom_breaker_extra_258.json",
        "pirates_of_the_caribbean_at_worlds_end_259.json",
        "playstation_all_stars_battle_royale_260.json",
        "racket_sports_261.json",
        "ragnarok_odyssey_ace_262.json",
        "rapala_pro_bass_fishing_263.json",
        "ratchet_clank_264.json",
        "ratchet_clank_all_4_one_265.json",
        "ratchet_clank_going_commando_266.json",
        "ratchet_clank_tools_of_destruction_267.json",
        "ratchet_clank_up_your_arsenal_268.json",
        "rayman_origins_269.json",
        "record_of_agarest_war_2_270.json",
        "red_dead_redemption_271.json",
        "red_dead_redemption_272.json",
        "remember_me_273.json",
        "resident_evil_4_274.json",
        "resident_evil_5_275.json",
        "resident_evil_5_ver2_276.json",
        "resident_evil_6_277.json",
        "resident_evil_6_278.json",
        "resident_evil_code_veronica_x_hd_279.json",
        "resident_evil_hd_remaster_280.json",
        "resident_evil_revelations_281.json",
        "resident_evil_revelations_2_282.json",
        "resident_evil_the_darkside_chronicles_283.json",
        "resident_evil_the_umbrella_chronicles_284.json",
        "resident_evil_operation_raccoon_city_285.json",
        "resistance_2_286.json",
        "resistance_3_287.json",
        "resistance_3_288.json",
        "ridge_racer_7_289.json",
        "rocketbirds_hardboiled_chicken_290.json",
        "sacred_citadel_291.json",
        "saints_row_the_third_292.json",
        "samurai_warriors_4_293.json",
        "sengoku_musou_4_294.json",
        "shoot_many_robots_295.json",
        "silent_hill_23_hd_296.json",
        "singstar_297.json",
        "singstar_298.json",
        "singularity_299.json",
        "sniper_elite_iii_300.json",
        "sniper_elite_v2_301.json",
        "sonic_all_stars_racing_transformed_302.json",
        "sonic_all_stars_racing_transformed_303.json",
        "sonic_sega_all_stars_racing_304.json",
        "soul_calibur_v_305.json",
        "spider_man_shattered_dimensions_306.json",
        "splatterhouse_307.json",
        "star_trek_308.json",
        "star_wars_the_force_unleashed_309.json",
        "syndicate_310.json",
        "tales_of_berseria_311.json",
        "tales_of_graces_f_312.json",
        "tales_of_xillia_313.json",
        "tales_of_xillia_2_314.json",
        "tales_of_zestiria_315.json",
        "tears_to_tiara_ii_heir_of_the_overload_316.json",
        "teenage_mutant_ninja_turtles_mutants_in_manhattan_317.json",
        "tekken_tag_tournament_2_318.json",
        "terminator_salvation_319.json",
        "the_elder_scrolls_v_skyrim_320.json",
        "the_elder_scrolls_v_skyrim_321.json",
        "the_evil_within_322.json",
        "the_ico_shadow_of_the_colossus_collection_323.json",
        "the_last_of_us_324.json",
        "the_last_of_us_325.json",
        "the_tomb_raider_trilogy_326.json",
        "the_walking_dead_survival_instinct_327.json",
        "the_walking_dead_survival_instinct_328.json",
        "tomb_raider_329.json",
        "transformers_war_for_cybertron_330.json",
        "trine_2_331.json",
        "ultimate_marvel_vs_capcom_3_332.json",
        "ultimate_marvel_vs_capcom_3_333.json",
        "uncharted_2_among_thieves_334.json",
        "uncharted_3_drakes_deception_335.json",
        "uncharted_drakes_fortune_336.json",
        "uncharted_drakes_fortune_337.json",
        "under_defeat_hd_338.json",
        "valiant_hearts_the_great_war_339.json",
        "way_of_the_samurai_4_340.json",
        "wet_341.json",
        "white_knight_chronicles_342.json",
        "white_knight_chronicles_ii_343.json",
        "wipeout_hd_344.json",
        "x_com_enemy_unknown_345.json",
        "x_men_arcade_346.json",
        "x_men_origins_wolverine_347.json",
        "x_men_destiny_348.json",
        "yaiba_ninja_gaiden_z_349.json",
        "yakuza_3_350.json",
        "yakuza_4_351.json",
        "yakuza_4_352.json",
        "yakuza_dead_souls_353.json",
        "young_justice_legacy_354.json",
        "zone_of_the_enders_hd_collection_355.json"
    ];

  try {
      for (const gameFile of gameFiles) {
          const response = await fetch(`./data/${gameFile}`);
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status} loading ${gameFile}`);
          }
          const game = await response.json();
          gameData.push(game);
      }
      displayGames(gameData);
  } catch (error) {
      console.error("Error loading game data:", error);
      const boxContainer = document.querySelector('.box-container');
      boxContainer.innerHTML = `<p>Error loading game data: ${error.message}</p>`;
  }
}

function createGameBox(game) {
const gameBox = document.createElement('div');
gameBox.classList.add('game-box');
gameBox.dataset.platform = game.platform;
gameBox.dataset.category = game.category;
gameBox.dataset.type = game.type;
gameBox.dataset.modded = game.modded;
gameBox.innerHTML = `
    <a href="${game.href}">
        <img src="${game.img}" alt="${game.title} (${game.modded})">
    </a>
    <h3>${game.title} .zip - ${game.category} (${game.type}, ${game.modded}) ${game.description}</h3>`;
return gameBox;
}

function displayGames(games) {
const boxContainer = document.querySelector('.box-container');
boxContainer.innerHTML = '';
games.forEach(game => {
    boxContainer.appendChild(createGameBox(game));
});
}

function searchGames(event) {
event.preventDefault();
const searchTerm = document.getElementById('search-input').value.toLowerCase();
const filteredGames = gameData.filter(game =>
    game.title.toLowerCase().includes(searchTerm) ||
    game.description.toLowerCase().includes(searchTerm)
);
displayGames(filteredGames);
return false;
}

function filterByPlatformAndType() {
const platformFilter = document.getElementById('platform').value;
const categoryFilter = document.getElementById('game-category').value;
const typeFilter = document.getElementById('game-type').value;
const filteredGames = gameData.filter(game => {
    const platformMatch = platformFilter === 'all' || game.platform === platformFilter;
    const categoryMatch = categoryFilter === 'all' || game.category === categoryFilter;
    const typeMatch = typeFilter === 'all' || game.type === typeFilter;
    return platformMatch && categoryMatch && typeMatch;
});
displayGames(filteredGames);
}

function filterByModStatus() {
const modStatusFilter = document.getElementById('mod-status').value;
const filteredGames = gameData.filter(game => {
    const modStatusMatch = modStatusFilter === 'all' || game.modded === modStatusFilter;
    return modStatusMatch;
});
displayGames(filteredGames);
}

function addFilterOptions(selectId, dataKey) {
const selectElement = document.getElementById(selectId);
const allOption = document.createElement('option');
allOption.value = 'all';
allOption.textContent = 'All';
selectElement.appendChild(allOption);

const uniqueValues = [...new Set(gameData.map(game => game[dataKey]))];
uniqueValues.forEach(value => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    selectElement.appendChild(option);
});
}

// Call loadGameData when the page loads
loadGameData();  // No need for async/await or .then anymore


// Event Listeners:  Add these *after* `loadGameData()` since the data is
// now loaded synchronously:
document.getElementById('search-form').addEventListener('submit', searchGames);
document.getElementById('platform').addEventListener('change', filterByPlatformAndType);
document.getElementById('game-category').addEventListener('change', filterByPlatformAndType);
document.getElementById('game-type').addEventListener('change', filterByPlatformAndType);
document.getElementById('mod-status').addEventListener('change', filterByModStatus);

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