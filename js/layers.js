let sach11 = false
let sach12 = false

// ACHIEVEMENTS
addLayer("ach", {
    name: "achis", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ffff00",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "nil", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return new Decimal(0)}, // Get the current amount of baseResource
    tooltip(){return "Achievements"},
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    achievements:{
        11:{
            name: "Oversight",
            tooltip: "This is the game",
            done(){return true},
        },
        12:{
            name: "Specific",
            tooltip: "Gain specifics",
            done(){return player["specifics"].gt(0)},
        },
        13:{
            name: "Even more specific",
            tooltip: "Have at least 8 specifics",
            done(){return player["specifics"].gte(8)},
        },
        14:{
            name: "The First Reset",
            tooltip: "Reset for serenity",
            done(){return player["s"].points.gte(1)},
        },
        15:{
            name: "Trifecta",
            tooltip: "Have ~i, ~ii and ~iii",
            done(){return hasUpgrade("s",11)&&hasUpgrade("s",12)&&hasUpgrade("s",13)},
        },
        16:{
            name: "6fecta",
            tooltip: "Have ~iv, ~v and ~vi",
            done(){return hasUpgrade("s",21)&&hasUpgrade("s",22)&&hasUpgrade("s",23)},
        },
        17:{
            name: "Challenged",
            tooltip: "Complete challenge ~↓",
            done(){return hasChallenge("s",11)},
        },
        18:{
            name: "Small risks",
            tooltip: "Buy either ~ix or ~x",
            done(){return hasUpgrade("s",32)||hasUpgrade("s",42)},
        },
        19:{
            name: "My pockets!",
            tooltip: "Complete challenge ~↓↓",
            done(){return hasChallenge("s",12)},
        },
        21:{
            name: "12fecta",
            tooltip: "Buy ~xii",
            done(){return hasUpgrade("s",43)},
        },
        22:{
            name: "Breakthrough",
            tooltip: "Complete challenge ~↓↓↓",
            done(){return hasChallenge("s",21)},
        },
        23:{
            name: "Right after",
            tooltip: "Reset for postcedes",
            done(){return player["p"].points.gt(0)},
        },
        24:{
            name: "Right before",
            tooltip: "Reset for precedes",
            done(){return player["P"].points.gt(0)},
        },
        25:{
            name: "Keepers",
            tooltip: "Buy ?ii",
            done(){return hasUpgrade("P",12)},
        },
        26:{
            name: "Patience",
            tooltip: "Complete challenge ~↓↓↓↓",
            done(){return hasChallenge("s",22)},
        },
        27:{
            name: "Age of automation",
            tooltip: "Buy ?iv",
            done(){return hasUpgrade("P",14)},
        },
        28:{
            name: "Age of automation... again",
            tooltip: "Get an automation point",
            done(){return player["automations"].gt(0)},
        },
        29:{
            name: "Epic!!!",
            tooltip: "Buy !iii",
            done(){return hasUpgrade("p",13)},
        },
        31:{
            name: "No more",
            tooltip: "Get autospecifics",
            done(){return getBuyableAmount("r",23).gt(0)},
        },
        32:{
            name: "Welcome to the void",
            tooltip: "Reset for nulls",
            done(){return player["n"].points.gt(0)},
        },
    },
    tabFormat:{
        "Achievements":{
            content: [
                "infoboxes",
                "blank",
                "achievements",
            ]
        },
    },
    infoboxes:{
        about:{
            title: "About achievements",
            body() { return "These achievements should be your main progression. If you need a hint on how to progress, try looking here!" },
        }
    },
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true}
})
addLayer("sa", {
    name: "specialachs", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ff7f00",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "nil", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return new Decimal(0)}, // Get the current amount of baseResource
    tooltip(){return "Special Achievements"},
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    achievements:{
        11:{
            name: "General",
            tooltip: "Serenity reset without having any specifics",
            done(){return sach11},
        },
        12:{
            name: "General v2",
            tooltip: "Complete ~↓ without having any specifics",
            done(){return sach12},
        },
    },
    tabFormat:{
        "Special Achievements":{
            content: [
                "infoboxes",
                "blank",
                "achievements",
            ]
        },
    },
    infoboxes:{
        about:{
            title: "About special achievements",
            body() { return "These achievements are, well, special. They don't affect the main progression. They only serve as minichallenges without a reward (maybe in a later update?)" },
        }
    },
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true}
})

