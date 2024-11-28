
import { Assets } from "../../../lib/assets";
import { SkillID } from "../../../lib/constants";
import { SkillSet } from "../../../lib/models/SkillSet";

const CharSkillSetPreview = ({ skillSet }: { skillSet: SkillSet }) => {

    return (
        <div className="flex flex-col absolute bottom-14 right-0 w-10 gap-3 z-30 drop-shadow-xl">
            <SkillPreview lvl={getCoreLvl(skillSet, SkillID.CORE)} skillId={SkillID.CORE} />
            <SkillPreview lvl={getSkillLvl(skillSet, SkillID.BASIC)} skillId={SkillID.BASIC} />
            <SkillPreview lvl={getSkillLvl(skillSet, SkillID.DODGE)} skillId={SkillID.DODGE} />
            <SkillPreview lvl={getSkillLvl(skillSet, SkillID.ASSIST)} skillId={SkillID.ASSIST} />
            <SkillPreview lvl={getSkillLvl(skillSet, SkillID.SPECIAL)} skillId={SkillID.SPECIAL} />
            <SkillPreview lvl={getSkillLvl(skillSet, SkillID.CHAIN)} skillId={SkillID.CHAIN} />
        </div>
    )
}

const SkillPreview = ({ lvl, skillId }: { lvl: string, skillId: number }) => {
    return (
        <div className="relative flex justify-center">
            <span className="absolute -bottom-2 font-['zzz'] text-lg text-border">
                {lvl}
            </span>
            <img src={Assets.getSkill(skillId)} className="w-10" />
        </div >
    )
}


function getSkillLvl(skillSet: SkillSet, id: number) {
    if (id in skillSet)
        return skillSet[id].level.toString();

    return "0";
}

function getCoreLvl(skillSet: SkillSet, id: number) {
    if (!(id in skillSet))
        return "";

    const lvl = skillSet[id].level;
    if (lvl > 1)
        return String.fromCharCode(skillSet[id].level + 63);

    return "X";
}

export default CharSkillSetPreview