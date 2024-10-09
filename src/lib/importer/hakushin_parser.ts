import game_data from '../../data/hakushin_characters.json'
//import game_data from "./src/data/hakushin_characters.json"

type HoyolabData = {
    char_id: {
        char_data: Avatar
    }
}

type Avatar = {
    "id": number,
    "Name": string,
    "CodeName": string,
    "ElementType": string,
    "Stats": CharBaseStats
}

type CharBaseStats = {
    "HpGrowth": number,
    "HpMax": number,
    "Attack": number,
    "AttackGrowth": number,
    "Defence": number,
    "DefenceGrowth": number,
    "Crit": number,
    "CritDamage": number,
    "ElementAbnormalPower": number,     // anomaly mastery
    "ElementMystery": number,           // anomaly proficient
    "BreakStun": number,
    "Level": { [id: string]: CharLevel }
    "ExtraLevel": { [id: string]: ExtraLevel }
}

type CharLevel = {
    "HpMax": number,
    "Attack": number,
    "Defence": number,
}

type ExtraLevel = {
    "MaxLevel": 15,
    "Extra": { [id: string]: Extra }
}

type Extra = {
    "Prop": number,
    "Value": number
}

let avatars: { [id: string]: Avatar } = {}

Object.entries(game_data).forEach(([key, value]) =>
    console.log(key, value));

export const characters = Object.values(game_data)