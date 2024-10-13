import { Card, Divider, Flex } from "antd"
import { Assets } from "../../assets"
import { StatsToReadableShort } from "../../constants"
import { Disc, Stat } from "../../models/Disc"
import { Utils } from "../../Utils"
import RelicStatText from "./DiscStatText"

export const iconSize = 18

const DiscStats = (stat: Stat, index: number) => {
    return (
        <Flex key={index} justify='space-between'>
            <img src={Assets.getStatIcon(stat)} style={{ width: iconSize, height: iconSize, marginRight: 3, verticalAlign: "center" }} />
            <RelicStatText>
                {StatsToReadableShort[stat.id]}
            </RelicStatText>
            <Divider style={{ margin: 'auto 10px', flexGrow: 1, width: 'unset', minWidth: 'unset' }} dashed />
            <RelicStatText>
                {Utils.isFlat(stat)}
            </RelicStatText>
        </Flex>
    )
}

export const DiscStatCard = (disc: Disc, id: number) => {
    return (
        <Card key={id} bordered={true} style={{ width: 200, height: 220 }} hoverable>
            {DiscStats(disc.main_stats, id)}
            <Divider orientation="left" />
            {disc.substats.map((stat, i) => (
                DiscStats(stat, i)
            ))}
        </Card>
    )
}


