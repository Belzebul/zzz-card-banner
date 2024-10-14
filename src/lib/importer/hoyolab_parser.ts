import { Character } from '../models/Character'
import { Disc, DiscSet, Stat } from '../models/Disc'
import { HOYO_MAP } from '../models/StatsBase'
import { WEngine } from '../models/WEngine'
import { Avatar, Equip, HoyolabData, Property, Skill, Suit, Weapon } from '../types/hoyolab_types'
import { Utils } from '../Utils'
import { CharacterBuilder } from './hakushin_parser'


export class ServiceHoyolab {
    json_hoyo: HoyolabData
    constructor(json: HoyolabData) {
        this.json_hoyo = json
    }

    public buildCharacter(char_name: string) {
        const avatar: Avatar = this.json_hoyo[char_name][0]
        const serviceWengide = new ServiceWengine(avatar.weapon)
        const servicoDiscset: ServiceDiscset = new ServiceDiscset(avatar.equip)

        const character: Character = this.getCharacterBaseData(avatar)
        character.setWengine(serviceWengide.load_engine())
        character.setDiscSet(servicoDiscset.buildDiscSet())

        return character
    }

    private getCharacterBaseData(avatar: Avatar) {
        const name_code = avatar.name_mi18n
        const lvl = avatar.level
        return new CharacterBuilder(
            name_code,
            lvl,
            avatar.skills[0].level,
            avatar.skills[1].level,
            avatar.skills[2].level,
            avatar.skills[3].level,
            avatar.skills[4].level,
            avatar.skills[5].level
        ).build();
    }

    private getSkillsLvl(skills: Skill[]) {
        skills
    }
}

export class ServiceWengine {
    json_wengine: Weapon | undefined | null;
    constructor(json: Weapon | undefined | null) {
        this.json_wengine = json
    }

    public load_engine() {
        const wengine = new WEngine();
        if (this.json_wengine === undefined || this.json_wengine === null)
            return wengine;

        wengine.id = this.json_wengine.id
        wengine.name = this.json_wengine.name
        wengine.lvl = this.json_wengine.level
        wengine.star = this.json_wengine.star
        wengine.rarity = this.json_wengine.rarity

        wengine.atk = +this.json_wengine.main_properties[0].base
        const second_stats = this.json_wengine.properties[0]
        wengine[HOYO_MAP[second_stats.property_id]] = +second_stats.base

        return wengine
    }
}

export class ServiceDiscset {
    json_equip: Equip[] | undefined

    constructor(json: Equip[] | undefined) {
        this.json_equip = json
    }

    public buildDiscSet() {
        if (this.json_equip === undefined)
            return new DiscSet();

        const discSet: DiscSet = new DiscSet()
        const equips: Equip[] = this.json_equip
        const discs: Disc[] = []

        for (const equip of equips) {
            const suit: Suit = equip.equip_suit
            discSet.disc_sets_bonus[suit.suit_id] = suit.own
            discs.push(this.buildDisc(equip))
        }
        discSet.discs = discs
        return discSet
    }

    public buildDisc(equip: Equip) {
        const disc: Disc = new Disc()
        disc.lvl = equip.level
        disc.pos = equip.equipment_type
        disc.rarity = equip.rarity
        disc.equipset_id = equip.equip_suit.suit_id

        const main_stats: Stat = new Stat()
        main_stats.id = equip.main_properties[0].property_id
        main_stats.value = Utils.readValue(equip.main_properties[0].base)

        disc.main_stats = main_stats
        disc.substats = this.buildSubStats(equip.properties)
        return disc

    }

    public buildSubStats(properties: Property[]) {
        const substats: Stat[] = []
        for (const prop of properties) {
            const stat: Stat = new Stat()
            stat.id = prop.property_id
            stat.value = Utils.readValue(prop.base)
            substats.push(stat)
        }

        return substats
    }
}
