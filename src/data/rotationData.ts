export interface RotationData {
    name: string;
    data: { team: string[]; rotation: string }[];
}

//todo all lupa rotations

const rotationDb: RotationData[] = [
    {
        name: "Rover-Havoc",
        data: [
            {
                team: ["Rover-Havoc", "Danjin", "Shorekeeper"],
                rotation:
                    "Shorekeeper (BA4-HA/Intro)-E, Danjin BA2-E2, Rover E, Shorekeeper BA4-HA-Q-R, Intro Danjin E2-R-E-BA-E-Forte-Q, Intro Rover MA-E-Forte-E-BA5-BA5-BA3-R-Q.",
            },
            {
                team: ["Rover-Havoc", "Danjin", "Verina"],
                rotation:
                    "Intro* Danjin BA2-E2, Rover E, Verina BA3-E-Q-R-Forte, Intro Danjin E2-R-E-BA-E-Forte-Q, Intro Rover MA-E-Forte-E-BA5-BA5-BA3-R-Q. *Second rotation onwards.",
            },
        ],
    },
    {
        name: "Encore",
        data: [
            {
                team: ["Encore", "Sanhua", "Shorekeeper"],
                rotation:
                    "Shorekeeper (BA4-HA/Intro)-E, Sanhua E-R-Forte, Shorekeeper BA4-HA, Encore E-E-Q, Shorekeeper Q-R, Intro Sanhua Forte-Q, Intro Encore R-BA4-E-BA4-BA4-E-HA.",
            },
            {
                team: ["Encore", "Sanhua", "Verina"],
                rotation:
                    "Encore E, *Intro Sanhua E-R-Forte, Encore E, Verina BA3-E-Q-R, Encore Q, Verina Forte, Intro Sanhua Forte-Q, Encore R-BA4-E-BA4-BA4-E. *Second rotation onwards.",
            },
        ],
    },
    {
        name: "Camellya",
        data: [
            {
                team: ["Camellya", "Sanhua", "Shorekeeper"],
                rotation:
                    "Shorekeeper (BA4-HA/Intro)-E, Sanhua E-R-Forte, Camellya Q, Shorekeeper BA4-HA-Q-R, Intro Sanhua Forte-Q, Intro Camellya E-R-HA-Jump-Forte-E-HA-E.",
            },
            {
                team: ["Camellya", "Sanhua", "Verina"],
                rotation:
                    "*Intro Sanhua E-R-Forte, Camellya Q, Verina BA3-E-Q-R-Forte, Intro Sanhua Forte-Q, Intro Camellya E-R-HA-Jump-Forte-E-HA-E. *Second rotation onwards.",
            },
        ],
    },
    {
        name: "Jiyan",
        data: [
            {
                team: ["Jiyan", "Mortefi", "Shorekeeper"],
                rotation:
                    "Shorekeeper (BA4-HA/Intro)-E, Mortefi BA, Jiyan BA2, Shorekeeper BA4-HA, Mortefi BA, Jiyan BA2-E-Q, Mortefi E-BA3, Shorekeeper Q-R, Intro Mortefi Forte-R-Q, Intro Jiyan R-NA-E-NA-E-NA.",
            },
            {
                team: ["Jiyan", "Mortefi", "Verina"],
                rotation:
                    "*Intro Mortefi E, Verina BA3-E-Q-R, Mortefi BA, Jiyan BA2-E-Q, Mortefi BA, Verina Forte, Intro Mortefi Forte-R-BA-Q, Intro Jiyan R-NA-E-NA-E-NA. *Second rotation onwards.",
            },
        ],
    },
    {
        name: "Carlotta",
        data: [
            {
                team: ["Carlotta", "Zhezhi", "Shorekeeper"],
                rotation:
                    "Carlotta HA-E-E, Shorekeeper (BA4-HA/Intro)-E, Zhezhi BA3, Carlotta Q, Shorekeeper BA4-HA-Q-R, Intro Zhezhi R-E-BA-E3-Q, Intro Carlotta HA-E-E-MA-Forte-R6.",
            },
            {
                team: ["Carlotta", "Zhezhi", "Verina"],
                rotation:
                    "Carlotta HA-E-E, Zhezhi BA3/Intro, Carlotta MA-Q, Verina BA3-E-Q-R-Forte, Intro Zhezhi R-E-BA-E3-Q, Intro Carlotta HA-E-E-MA-Forte-R6.",
            },
            {
                team: ["Carlotta", "Changli", "Shorekeeper"],
                rotation:
                    "Carlotta HA-E-E, Changli *(Intro TS:Charge-MA-Forte-)R-Forte, *Shorekeeper (BA4-HA/Intro)-E, Changli E, Carlotta Q, Changli TS:Conquest, Shorekeeper BA4-HA-Q-R, Intro Changli TS:Charge-E-TS:Conquest, Carlotta HA-E-E-MA-Forte, Changli Q, Carlotta R6. *Second rotation onwards.",
            },
            {
                team: ["Carlotta", "Changli", "Verina"],
                rotation:
                    "*Intro Carlotta HA-E-E, Changli R-Forte, Verina BA3-E-Q-R, Changli E, Carlotta Q, Changli TS:Charge-Q, Verina Forte, Intro Changli TS:Charge-E-TS:Conquest, Carlotta HA-E-E-MA-Forte-R6, Intro Changli TS:Charge-MA-Forte. *Second rotation onwards.",
            },
        ],
    },
    {
        name: "Changli",
        data: [
            {
                team: ["Carlotta", "Changli", "Shorekeeper"],
                rotation:
                    "Carlotta HA-E-E, Changli R-Forte, *Shorekeeper (BA4-HA/Intro)-E, Changli E, Carlotta Q, Changli TS:Conquest, Shorekeeper BA4-HA-Q-R, Intro Changli TS:Charge-E-TS:Conquest, Carlotta HA-E-E-MA-Forte, Changli Q, Carlotta R6-HA-E-E, Intro Changli TS:Charge-MA-Forte-R-Forte. *Repeat from here.",
            },
            {
                team: ["Carlotta", "Changli", "Verina"],
                rotation:
                    "*Intro Carlotta HA-E-E, Changli R-Forte, Verina BA3-E-Q-R, Changli E, Carlotta Q, Changli TS:Charge-Q, Verina Forte, Intro Changli TS:Charge-E-TS:Conquest, Carlotta HA-E-E-MA-Forte-R6, Intro Changli TS:Charge-MA-Forte. *Second rotation onwards.",
            },
        ],
    },
    {
        name: "Lupa",
        data: [
            {
                team: ["Encore", "Lupa", "Shorekeeper"],
                rotation: "To be added",
            },
            {
                team: ["Encore", "Lupa", "Verina"],
                rotation: "2",
            },
            {
                team: ["Encore", "Lupa", "Changli"],
                rotation: "3",
            },
            {
                team: ["Camellya", "Lupa", "Shorekeeper"],
                rotation: "4",
            },
            {
                team: ["Camellya", "Lupa", "Verina"],
                rotation: "5",
            },
            {
                team: ["Carlotta", "Lupa", "Shorekeeper"],
                rotation: "6",
            },
            {
                team: ["Carlotta", "Lupa", "Verina"],
                rotation: "7",
            },
        ],
    },
];

export default rotationDb;
