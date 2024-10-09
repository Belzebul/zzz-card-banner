import { Disc, DiscSet, Stat } from '../models/Disc'
import { Utils } from '../Utils'

type Property = {
    property_id: number
    base: string
}

type Equip = {
    id: number
    level: number
    name: string
    rarity: string
    equip_suit: Suit
    properties: Property[]
    main_properties: Property[]
    equipment_type: number
}

type Suit = {
    suit_id: number
    own: number
}

type Avatar = {
    id: number
    level: number
    name_mi18n: string
    equip: Equip[]
}

export type HoyolabData = {
    data: {
        avatar_list: Avatar[]
    }
}

function readValue(value: string) {
    if (value.endsWith('%')) {
        return Utils.precisionRound(parseFloat(value.slice(0, value.length - 1)))
    }
    return Utils.precisionRound(parseFloat(value))
}

export class ServiceDiscs {
    json: HoyolabData;

    constructor(json: HoyolabData) {
        this.json = json
    }

    public buildDiscSet() {
        const discSet: DiscSet = new DiscSet()
        const equips: Equip[] = this.json.data.avatar_list[0].equip
        const discs: Disc[] = []
        for (const equip of equips) {
            const suit: Suit = equip.equip_suit
            discSet.disc_sets[suit.suit_id] = suit.own
            discs.push(this.buildDisc(equip))
        }
        discSet.discs = discs
        return discSet
    }

    public buildDisc(equip: Equip) {
        const disc: Disc = new Disc()
        disc.lvl = equip.level
        disc.pos = equip.equipment_type
        disc.equip_set = equip.equip_suit.suit_id

        const main_stats: Stat = new Stat()
        main_stats.id = equip.main_properties[0].property_id
        main_stats.value = readValue(equip.main_properties[0].base)

        disc.main_stats = main_stats
        disc.substats = this.buildSubStats(equip.properties)
        return disc

    }

    public buildSubStats(properties: Property[]) {
        const substats: Stat[] = []
        for (const prop of properties) {
            const stat: Stat = new Stat();
            stat.id = prop.property_id;
            stat.value = readValue(prop.base);
            substats.push(stat)
        }

        return substats
    }
}
