import { Col, ConfigProvider, Divider, Flex, Row, theme, Typography } from 'antd';
import Card from 'antd/es/card/Card';
import React from 'react';
import * as jane from './data/Jane_data.json';
import { StatsToReadableShort } from './lib/constants';
import { ServiceDiscs } from './lib/importer/hoyolab_parser';
import { Disc, DiscSet, Stat } from './lib/models/Disc';

const serviceHoyolab = new ServiceDiscs(jane)
const discSet: DiscSet = serviceHoyolab.buildDiscSet()

const { Text, Title } = Typography

const StatsRender = (stat: Stat, i: number) => {
    return (
        <Flex key={i} justify='space-between' align='center'>
            <Text>
                {StatsToReadableShort[stat.id]}
            </Text>
            <Text>
                {stat.value}
            </Text>
        </Flex>
    )
}

const DiscsRenderer2 = (disc: Disc, id: number) => {
    return (
        <>
            {StatsRender(disc.main_stats, 0)}
            <Divider orientation="left"></Divider>
            {disc.substats.map((stat, i) => (
                StatsRender(stat, i)
            ))}
        </>
    )
}

const DiscsRenderer: React.FC<{ disc: Disc }> = ({ disc }) => (
    <>
        {StatsRender(disc.main_stats, 0)}
        <Divider orientation="left"></Divider>
        {disc.substats.map((stat, i) => (
            StatsRender(stat, i)
        ))}
    </>
);


const DiscSetRenderer: React.FC = () => (
    <>
        <Flex gap="small" wrap>
            {discSet.discs.map((disc, key) =>
                <Card bordered={true} size='small' style={{ width: 150 }}>
                    {DiscsRenderer2(disc, key)}
                </Card>
            )}
        </Flex>
    </>
);

const App: React.FC = () => (
    <ConfigProvider
        theme={{
            algorithm: theme.darkAlgorithm,
        }}
    >
        <Row justify={'center'} >
            <Col xs={0} md={2} lg={4} xl={6} />
            <Col xs={24} md={20} lg={16} xl={12} >
                <Row justify={'center'} >
                    <Col span={16}>
                        {DiscSetRenderer({})}
                    </Col>
                </Row>
            </Col>
            <Col xs={0} md={2} lg={4} xl={6} />
        </Row>
    </ConfigProvider >
);

export default App