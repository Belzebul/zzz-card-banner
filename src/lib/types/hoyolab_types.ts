
export interface HoyolabData {
    [id: string]: Avatar[]

}
export interface Avatar {
    id: number
    level: number
    name_mi18n: string
    equip?: Equip[]
    weapon?: Weapon | null
    skills: Skill[]
}
export interface Equip {
    id: number
    level: number
    name: string
    rarity: string
    equip_suit: Suit
    properties: Property[]
    main_properties: Property[]
    equipment_type: number
}
export interface Weapon {
    id: number
    level: number
    name: string
    star: number
    rarity: string
    properties: Property[]
    main_properties: Property[]
}
export interface Skill {
    level: number
}
export interface Suit {
    suit_id: number
    own: number
}
export interface Property {
    property_id: number
    base: string
}
