export interface Hakushin_data {
    [index: string]: Avatar
}
export interface Avatar {
    Id: number;
    Icon: string;
    Name: string;
    CodeName: string;
    Rarity: number | null;
    WeaponType: { [id: string]: string };
    ElementType: { [id: string]: ElementType };
    HitType: { [id: string]: HitType };
    Camp: { [id: string]: string };
    Stats: Stats;
    Level: { [id: string]: CharLevel };
    ExtraLevel: { [id: string]: ExtraLevel };
    Skill: Skills;
}

export enum ElementType {
    Electric = "Electric",
    Ether = "Ether",
    Fire = "Fire",
    Ice = "Ice",
    Physical = "Physical",
}

interface Stats {
    HpGrowth: number;
    HpMax: number;
    Attack: number;
    AttackGrowth: number;
    Defence: number;
    DefenceGrowth: number;
    Crit: number;
    CritDamage: number;
    ElementAbnormalPower: number; // anomaly mastery
    ElementMystery: number; // anomaly proficient
    BreakStun: number;
    PenRate: number;
    SpRecover: number;
}

interface CharLevel {
    HpMax: number;
    Attack: number;
    Defence: number;
}

interface ExtraLevel {
    MaxLevel: number;
    Extra: { [id: string]: Extra };
}

interface Extra {
    Prop: number;
    Value: number;
}

export enum HitType {
    Pierce = "Pierce",
    Slash = "Slash",
    Strike = "Strike",
}

export interface Skills {
    [id: string]: SkillHaku
}

export interface SkillHaku {
    Description: Description[];
    Material: { [key: string]: { [key: string]: number } };
}

export interface Description {
    Name: string;
    Desc?: string;
    Param?: DamageParam[];
}

export interface DamageParam {
    Name: string;
    Desc: string;
    Param?: { [key: string]: ParamValue };
}

export interface ParamValue {
    Main: number;
    Growth: number;
    Format: string;
    DamagePercentage: number;
    DamagePercentageGrowth: number;
    StunRatio: number;
    StunRatioGrowth: number;
    SpRecovery: number;
    SpRecoveryGrowth: number;
    FeverRecovery: number;
    FeverRecoveryGrowth: number;
    AttributeInfliction: number;
    SpConsume: number;
    AttackData: number[];
}

//teste com Enums
export enum SkillNames {
    Basic = "Basic",
    Dodge = "Dodge",
    Special = "Special",
    Chain = "Chain",
    Assist = "Assist",
}

export enum Prop {
    Dmg = "1001",
    Daze = "1002",
}