import { Assets } from "../../assets";
import { SkillSet } from "../../models/SkillSet";
import { ICON_FROM_SKILL_MAPPING } from "../constantsUI";
import "./CharSkills.css";

function getSkillLvl(skillSet: SkillSet, id: string) {
    if (+id in skillSet)
        return skillSet[+id].level;

    return 0;
}

export const CharSkillSetPreview = (skillSet: SkillSet) => {

    return (
        <>
            {Object.entries(ICON_FROM_SKILL_MAPPING).map(([id], index) => (
                <div key={index} className="relative flex justify-center">
                    <span className="absolute -bottom-2 font-['zzz'] text-lg text-border">
                        {getSkillLvl(skillSet, id)}
                    </span>
                    <img src={Assets.getSkill(id)} className="w-10" />
                </div >
            ))}
        </>
    )
}