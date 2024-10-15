import { Divider, Flex } from "antd"
import { Assets } from "../../assets"
import { StatsToReadableMin } from "../../constants"
import { Stat } from "../../models/Disc"
import { Utils } from "../../Utils"
import StatText from "./StatText"

export const iconSize = 16

export const StatRow = (stat: Stat, index: number): JSX.Element => {
    console.log(stat.id + " - " + stat.value)
    const value1000thsPrecision = Utils.truncate10ths(stat.value).toFixed(1)

    return (
        <>
            <Flex key={index} justify="space-between" align="self-start" title={value1000thsPrecision}>
                <img src={Assets.getStatIcon(stat)} style={{ width: iconSize, height: iconSize, margin: "4px" }} />
                <StatText>{StatsToReadableMin[stat.id]}</StatText>
                <Divider style={{ margin: 'auto 10px', flexGrow: 1, width: 'unset', minWidth: 'unset' }} dashed />
                <StatText> {Utils.isFlat(stat)} </StatText>
            </Flex>
        </>
    )
}