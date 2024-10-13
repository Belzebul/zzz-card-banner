import { Card, Divider, Flex } from "antd"
import React from "react"
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
    const url = Assets.getDiscSetById(String(disc.equipset_id))
    return (
        <React.Fragment key={id}>
            <div style={{ overflow: "hidden", width: 210, height: 245, borderRadius: 10 }} >
                <div style={{ position: "relative", zIndex: 2 }}>
                    <img src={url} style={{
                        width: 180,
                        height: "auto",
                        position: "absolute",
                        margin: "-60px 82px",
                        zIndex: 1,
                        opacity: 0.35
                    }} />
                    <Card key={id} bordered={true} hoverable style={{ height: 245, position: "relative" }}>
                        <div style={{ position: "absolute", zIndex: 3, width: 150 }}>
                            <Flex justify='space-between' align="center">
                                <img src={Assets.getRarity(disc.rarity)} style={{ width: 34, height: "auto" }} />
                                <Flex align="center" vertical>
                                    <RelicStatText style={{ fontSize: "17px" }}>+{disc.lvl}</RelicStatText>
                                </Flex>
                            </Flex>
                            <Divider style={{ margin: '10px auto', flexGrow: 1 }} />
                            {DiscStats(disc.main_stats, id)}
                            <Divider style={{ margin: '10px auto', flexGrow: 1 }} />
                            {disc.substats.map((stat, i) => (
                                DiscStats(stat, i)
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </React.Fragment >
    )
}


export const DiscStatCard2 = (disc: Disc, id: number) => {
    const url = Assets.getDiscSetById(String(disc.equipset_id))
    return (
        <Card key={id} bordered={true} style={{ width: 200, height: 245, backgroundImage: `url(${url})`, backgroundRepeat: "no-repeat", backgroundPosition: "130% -20%", backgroundSize: "50% auto" }} hoverable>
            <Flex justify='space-between' align="center">
                <img src={url} style={{ width: 36, height: 36 }} />
                <Flex align="center" vertical>
                    <RelicStatText style={{ fontSize: "17px" }}>+{disc.lvl}</RelicStatText>
                </Flex>

                <div style={{ width: 36, height: 36 }} />
            </Flex>
            <Divider style={{ margin: '10px auto', flexGrow: 1 }} />
            {DiscStats(disc.main_stats, id)}
            <Divider style={{ margin: '10px auto', flexGrow: 1 }} />
            {disc.substats.map((stat, i) => (
                DiscStats(stat, i)
            ))}
        </Card>
    )
}

