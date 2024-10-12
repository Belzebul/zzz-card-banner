import { ConfigProvider, Divider, Flex, Layout, theme, Typography } from 'antd';
import Card from 'antd/es/card/Card';
import { Content, Header } from 'antd/es/layout/layout';
import React from 'react';
import hoyodata from './data/hoyolab_character.json';
import { CharacterID, StatsToReadableShort } from './lib/constants';
import { ServiceHoyolab } from './lib/importer/hoyolab_parser';
import { Disc, Stat } from './lib/models/Disc';
import { viewStats } from './lib/models/StatsBase';
import { Utils } from './lib/Utils';

const serviceHoyoLab = new ServiceHoyolab(hoyodata)
const char = serviceHoyoLab.buildCharacter(CharacterID.JANE)
char.calc_all()
const discSet = char.discSet
const total_stats = viewStats(char)
const wengine_stats = viewStats(char.wengine)
console.log(JSON.stringify(total_stats))

const { Text } = Typography

const StatsRenderer = (stat: Stat, i: number) => {
    return (
        <Flex key={i} justify='space-between'>
            <div>
                {StatsToReadableShort[stat.id]}
            </div>
            <Divider style={{ margin: 'auto 10px', flexGrow: 1, width: 'unset', minWidth: 'unset' }} dashed />
            <div>
                {Utils.isFlat(stat)}
            </div>
        </Flex>
    )
}

const DiscsRenderer = (disc: Disc, id: number) => {
    return (
        <>
            {StatsRenderer(disc.main_stats, 0)}
            <Divider orientation="left" />
            {disc.substats.map((stat, i) => (
                StatsRenderer(stat, i)
            ))}
        </>
    )
}

const DiscSetRenderer: React.FC = () => (
    <>
        <Flex gap={8} style={{ width: 408, margin: 'auto 8px' }} wrap>
            {discSet.discs.map((disc, key) =>
                <Card key={key} bordered={true} style={{ width: 200, height: 220 }} hoverable>
                    {DiscsRenderer(disc, key)}
                </Card>
            )}
        </Flex>
    </>
);

const TotalStatsRenderer = () => {
    return (
        <Flex gap={8} vertical>
            <Card bordered={true} style={{ width: 250, margin: 'auto 8px' }} hoverable>
                <Flex vertical justify="space-between" gap={12}>
                    {
                        wengine_stats.map((stat: Stat, key: number) => StatsRenderer(stat, key))
                    }

                </Flex>
            </Card>
            <Card bordered={true} style={{ width: 250, margin: 'auto 8px' }} hoverable>
                <Flex vertical justify="space-between" gap={12}>
                    {
                        total_stats.map((stat: Stat, key: number) => StatsRenderer(stat, key))
                    }
                </Flex>
            </Card>
        </Flex>
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
                        {DiscSetRenderer({})}
                    </Flex>
                    <Flex align='stretch' vertical>
                        {TotalStatsRenderer()}
                    </Flex>
                    <Flex align='stretch' vertical>
                        {DiscSetRenderer({})}
                    </Flex>
                </Flex>
            </Content>
        </Layout>
    </ConfigProvider >
);

export default App