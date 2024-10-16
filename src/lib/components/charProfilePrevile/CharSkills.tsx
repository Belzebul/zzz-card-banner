import { Flex, Typography } from "antd"
import { Assets } from "../../assets"
import { SkillSet } from "../../models/SkillSet"
import { ICON_FROM_SKILL_MAPPING } from "../constantsUI"
import "./CharSkills.css"

const { Text } = Typography

export const CharSkillSetPreview = (skillSet: SkillSet) => {

    return (
        <>
            {Object.entries(ICON_FROM_SKILL_MAPPING).map(([id]) => (
                <Flex className="space-skills">
                    <Text className="skill-lvl-text">
                        {skillSet[+id].level}
                    </Text>
                    <img src={Assets.getSkill(id)} className="skill-image" />
                </Flex >
            ))}
        </>
    )
}