// ************ Themes ************
var themes = ["default", "respec", "serenity", "aqua"]

var colors = {
	default: {
		1: "#ffffff",//Branch color 1
		2: "#bfbfbf",//Branch color 2
		3: "#7f7f7f",//Branch color 3
		color: "#dfdfdf",
		points: "#ffffff",
		locked: "#bf8f8f",
		background: "#0f0f0f",
		background_tooltip: "rgba(0, 0, 0, 0.75)",
	},
	aqua: {
		1: "#bfdfff",
		2: "#8fa7bf",
		3: "#5f6f7f",
		color: "#bfdfff",
		points: "#dfefff",
		locked: "#c4a7b3",
		background: "#001f3f",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	respec: {
		1: "#9f4cba",
		2: "#803d94",
		3: "#673076",
		color: "#b085bf",
		points: "#cab0d4",
		locked: "#645868",
		background: "#27132e",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	serenity: {
		1: "#95ff71",
		2: "#70c055",
		3: "#5ea148",
		color: "#95ff71",
		points: "#e2ffd8",
		locked: "#809c77",
		background: "#223c1a",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
}
function changeTheme() {

	colors_theme = colors[options.theme || "default"];
	document.body.style.setProperty('--background', colors_theme["background"]);
	document.body.style.setProperty('--background_tooltip', colors_theme["background_tooltip"]);
	document.body.style.setProperty('--color', colors_theme["color"]);
	document.body.style.setProperty('--points', colors_theme["points"]);
	document.body.style.setProperty("--locked", colors_theme["locked"]);
}
function getThemeName() {
	return options.theme? options.theme : "default";
}

function switchTheme() {
	let index = themes.indexOf(options.theme)
	if (options.theme === null || index >= themes.length-1 || index < 0) {
		options.theme = themes[0];
	}
	else {
		index ++;
		options.theme = themes[index];
		//options.theme = themes[1]; // whar
	}
	changeTheme();
	resizeCanvas();
}
