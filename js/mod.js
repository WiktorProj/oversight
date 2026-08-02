let modInfo = {
	name: "oversight",
	author: "wkwkwkwk",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "-1+3.5ε",
	name: "oversight ?",
}

let changelog = `<h1>changelog:</h1><br><br>
	<h3>v-1+xε: oversight ?</h3><br>
		- nothing much to note<br><br>
	<h3>v-1: oversight</h3><br>
		- stuff and things<br>
		- i'm still workin on it hold on<br>
		- first release??`

let winText = `you win.`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)

	if (hasUpgrade('r',11)) gain = gain.times(2)
	gain = gain.times(player["specifics"].add(1).pow(0.7))
	if (hasUpgrade('r',13)) gain = gain.times(2)
	if (hasUpgrade('r',23)) gain = gain.times(1.5)
	if (hasUpgrade('r',32)) gain = gain.times(upgradeEffect("r",32))

	if (hasUpgrade('s',11)) gain = gain.times(2.17)
	if (hasUpgrade('s',41)) gain = gain.times(2.17)
	
	if (hasChallenge('s',11)) gain = gain.times(3)
	if (hasChallenge('s',12)) gain = gain.times(4)

	if (hasUpgrade('s',32)) gain = gain.times(0.8)

	if (hasUpgrade('p',11)) gain = gain.times(3)
	if (hasUpgrade('p',13)) gain = gain.times(6)
	
	if (hasUpgrade('n',22)) gain = gain.times(upgradeEffect("n",22))
	if (hasUpgrade('n',23)) gain = gain.times(upgradeEffect("n",23))

	if (inChallenge("s",11)) gain = gain.sqrt()
	if (inChallenge("s",21)) gain = gain.pow(0.2)
	
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
	"specifics":new Decimal(0),
	"specificsgain":new Decimal(0.1),
	"specificsspeed":new Decimal(1),
	"depositingrespecs":false,

	"automations":new Decimal(0),

	"voidshards":new Decimal(0),
	"voidshardsgain":new Decimal(0),

	"serenityunlocked":false,
	"postcedingunlocked":false,
	"precedingunlocked":false,
	"nullunlocked":false,
}}

function getSpecificsGain() {
	let gain = new Decimal(0.1)

	if (hasUpgrade('r',13)) gain = gain.times(1.5)
	if (hasUpgrade('r',21)) gain = gain.times(2)
	if (hasUpgrade('s',12)) gain = gain.times(2.17)
	if (hasUpgrade('r',24)) gain = gain.times(1.33)
			
	if (hasUpgrade('s',32)) gain = gain.times(1.2)
	if (hasChallenge('s',12)) gain = gain.times(2)
	if (inChallenge("s",11)) gain = gain.sqrt()

	if (hasUpgrade('P',11)) gain = gain.times(1.5)
	if (hasUpgrade('P',22)) gain = gain.times(3)

	if (hasUpgrade('p',13)) gain = gain.times(5)
	
	if (hasUpgrade("n",25)) gain = gain.times(5)
	
	if (getBuyableAmount("r",23).gt(0)) gain = gain.times(2)

	if (inChallenge("s",22)) gain = gain.div(7.5)

	let speed = new Decimal(1)

	if (hasUpgrade('r',22)) speed = speed.times(2)
	if (hasUpgrade('s',23)) speed = speed.times(2.17)
	if (hasUpgrade('P',11)) speed = speed.times(1.5)
	if (hasUpgrade('P',22)) speed = speed.times(2)
	if (hasUpgrade("n",25)) gain = gain.times(3)
	
	if (getBuyableAmount("r",23).gt(0)) speed = speed.times(0.5)
	
	if (inChallenge("s",22)) speed = speed.div(7.5)
	
	return [gain,speed]
}

function getVSGain() {
	let gain = new Decimal(0)

	if (hasUpgrade("n",11)) gain = gain.add(0.01)
	if (hasUpgrade("n",21)) gain = gain.times(2)
	if (hasUpgrade("n",24)) gain = gain.times(2)

	return gain
}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}