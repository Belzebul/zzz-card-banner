import { Assets } from "../../../lib/assets";
import { Character } from "../../../lib/models/Character";
import CharSkillSetPreview from "./CharSkills";
import { CinemaPreview } from "./CinemaSvg";


const CharProfile = (x: { char: Character }) => {
    const charMeta = x.char.charMetadata;

    if (!x.char.name) {
        return (<div className="card-primary w-[420px] h-[750px]" />);
    }

    const profile = Assets.getCharacterAvatarById(x.char.name);
    const rarity = Assets.getRarity(charMeta.rarity);
    const weapon = Assets.getWeapon(charMeta.weapon);
    const element = Assets.getElement(charMeta.elementId);

    const Title = () => (
        <div className="absolute flex h-18 w-auto gap-3 z-30">
            <img src={rarity} className="w-16" />
            <span className="text-[38px] py-0.5 leading-none drop-shadow-primary"> {x.char.name} </span>
            <span className="text-[24px] py-2 drop-shadow-primary"> Lv.{x.char.lvl} </span>
        </div>
    );

    return (
        <div className="card-primary w-[420px] h-[750px]">
            <img alt={x.char.name} src={profile} className="absolute max-w-none top-0 -left-6 h-[750px] z-10 opacity-65" />
            <div className="relative w-full h-full">
                <Title />
                <div className="flex flex-col absolute bottom-0 left-0 w-[42px] items-end gap-4 justify-end z-30">
                    <CinemaPreview charMovie={x.char.rank} />
                </div>
                <div className="flex flex-col absolute bottom-14 right-0 w-10 gap-3 z-30 drop-shadow-xl">
                    <CharSkillSetPreview skillSet={x.char.skillSet} />
                </div>
                <div className="flex items-end absolute bottom-0 right-0 h-11 gap-2 z-30">
                    <img src={weapon} className="h-8 drop-shadow-white" />
                    <img src={element} className="h-11 drop-shadow-white" />
                </div>
            </div>
        </div >
    )
}

export default CharProfile