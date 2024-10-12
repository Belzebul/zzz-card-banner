import game_data from "../../data/hakushin_characters.json"
import { Character } from "../models/Character"
import { HOYO_MAP, StatsBase } from "../models/StatsBase"
import { Utils } from "../Utils"

interface Hakushin_data {
    [index: string]: Avatar
}

interface Avatar {
    Id: number
    Name: string
    CodeName: string
    ElementType: { [id: string]: string }
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
    ElementAbnormalPower: number    // anomaly mastery
    ElementMystery: number          // anomaly proficient
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

export class CharacterBuilder {
    character: Character
    name: string
    lvl: number
    basic_lvl: number
    dodge_lvl: number
    assist_lvl: number
    special_lvl: number
    chain_lvl: number
    core_lvl: number
    char_raw: Avatar

    constructor(name: string, lvl: number, basic_lvl: number, special_lvl: number, dodge_lvl: number, chain_lvl: number, core_lvl: number, assist_lvl: number) {
        this.lvl = lvl
        this.name = name
        this.basic_lvl = basic_lvl
        this.dodge_lvl = dodge_lvl
        this.assist_lvl = assist_lvl
        this.special_lvl = special_lvl
        this.chain_lvl = chain_lvl
        this.core_lvl = core_lvl
        this.character = new Character()
        this.char_raw = new ServiceHakushin().char_base[name]
    }

    public build() {
        this.set_stats_base()
        this.set_core_stats_base()

        return this.character
    }

    private set_stats_base() {
        const base_char = new StatsBase();
        const stats = this.char_raw.Stats
        const lvl_range = this.get_lvl_range()
        base_char.atk = this.calc_stat_growth(stats.Attack, stats.AttackGrowth, this.char_raw.Level[lvl_range].Attack)
        base_char.hp = this.calc_stat_growth(stats.HpMax, stats.HpGrowth, this.char_raw.Level[lvl_range].HpMax)
        base_char.defense = this.calc_stat_growth(stats.Defence, stats.DefenceGrowth, this.char_raw.Level[lvl_range].Defence)
        base_char.anomaly_prof = stats.ElementMystery
        base_char.anomaly_mastery = stats.ElementAbnormalPower
        base_char.crit_rate = stats.Crit / 100
        base_char.crit_dmg = stats.CritDamage / 100
        base_char.impact = stats.BreakStun
        base_char.energy_regen = stats.SpRecover / 100
        base_char.pen_p = stats.PenRate / 100
        this.character.char_base = base_char
        this.character.lvl = this.lvl
    }

    private calc_stat_growth(base: number, growth: number, asc_bonus: number) {
        return Utils.precisionRound(base + (this.lvl - 1) * growth / 10000 + asc_bonus)
    }

    private set_core_stats_base() {
        if (this.lvl == 0) return;
        const core_stats = this.char_raw.ExtraLevel[this.core_lvl - 1].Extra;

        for (const stat in core_stats) {
            let value: number = core_stats[stat].Value;
            if (!Utils.FLAT_STATS.includes(core_stats[stat].Prop)) {
                value /= 100;
            }
            this.character.char_base[HOYO_MAP[core_stats[stat].Prop]] += value;
        }
    }

    private get_lvl_range() {
        return Math.ceil(this.lvl / 10)
    }
}

export class ServiceHakushin {
    json: Hakushin_data;
    char_base: Hakushin_data = {}

    constructor() {
        this.json = game_data;
        this.load_all_characters();
    }

    public load_all_characters() {
        Object.keys(this.json).forEach((key) => {
            const new_key = this.json[key].Name
            this.char_base[new_key] = this.json[key]
        });
    }
}