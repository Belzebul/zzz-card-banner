export interface Hakushin_data {
    [index: string]: Avatar
}
export interface Avatar {
    Id: number
    Name: string
    CodeName: string
    Rarity: number | null
    WeaponType: { [id: string]: string }
    ElementType: { [id: string]: string }
    HitType: { [id: string]: string }
    Camp: { [id: string]: string }
    Stats: Stats
    Level: { [id: string]: CharLevel }
    ExtraLevel: { [id: string]: ExtraLevel }
}
interface Stats {
    HpGrowth: number
    HpMax: number
    Attack: number
    AttackGrowth: number
    Defence: number
    DefenceGrowth: number
    Crit: number
    CritDamage: number
    ElementAbnormalPower: number // anomaly mastery
    ElementMystery: number // anomaly proficient
    BreakStun: number
    PenRate: number
    SpRecover: number
}
interface CharLevel {
    HpMax: number
    Attack: number
    Defence: number
}
interface ExtraLevel {
    MaxLevel: number
    Extra: { [id: string]: Extra }
}
interface Extra {
    Prop: number
    Value: number
}
