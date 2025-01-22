import { AttributeID } from "./constants"
import { Stat } from "./models/DiscSet"

export const FLAT_STATS: number[] = [
    AttributeID.HP_BASE,
    AttributeID.HP_FLAT,
    AttributeID.ATK_BASE,
    AttributeID.ATK_FLAT,
    AttributeID.IMPACT,
    AttributeID.DEF_BASE,
    AttributeID.DEF_FLAT,
    AttributeID.PEN_FLAT,
    AttributeID.ENERGY_RATE,
    AttributeID.ANOMALY_PROF_BASE,
    AttributeID.ANOMALY_PROF,
    AttributeID.ANOMALY_MAST_BASE,
]

// Round a number to a certain precision. Useful for js floats: precisionRound(16.1999999312682, 5) == 16.2
export const precisionRound = (num: number, precision = 5) => {
    const factor = Math.pow(10, precision)
    return Math.round(num * factor) / factor
}


export const isFlat = (stat: Stat) => {
    if (Object.values(FLAT_STATS).includes(stat.id))
        return Math.floor(stat.value)

    return truncate10ths(stat.value).toFixed(1) + "%"
}


export const truncate10ths = (value: number) => {
    return Math.floor(value * 10) / 10
}


export const readValue = (value: string) => {
    if (value.endsWith('%')) {
        return precisionRound(parseFloat(value.slice(0, value.length - 1)))
    }
    return precisionRound(parseFloat(value))
}
