import { Flex } from "antd";
import { DiscSet } from "../../models/Disc";
import { DiscStatCard } from "./DiscStatCard";

export const DiscSetPreview = (discSet: DiscSet) => {
    return (
        <Flex gap={8} style={{ width: 408, margin: 'auto 8px' }} wrap>
            {discSet.discs.map((disc, key) => (
                DiscStatCard(disc, key)
            ))}
        </Flex>
    )
}