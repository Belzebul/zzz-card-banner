import { Flex } from "antd"
import { Assets } from "../../assets"
import { SkillSet } from "../../models/SkillSet"
import { ICON_FROM_SKILL_MAPPING } from "../constantsUI"
import { SkillLvlText } from "./TextCharProfile"


export const CharSkillSetPreview = (skillSet: SkillSet) => {

    return (
        <>
            {Object.entries(ICON_FROM_SKILL_MAPPING).map(([id]) => (
                <Flex justify="center" align="center" style={{ position: "relative" }}>
                    <SkillLvlText>
                        {skillSet[+id].level}
                    </SkillLvlText>
                    <img src={Assets.getSkill(id)} width={40} color="rgba(255, 255, 255, 1)" />
                </Flex >
            ))}
        </>
    )
}