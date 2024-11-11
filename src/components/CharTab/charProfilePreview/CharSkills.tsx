
import { Assets } from "../../../lib/assets";
import { ICON_FROM_SKILL_MAPPING } from "../../../lib/constantsUI";
import { SkillSet } from "../../../lib/models/SkillSet";

const CharSkillSetPreview = ({ skillSet }: { skillSet: SkillSet }) => {

    return (
        <div className="flex flex-col absolute bottom-14 right-0 w-10 gap-3 z-30 drop-shadow-xl">
            {Object.entries(ICON_FROM_SKILL_MAPPING).map(([id], index) => (
                <div key={index} className="relative flex justify-center">
                    <span className="absolute -bottom-2 font-['zzz'] text-lg text-border">
                        {getSkillLvl(skillSet, id)}
                    </span>
                    <img src={Assets.getSkill(id)} className="w-10" />
                </div >
            ))}
        </div>
    )
}

function getSkillLvl(skillSet: SkillSet, id: string) {
    if (+id in skillSet)
        return skillSet[+id].level;

    return 0;
}

export default CharSkillSetPreview