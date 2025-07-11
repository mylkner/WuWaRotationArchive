import type Character from "../models/CharacterClass";

interface CharacterPortraitProps {
    portraitData: Character;
}

const CharacterPortrait = ({ portraitData }: CharacterPortraitProps) => {
    const { name, rarity, icons } = portraitData;
    const bgColor: string =
        rarity === "5\u2605" ? "bg-yellow-600" : "bg-violet-500";

    return (
        <div className={`flex flex-col ${bgColor} rounded-lg relative`}>
            <img
                src={icons.element}
                className="absolute top-0 left-0 h-[40px] w-[40px]"
            />
            <img
                src={icons.weapon}
                className="absolute top-0 right-0 h-[40px] w-[40px]"
            />
            <img
                className="w-full h-full object-fit-cover"
                src={icons.character}
                alt={name}
            />
            <p className="bg-neutral-300 text-center p-2 rounded-b-lg font-semibold">
                {name}
            </p>
        </div>
    );
};

export default CharacterPortrait;
