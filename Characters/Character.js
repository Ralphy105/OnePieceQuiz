const arcOrder = [
    "Romance Dawn",
    "Orange Town",
    "Syrup Village",
    "Arlong Park",
    "Drum Island",
    "Alabasta",
    "Jaya",
    "Skypiea",
    "Water 7",
    "Enies Lobby",
    "Thriller Bark",
    "Sabaody Archipelago",
    "Amazon Lily",
    "Impel Down",
    "Marineford",
    "Post-War",
    "Fish-Man Island",
    "Punk Hazard",
    "Dressrosa",
    "Whole Cake Island",
    "Wano",
    "Egghead",
]

class Character{
    constructor(name, mangaOnly, island, crew, arcsAppeared, gender, devilFruitUser, nickNames, bounty, intro) {
        this._name = name
        this._mangaOnly = mangaOnly
        this._island = island
        this._crew = crew
        this._arcsAppeared = arcsAppeared
        this._gender = gender
        this._devilFruitUser = devilFruitUser
        this._nickNames = nickNames
        this._bounty = bounty
        this._intro = intro
    }

    get name() {
        return this.latestValue(this._name)
    }
    set name(value) {
        this._name = value
    }

    latestValue(prop) {
        const spoilerArc = process.env.SPOILER_ARC;
        const arcIndex = arcOrder.indexOf(spoilerArc)

        const validArcs = arcOrder.slice(0, arcIndex + 1)

        for (const arc of validArcs.reverse()) {
            const name = prop[arc]
            if (name !== undefined) return name;
        }
        return prop.default;
    }
}

global.Character = Character;

global.example_name_object = {
    default: "Sanji",
    "Whole Cake Island": "Vinsmoke Sanji", // quotes cuz special chars
    Egghead: "Super Penis Sanji",
}

const sanji = new Character(example_name_object);

console.log(sanji.name)