// RESPEC
addLayer("r", {
    name: "respec", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#5f2f6f",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "respecs", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('r',14)) mult = mult.times(1.5)
        if (hasUpgrade('s',13)) mult = mult.times(1.47)
        if (hasUpgrade('s',32)) mult = mult.times(1.2)
        if (hasUpgrade('n',22)) mult = mult.times(upgradeEffect("n",22))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    tabFormat:{
        "Upgrades":{
            content: [
                "main-display",
                "prestige-button",
                "resource-display",
                "blank",
                "upgrades",
            ]
        },
        "Specifics":{
            content: [
                "main-display",
                "prestige-button",
                "resource-display",
                "blank",
                ["display-text",
                    function() { return `You have <h2 style="color: rgb(42, 255, 234); text-shadow: rgb(42, 255, 234) 0px 0px 10px;">${format(player["specifics"])}</h2> specifics, which are multiplying point gain by <h2 style="color: rgb(42, 255, 234); text-shadow: rgb(42, 255, 234) 0px 0px 10px;">x${format(player["specifics"].add(1).pow(0.7))}</h2>` }],
                "blank",
                ["clickable",11],
                "blank",
                ["display-text",
                    function() {
                        if (!inChallenge("s",12)) return ""
                        return `You are losing specifics are a rate of -${format(player["specifics"].minus(player["specifics"].divide(1.11)))}/s`
                    }],
                ["display-text",
                    function() {
                        if (!hasMilestone("r",0)) return ""
                        return `Base specifics gain: ${format(player["specificsgain"])}`
                    }],
                ["display-text",
                    function() {
                        if (!hasMilestone("r",0)) return ""
                        return `Deposit speed multiplier: ${format(player["specificsspeed"])}`
                    }],
                ["display-text",
                    function() {
                        if (!hasMilestone("r",0)) return ""
                        return `You will gain ${format(player[this.layer].points.times(player["specificsgain"]))} specifics after depositing all your respecs`
                    }],
                "blank",
                "blank",
                ["display-text",
                    function() { return "NOTE: You will keep milestones on future resets" }],
                "blank",
                "milestones"
            ],
            unlocked(){
                return hasUpgrade('r',12)
            }
        },
        "Automation":{
            content: [
                "main-display",
                ["display-text",
                    function() { return `You have <h2 style="color: rgb(42, 255, 234); text-shadow: rgb(42, 255, 234) 0px 0px 10px;">${format(player["specifics"])}</h2> specifics` }],
                "blank",
                ["display-text",
                    function() { return `You have <h2 style="color: rgb(0, 127, 0); text-shadow: rgb(0, 127, 0) 0px 0px 10px;">${format(player["automations"],0)}</h2> automation points` }],
                ["display-text",
                    function() { return `You will keep automation points on future resets` }],
                "blank",
                "buyables",
                "blank",
                ["clickable",12],
            ],
            unlocked(){
                return hasUpgrade('P',21)||hasAchievement("ach",28)
            }
        }
    },
    upgrades: {
        11:{
            title: "i",
            description: "Try not to think about it. x2 points",
            cost: new Decimal(2),
        },
        12:{
            title: "ii",
            description: "Unlock a new tab",
            cost: new Decimal(5),
            unlocked() {
                return hasUpgrade('r',11)
            }
        },
        13:{
            title: "iii",
            description: "x2 points again and x1.5 specifics",
            cost: new Decimal(15),
            unlocked() {
                return hasUpgrade('r',12)
            }
        },
        14:{
            title: "iv",
            description: "x1.5 respecs",
            cost: new Decimal(30),
            unlocked() {
                return hasUpgrade('r',13)
            }
        },
        21:{
            title: "v",
            description: "x2 specifics",
            cost: new Decimal(8),
            unlocked() {
                return hasUpgrade('r',14)
            },
            currencyDisplayName: "specifics",
            currencyInternalName: "specifics",
        },
        22:{
            title: "vi",
            description: "x2 respec deposit speed",
            cost: new Decimal(75),
            unlocked() {
                return hasUpgrade('r',21)
            },
        },
        23:{
            title: "vii",
            description: "Unlock a reset layer. Also x1.5 points",
            cost: new Decimal(120),
            unlocked() {
                return hasUpgrade('r',22)
            },
            onPurchase() {
                player["serenityunlocked"] = true
            }
        },
        24:{
            title: "viii",
            description: "x1.33 specifics",
            cost: new Decimal(175),
            unlocked() {
                return hasUpgrade('r',23) && hasUpgrade("s",22)
            },
        },
        31:{
            title: "ix",
            description: "x1.36 serenity",
            cost: new Decimal(300),
            unlocked() {
                return hasUpgrade('r',24)
            },
        },
        32:{
            title: "x",
            description: "Respecs boost points",
            cost: new Decimal(500),
            unlocked() {
                return hasUpgrade('r',31)
            },
            effect() {
                return player[this.layer].points.add(1).pow(0.25)
            },
            effectDisplay() {
                return "x"+format(upgradeEffect(this.layer,this.id))
            }
        },
    },
    clickables: {
        11: {
            display() {return `Click here to ${player["depositingrespecs"]?"stop":"start"} depositing respecs\n${format(player["specificsspeed"])} respecs → ${format(player["specificsgain"].times(player["specificsspeed"]))} specifics`},
            canClick() {return player[this.layer].points.gt(0) && hasUpgrade("r",12)},
            onClick() {player["depositingrespecs"] = !player["depositingrespecs"]}
        },
        12: {
            display() {return `Respec automation buyables`},
            canClick() {return true},
            onClick() {
                let buyables = [21,22]
                for (i in buyables) {
                    while (getBuyableAmount(this.layer,buyables[i]).gt(0)) {
                        player["automations"] = player["automations"].add(layers["r"].buyables[21].cost(getBuyableAmount(this.layer,buyables[i]).sub(1)))
                        setBuyableAmount(this.layer,buyables[i],getBuyableAmount(this.layer,buyables[i]).sub(1))
                    }
                }
            },
            unlocked(){return hasAchievement("ach",28)}
        }
    },
    milestones: {
        0: {
            requirementDescription: "15 specifics",
            effectDescription: "Add some specifics-specific texts",
            done() {return player["specifics"].gte(15)}
        },
        1: {
            requirementDescription: "300 specifics",
            effectDescription: "Add some challenge-specific texts",
            done() {return player["specifics"].gte(300)},
            unlocked() {return hasUpgrade('s',31)}
        },
    },
    buyables: {
        11: {
            cost(x) { return {
                "respecs":new Decimal(10000).mul(new Decimal(1.2).pow(x)),
                "specifics":new Decimal(500).mul(new Decimal(1.2).pow(x))
            }},
            display() { return `<h2>Gain automation points</h2>\nCost: ${format(this.cost()["respecs"])} respecs, ${format(this.cost()["specifics"])} specifics\nEffect: get 1 automation point` },
            canAfford() { return player[this.layer].points.gte(this.cost()["respecs"]) && player["specifics"].gte(this.cost()["specifics"]) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost()["respecs"])
                player["specifics"] = player["specifics"].sub(this.cost()["specifics"])
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player["automations"] = player["automations"].add(1)
            },
        },
        21: {
            cost(x) { return x.add(1) },
            display() { return `<h2>Respec autoupgrade</h2>\nCost: ${format(this.cost())} automation points\nEffect: ${format(getBuyableAmount(this.layer, this.id),0)}/10 automated upgrades` },
            canAfford() { return getBuyableAmount(this.layer, this.id).lt(10)&&player["automations"].gte(this.cost()) },
            buy() {
                player["automations"] = player["automations"].sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {
                return hasAchievement("ach",28)
            }
        },
        22: {
            cost(x) { return x.add(1) },
            display() { return `<h2>Serenity gain</h2>\nCost: ${format(this.cost())} automation points\nEffect: ${format(getBuyableAmount(this.layer, this.id).div(2),1)}% of serenity gain per sec` },
            canAfford() { return getBuyableAmount(this.layer, this.id).lt(200)&&player["automations"].gte(this.cost()) },
            buy() {
                player["automations"] = player["automations"].sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {
                return hasAchievement("ach",28)
            }
        },
        23: {
            cost(x) { return new Decimal(10) },
            display() { return `<h2>Autospecifics</h2>\nCost: ${format(this.cost())} automation points\nEffect: ${getBuyableAmount(this.layer,this.id).gt(0)?"automatically start depositing respecs, x0.5 respec deposit speed, x2 specifics":"nothing yet..."}` },
            canAfford() { return getBuyableAmount(this.layer, this.id).lt(1)&&player["automations"].gte(this.cost()) },
            buy() {
                player["automations"] = player["automations"].sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {
                return hasUpgrade("p",14)
            }
        },
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "r", description: "R: reset for respecs", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    doReset(l) {
        if (l != this.layer) {
            layerDataReset(this.layer,["milestones","buyables"])
            if (player["specifics"].eq(0) && l=="s") sach11 = true
            if (hasUpgrade("P",11)) {
                player["specifics"] = player["specifics"].times(0.05)
            } else {
                player["specifics"] = new Decimal(0)
            }
        }
    },
    automate(){
        let upgrade = [11,12,13,14,21,22,23,24,31,32]
        for (let i=0;i<getBuyableAmount(this.layer,21).toNumber();i++){
            buyUpgrade("r",upgrade[i])
        }
    },
    passiveGeneration(){
        if (hasUpgrade('P',14)) return 0.01
        return 0
    },
    layerShown(){return true}
})

// SERENITY
addLayer("s", {
    name: "serenity", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#95ff71",
    requires: new Decimal(120), // Can be a function that takes requirement increases into account
    resource: "serenity", // Name of prestige currency
    baseResource: "respecs", // Name of resource prestige is based on
    baseAmount() {return player["r"].points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('s',12)) mult = mult.times(1.47)
        if (hasUpgrade('r',31)) mult = mult.times(1.36)
        if (hasUpgrade('s',32)) mult = mult.times(0.8)
        if (hasChallenge('s',12)) mult = mult.times(2)
        if (hasUpgrade('p',13)) mult = mult.times(4)
        if (hasUpgrade('n',22)) mult = mult.times(upgradeEffect("n",22))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    tabFormat:{
        "Upgrades":{
            content: [
                "main-display",
                "prestige-button",
                "resource-display",
                "blank",
                "upgrades",
            ]
        },
        "Challenges":{
            content: [
                ["display-text",
                    function() { return "Entering and exiting will force a serenity reset without a reward" }],
                "blank",
                "challenges",
            ],
            unlocked(){
                return hasUpgrade('s',31)
            }
        },
    },
    upgrades: {
        11:{
            title: "~i",
            description: "x2.17 points",
            cost: new Decimal(1),
        },
        12:{
            title: "~ii",
            description: "x2.17 specifics",
            cost: new Decimal(1),
        },
        13:{
            title: "~iii",
            description: "x1.47 respecs",
            cost: new Decimal(1),
        },
        21:{
            title: "~iv",
            description: "x1.47 serenity",
            cost: new Decimal(2),
            unlocked() {
                return hasUpgrade('s',11)&&hasUpgrade('s',12)&&hasUpgrade('s',13)
            },
        },
        22:{
            title: "~v",
            description: "Unlock more respec upgrades",
            cost: new Decimal(2),
            unlocked() {
                return hasUpgrade('s',11)&&hasUpgrade('s',12)&&hasUpgrade('s',13)
            },
        },
        23:{
            title: "~vi",
            description: "x2.17 respec deposit speed",
            cost: new Decimal(2),
            unlocked() {
                return hasUpgrade('s',11)&&hasUpgrade('s',12)&&hasUpgrade('s',13)
            },
        },
        31:{
            title: "~vii",
            description: "Unlock a new tab",
            cost: new Decimal(3),
            unlocked() {
                return hasUpgrade('s',21)&&hasUpgrade('s',22)&&hasUpgrade('s',23)
            },
        },
        41:{
            title: "~viii",
            description: "x2.17 points again",
            cost: new Decimal(4),
            unlocked() {
                return hasUpgrade('s',31)
            },
        },
        32:{
            title: "~ix",
            description: "x0.8 points, x1.2 specifics",
            cost: new Decimal(5),
            unlocked() {
                return hasUpgrade('s',41)&&hasChallenge("s",11)
            },
        },
        42:{
            title: "~x",
            description: "x0.8 serenity, x1.2 respec",
            cost: new Decimal(5),
            unlocked() {
                return hasUpgrade('s',41)&&hasChallenge("s",11)
            },
        },
        33:{
            title: "~xi",
            description: "Unlock another challenge",
            cost: new Decimal(6),
            unlocked() {
                return hasUpgrade('s',32)&&hasUpgrade('s',42)
            },
        },
        43:{
            title: "~xii",
            description: "Unlock yet another challenge",
            cost: new Decimal(7),
            unlocked() {
                return hasChallenge('s',12)
            },
        },
    },
    challenges: {
        11: {
            name: "~↓",
            challengeDescription: "Square root points and specifics gain",
            goalDescription: "500 points",
            rewardDescription: "x3 points",
            canComplete: function() {return player.points.gte(500)},
            onEnter(){
                layerDataReset("r",["milestones","buyables"])
                player["specifics"] = new Decimal(0)
            },
            onExit:this.onEnter,
            onComplete(){
                if (player["specifics"].eq(0)) sach12 = true
            },
        },
        12: {
            name: "~↓↓",
            challengeDescription: "You lose specifics at a rate of /1.11 per sec",
            goalDescription: "1000 respec",
            rewardDescription: "x4 points, x2 specifics, x2 respec",
            canComplete: function() {return player['r'].points.gte(1000)},
            onEnter(){
                layerDataReset("r",["milestones","buyables"])
                player["specifics"] = new Decimal(0)
            },
            onExit:this.onEnter,
            unlocked(){return hasUpgrade("s",33)},
        },
        21: {
            name: "~↓↓↓",
            challengeDescription: "^0.2 point gain",
            goalDescription: "200 specifics",
            rewardDescription: "Unlock next reset layer",
            canComplete: function() {return player['specifics'].gte(200)},
            onEnter(){
                layerDataReset("r",["milestones","buyables"])
                player["specifics"] = new Decimal(0)
            },
            onExit:this.onEnter,
            onComplete(){
                player["postcedingunlocked"] = true
            },
            unlocked(){return hasUpgrade("s",43)},
        },
        22: {
            name: "~↓↓↓↓",
            challengeDescription: "/7.5 respec deposit speed and specifics gain",
            goalDescription: "20,000 respecs",
            rewardDescription: "x2 precedes, x1.5 postcedes",
            canComplete: function() {return player["r"].points.gte(20000)},
            onEnter(){
                layerDataReset("r",["milestones","buyables"])
                player["specifics"] = new Decimal(0)
            },
            onExit:this.onEnter,
            unlocked(){return hasUpgrade("P",13)},
        },
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "s", description: "S: reset for serenity", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: [
        "r"
    ],
    passiveGeneration(){
        return getBuyableAmount("r",22).div(200)
    },
    layerShown(){return player["serenityunlocked"]}
})

// POSTCEDING
addLayer("p", {
    name: "postceding", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#901d00",
    requires: new Decimal(8), // Can be a function that takes requirement increases into account
    resource: "postcedes", // Name of prestige currency
    baseResource: "serenity", // Name of resource prestige is based on
    baseAmount() {return player["s"].points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.75, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasChallenge('s',22)) mult = mult.times(1.5)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    tabFormat:{
        "Upgrades":{
            content: [
                "main-display",
                "prestige-button",
                "resource-display",
                "blank",
                "upgrades",
            ]
        },
    },
    upgrades: {
        11:{
            title: "!i",
            description: "x3 points",
            cost: new Decimal(1),
        },
        12:{
            title: "!ii",
            description: "Unlock a side layer",
            cost: new Decimal(1),
            unlocked(){
                return hasUpgrade("p",11)
            },
        },
        13:{
            title: "!iii",
            description: "x3 precedes, x4 serenity, x5 specifics, x6 points",
            cost: new Decimal(10),
            unlocked(){
                return hasAchievement("ach",24)
            },
        },
        14:{
            title: "!iv",
            description: "Unlock more automation buyables",
            cost: new Decimal(100),
            unlocked(){
                return hasUpgrade("p",13)
            },
        },
        15:{
            title: "!v",
            description: "Unlock another reset layer",
            cost: new Decimal(1000),
            unlocked(){
                return hasUpgrade("p",14)
            },
        },
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: reset for postcedes", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: [
        "s"
    ],
    layerShown(){return player["postcedingunlocked"]}
})

// PRECEDING
addLayer("P", {
    name: "preceding", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "p", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#ba7000",
    requires: new Decimal(150), // Can be a function that takes requirement increases into account
    resource: "precedes", // Name of prestige currency
    baseResource: "specifics", // Name of resource prestige is based on
    baseAmount() {return player["specifics"]}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.3, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasChallenge('s',22)) mult = mult.times(2)
        if (hasUpgrade('p',13)) mult = mult.times(3)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    tabFormat:{
        "Upgrades":{
            content: [
                "main-display",
                "prestige-button",
                "resource-display",
                "blank",
                "upgrades",
            ]
        },
    },
    upgrades: {
        11:{
            title: "?i",
            description: "x1.5 specifics and x1.5 respec deposit speed",
            cost: new Decimal(1),
        },
        12:{
            title: "?ii",
            description: "Keep 5% of your specifics on reset",
            cost: new Decimal(2),
            unlocked(){
                return hasUpgrade("P",11)
            },
        },
        13:{
            title: "?iii",
            description: "Unlock another serenity challenge",
            cost: new Decimal(4),
            unlocked(){
                return hasUpgrade("P",12)
            },
        },
        14:{
            title: "?iv",
            description: "Start gaining 1% of respecs per second",
            cost: new Decimal(8),
            unlocked(){
                return hasChallenge("s",22)
            },
        },
        21:{
            title: "?v",
            description: "Unlock another tab in respec",
            cost: new Decimal(8),
            unlocked(){
                return hasUpgrade("P",14)
            },
        },
        22:{
            title: "?vi",
            description: "x3 specifics, x2 respec deposit speed",
            cost: new Decimal(12),
            unlocked(){
                return hasUpgrade("P",21)
            },
        },
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "e", description: "E: reset for prEcedes", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: [
        "r"
    ],
    layerShown(){return player["precedingunlocked"]}
})

// NULL
addLayer("n", {
    name: "null", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "N", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#3f3f3f",
    requires: new Decimal(2000), // Can be a function that takes requirement increases into account
    resource: "nulls", // Name of prestige currency
    baseResource: "postcedes", // Name of resource prestige is based on
    baseAmount() {return player["p"].points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.3, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    tabFormat:{
        "Upgrades":{
            content: [
                "main-display",
                "prestige-button",
                "resource-display",
                "blank",
                "upgrades",
            ]
        },
        "Void":{
            content: [
                ["display-text",
                    function() {
                        let time = +(new Date()) // god please forgive me for what i'm doing
                        let col = HSVtoRGB((time/10000)%1,1,1)
                        return `You have <h2 style="color: rgb(${col.r}, ${col.g}, ${col.b}); text-shadow: rgb(${col.r}, ${col.g}, ${col.b}) 0px 0px 10px;">${format(player["voidshards"])}</h2> void shards` }],
                ["display-text", function() {
                    return `(${format(player["voidshardsgain"])}/sec)`}],
                "blank",
                "upgrades",
            ]
        },
    },
    upgrades: {
        11:{
            title: "-i",
            description: "Unlock a new tab",
            cost: new Decimal(1),
        },
        21:{
            title: "-ii",
            description: "x2 void shard gain",
            cost: new Decimal(1),
            currencyDisplayName: "void shards",
            currencyInternalName: "voidshards",
            unlocked(){
                return hasUpgrade("n",11)
            }
        },
        22:{
            title: "-iii",
            description: "Multiply point, respec and serenity gain based off of void shards",
            cost: new Decimal(2),
            currencyDisplayName: "void shards",
            currencyInternalName: "voidshards",
            unlocked(){
                return hasUpgrade("n",21)
            },
            effect(){
                return player["voidshards"].times(5).add(1).pow(0.6)
            },
            effectDisplay() {
                return "x"+format(upgradeEffect(this.layer,this.id))
            }
        },
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "n", description: "N: reset for nulls", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    branches: [
        "p"
    ],
    layerShown(){return player["nullunlocked"]}
})