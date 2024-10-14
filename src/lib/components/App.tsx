import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, Flex, Layout, theme } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import React from 'react';
import hoyodata from '../../data/hoyolab_character.json';
import { CharacterID } from '../constants';
import { ServiceHoyolab } from '../importer/hoyolab_parser';
import { viewStats } from '../models/StatsBase';
import { CharProfile } from './charProfilePrevile/CharProfile';
import { CharStatSummary } from './charStatPreview/CharStatsSummary';
import { DiscSetPreview } from './discSetPreview/DiscSetPreview';


const ExternalLayout: React.FC = () => {
    const serviceHoyoLab = new ServiceHoyolab(hoyodata)
    const char = serviceHoyoLab.buildCharacter(CharacterID.JANE)
    char.calc_all()
    const discSet = char.discSet
    const total_stats = viewStats(char)
    const wengine_stats = viewStats(char.wengine)

    return (
        <Layout style={{ minHeight: '100%' }}>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '30px',
                    paddingRight: '0px',
                    height: 48,
                    width: '100%',
                    backgroundImage: 'linear-gradient(rgb(0 0 0/60%) 0 0)',
                }}
            />
            <Layout hasSider />
            <Content
                style={{
                    padding: 10,
                    margin: 0,
                    minHeight: 280,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    overflow: 'initial',
                    display: 'flex',
                    justifyContent: 'space-around',
                    width: '100%',
                }}>
                <Flex gap={8}>
                    <Flex align='stretch' vertical>
                        {CharProfile(char)}
                    </Flex>
                    <Flex align='stretch' vertical>
                        {CharStatSummary(wengine_stats, total_stats)}
                    </Flex>
                    <Flex align='stretch' vertical>
                        {DiscSetPreview(discSet)}
                    </Flex>
                </Flex>
            </Content>
        </Layout>
    )
}


const App: React.FC = () => (
    <ConfigProvider
        theme={{
            "token": {
                "fontSize": 15,
                "sizeStep": 5,
                "borderRadius": 6,
                "wireframe": false,
                "colorPrimary": "#d20777",
                "colorInfo": "#d20777"
            },
            "algorithm": theme.darkAlgorithm
        }}
    >
        <StyleProvider hashPriority="low">
            <ExternalLayout />
        </StyleProvider>
    </ConfigProvider >
);

export default App