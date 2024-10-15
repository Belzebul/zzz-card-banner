import { Flex } from "antd"
import { Assets } from "../../assets"
import { Character } from "../../models/Character"
import { Stat } from "../../models/Disc"
import { viewStats } from "../../models/StatsBase"
import { StatRow } from "./StatRow"
import { StatTextSm } from "./StatText"

export const CharStatSummary = (char: Character) => {
    const total_stats = viewStats(char)
    const wengine_stats = viewStats(char.wengine)

    console.log(char.wengine.id);
    const wengine_icon = Assets.getWEngine(char.wengine.id)
    const wengine_rarity = Assets.getRarity(char.wengine.rarity)
    const camp = Assets.getCamp(char.charMetadata.camp)
    const wengine_lvl = (char.wengine.lvl === 0) ? "" : "Lv." + char.wengine.lvl;
    const wengine_stars = (char.wengine.star === 0) ? "" : "R" + char.wengine.star;

    return (
        <Flex gap={8} justify="center" align="center" style={{ height: 750 }} vertical>
            <Flex justify="center" style={{ width: 275 }}>
                <img src={camp} style={{
                    width: "200px",
                    height: "auto"
                }} />
            </Flex>
            <Flex justify="space-between" style={{ width: 275, padding: 10 }}>
                <div style={{ position: "relative", width: 72, height: 72 }}>
                    <img src={wengine_rarity} style={{
                        width: 36,
                        height: "auto",
                        position: "absolute",
                        bottom: -10,
                        right: -10
                    }} />
                    <img src={wengine_icon} height="72px" />
                </div>
                <Flex vertical justify="space-between" gap={6} style={{ width: 190 }}>
                    {wengine_stats.map((stat: Stat, index) => StatRow(stat, index))}
                    <Flex justify="center" gap="small">
                        <StatTextSm>{wengine_lvl}</StatTextSm>
                        <StatTextSm>{wengine_stars}</StatTextSm>
                    </Flex>
                </Flex>
            </Flex>
            <div style={{ width: 275, padding: 10, alignSelf: "center" }}>
                <Flex vertical justify="space-between" gap={4}>
                    {total_stats.map((stat: Stat, index) => StatRow(stat, index))}
                </Flex>
            </div>
        </Flex>
    )
}