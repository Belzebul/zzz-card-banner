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
    char_base: StatsBase = new StatsBase()
    charMetadata: CharMetadata = new CharMetadata()
    skillSet: SkillSet = {}
    wengine: WEngine = new WEngine()
    discSet: DiscSet = new DiscSet()

    public setCharBase(char_base: StatsBase) {
        this.char_base = char_base
    }

    public setWengine(wengine: WEngine) {
        this.wengine = wengine
    }

    public setDiscSet(discSet: DiscSet) {
        discSet.sumDiscs()
        this.discSet = discSet
    }


    public calc_hp() {
        const percents: number = this.char_base.hp_perc + this.wengine.hp_perc + this.discSet.statBase.hp_perc
        this.hp = (this.char_base.hp * (1 + percents / 100)) + this.discSet.statBase.hp
        return this.hp
    }

    public calc_atk() {
        const base = this.char_base.atk + this.wengine.atk
        const percents = this.char_base.atk_perc + this.wengine.atk_perc + this.discSet.statBase.atk_perc
        this.atk = (base * (1 + percents / 100)) + this.discSet.statBase.atk
        return this.atk
    }

    public calc_def() {
        const percents: number = this.char_base.def_perc + this.wengine.def_perc + this.discSet.statBase.def_perc
        this.defense = (this.char_base.defense * (1 + percents / 100)) + this.discSet.statBase.defense
        return this.defense
    }

    public calc_impact() {
        const percents: number = this.char_base.impact_perc + this.wengine.impact_perc + this.discSet.statBase.impact_perc
        this.impact = (this.char_base.impact * (1 + percents / 100)) + this.discSet.statBase.impact
    }

    public calc_crit_rate() {
        this.crit_rate = this.char_base.crit_rate + this.wengine.crit_rate + this.discSet.statBase.crit_rate
        return this.crit_rate
    }

    public calc_crit_dmg() {
        this.crit_dmg = this.char_base.crit_dmg + this.wengine.crit_dmg + this.discSet.statBase.crit_dmg
        return this.crit_dmg
    }

    public calc_energy_regen() {
        const percents = this.wengine.energy_perc + this.discSet.statBase.energy_perc
        this.energy_regen = this.char_base.energy_perc * (1 + percents / 100)
        return this.energy_regen
    }

    public calc_anomaly_prof() {
        this.anomaly_prof = this.char_base.anomaly_prof + this.wengine.anomaly_prof + this.discSet.statBase.anomaly_prof
        return this.anomaly_prof
    }

    public calc_anomaly_mastery() {
        const percents = this.wengine.anomaly_mastery + this.discSet.statBase.anomaly_mastery
        this.anomaly_mastery = this.char_base.anomaly_mastery * (1 + percents / 100)
        return this.anomaly_mastery
    }

    public calc_pen_flat() {
        this.pen_flat = this.wengine.pen_flat + this.discSet.statBase.pen_flat
        return this.pen_flat
    }

    public calc_pen_perc() {
        this.pen_p = this.wengine.pen_p + this.discSet.statBase.pen_p
        return this.pen_p
    }

    public calc_phys_bonus() {
        this.phys_bonus = this.char_base.phys_bonus + this.wengine.phys_bonus + this.discSet.statBase.phys_bonus
        return this.phys_bonus
    }

    public calc_fire_bonus() {
        this.fire_bonus = this.char_base.fire_bonus + this.wengine.fire_bonus + this.discSet.statBase.fire_bonus
        return this.fire_bonus
    }

    public calc_ice_bonus() {
        this.ice_bonus = this.char_base.ice_bonus + this.wengine.ice_bonus + this.discSet.statBase.ice_bonus
        return this.ice_bonus
    }

    public calc_elec_bonus() {
        this.elec_bonus = this.char_base.elec_bonus + this.wengine.elec_bonus + this.discSet.statBase.elec_bonus
        return this.elec_bonus
    }

    public calc_ether_bonus() {
        this.ether_bonus = this.char_base.ether_bonus + this.wengine.ether_bonus + this.discSet.statBase.ether_bonus
        return this.ether_bonus
    }

    public get_lvl_factor() {
        return 0.1551 * Math.pow(this.lvl, 2) + 3.141 * this.lvl + 47.2039
    }

    public calc_all() {
        this.calc_atk();
        this.calc_def();
        this.calc_hp();
        this.calc_impact();
        this.calc_anomaly_prof();
        this.calc_anomaly_mastery();
        this.calc_crit_rate();
        this.calc_crit_dmg();
        this.calc_energy_regen();
        this.calc_pen_flat();
        this.calc_pen_perc();
        this.calc_phys_bonus();
        this.calc_fire_bonus();
        this.calc_ice_bonus();
        this.calc_elec_bonus();
        this.calc_ether_bonus();
    }

    public print() {
        this.calc_all();
        console.log(JSON.stringify(this));
        console.log(JSON.stringify(this.discSet.disc_sets_bonus));
    }
}