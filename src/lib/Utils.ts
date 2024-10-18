import { AttributeID } from "./constants"
import { Stat } from "./models/DiscSet"

export class Utils {


    // Round a number to a certain precision. Useful for js floats: precisionRound(16.1999999312682. 5) == 16.2
    static precisionRound(num: number, precision = 5) {
        const factor = Math.pow(10, precision)
        return Math.round(num * factor) / factor
    }

    public static FLAT_STATS = [
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

    static isFlat(stat: Stat) {
        return this.FLAT_STATS.includes(stat.id) ? Math.floor(stat.value) : Utils.truncate10ths(stat.value).toFixed(1) + "%";
    }

    static truncate10ths(value: number) {
        return Math.floor(value * 10) / 10
    }

    static readValue(value: string) {
        if (value.endsWith('%')) {
            return Utils.precisionRound(parseFloat(value.slice(0, value.length - 1)))
        }
        return Utils.precisionRound(parseFloat(value))
    }

}