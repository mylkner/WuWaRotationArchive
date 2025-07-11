import { Elements, Weapons } from "../types/characterDataTypes";

export const resonatorImgPathMaker = (name: string): string =>
    `src/assets/Resonators/Resonator_${name}.webp`;
export const elementImgPathMaker = (name: Elements): string =>
    `src/assets/Elements/${name}.webp`;
export const weaponImgPathMaker = (name: Weapons): string =>
    `src/assets/Weapons/${name}_Icon.webp`;
