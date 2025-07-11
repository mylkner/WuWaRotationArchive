import {
    resonatorImgPathMaker,
    elementImgPathMaker,
    weaponImgPathMaker,
} from "../helpers/imgPathMakers";
import type { Elements, Rarities, Weapons } from "../types/characterDataTypes";
import rotationDb from "../data/rotationData";

class Character {
    name: string;
    rarity: Rarities;
    element: Elements;
    weapon: Weapons;
    icons: { character: string; element: string; weapon: string };
    hasRotations: boolean;

    constructor(
        name: string,
        rarity: Rarities,
        element: Elements,
        weapon: Weapons
    ) {
        this.name = name;
        this.rarity = rarity;
        this.element = element;
        this.weapon = weapon;
        this.icons = {
            character: resonatorImgPathMaker(
                this.name === "Rover-Havoc" ? "Female_rover" : this.name
            ),
            element: elementImgPathMaker(this.element),
            weapon: weaponImgPathMaker(this.weapon),
        };
        this.hasRotations =
            rotationDb.findIndex((char) => char.name === this.name) != -1;
    }
}

export default Character;
