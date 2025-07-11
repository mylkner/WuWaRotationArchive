import { useEffect, useState, useMemo } from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router";
import { IoClose } from "react-icons/io5";
import { Rarities, Elements, Weapons } from "../types/characterDataTypes";
import {
    elementImgPathMaker,
    weaponImgPathMaker,
} from "../helpers/imgPathMakers";
import CharacterPortrait from "../components/CharacterPortrait";
import characterDb from "../data/characterData";
import FilterGroup from "../components/FilterGroup";
import type Character from "../models/CharacterClass";

const CharacterList = () => {
    const charactersWithRotations = useMemo(
        () => characterDb.filter((char) => char.hasRotations),
        []
    );
    const [characters, setCharacters] = useState<Character[]>(
        charactersWithRotations
    );
    const [search, setSearch] = useState<string>("");
    const [selectedRarities, setSelectedRarities] = useState<Rarities[]>([]);
    const [selectedElements, setSelectedElements] = useState<Elements[]>([]);
    const [selectedWeapons, setSelectedWeapons] = useState<Weapons[]>([]);

    useEffect(() => {
        const filtered = charactersWithRotations.filter((character) => {
            const matchesSearch = character.name
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesRarity =
                selectedRarities.length === 0 ||
                selectedRarities.includes(character.rarity);

            const matchesElement =
                selectedElements.length === 0 ||
                selectedElements.includes(character.element);

            const matchesWeapon =
                selectedWeapons.length === 0 ||
                selectedWeapons.includes(character.weapon);

            return (
                matchesSearch &&
                matchesRarity &&
                matchesElement &&
                matchesWeapon
            );
        });

        setCharacters(filtered);
    }, [
        search,
        selectedRarities,
        selectedElements,
        selectedWeapons,
        charactersWithRotations,
    ]);

    const searchBar = (
        <div className="flex items-center border w-fit py-2 px-4 gap-3 border-white rounded">
            <IoSearch className="text-white text-2xl" />
            <input
                className="caret-white text-white outline-none placeholder:italic"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <IoClose
                className="text-white text-2xl font-semibold hover:cursor-pointer"
                onClick={() => setSearch("")}
            />
        </div>
    );

    const rarityFilter = (
        <FilterGroup
            values={Object.values(Rarities)}
            selected={selectedRarities}
            setSelected={setSelectedRarities}
            imgPathMaker={undefined}
        />
    );
    const elementFilter = (
        <FilterGroup
            values={Object.values(Elements)}
            selected={selectedElements}
            setSelected={setSelectedElements}
            imgPathMaker={elementImgPathMaker}
        />
    );
    const weaponFilter = (
        <FilterGroup
            values={Object.values(Weapons)}
            selected={selectedWeapons}
            setSelected={setSelectedWeapons}
            imgPathMaker={weaponImgPathMaker}
        />
    );

    return (
        <div className="flex flex-col flex-wrap gap-3 p-10">
            <h1 className="text-white text-4xl">Characters</h1>
            <hr className="text-white" />
            <div className="flex flex-col xl:flex-row gap-5">
                {searchBar}
                {rarityFilter}
                {elementFilter}
                {weaponFilter}
            </div>

            <div className="flex flex-wrap gap-3">
                {characters
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((data) => (
                        <Link
                            to={data.name.toLowerCase()}
                            key={data.name}
                            className="hover:cursor-pointer"
                        >
                            <CharacterPortrait portraitData={data} />
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default CharacterList;
