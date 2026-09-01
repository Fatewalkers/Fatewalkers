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
  const player = GetPlayer();
const cursorChoice = player.GetVar("CursorChoice");

let cursorFile;

if (cursorChoice === "Female") {
    cursorFile = "cursors/Female_Magic_Hand.cur";
} else {
    cursorFile = "cursors/Male_Armored_Hand.cur";
}

document.body.style.cursor = `url('${cursorFile}'), auto`;

const style = document.createElement("style");
style.id = "fatewalkersCursorStyle";

const oldStyle = document.getElementById("fatewalkersCursorStyle");
if (oldStyle) oldStyle.remove();

style.innerHTML = `
    *,
    *:hover,
    button,
    button:hover,
    a,
    a:hover {
        cursor: url('${cursorFile}'), auto !important;
    }
`;

document.head.appendChild(style);
}

window.Script3 = function()
{
  const player = GetPlayer();

if (localStorage.getItem("FatewalkersNewGame") === "true") {
    player.SetVar("CurrentLocation", "NewGame");
}
}

window.Script4 = function()
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

window.Script5 = function()
{
  const player = GetPlayer();

// Delete old save
localStorage.removeItem("FatewalkersSave");

// Tell the menu that this is a NEW GAME
localStorage.setItem("FatewalkersNewGame", "true");

// No save exists
player.SetVar("HasSave", false);
}

window.Script6 = function()
{
  // Restore custom cursor
const cursorChoice = player.GetVar("CursorChoice") || "Male";

let cursorFile;

if (cursorChoice === "Female") {
    cursorFile = "cursors/Female_Magic_Hand.cur";
} else {
    cursorFile = "cursors/Male_Armored_Hand.cur";
}

document.body.style.cursor = `url('${cursorFile}'), auto`;

const style = document.createElement("style");
style.id = "fatewalkersCursorStyle";

const oldStyle = document.getElementById("fatewalkersCursorStyle");
if (oldStyle) oldStyle.remove();

style.innerHTML = `
    *,
    *:hover,
    button,
    button:hover,
    a,
    a:hover {
        cursor: url('${cursorFile}'), auto !important;
    }
`;

document.head.appendChild(style);
}

window.Script7 = function()
{
  const player = GetPlayer();
const cursorChoice = player.GetVar("CursorChoice");

let cursorFile;

if (cursorChoice === "Female") {
    cursorFile = "cursors/Female_Magic_Hand.cur";
} else {
    cursorFile = "cursors/Male_Armored_Hand.cur";
}

document.body.style.cursor = `url('${cursorFile}'), auto`;

const style = document.createElement("style");
style.id = "fatewalkersCursorStyle";

const oldStyle = document.getElementById("fatewalkersCursorStyle");
if (oldStyle) oldStyle.remove();

style.innerHTML = `
    *,
    *:hover,
    button,
    button:hover,
    a,
    a:hover {
        cursor: url('${cursorFile}'), auto !important;
    }
`;

document.head.appendChild(style);
}

window.Script8 = function()
{
  const player = GetPlayer();
const cursorChoice = player.GetVar("CursorChoice");

let cursorFile;

if (cursorChoice === "Female") {
    cursorFile = "cursors/Female_Magic_Hand.cur";
} else {
    cursorFile = "cursors/Male_Armored_Hand.cur";
}

document.body.style.cursor = `url('${cursorFile}'), auto`;

const style = document.createElement("style");
style.id = "fatewalkersCursorStyle";

const oldStyle = document.getElementById("fatewalkersCursorStyle");
if (oldStyle) oldStyle.remove();

style.innerHTML = `
    *,
    *:hover,
    button,
    button:hover,
    a,
    a:hover {
        cursor: url('${cursorFile}'), auto !important;
    }
`;

document.head.appendChild(style);
}

window.Script9 = function()
{
  const player = GetPlayer();
const cursorChoice = player.GetVar("CursorChoice");

let cursorFile;

if (cursorChoice === "Female") {
    cursorFile = "cursors/Female_Magic_Hand.cur";
} else {
    cursorFile = "cursors/Male_Armored_Hand.cur";
}

document.body.style.cursor = `url('${cursorFile}'), auto`;

const style = document.createElement("style");
style.id = "fatewalkersCursorStyle";

const oldStyle = document.getElementById("fatewalkersCursorStyle");
if (oldStyle) oldStyle.remove();

style.innerHTML = `
    *,
    *:hover,
    button,
    button:hover,
    a,
    a:hover {
        cursor: url('${cursorFile}'), auto !important;
    }
`;

document.head.appendChild(style);
}

window.Script10 = function()
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
    CursorChoice: player.GetVar("CursorChoice"),

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

window.Script11 = function()
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
    CursorChoice: player.GetVar("CursorChoice"),

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

window.Script12 = function()
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

window.Script13 = function()
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

window.Script14 = function()
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

window.Script15 = function()
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

window.Script16 = function()
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

window.Script17 = function()
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

window.Script18 = function()
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

window.Script19 = function()
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

window.Script20 = function()
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

window.Script21 = function()
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
    CursorChoice: player.GetVar("CursorChoice"),

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

window.Script22 = function()
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
    CursorChoice: player.GetVar("CursorChoice"),

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

window.Script23 = function()
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
    CursorChoice: player.GetVar("CursorChoice"),

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
