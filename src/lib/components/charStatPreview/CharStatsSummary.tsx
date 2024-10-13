import { Card, Flex } from "antd"
import { Stat } from "../../models/Disc"
import { StatRow } from "./StatRow"

export const CharStatSummary = (wengine_stats: Stat[], total_stats: Stat[]) => {
    return (
        <Flex gap={8} vertical>
            <Card bordered={true} style={{ width: 250, margin: 'auto 8px' }} hoverable>
                <Flex vertical justify="space-between" gap={12}>
                    {
                        wengine_stats.map((stat: Stat, index) => <StatRow id={stat.id} value={stat.value} key={index} />)
                    }

                </Flex>
            </Card>
            <Card bordered={true} style={{ width: 250, margin: 'auto 8px' }} hoverable>
                <Flex vertical justify="space-between" gap={12}>
                    {
                        total_stats.map((stat: Stat, index) => <StatRow id={stat.id} value={stat.value} key={index} />)
                    }
                </Flex>
            </Card>
        </Flex>
    )
}