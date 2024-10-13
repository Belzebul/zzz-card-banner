import { Divider, Flex } from "antd"
import { Assets } from "../../assets"
import { StatsToReadableShort } from "../../constants"
import { Stat } from "../../models/Disc"
import { Utils } from "../../Utils"
import StatText from "./StatText"

export const iconSize = 22

export const StatRow = (stat: Stat, index: number): JSX.Element => {
    const value1000thsPrecision = Utils.truncate10ths(stat.value).toFixed(1)

    return (
        <>
            <Flex key={index} justify="space-between" align="center" title={value1000thsPrecision}>
                <img src={Assets.getStatIcon(stat)} style={{ width: iconSize, height: iconSize, marginRight: 3 }} />
                <StatText>{StatsToReadableShort[stat.id]}</StatText>
                <Divider style={{ margin: 'auto 10px', flexGrow: 1, width: 'unset', minWidth: 'unset' }} dashed />
                <StatText> {Utils.isFlat(stat)} </StatText>
            </Flex>
        </>
    )
}


