import gameData from "../../data/base_data_characters.json"
import { AttributeID, AttrValues, SkillID } from "../constants"
import { Character } from "../models/Character"
import { CharMetadata } from "../models/CharMetadata"
import { SkillSet } from "../models/SkillSet"
import { StatsBase } from "../models/StatsBase"
import { BasicStatsObject } from "../types/basic_stats_object"
import { Avatar, Hakushin_data } from "../types/hakushin_types"
import { DECIMAL_STATS } from "../Utils"


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
        const base_char: BasicStatsObject = new StatsBase();
        const stats = this.char_raw.Stats;
        const lvl_range = this.get_lvl_range();
        base_char[AttributeID.ATK] = this.calc_stat_growth(stats.Attack, stats.AttackGrowth, this.char_raw.Level[lvl_range].Attack);
        base_char[AttributeID.HP] = this.calc_stat_growth(stats.HpMax, stats.HpGrowth, this.char_raw.Level[lvl_range].HpMax);
        base_char[AttributeID.DEF] = this.calc_stat_growth(stats.Defence, stats.DefenceGrowth, this.char_raw.Level[lvl_range].Defence);
        base_char[AttributeID.ANOMALY_PROF] = stats.ElementMystery;
        base_char[AttributeID.ANOMALY_MAST] = stats.ElementAbnormalPower;
        base_char[AttributeID.CRIT_RATE] = stats.Crit / 100;
        base_char[AttributeID.CRIT_DMG] = stats.CritDamage / 100;
        base_char[AttributeID.IMPACT] = stats.BreakStun;
        base_char[AttributeID.ENERGY_RATE] = stats.SpRecover / 100;
        base_char[AttributeID.PEN_P] = stats.PenRate / 100;
        this.character.charBase = base_char;
        this.character.lvl = this.lvl;
    }

    private calc_stat_growth(base: number, growth: number, asc_bonus: number) {
        return Math.floor(base + (this.lvl - 1) * growth / 10000 + asc_bonus)
    }

    private set_core_stats_base() {
        const core_lvl = this.character.skillSet[SkillID.CORE].level;

        if (core_lvl == 1) return;
        const core_stats = this.char_raw.ExtraLevel[core_lvl - 1].Extra;

        for (const stat in core_stats) {
            let value: number = core_stats[stat].Value;
            const prop = <AttrValues>core_stats[stat].Prop;

            if (!(Object.values(DECIMAL_STATS).includes(prop))) {
                value /= 100;
            }

            this.character.charBase[prop] += value;
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