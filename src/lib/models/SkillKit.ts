import { DamageParam, ParamValue } from "../types/hakushin_types"

export interface SkillKit {
    [id: string]: Skill
}

export type Skill = {
    level: number,
    subSkills: SubSkill[]
}

export type SubSkill = {
    name: string,
    dmgPecent: number[],
    params: DamageParam[]
}

export class SkillCalc {
    skillKit: SkillKit
    dictSkillsMult = {}

    constructor(skillKit: SkillKit) {
        this.skillKit = skillKit;
    }

    public calcAllSkillsMult() {
        Object.entries(this.skillKit).forEach(([id, skill]) => {
            const skillCalculated = skill;

            skillCalculated.subSkills = Object.values(skill.subSkills).map((subSkill) => {
                console.log(subSkill.name);
                const subSkillCalculated = subSkill;

                let dmgPecentAux: number[] = [];
                for (let [index, subSkillProp] of subSkill.params.entries()) {
                    console.log(subSkillProp.Name);
                    dmgPecentAux[index] = this.mountSkillMult(subSkillProp, skill.level);
                    console.log(dmgPecentAux[index]);
                }

                subSkillCalculated.dmgPecent = dmgPecentAux;
                return subSkillCalculated;
            });

            this.skillKit[id] = skillCalculated;
        });

        console.log(this.skillKit);
    }

    private mountSkillMult(dmgParam: DamageParam, lvl: number) {
        const regex = /\{(.*?)\}/g;

        const resultado = dmgParam.Desc.replace(regex, (_match, capture) => {
            const json = JSON.parse(this.fixJson(capture));

            // @ts-ignore
            return this.subSkillMult(dmgParam.Param[json.Skill], lvl);
        });

        console.log("formula: " + resultado.replace("}", ""));
        return eval(resultado.replace("}", ""));
    }

    private fixJson(jsonBroken: string) {
        const fixCurlyBrackets = "{" + jsonBroken.replace("{", "") + "}";
        const fixQuotationMark = fixCurlyBrackets.replace('Skill', '"Skill"').replace('Prop', '"Prop"');
        return fixQuotationMark;
    }

    private subSkillMult(paramValue: ParamValue, lvl: number) {
        return String((paramValue.Main + paramValue.Growth * (lvl - 1)) / 100);
    }
}