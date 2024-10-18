export const CHAR_LIST_CODES = [
    "Corin",
    "QingYi",
    "Jane",
    "Soukaku",
    "Billy",
    "Grace",
    "Anby",
    "Caesar",
    "Nicole",
    "Piper",
    "Nekomata",
    "Zhu Yuan",
    "Lycaon",
    "Lighter",
    "Anton",
    "Soldier 11",
    "Ben",
    "Rina",
    "Lucy",
    "Koleda",
    "Seth",
    "Burnice",
    "Ellen",
]

export const CharacterID = {
    CORIN: "1061",
    QINGYI: "1251",
    JANE: "1261",
    SOUKAKU: "1131",
    BILLY: "1081",
    GRACE: "1181",
    ANBY: "1011",
    NICOLE: "1031",
    PIPER: "1281",
    NEKOMATA: "1021",
    NEKOMATA_2: "1022",
    ZHUYUAN: "1241",
    LYCAON: "1141",
    ANTON: "1111",
    SOLDIER_11: "1041",
    BEN: "1121",
    RINA: "1211",
    LUCY: "1151",
    KOLEDA: "1101",
    SETH: "1271",
    BURNICE: "1171",
    ELLEN: "1191"
}

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
    SHIELD_EFFECT: 99999,
};

export type AttrKeys = keyof typeof AttributeID
export type AttrValues = (typeof AttributeID)[AttrKeys]

export const DiscSetID = {
    WOODPECKER_ELECTRO: 31000,
    PUFFER_ELECTRO: 31100,
    SHOCKSTAR: 31200,
    FREEDOM_BLUE: 31300,
    HORMONE_PUNK: 31400,
    SOUL_ROCK: 31500,
    SWING_JAZZ: 31600,
    CHAOS_JAZZ: 31800,
    PROTO_PUNK: 31900,
    INFERNAL_METAL: 32200,
    CHAOTIC_METAL: 32300,
    THUNDER_METAL: 32400,
    POLAR_METAL: 32500,
    FANGED_METAL: 32600
}

export const HOYO_2P_DISCSET: { [id: number]: number[] } = {
    [DiscSetID.WOODPECKER_ELECTRO]: [AttributeID.CRIT_RATE, 8.0],
    [DiscSetID.PUFFER_ELECTRO]: [AttributeID.PEN_P, 8.0],
    [DiscSetID.SHOCKSTAR]: [AttributeID.IMPACT_P, 6.0],
    [DiscSetID.FREEDOM_BLUE]: [AttributeID.ANOMALY_PROF, 30.0],
    [DiscSetID.HORMONE_PUNK]: [AttributeID.ATK_P, 10.0],
    [DiscSetID.SOUL_ROCK]: [AttributeID.DEF_P, 16.0],
    [DiscSetID.SWING_JAZZ]: [AttributeID.ENERGY_P, 20.0],
    [DiscSetID.CHAOS_JAZZ]: [AttributeID.ANOMALY_PROF, 30.0],
    [DiscSetID.PROTO_PUNK]: [AttributeID.SHIELD_EFFECT, 15.0],
    [DiscSetID.INFERNAL_METAL]: [AttributeID.FIRE_DMG, 10.0],
    [DiscSetID.CHAOTIC_METAL]: [AttributeID.ETHER_DMG, 10.0],
    [DiscSetID.POLAR_METAL]: [AttributeID.ICE_DMG, 10.0],
    [DiscSetID.THUNDER_METAL]: [AttributeID.ELEC_DMG, 10.0],
    [DiscSetID.FANGED_METAL]: [AttributeID.PHYS_DMG, 10.0],
}

