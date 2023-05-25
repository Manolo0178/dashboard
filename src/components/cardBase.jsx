import { Flex, ProgressBar } from "@tremor/react";
import { Card, Metric, Text } from "@tremor/react";
import React from "react"

const CardBase = () => {
    return (
         
        <Card maxWidth=' max - w -sm' >

                <Text>Sales</Text>
                <Metric>$ 74,51</Metric>
                <Flex marginTop=' mt-4' >
                <Text>32 % target anual</Text>
                <Text> $ 225,000</Text>
                </Flex>

                <ProgressBar percentageValue={30} marginTop= 'mt-2' />
        </Card>
    );
}

export default CardBase;