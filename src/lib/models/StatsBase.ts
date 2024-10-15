import { AttributeID } from "../constants";
import { Stat } from "./Disc";

export function viewStats(statsBase: StatsBase) {
    let stats: Stat[] = []

    Object.keys(statsBase).forEach((param) => {
        const stat: Stat = new Stat();
        const id = findKeyByValue(HOYO_MAP, param);
        if (id === undefined)
            return;

        stat.id = +id;
        const value = statsBase[param as keyof StatsBase];
        if (value !== 0) {
            stat.value = statsBase[param as keyof StatsBase];
            stats.push(stat)
        }
    });

    return stats
}

function findKeyByValue(object: { [id: number]: StatsBaseKeys }, value: string) {
    return Object.keys(object).find(key => object[+key] === value);
}

export class StatsBase {
    hp: number = 0.0
    hp_perc: number = 0.0
    atk: number = 0.0
    atk_perc: number = 0.0
    defense: number = 0.0
    def_perc: number = 0.0
    impact: number = 0.0
    impact_perc: number = 0.0
    crit_rate: number = 0.0
    crit_dmg: number = 0.0
    pen_p: number = 0.0
    pen_flat: number = 0.0
    energy_regen: number = 0.0
    energy_perc: number = 0.0
    anomaly_prof: number = 0.0
    anomaly_mastery: number = 0.0
    phys_bonus: number = 0.0
    fire_bonus: number = 0.0
    ice_bonus: number = 0.0
    elec_bonus: number = 0.0
    ether_bonus: number = 0.0
}

export type StatsBaseKeys = keyof StatsBase;

export const HOYO_MAP: { [key: number]: StatsBaseKeys; } = {
    [AttributeID.HP_BASE]: "hp",
    [AttributeID.HP_P]: "hp_perc",
    [AttributeID.HP_FLAT]: "hp",
    [AttributeID.ATK_BASE]: "atk",
    [AttributeID.ATK_P]: "atk_perc",
    [AttributeID.ATK_FLAT]: "atk",
    [AttributeID.IMPACT]: "impact",
    [AttributeID.IMPACT_P]: "impact_perc",
    [AttributeID.DEF_BASE]: "defense",
    [AttributeID.DEF_P]: "def_perc",
    [AttributeID.DEF_FLAT]: "defense",
    [AttributeID.CRIT_RATE_BASE]: "crit_rate",
    [AttributeID.CRIT_RATE]: "crit_rate",
    [AttributeID.CRIT_DMG_BASE]: "crit_dmg",
    [AttributeID.CRIT_DMG]: "crit_dmg",
    [AttributeID.PEN_BASE]: "pen_p",
    [AttributeID.PEN_P]: "pen_p",
    [AttributeID.PEN_FLAT]: "pen_flat",
    [AttributeID.ENERGY_RATE]: "energy_regen",
    [AttributeID.ENERGY_P]: "energy_perc",
    [AttributeID.ANOMALY_PROF_BASE]: "anomaly_prof",
    [AttributeID.ANOMALY_PROF]: "anomaly_prof",
    [AttributeID.ANOMALY_MAST_BASE]: "anomaly_mastery",
    [AttributeID.ANOMALY_MAST]: "anomaly_mastery",
    [AttributeID.PHYS_DMG]: "phys_bonus",
    [AttributeID.FIRE_DMG]: "fire_bonus",
    [AttributeID.ICE_DMG]: "ice_bonus",
    [AttributeID.ELEC_DMG]: "elec_bonus",
    [AttributeID.ETHER_DMG]: "ether_bonus"
}