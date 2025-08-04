import type { ReactNode } from "react";
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
    const rotationAndNotesSplit: string[] = rotation.split(".", 2);
    const rotationPart: string = rotationAndNotesSplit[0];
    const notesPart: string = rotationAndNotesSplit[1];

    const formatRotation = (): ReactNode => {
        const splitRotation: string[] = rotationPart.split(",");

        return splitRotation.map((splitRotationSegment, splitRotationIndex) => {
            const asteriskSplit = splitRotationSegment.split(/(\*+)/);
            const highlightColor = splitRotationSegment.includes(team[0])
                ? "text-rose-300"
                : splitRotationSegment.includes(team[1])
                ? "text-sky-300"
                : "text-emerald-300";

            return asteriskSplit.map(
                (asteriskSplitSegment, asteriskSplitIndex) => {
                    if (asteriskSplitSegment.length === 0) return;
                    if (asteriskSplitSegment.includes("*")) {
                        return asteriskSplitSegment;
                    } else {
                        const punctuation =
                            asteriskSplitIndex === asteriskSplit.length - 1 &&
                            splitRotationIndex !== splitRotation.length - 1
                                ? ","
                                : splitRotationIndex ===
                                  splitRotation.length - 1
                                ? "."
                                : "";

                        return (
                            <span
                                key={asteriskSplitIndex}
                                className={highlightColor}
                            >
                                {asteriskSplitSegment + punctuation}
                            </span>
                        );
                    }
                }
            );
        });
    };

    return (
        <div className="flex flex-col gap-3 mb-12">
            <h1 className="text-white text-2xl">{index + 1}</h1>
            <hr className="text-white" />
            <div className="flex flex-row gap-3">
                {characterPortraits.map((char) => (
                    <CharacterPortrait key={char.name} portraitData={char} />
                ))}
            </div>
            <p className="text-white text-xl">
                {formatRotation()}
                {notesPart && notesPart + "."}
            </p>
        </div>
    );
};

export default RotationView;
