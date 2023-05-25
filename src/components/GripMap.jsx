import React from "react"
import { Col, Flex, Text, Card, Metric, ProgressBar, BadgeDelta} from "@tremor/react";

const data = [
    {
        name: 'Venta mes Enero',
        metric: '$112.54',
        target: "$80.000",
        progress: 36.5,
        delta: '15.5%'

    },
    {
        name: 'Venta mes Febrero',
        metric: '$205.540',
        target: "$80.000",
        progress: 53.6,
        delta: '10.2%'

    },
    {
        name: 'Venta mes Marzo',
        metric: '$72.84',
        target: "$80.000",
        progress: 25.6,
        delta: '22.5 %'

    },
]

const GripMap = () => {
    return (
         
       <Col numColSpanMd={2} numColSpanLg={3} >
        {
            data.map((item=>(
                <Card key={item.name} >
                    <Flex alignItems="items-start" >
                        <Col>
                            <Text>{item.name}</Text>
                            <Metric>{item.metric}</Metric>
                        </Col>
                        <BadgeDelta text={item.delta} />
                    </Flex>
                    <Flex marginTop='mt-4' spaceX='space-x-2' >
                        <Text>{`${item.progress}% (${item.metric})`} </Text>
                        <Text>{item.target}</Text>
                    </Flex>
                    <ProgressBar percentageValue={item.progress} marginTop="mt-3" />

                </Card>
            )))
        }
       </Col>
    );
}

export default GripMap;