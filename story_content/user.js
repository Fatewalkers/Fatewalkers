window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const player = GetPlayer();

const savedGame = localStorage.getItem("FatewalkersSave");

if (savedGame) {
    player.SetVar("HasSave", true);
} else {
    player.SetVar("HasSave", false);
}
}

window.Script2 = function()
{
  // FATEWALKERS - CHECK FOR UPDATES

// Get the current page URL
const currentUrl = window.location.href;

// Remove any existing update parameter
const cleanUrl = currentUrl.split("?")[0];

// Create a unique URL so the browser requests the current files
const updateUrl = cleanUrl + "?update=" + Date.now();

// Reload the game from the fresh URL
window.location.replace(updateUrl);
}

window.Script3 = function()
{
  const player = GetPlayer();

// Delete the custom Fatewalkers save
localStorage.removeItem("FatewalkersSave");

// Tell Storyline there is no save
player.SetVar("HasSave", false);
}

window.Script4 = function()
{
  const player = GetPlayer();

// Get the saved game
const saved = localStorage.getItem("FatewalkersSave");

if (!saved) {
    // No save exists
    player.SetVar("HasSave", false);
    return;
}

try {
    const saveData = JSON.parse(saved);

    // Restore every saved Storyline variable
    Object.keys(saveData).forEach(function(key) {

        // Don't try to restore metadata as Storyline variables
        if (key === "saveVersion" || key === "savedAt") {
            return;
        }

        try {
            player.SetVar(key, saveData[key]);
        } catch (e) {
            console.log("Could not restore variable:", key, e);
        }
    });

    // Confirm a save exists
    player.SetVar("HasSave", true);

    console.log("Fatewalkers save restored:", saveData);

} catch (e) {
    console.error("Fatewalkers save could not be loaded:", e);
    player.SetVar("HasSave", false);
}
}

window.Script5 = function()
{
  const player = GetPlayer();

const saveData = {
    // SAVE SYSTEM
    saveVersion: 1,
    savedAt: new Date().toISOString(),
    CurrentLocation: player.GetVar("CurrentLocation"),

    // PLAYER
    PlayerName: player.GetVar("PlayerName"),
    PlayerAvatar: player.GetVar("PlayerAvatar"),
    Player_Object: player.GetVar("Player_Object"),
    Player_Subject: player.GetVar("Player_Subject"),
    Player_Possessive: player.GetVar("Player_Possessive"),

    // PROGRESSION
    Level: player.GetVar("Level"),
    PeopleMet: player.GetVar("PeopleMet"),
    Discovery_total: player.GetVar("Discovery_total"),
    Quest_Total: player.GetVar("Quest_Total"),

    // CURRENCY / ITEMS
    GuildTokens: player.GetVar("GuildTokens"),
    Antidote: player.GetVar("Antidote"),
    HealingPotion: player.GetVar("HealingPotion"),
    Compass: player.GetVar("Compass"),
    Everlight_Lantern: player.GetVar("Everlight_Lantern"),
    Ring: player.GetVar("Ring"),
    Rope: player.GetVar("Rope"),
    Transportation_Stone: player.GetVar("Transportation_Stone"),
    Mirror: player.GetVar("Mirror"),
    Old_Book_FT: player.GetVar("Old_Book_FT"),
    Kitchen: player.GetVar("Kitchen"),
    Uniform: player.GetVar("Uniform"),
    Pie: player.GetVar("Pie"),
    PieHintUnlocked: player.GetVar("PieHintUnlocked"),
    PieObtained: player.GetVar("PieObtained"),
    CampSupplies_Obtained: player.GetVar("CampSupplies_Obtained"),

    // MAIN STORY PROGRESSION
    FirstMission_Complete: player.GetVar("FirstMission_Complete"),
    GuildOrientation: player.GetVar("GuildOrientation"),

    // AUDREY
    Audrey_Met: player.GetVar("Audrey_Met"),
    Audrey_Approved: player.GetVar("Audrey_Approved"),

    // AYRON
    Ayron_Met: player.GetVar("Ayron_Met"),
    Ayron_Friendly: player.GetVar("Ayron_Friendly"),
    Ayron_Filtered: player.GetVar("Ayron_Filtered"),
    Ayron_Quest: player.GetVar("Ayron_Quest"),
    Ayron_SecretItem: player.GetVar("Ayron_SecretItem"),

    // GARRIC
    Garric_Met: player.GetVar("Garric_Met"),

    // GRIMLEY
    Grimley_Met: player.GetVar("Grimley_Met"),

    // SYBIL
    Sybil_Met: player.GetVar("Sybil_Met"),
    Sybil_Filtered: player.GetVar("Sybil_Filtered"),

    // MARIUS
    Marius_Met: player.GetVar("Marius_Met"),
    Marius_Banned: player.GetVar("Marius_Banned"),
    Marius_Forgiven: player.GetVar("Marius_Forgiven"),
    Marius_Insulted: player.GetVar("Marius_Insulted"),
    Marius_PieQuest: player.GetVar("Marius_PieQuest"),

    // 360 EXPLORATION
    Image360_TotalItems: player.GetVar("360Image1_TotalItems"),
    Image360_VisitedItems: player.GetVar("360Image1_VisitedItems")
};

// SAVE EVERYTHING TO THE PLAYER'S BROWSER
localStorage.setItem(
    "FatewalkersSave",
    JSON.stringify(saveData)
);
}

};
