import { Flex } from "antd";
import { DiscSet } from "../../models/Disc";
import { DiscStatCard } from "./DiscStatCard";

export const DiscSetPreview = (discSet: DiscSet) => {
    return (
        <Flex gap={8} wrap style={{ overflow: "hidden", width: 450, margin: 'auto 8px' }}>

            {discSet.discs.map((disc, key) => (
                DiscStatCard(disc, key)
            ))}
        </Flex>
    )
}