export class Utils {


    // Round a number to a certain precision. Useful for js floats: precisionRound(16.1999999312682. 5) == 16.2
    static precisionRound(num: number, precision = 5) {
        const factor = Math.pow(10, precision)
        return Math.round(num * factor) / factor
    }
}