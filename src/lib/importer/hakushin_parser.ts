import gameData from "../../data/base_data_characters.json"
import { SkillID } from "../constants"
import { Character } from "../models/Character"
import { CharMetadata } from "../models/CharMetadata"
import { SkillSet } from "../models/SkillSet"
import { HOYO_MAP, StatsBase } from "../models/StatsBase"
import { Avatar, Hakushin_data } from "../types/hakushin_types"
import { Utils } from "../Utils"


export class CharacterBuilder {
    character: Character
    lvl: number
    char_raw: Avatar

    constructor(name: string, lvl: number, skillSet: SkillSet) {
        this.lvl = lvl;
        this.character = new Character();
        this.character.skillSet = skillSet
        this.char_raw = new ServiceHakushin().char_base[name];
    }

    public build() {
        this.set_stats_base();
        this.set_core_stats_base();
        this.set_metadata();
        return this.character;
    }

    private set_metadata() {
        const charMetadata = new CharMetadata();
        charMetadata.rarity = this.char_raw.Rarity === 3 ? "A" : "S";
        charMetadata.weapon = Object.keys(this.char_raw.WeaponType)[0];
        charMetadata.elementId = Object.keys(this.char_raw.ElementType)[0];
        charMetadata.hitType = Object.keys(this.char_raw.HitType)[0];
        charMetadata.camp = Object.keys(this.char_raw.Camp)[0];
        this.character.charMetadata = charMetadata;
    }

    private set_stats_base() {
        const base_char = new StatsBase();
        const stats = this.char_raw.Stats;
        const lvl_range = this.get_lvl_range();
        base_char.atk = this.calc_stat_growth(stats.Attack, stats.AttackGrowth, this.char_raw.Level[lvl_range].Attack);
        base_char.hp = this.calc_stat_growth(stats.HpMax, stats.HpGrowth, this.char_raw.Level[lvl_range].HpMax);
        base_char.defense = this.calc_stat_growth(stats.Defence, stats.DefenceGrowth, this.char_raw.Level[lvl_range].Defence);
        base_char.anomaly_prof = stats.ElementMystery;
        base_char.anomaly_mastery = stats.ElementAbnormalPower;
        base_char.crit_rate = stats.Crit / 100;
        base_char.crit_dmg = stats.CritDamage / 100;
        base_char.impact = stats.BreakStun;;
        base_char.energy_regen = stats.SpRecover / 100;
        base_char.pen_p = stats.PenRate / 100;
        this.character.char_base = base_char;
        this.character.lvl = this.lvl;
    }

    private calc_stat_growth(base: number, growth: number, asc_bonus: number) {
        return Utils.precisionRound(base + (this.lvl - 1) * growth / 10000 + asc_bonus)
    }

    private set_core_stats_base() {
        const core_lvl = this.character.skillSet[SkillID.CORE].level;

        if (core_lvl == 1) return;
        const core_stats = this.char_raw.ExtraLevel[core_lvl - 1].Extra;

        for (const stat in core_stats) {
            let value: number = core_stats[stat].Value;
            if (!Utils.FLAT_STATS.includes(core_stats[stat].Prop)) {
                value /= 100;
            }
            this.character.char_base[HOYO_MAP[core_stats[stat].Prop]] += value;
        }
    }

    private get_lvl_range() {
        return Math.ceil(this.lvl / 10);
    }
}

export class ServiceHakushin {
    json: Hakushin_data;
    char_base: Hakushin_data = {}

    constructor() {
        this.json = gameData;
        this.load_all_characters();
    }

    public load_all_characters() {
        Object.keys(this.json).forEach((key) => {
            const new_key = this.json[key].Name;
            this.char_base[new_key] = this.json[key];
        });
    }
}