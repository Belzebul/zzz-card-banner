import { Card, Flex, Typography } from "antd"
import Meta from "antd/es/card/Meta"
import { Assets } from "../../assets"
import { CharMetadata } from "../../models/CharMetadata"
import { Character } from "../../models/Character"

const { Text } = Typography

export const CharProfile = (char: Character) => {
    const charMetadata = char.charMetadata
    const profile = Assets.getCharacterAvatarById(charMetadata.name);
    const rarity = Assets.getRarity(charMetadata.rarity);
    const weapon = Assets.getWeapon(charMetadata.weapon);
    const element = Assets.getElement(charMetadata.elementId);
    const camp = Assets.getCamp(charMetadata.camp);
    console.log(charMetadata.camp)
    return (
        <div style={{ overflow: "hidden", width: 420, height: 750, borderRadius: 10 }} >
            <div style={{ position: "relative", zIndex: 2 }}>
                <img src={camp} style={{
                    width: 400,
                    height: "auto",
                    position: "absolute",
                    margin: "-20% 30%",
                    zIndex: 1,
                    opacity: 0.10
                }} />
                <Card hoverable style={{ width: 412, height: 750, margin: 'auto 8px' }}>

                    <Flex justify="center" vertical style={{ zIndex: 3, position: "relative" }}>
                        <Flex justify='flex-start' gap='small'>
                            <img src={rarity} height="72px" />
                            <Text style={{ fontSize: "38px", fontFamily: 'paybooc_bold' }}> {charMetadata.name} </Text>
                            <Flex justify="flex-end"><Text style={{ fontSize: "38px", fontFamily: 'paybooc_bold' }}> {char.lvl} </Text></Flex>
                        </Flex>
                        <Flex justify="center">
                            <img alt={charMetadata.name} src={profile} width="300" />
                        </Flex>
                        <Flex justify='flex-end' align="flex-end" gap='small'>
                            <img src={weapon} height="32px" />
                            <img src={element} height="48px" />
                        </Flex>
                    </Flex>


                </Card>
            </div>
        </div >
    )
}


export const CharProfile2 = (charMetadata: CharMetadata) => {
    const profile = Assets.getCharacterAvatarById(charMetadata.name);
    const rarity = Assets.getRarity(charMetadata.rarity);
    const weapon = Assets.getWeapon(charMetadata.weapon);
    const element = Assets.getElement(charMetadata.elementId);
    const camp = Assets.getCamp(charMetadata.camp);
    console.log(charMetadata.camp)
    return (
        <Card hoverable style={{ width: 408, height: 751, margin: 'auto 8px' }}>
            <Flex justify="center">
                <img alt={charMetadata.name} src={profile} style={{ height: 600, width: "auto" }} />
            </Flex>
            <img src={rarity} />

            <Meta title={charMetadata.name} />
            <img src={weapon} />
            <img src={element} />
            <img src={camp} />
        </Card>
    )
}