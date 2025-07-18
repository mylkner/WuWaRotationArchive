import characterDb from "../data/characterData";
import Character from "../models/CharacterClass";
import CharacterPortrait from "./CharacterPortrait";

interface RotationViewProps {
    team: string[];
    rotation: string;
    index: number;
}

const RotationView = ({ team, rotation, index }: RotationViewProps) => {
    const characterMap: Map<string, Character> = new Map(
        characterDb.map((char) => [char.name, char])
    );
    const characterPortraits: Character[] = team.map(
        (charName) => characterMap.get(charName)!
    );

    return (
        <div className="flex flex-col gap-3 mb-12">
            <h1 className="text-white text-2xl">{index + 1}</h1>
            <hr className="text-white" />
            <div className="flex flex-row gap-3">
                {characterPortraits.map((char) => (
                    <CharacterPortrait key={char.name} portraitData={char} />
                ))}
            </div>
            <p className="text-white text-xl">{rotation}</p>
        </div>
    );
};

export default RotationView;
