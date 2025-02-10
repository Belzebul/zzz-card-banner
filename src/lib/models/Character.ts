import { AttributeID, AttrValues } from "../constants";
import { BasicStatsObject } from "../types/basic_stats_object";
import { CharMetadata } from "./CharMetadata";
import { DiscSet } from "./DiscSet";
import { SkillSet } from "./SkillSet";
import { StatsBase } from "./StatsBase";
import { WEngine } from "./WEngine";

export class Character extends StatsBase {
    id: number = 0
    name: string = ""
    lvl: number = 60
    rank: number = 0
    char_base: BasicStatsObject = new StatsBase()
    char_stats: BasicStatsObject = new StatsBase()
    charMetadata: CharMetadata = new CharMetadata()
    skillSet: SkillSet = {}
    wengine: WEngine = new WEngine()
    discSet: DiscSet = new DiscSet()

    public setCharBase(char_base: BasicStatsObject) {
        this.char_base = char_base;
    }

    public setWengine(wengine: WEngine) {
        this.wengine = wengine;
    }

    public setDiscSet(discSet: DiscSet) {
        discSet.sumDiscs();
        this.discSet = discSet;
    }

    public sumSecondaryStats(attrID: AttrValues) {
        if (attrID === 0 || attrID === 99999) return;
        this[attrID] = this.char_base[attrID] + this.wengine[attrID] + this.discSet.sumStats[attrID];
    }

    public sumMainStat(attrFlatId: AttrValues) {
        const attrPercId = <AttrValues>(attrFlatId + 1);
        const base = this.char_base[attrFlatId] + this.wengine[attrFlatId];
        const perc = this.char_base[attrPercId] + this.wengine[attrPercId] + this.discSet.sumStats[attrPercId];
        this[attrFlatId] = (base * (1 + perc / 100)) + this.discSet.sumStats[attrFlatId];
    }

    public calcAllStats() {
        this.sumMainStat(AttributeID.HP)
        this.sumMainStat(AttributeID.ATK)
        this.sumMainStat(AttributeID.IMPACT)
        this.sumMainStat(AttributeID.DEF)
        this.sumSecondaryStats(AttributeID.CRIT_RATE)
        this.sumSecondaryStats(AttributeID.CRIT_DMG)
        this.sumSecondaryStats(AttributeID.PEN_P)
        this.sumSecondaryStats(AttributeID.PEN_FLAT)
        this.sumMainStat(AttributeID.ENERGY_RATE)
        this.sumSecondaryStats(AttributeID.ANOMALY_PROF)
        this.sumMainStat(AttributeID.ANOMALY_MAST)
        this.sumSecondaryStats(AttributeID.PHYS_DMG)
        this.sumSecondaryStats(AttributeID.FIRE_DMG)
        this.sumSecondaryStats(AttributeID.ICE_DMG)
        this.sumSecondaryStats(AttributeID.ELEC_DMG)
        this.sumSecondaryStats(AttributeID.ETHER_DMG)
    }

    public print() {
        this.calcAllStats();
        console.log(JSON.stringify(this));
        console.log(JSON.stringify(this.discSet.disc_sets_bonus));
    }
}