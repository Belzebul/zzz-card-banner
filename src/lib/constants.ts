/*
export const AttributeID = {
    11101: 'HP_BASE',
    11102: 'HP_P',
    11103: 'HP_FLAT',
    12101: 'ATK_BASE',
    12102: 'ATK_P',
    12103: 'ATK_FLAT',
    12201: 'IMPACT',
    12202: 'IMPACT_P',
    13101: 'DEF_BASE',
    13102: 'DEF_P',
    13103: 'DEF_FLAT',
    20101: 'CRIT_RATE_BASE',
    20103: 'CRIT_RATE',
    21101: 'CRIT_DMG_BASE',
    21103: 'CRIT_DMG',
    23101: 'PEN_BASE',
    23103: 'PEN_P',
    23203: 'PEN_FLAT',
    30501: 'ENERGY_RATE',
    30502: 'ENERGY_P',
    31201: 'ANOMALY_PROF_BASE',
    31203: 'ANOMALY_PROF',
    31401: 'ANOMALY_MAST_BASE',
    31402: 'ANOMALY_MAST',
    31503: 'PHYS_DMG',
    31603: 'FIRE_DMG',
    31703: 'ICE_DMG',
    31803: 'ELEC_DMG',
    31903: 'ETHER_DMG',
}*/

export const AttributeID = {
    HP_BASE: 11101,
    HP_P: 11102,
    HP_FLAT: 11103,
    ATK_BASE: 12101,
    ATK_P: 12102,
    ATK_FLAT: 12103,
    IMPACT: 12201,
    IMPACT_P: 12202,
    DEF_BASE: 13101,
    DEF_P: 13102,
    DEF_FLAT: 13103,
    CRIT_RATE_BASE: 20101,
    CRIT_RATE: 20103,
    CRIT_DMG_BASE: 21101,
    CRIT_DMG: 21103,
    PEN_BASE: 23101,
    PEN_P: 23103,
    PEN_FLAT: 23203,
    ENERGY_RATE: 30501,
    ENERGY_P: 30502,
    ANOMALY_PROF_BASE: 31201,
    ANOMALY_PROF: 31203,
    ANOMALY_MAST_BASE: 31401,
    ANOMALY_MAST: 31402,
    PHYS_DMG: 31503,
    FIRE_DMG: 31603,
    ICE_DMG: 31703,
    ELEC_DMG: 31803,
    ETHER_DMG: 31903,
};

export type AttrKeys = keyof typeof AttributeID
export type AttrValues = (typeof AttributeID)[AttrKeys]

export const Stats = {
    LVL: 'LVL',
    HP_P: 'HP%',
    HP: 'HP',
    ATK_P: 'ATK%',
    ATK: 'ATK',
    DEF_P: 'DEF%',
    DEF: 'DEF',
    IMP: 'IMPACT',
    IMP_P: 'IMPACT',
    CR: 'CRIT Rate',
    CD: 'CRIT DMG',
    PEN_P: 'PEN%',
    PEN: 'PEN',
    ER_P: 'Energy Regen%',
    ER: 'Energy Regen Rate',
    AP: 'Anomaly Proficient',
    AM: 'Anomaly Mastery',
    AM_P: 'Anomaly Mastery%',
    Physical_DMG: 'Physical DMG Bonus',
    Fire_DMG: 'Fire DMG Bonus',
    Ice_DMG: 'Ice DMG Bonus',
    Electric_DMG: 'Electric DMG Bonus',
    Ether_DMG: 'Ether DMG Bonus',
}
export type StatsKeys = keyof typeof Stats
export type StatsValues = (typeof Stats)[StatsKeys]

export const BaseStats = [
    Stats.LVL,
    Stats.HP,
    Stats.ATK,
    Stats.DEF,
    Stats.IMP,
    Stats.CR,
    Stats.CD,
    Stats.PEN,
    Stats.ER,
    Stats.AP,
    Stats.AM,
]
export type BaseStats = typeof BaseStats[number]

export const WEngineStats = [
    Stats.LVL,
    Stats.ATK,
    Stats.ATK_P,
    Stats.HP_P,
    Stats.DEF_P,
    Stats.ER_P,
    Stats.PEN_P,
    Stats.Physical_DMG,
    Stats.Fire_DMG,
    Stats.Ice_DMG,
    Stats.Electric_DMG,
    Stats.Ether_DMG,
]

export type WEngineStats = typeof WEngineStats[number]

export const MainStats = [
    Stats.HP,
    Stats.ATK,
    Stats.DEF,
    Stats.HP_P,
    Stats.ATK_P,
    Stats.DEF_P,
    Stats.PEN_P,
    Stats.CR,
    Stats.CD,
    Stats.AP,
    Stats.AM,
    Stats.PEN_P,
    Stats.Physical_DMG,
    Stats.Fire_DMG,
    Stats.Ice_DMG,
    Stats.Electric_DMG,
    Stats.Ether_DMG,
]
export type MainStats = typeof MainStats[number]

export const SubStats = [
    Stats.HP_P,
    Stats.ATK_P,
    Stats.DEF_P,
    Stats.HP,
    Stats.ATK,
    Stats.DEF,
    Stats.PEN,
    Stats.CR,
    Stats.CD,
    Stats.AP,
]
export type SubStats = typeof SubStats[number]

export const Constants = {
    Stats,
    BaseStats,
    WEngineStats,
    MainStats,
    SubStats,
    AttributeID
}