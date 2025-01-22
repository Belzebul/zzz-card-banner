import { AttributeID } from "../constants";

const AttrKeys = Object.keys(AttributeID) as (keyof typeof AttributeID)[];

export type BasicStatsObject = {
    [AttributeID.HP_BASE]: number
    [AttributeID.HP_P]: number
    [AttributeID.HP_FLAT]: number
    [AttributeID.ATK_BASE]: number
    [AttributeID.ATK_P]: number
    [AttributeID.ATK_FLAT]: number
    [AttributeID.IMPACT]: number
    [AttributeID.IMPACT_P]: number
    [AttributeID.DEF_BASE]: number
    [AttributeID.DEF_P]: number
    [AttributeID.DEF_FLAT]: number
    [AttributeID.CRIT_RATE_BASE]: number
    [AttributeID.CRIT_RATE]: number
    [AttributeID.CRIT_DMG_BASE]: number
    [AttributeID.CRIT_DMG]: number
    [AttributeID.PEN_BASE]: number
    [AttributeID.PEN_P]: number
    [AttributeID.PEN_FLAT]: number
    [AttributeID.ENERGY_RATE]: number
    [AttributeID.ENERGY_P]: number
    [AttributeID.ANOMALY_PROF_BASE]: number
    [AttributeID.ANOMALY_PROF]: number
    [AttributeID.ANOMALY_MAST_BASE]: number
    [AttributeID.ANOMALY_MAST]: number
    [AttributeID.PHYS_DMG]: number
    [AttributeID.FIRE_DMG]: number
    [AttributeID.ICE_DMG]: number
    [AttributeID.ELEC_DMG]: number
    [AttributeID.ETHER_DMG]: number
}
