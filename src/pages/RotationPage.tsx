import { useParams } from "react-router";
import rotationDb, { type RotationData } from "../data/rotationData";
import NotFound from "./NotFound";
import RotationView from "../components/RotationView";

const RotationPage = () => {
    const { character } = useParams();

    const charData: RotationData | undefined = rotationDb.find(
        ({ name }) => name.toLowerCase() === character
    );

    if (!charData) {
        return <NotFound />;
    }

    return (
        <div className="flex flex-col flex-wrap gap-3 p-10">
            <h1 className="text-white text-4xl">{charData.name}</h1>
            <hr className="text-white" />
            <div className="flex flex-col">
                {charData.data.map(({ team, rotation }, i) => (
                    <RotationView
                        key={rotation}
                        team={team}
                        rotation={rotation}
                        index={i}
                    />
                ))}
            </div>
        </div>
    );
};

export default RotationPage;
