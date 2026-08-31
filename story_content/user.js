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

const hasSave = localStorage.getItem("FatewalkersSave");

player.SetVar("HasSave", hasSave !== null);
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

const savedGame = localStorage.getItem("FatewalkersSave");

if (savedGame) {
    const saveData = JSON.parse(savedGame);

    // LOCATION
    if (saveData.CurrentLocation !== undefined)
        player.SetVar("CurrentLocation", saveData.CurrentLocation);

    // PLAYER
    if (saveData.PlayerName !== undefined)
        player.SetVar("PlayerName", saveData.PlayerName);

    if (saveData.PlayerAvatar !== undefined)
        player.SetVar("PlayerAvatar", saveData.PlayerAvatar);

    if (saveData.Player_Object !== undefined)
        player.SetVar("Player_Object", saveData.Player_Object);

    if (saveData.Player_Subject !== undefined)
        player.SetVar("Player_Subject", saveData.Player_Subject);

    if (saveData.Player_Possessive !== undefined)
        player.SetVar("Player_Possessive", saveData.Player_Possessive);

    // PROGRESSION
    if (saveData.Level !== undefined)
        player.SetVar("Level", saveData.Level);

    if (saveData.PeopleMet !== undefined)
        player.SetVar("PeopleMet", saveData.PeopleMet);

    if (saveData.Discovery_total !== undefined)
        player.SetVar("Discovery_total", saveData.Discovery_total);

    if (saveData.Quest_Total !== undefined)
        player.SetVar("Quest_Total", saveData.Quest_Total);

    // ITEMS
    if (saveData.GuildTokens !== undefined)
        player.SetVar("GuildTokens", saveData.GuildTokens);

    if (saveData.Antidote !== undefined)
        player.SetVar("Antidote", saveData.Antidote);

    if (saveData.HealingPotion !== undefined)
        player.SetVar("HealingPotion", saveData.HealingPotion);

    if (saveData.Compass !== undefined)
        player.SetVar("Compass", saveData.Compass);

    if (saveData.Everlight_Lantern !== undefined)
        player.SetVar("Everlight_Lantern", saveData.Everlight_Lantern);

    if (saveData.Ring !== undefined)
        player.SetVar("Ring", saveData.Ring);

    if (saveData.Rope !== undefined)
        player.SetVar("Rope", saveData.Rope);

    if (saveData.Transportation_Stone !== undefined)
        player.SetVar("Transportation_Stone", saveData.Transportation_Stone);

    if (saveData.Mirror !== undefined)
        player.SetVar("Mirror", saveData.Mirror);

    if (saveData.Old_Book_FT !== undefined)
        player.SetVar("Old_Book_FT", saveData.Old_Book_FT);

    if (saveData.Kitchen !== undefined)
        player.SetVar("Kitchen", saveData.Kitchen);

    if (saveData.Uniform !== undefined)
        player.SetVar("Uniform", saveData.Uniform);

    if (saveData.Pie !== undefined)
        player.SetVar("Pie", saveData.Pie);

    if (saveData.PieHintUnlocked !== undefined)
        player.SetVar("PieHintUnlocked", saveData.PieHintUnlocked);

    if (saveData.PieObtained !== undefined)
        player.SetVar("PieObtained", saveData.PieObtained);

    if (saveData.CampSupplies_Obtained !== undefined)
        player.SetVar("CampSupplies_Obtained", saveData.CampSupplies_Obtained);

    // STORY
    if (saveData.FirstMission_Complete !== undefined)
        player.SetVar("FirstMission_Complete", saveData.FirstMission_Complete);

    if (saveData.GuildOrientation !== undefined)
        player.SetVar("GuildOrientation", saveData.GuildOrientation);

    // AUDREY
    if (saveData.Audrey_Met !== undefined)
        player.SetVar("Audrey_Met", saveData.Audrey_Met);

    if (saveData.Audrey_Approved !== undefined)
        player.SetVar("Audrey_Approved", saveData.Audrey_Approved);

    // AYRON
    if (saveData.Ayron_Met !== undefined)
        player.SetVar("Ayron_Met", saveData.Ayron_Met);

    if (saveData.Ayron_Friendly !== undefined)
        player.SetVar("Ayron_Friendly", saveData.Ayron_Friendly);

    if (saveData.Ayron_Filtered !== undefined)
        player.SetVar("Ayron_Filtered", saveData.Ayron_Filtered);

    if (saveData.Ayron_Quest !== undefined)
        player.SetVar("Ayron_Quest", saveData.Ayron_Quest);

    if (saveData.Ayron_SecretItem !== undefined)
        player.SetVar("Ayron_SecretItem", saveData.Ayron_SecretItem);

    // GARRIC
    if (saveData.Garric_Met !== undefined)
        player.SetVar("Garric_Met", saveData.Garric_Met);

    // GRIMLEY
    if (saveData.Grimley_Met !== undefined)
        player.SetVar("Grimley_Met", saveData.Grimley_Met);

    // SYBIL
    if (saveData.Sybil_Met !== undefined)
        player.SetVar("Sybil_Met", saveData.Sybil_Met);

    if (saveData.Sybil_Filtered !== undefined)
        player.SetVar("Sybil_Filtered", saveData.Sybil_Filtered);

    // MARIUS
    if (saveData.Marius_Met !== undefined)
        player.SetVar("Marius_Met", saveData.Marius_Met);

    if (saveData.Marius_Banned !== undefined)
        player.SetVar("Marius_Banned", saveData.Marius_Banned);

    if (saveData.Marius_Forgiven !== undefined)
        player.SetVar("Marius_Forgiven", saveData.Marius_Forgiven);

    if (saveData.Marius_Insulted !== undefined)
        player.SetVar("Marius_Insulted", saveData.Marius_Insulted);

    if (saveData.Marius_PieQuest !== undefined)
        player.SetVar("Marius_PieQuest", saveData.Marius_PieQuest);

    // EXPLORATION
    if (saveData.Image360_TotalItems !== undefined)
        player.SetVar("360Image1_TotalItems", saveData.Image360_TotalItems);

    if (saveData.Image360_VisitedItems !== undefined)
        player.SetVar("360Image1_VisitedItems", saveData.Image360_VisitedItems);
}
}

window.Script4 = function()
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
