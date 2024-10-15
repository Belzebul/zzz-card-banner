import { Card, Flex } from "antd"
import Meta from "antd/es/card/Meta"
import { Assets } from "../../assets"
import { CharMetadata } from "../../models/CharMetadata"
import { Character } from "../../models/Character"
import { CharSkillSetPreview } from "./CharSkills"
import { CinemaPreview } from "./CinemaSvg"
import { CharLvlText, CharNameText } from "./TextCharProfile"

export const CharProfile = (char: Character) => {
    const charMetadata = char.charMetadata
    const profile = Assets.getCharacterAvatarById(charMetadata.name);
    const rarity = Assets.getRarity(charMetadata.rarity);
    const weapon = Assets.getWeapon(charMetadata.weapon);
    const element = Assets.getElement(charMetadata.elementId);
    const shadow = "drop-shadow(0px 0px 4px rgb(0 0 0 / 0.4)";

    return (
        <div style={{ overflow: "hidden", width: 420, height: 750, borderRadius: 10 }} >
            <div style={{ position: "relative", zIndex: 2 }}>
                <Flex justify="center">
                    <img alt={charMetadata.name} src={profile} style={{
                        width: "auto",
                        height: 800,
                        top: "-2%",
                        left: "-5%",
                        position: "absolute",
                        opacity: 0.60,
                        zIndex: 2
                    }} />
                </Flex>
                <Card hoverable style={{ width: 420, height: 750 }}>

                    <Flex justify="center" vertical style={{ zIndex: 3, position: "relative" }}>
                        <Flex justify='flex-start' gap='middle' style={{ float: "right" }}>
                            <img src={rarity} height="72px" />
                            <Flex justify="flex-end" gap='small'>
                                <CharNameText> {charMetadata.name} </CharNameText>
                                <CharLvlText> Lv.{char.lvl} </CharLvlText>
                            </Flex>
                        </Flex>

                    </Flex>
                    <Flex justify='end' align="flex-end" gap='small' style={{ position: "absolute", bottom: 28, left: 28, width: 42, height: 328, zIndex: 3 }} vertical>
                        {CinemaPreview(char.rank)}
                    </Flex>
                    <Flex justify='flex-end' gap={8} style={{ position: "absolute", bottom: 90, right: 30, width: 40, zIndex: 3, textShadow: `${shadow}` }} vertical>
                        {CharSkillSetPreview(char.skillSet)}
                    </Flex>
                    <Flex justify='flex-end' gap={8} align="flex-end" style={{ position: "absolute", bottom: 28, right: 28, height: 44, zIndex: 3, textShadow: `${shadow}` }} >
                        <img src={weapon} height="32px" style={{ filter: `drop-shadow(0px 0px 15px #AAA)` }} />
                        <img src={element} height="44px" style={{ filter: `drop-shadow(0px 0px 15px #AAA)` }} />
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