import { Typography } from 'antd'
import styled from 'styled-components'

const { Text } = Typography

export const CharNameText = styled(Text)`
    font-family: 'paybooc_bold';
    font-size: 38px;
    font-weight: 400;
    white-space: nowrap;
    text-shadow: 1px 1px 6px #000000;
`

export const CharLvlText = styled(Text)`
    font-family: 'paybooc_bold';
    font-size: 24px;
    font-weight: 400;
    white-space: nowrap;
    padding-top: 16px;
    text-shadow: 1px 1px 6px #000000;
`
export const SkillLvlText = styled(Text)`
    font-family: "zzz_font";
    font-size: 22px;
    font-weight: 400;
    white-space: nowrap;
    position: absolute;
    bottom: -12px;
    color: rgba(255, 255, 255, 1);
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000000CC;
`

//text-shadow: -1px -1px 10px #00000070, -1px 1px 10px #00000070, 1px -1px 10px #00000070, 1px 1px 10px #00000070;