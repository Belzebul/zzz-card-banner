import { Assets } from "../../assets"
import { Character } from "../../models/Character"
import { CharSkillSetPreview } from "./CharSkills"
import { CinemaPreview } from "./CinemaSvg"

export const CharProfile = (char: Character) => {
    const charMetadata = char.charMetadata;
    if (!char.charMetadata.name) {
        return (<div className="relative overflow-hidden w-[420px] h-[750px] border border-solid rounded-xl border-stone-700 bg-stone-800 transition-all duration-500 hover:border-opacity-15 bg-opacity-60 border-opacity-50 shadow-xl" />)
    }

    const profile = Assets.getCharacterAvatarById(charMetadata.name);
    const rarity = Assets.getRarity(charMetadata.rarity);
    const weapon = Assets.getWeapon(charMetadata.weapon);
    const element = Assets.getElement(charMetadata.elementId);

    return (
        <div className="relative overflow-hidden w-[420px] h-[750px] border border-solid rounded-xl border-stone-700 bg-stone-800 transition-all duration-500 hover:border-opacity-15 bg-opacity-60 border-opacity-50 shadow-xl">
            <img alt={charMetadata.name} src={profile} className="absolute max-w-none -top-2 -left-7 h-auto z-20 opacity-60" />
            <div className="absolute p-7 h-18 z-30 rounded-lg">
                <div className="flex h-18 w-auto gap-3 z-30">
                    <img src={rarity} className="w-16" />
                    <span className="text-[38px] leading-none font-['paybooc'] [text-shadow:1px_1px_6px_rgb(0_0_0_/_0.5)]"> {charMetadata.name} </span>
                    <span className="text-[24px] font-['paybooc'] [text-shadow:1px_1px_6px_rgb(0_0_0_/_0.5)] pt-[7px]"> Lv.{char.lvl} </span>
                </div>
            </div>
            <div className="flex flex-col absolute bottom-7 left-7 w-[42px] items-end gap-4 justify-end z-30">
                {CinemaPreview(char.rank)}
            </div>
            <div className="flex flex-col absolute bottom-20 right-7 w-10 gap-3 z-30 drop-shadow-xl">
                {CharSkillSetPreview(char.skillSet)}
            </div>
            <div className="flex self-end items-end absolute bottom-7 right-7 h-11 gap-2 z-30">
                <img src={weapon} className="h-8 drop-shadow-white" />
                <img src={element} className="h-11 drop-shadow-white" />
            </div>

        </div >
    )
}