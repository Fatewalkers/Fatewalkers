function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5jBDet0p3X1":
        Script1();
        break;
      case "5zn2lKLrOnG":
        Script2();
        break;
      case "6hABb7dhKUG":
        Script3();
        break;
      case "6gjSeFMR4RZ":
        Script4();
        break;
      case "6CLZDIvG9tH":
        Script5();
        break;
  }
}

window.InitExecuteScripts = function()
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
};
