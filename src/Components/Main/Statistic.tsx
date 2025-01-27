// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/pie
"use client"
import {ResponsivePieCanvas} from '@nivo/pie'
import statisticdata from "@/Components/Main/data.json";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
interface PieData {
   id: string,
    label: string,
    value: number,
    color: string,
}
interface StatisticProps{
    data: PieData[],
}
const Statistic:React.FC<StatisticProps> = () => (
    <ResponsivePieCanvas
        data={statisticdata}
        margin={{ top: 40, right: 200, bottom: 40, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'paired' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.6
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor="#333333"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 140,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 60,
                itemHeight: 14,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 14,
                symbolShape: 'circle'
            }
        ]}
    />
)
export default Statistic