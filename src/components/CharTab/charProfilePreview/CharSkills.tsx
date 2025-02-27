import { Assets } from "../../../lib/assets";
import { HOYO_SkillID } from "../../../lib/constants";
import { SkillKit } from "../../../lib/models/SkillSet";

const CharSkillSetPreview = ({ skillSet }: { skillSet: SkillKit }) => {

    return (
        <div className="flex flex-col absolute bottom-14 right-0 w-10 gap-3 z-30 drop-shadow-xl">
            <SkillPreview lvl={getCoreLvl(skillSet, HOYO_SkillID.CORE)} skillId={HOYO_SkillID.CORE} />
            <SkillPreview lvl={getSkillLvl(skillSet, HOYO_SkillID.BASIC)} skillId={HOYO_SkillID.BASIC} />
            <SkillPreview lvl={getSkillLvl(skillSet, HOYO_SkillID.DODGE)} skillId={HOYO_SkillID.DODGE} />
            <SkillPreview lvl={getSkillLvl(skillSet, HOYO_SkillID.ASSIST)} skillId={HOYO_SkillID.ASSIST} />
            <SkillPreview lvl={getSkillLvl(skillSet, HOYO_SkillID.SPECIAL)} skillId={HOYO_SkillID.SPECIAL} />
            <SkillPreview lvl={getSkillLvl(skillSet, HOYO_SkillID.CHAIN)} skillId={HOYO_SkillID.CHAIN} />
        </div>
    )
}

type SkillPreviewProps = {
    lvl: string
    skillId: number
}

const SkillPreview = ({ lvl, skillId }: SkillPreviewProps) => {
    return (
        <div className="relative flex justify-center">
            <span className="absolute -bottom-2 font-['zzz'] text-lg text-border">
                {lvl}
            </span>
            <img src={Assets.getSkill(skillId)} className="w-10" />
        </div >
    )
}


const getSkillLvl = (skillSet: SkillKit, id: number) => {
    if (id in skillSet)
        return skillSet[id].level.toString();

    return "0";
}

const getCoreLvl = (skillSet: SkillKit, id: number) => {
    if (!(id in skillSet))
        return "";

    const lvl = skillSet[id].level;
    if (lvl > 1)
        return String.fromCharCode(skillSet[id].level + 63);

    return "X";
}

export default CharSkillSetPreview