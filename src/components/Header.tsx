import { useState } from "react";
import { NavLink } from "react-router";
import { CiCircleInfo } from "react-icons/ci";
import InfoCard from "./InfoCard";

const Header = () => {
    const [showInfoCard, setShowInfoCard] = useState<boolean>(false);

    return (
        <header className="h-[5vh] w-full bg-gray-800 px-4 py-3 flex items-center justify-between">
            <h1 className="text-lg font-bold text-white md:text-xl">
                WuWa Rotation Archive
            </h1>

            <div className="flex items-center gap-3">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-white text-lg md:text-xl"
                            : "text-neutral-400 text-lg md:text-xl transition-colors duration-150 ease-in hover:text-white"
                    }
                >
                    Characters
                </NavLink>

                <CiCircleInfo
                    className="text-neutral-400 text-3xl font-bold transition-colors duration-150 ease-in hover:text-white hover:cursor-pointer"
                    onClick={() => setShowInfoCard(true)}
                />
            </div>

            {showInfoCard && <InfoCard setShowInfoCard={setShowInfoCard} />}
        </header>
    );
};

export default Header;
