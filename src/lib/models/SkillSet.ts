import { DamageParam } from "../types/hakushin_types"

export interface SkillKit {
    [id: string]: Skill
}

export type Skill = {
    level: number,
    subSkills: SubSkill[]
}

export type SubSkill = {
    name: string,
    params: DamageParam[]
}
