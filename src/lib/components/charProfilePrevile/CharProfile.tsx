import { Flex, Typography } from "antd"
import { Assets } from "../../assets"
import { Character } from "../../models/Character"
import "./CharProfile.css"
import { CharSkillSetPreview } from "./CharSkills"
import { CinemaPreview } from "./CinemaSvg"

const { Text } = Typography

export const CharProfile = (char: Character) => {
    const charMetadata = char.charMetadata;
    const profile = Assets.getCharacterAvatarById(charMetadata.name);
    const rarity = Assets.getRarity(charMetadata.rarity);
    const weapon = Assets.getWeapon(charMetadata.weapon);
    const element = Assets.getElement(charMetadata.elementId);

    return (
        <div className="cut-profile-image" >
            <div className="profile-space-content">
                <img alt={charMetadata.name} src={profile} className="profile-image" />
                <Flex className="position-title">
                    <Flex className="space-title">
                        <img src={rarity} height="68px" style={{ paddingTop: "11px" }} />
                        <Flex justify="flex-end" gap='small'>
                            <Text className="char-title-text font38"> {charMetadata.name} </Text>
                            <Text className="char-title-text font24"> Lv.{char.lvl} </Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex className="bottom-left-cinema">
                    {CinemaPreview(char.rank)}
                </Flex>
                <Flex justify='flex-end' gap={8} className="bottom-right-skills" vertical>
                    {CharSkillSetPreview(char.skillSet)}
                </Flex>
                <Flex justify='flex-end' gap={8} align="flex-end" className="bottom-right-icon">
                    <img src={weapon} height="32px" className="shadow" />
                    <img src={element} height="44px" className="shadow" />
                </Flex>
            </div>
        </div >
    )
}