export const StatsToReadableShort = {
    [AttributeID.HP_BASE]: "HP",
    [AttributeID.HP_P]: "HP %",
    [AttributeID.HP_FLAT]: "HP",
    [AttributeID.ATK_BASE]: "ATK",
    [AttributeID.ATK_P]: "ATK %",
    [AttributeID.ATK_FLAT]: "ATK",
    [AttributeID.IMPACT]: "IMP",
    [AttributeID.IMPACT_P]: "IMP %",
    [AttributeID.DEF_BASE]: "DEF",
    [AttributeID.DEF_P]: "DEF %",
    [AttributeID.DEF_FLAT]: "DEF",
    [AttributeID.CRIT_RATE_BASE]: "Crit Rate",
    [AttributeID.CRIT_RATE]: "Crit Rate",
    [AttributeID.CRIT_DMG_BASE]: "Crit DMG",
    [AttributeID.CRIT_DMG]: "Crit DMG",
    [AttributeID.PEN_BASE]: "PEN",
    [AttributeID.PEN_P]: "PEN %",
    [AttributeID.PEN_FLAT]: "PEN",
    [AttributeID.ENERGY_RATE]: "Energy Regen",
    [AttributeID.ENERGY_P]: "Energy %",
    [AttributeID.ANOMALY_PROF_BASE]: "AP",
    [AttributeID.ANOMALY_PROF]: "AP",
    [AttributeID.ANOMALY_MAST_BASE]: "AM",
    [AttributeID.ANOMALY_MAST]: "AM %",
    [AttributeID.PHYS_DMG]: "Physical",
    [AttributeID.FIRE_DMG]: "Fire",
    [AttributeID.ICE_DMG]: "Ice",
    [AttributeID.ELEC_DMG]: "Electric",
    [AttributeID.ETHER_DMG]: "Ether"
}


export const StatsToReadableMin = {
    [AttributeID.HP_BASE]: "HP",
    [AttributeID.HP_P]: "HP %",
    [AttributeID.HP_FLAT]: "HP",
    [AttributeID.ATK_BASE]: "ATK",
    [AttributeID.ATK_P]: "ATK %",
    [AttributeID.ATK_FLAT]: "ATK",
    [AttributeID.IMPACT]: "IMP",
    [AttributeID.IMPACT_P]: "IMP %",
    [AttributeID.DEF_BASE]: "DEF",
    [AttributeID.DEF_P]: "DEF %",
    [AttributeID.DEF_FLAT]: "DEF",
    [AttributeID.CRIT_RATE_BASE]: "CRIT",
    [AttributeID.CRIT_RATE]: "CRIT",
    [AttributeID.CRIT_DMG_BASE]: "CDMG",
    [AttributeID.CRIT_DMG]: "CDMG",
    [AttributeID.PEN_BASE]: "PEN",
    [AttributeID.PEN_P]: "PEN %",
    [AttributeID.PEN_FLAT]: "PEN",
    [AttributeID.ENERGY_RATE]: "ER",
    [AttributeID.ENERGY_P]: "ER %",
    [AttributeID.ANOMALY_PROF_BASE]: "AP",
    [AttributeID.ANOMALY_PROF]: "AP",
    [AttributeID.ANOMALY_MAST_BASE]: "AM",
    [AttributeID.ANOMALY_MAST]: "AM %",
    [AttributeID.PHYS_DMG]: "PHYS",
    [AttributeID.FIRE_DMG]: "FIRE",
    [AttributeID.ICE_DMG]: "ICE",
    [AttributeID.ELEC_DMG]: "ELEC",
    [AttributeID.ETHER_DMG]: "ETHER"
}

export const WeaponTypeID = {
    ATTACK: 1,
    STUN: 2,
    ANOMALY: 3,
    SUPPORT: 4,
    DEFENSE: 5,
}

export const HitTypeID = {
    SLASH: 101,
    STRIKE: 102,
    PIERCE: 103,
}

export const ElementTypeID = {
    PHYSICAL: 200,
    FIRE: 201,
    ICE: 202,
    ELECTRIC: 203,
    ETHER: 205,
}

export const CampID = {
    CUNNING: 1,
    VICTORIA: 2,
    BELOBOG: 3,
    CALYDON: 4,
    OBOL: 5,
    HSOS6: 6,
    NEPS: 7,
}

export const SkillID = {
    BASIC: 0,
    SPECIAL: 1,
    DODGE: 2,
    CHAIN: 3,
    CORE: 5,
    ASSIST: 6,
}

export type SkillIDKey = keyof typeof SkillID
