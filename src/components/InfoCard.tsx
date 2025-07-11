import type { Dispatch, SetStateAction } from "react";
import { GoXCircle } from "react-icons/go";

interface InfoCardProps {
    setShowInfoCard: Dispatch<SetStateAction<boolean>>;
}

const InfoCard = ({ setShowInfoCard }: InfoCardProps) => {
    return (
        <div
            className="absolute top-0 right-0 left-0 bottom-0 w-full h-full flex items-center justify-center bg-black/80 z-50"
            onClick={() => setShowInfoCard(false)}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-1/2 h-fit rounded p-5 bg-gray-800 flex flex-col gap-4"
            >
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white">
                        Rotation Archive
                    </h2>
                    <GoXCircle
                        className="text-white text-2xl hover:cursor-pointer hover:text-blue-600"
                        onClick={() => setShowInfoCard(false)}
                    />
                </div>

                <p className="text-lg text-white">
                    These rotations are just what I personally use in Wuthering
                    Waves. They may or may not be the most optimal, but just
                    what I found that I thinks works well and fits my playstyle.
                    Only characters I own/have built will be here. Feel free to
                    adjust them in any way you please.
                </p>
            </div>
        </div>
    );
};

export default InfoCard;
