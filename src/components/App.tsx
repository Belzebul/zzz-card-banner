import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { SaveState } from "../lib/DB/saveState";
import Tabs from "./Tabs";

SaveState.load()

export const ExternalLayout: React.FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {
        setSidebar(!sidebar);
    };
    const MenuButton = () => {
        return sidebar ? (
            <FiX className={`size-14 p-2 mx-2 active:animate-spin cursor-pointer`} onClick={showSidebar} />
        ) : (
            <FiMenu className={`size-14 p-2 mx-2 active:animate-spin cursor-pointer`} onClick={showSidebar} />
        );
    }
    return (
        <div className="flex flex-col bg-neutral-950 box-border min-w-min max-h-screen rounded-md overflow-y-scroll scrollbar">
            <div className="flex items-center h-[60px] w-full bg-gradient-to-r from-amber-600 to-orange-950 rounded-t-md ">
                <MenuButton />
                <span className='text-[38px] font-["paybooc"] text-stone-100 mx-4'>
                    Capiroto ZZZ Card Build
                </span>
            </div>
            <div />
            <Tabs show={sidebar} />
        </div>
    );
};
