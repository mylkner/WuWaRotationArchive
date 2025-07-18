import { Rarities, Elements, Weapons } from "../types/characterDataTypes";
import Character from "../models/CharacterClass";

const characterDb: Character[] = [
    new Character("Rover-Havoc", Rarities["5★"], Elements.Havoc, Weapons.Sword),
    new Character("Encore", Rarities["5★"], Elements.Fusion, Weapons.Rectifier),
    new Character("Camellya", Rarities["5★"], Elements.Havoc, Weapons.Sword),
    new Character("Jiyan", Rarities["5★"], Elements.Aero, Weapons.Broadblade),
    new Character("Carlotta", Rarities["5★"], Elements.Glacio, Weapons.Pistols),
    new Character("Changli", Rarities["5★"], Elements.Fusion, Weapons.Sword),
    new Character("Danjin", Rarities["4★"], Elements.Havoc, Weapons.Sword),
    new Character(
        "Shorekeeper",
        Rarities["5★"],
        Elements.Spectro,
        Weapons.Rectifier
    ),
    new Character(
        "Verina",
        Rarities["5★"],
        Elements.Spectro,
        Weapons.Rectifier
    ),
    new Character("Sanhua", Rarities["4★"], Elements.Glacio, Weapons.Sword),
    new Character("Mortefi", Rarities["4★"], Elements.Fusion, Weapons.Pistols),
    new Character("Zhezhi", Rarities["4★"], Elements.Glacio, Weapons.Rectifier),
    new Character("Lupa", Rarities["5★"], Elements.Fusion, Weapons.Broadblade),
];

export default characterDb;
