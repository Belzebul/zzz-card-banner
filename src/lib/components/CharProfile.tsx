import { Card, Flex } from "antd"
import Meta from "antd/es/card/Meta"
import { Assets } from "../assets"
import { Character } from "../models/Character"

export const CharProfile = (char: Character) => {
    const url_profile = Assets.getCharacterAvatarById(char.name)
    return (
        <Card hoverable style={{ width: 408, margin: 'auto 8px' }}>
            <Flex justify="center">
                <img alt={char.name} src={url_profile} style={{ height: 600, width: "auto" }} />
            </Flex>
            <Meta title={char.name} />
        </Card>
    )
}