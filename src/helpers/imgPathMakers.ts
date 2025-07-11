import { Elements, Weapons } from "../types/characterDataTypes";

export const resonatorImgPathMaker = (name: string): string =>
    `assets/Resonators/Resonator_${name}.webp`;
export const elementImgPathMaker = (name: Elements): string =>
    `assets/Elements/${name}.webp`;
export const weaponImgPathMaker = (name: Weapons): string =>
    `assets/Weapons/${name}_Icon.webp`;
