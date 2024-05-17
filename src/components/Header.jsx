import React from "react";
import { NavLink } from "react-router-dom";
import { GiBurningDot, GiBurningSkull } from "react-icons/gi";
import { TbDeviceGamepad } from "react-icons/tb";
import { MdOutlineLeaderboard, MdOutlineDoNotDisturbAlt, MdOutlinePlayArrow, MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <div className="w-[14vw] bg-[#232f40] border m-3 p-2 rounded-[1.2vw] h-screen text-white">
            <div className="m-4 my-5 flex items-center gap-3">
                <GiBurningDot className="text-5xl" />
                <h2 className="text-xl">GamiSense</h2>
            </div>
            <div className="bg-black h-[20vh] w-[90%] rounded-[1.2vw] m-auto my-8 p-3 flex flex-col items-center justify-center">
                <div className="h-[5vw] w-[5vw] rounded-full border-2 border-violet-500 m-auto my-3">
                    <img className="rounded-full" src="https://i.pinimg.com/564x/94/05/5f/94055f0a5b69b2443c75b6f961019a8e.jpg" alt="User Profile" />
                </div>
                <h3 className="text-lg font-semibold leading-5">Abhinav Tiwari</h3>
                <h4 className="text-zinc-400 text-sm">Avhinaw</h4>
            </div>
            <ul className="flex flex-col m-6 my-10 gap-2">
                <li>
                    <NavLink to="/game" className="flex items-center gap-2 cursor-pointer" activeClassName="text-blue-500">
                        <TbDeviceGamepad className="text-xl" />
                        <span className="text-xl">Game</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/modes" className="flex items-center gap-2 cursor-pointer" activeClassName="text-blue-500">
                        <GiBurningSkull className="text-xl" />
                        <span className="text-xl">Modes</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/leaderboard" className="flex items-center gap-2 cursor-pointer" activeClassName="text-blue-500">
                        <MdOutlineLeaderboard className="text-xl" />
                        <span className="text-xl">Leaderboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/rules" className="flex items-center gap-2 cursor-pointer" activeClassName="text-blue-500">
                        <MdOutlineDoNotDisturbAlt className="text-xl" />
                        <span className="text-xl">Rules</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className="flex items-center gap-2 cursor-pointer" activeClassName="text-blue-500">
                        <CgProfile className="text-xl" />
                        <span className="text-xl">Profile</span>
                    </NavLink>
                </li>
            </ul>
            <div className="my-10 mx-6 relative cursor-pointer">
                <MdOutlinePlayArrow className="text-3xl absolute bottom-[19%] right-[80%]" />
                <button className="bg-[#0fc9fc] px-8 py-3 rounded-md font-semibold hover:bg-[#0fb9fc]">Play Now</button>
            </div>
            <div className="mt-20 m-8 flex items-center gap-2 cursor-pointer">
                <MdLogout className="text-lg" />
                <button className="block rounded-md font-semibold">Logout</button>
            </div>
        </div>
    );
}

export default Header;
