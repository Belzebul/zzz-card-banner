import { AttributeID, AttrValues, Stats } from "../constants";
import { BasicStatsObject } from "../types/basic_stats_object";
import { Stat } from "./DiscSet";

export function viewStats(statsBase: StatsBase) {
    let stats: Stat[] = []

    Object.entries(statsBase).forEach(([id, value]) => {
        const stat: Stat = new Stat();
        if (!Object.values(Stats).includes(<AttrValues>+id))
            return;

        stat.id = <AttrValues>+id;
        if (Math.round(value) !== 0) {
            stat.value = value;
            stats.push(stat)
        }
    });

    return stats
}

export class StatsBase implements BasicStatsObject {
    [AttributeID.NONE]: number = 0.0;
    [AttributeID.HP]: number = 0.0;
    [AttributeID.HP_P]: number = 0.0;
    [AttributeID.HP_FLAT]: number = 0.0;
    [AttributeID.ATK]: number = 0.0;
    [AttributeID.ATK_P]: number = 0.0;
    [AttributeID.ATK_FLAT]: number = 0.0;
    [AttributeID.IMPACT]: number = 0.0;
    [AttributeID.IMPACT_P]: number = 0.0;
    [AttributeID.DEF]: number = 0.0;
    [AttributeID.DEF_P]: number = 0.0;
    [AttributeID.DEF_FLAT]: number = 0.0;
    [AttributeID.CRIT_RATE]: number = 0.0;
    [AttributeID.CRIT_RATE_SUB]: number = 0.0;
    [AttributeID.CRIT_DMG]: number = 0.0;
    [AttributeID.CRIT_DMG_SUB]: number = 0.0;
    [AttributeID.PEN]: number = 0.0;
    [AttributeID.PEN_P]: number = 0.0;
    [AttributeID.PEN_FLAT]: number = 0.0;
    [AttributeID.ENERGY_RATE]: number = 0.0;
    [AttributeID.ENERGY_P]: number = 0.0;
    [AttributeID.ANOMALY_PROF]: number = 0.0;
    [AttributeID.ANOMALY_PROF_SUB]: number = 0.0;
    [AttributeID.ANOMALY_MAST]: number = 0.0;
    [AttributeID.ANOMALY_MAST_P]: number = 0.0;
    [AttributeID.PHYS_DMG]: number = 0.0;
    [AttributeID.FIRE_DMG]: number = 0.0;
    [AttributeID.ICE_DMG]: number = 0.0;
    [AttributeID.ELEC_DMG]: number = 0.0;
    [AttributeID.ETHER_DMG]: number = 0.0;
    [AttributeID.SHIELD_EFFECT]: number = 0.0;
}

export type StatsBaseKeys = keyof StatsBase;